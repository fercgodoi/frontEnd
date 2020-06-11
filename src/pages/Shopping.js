import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api2 from '../services/api2.js';

export default function Shopping(){
    localStorage.setItem('Codigo', "");
    
    function Validar(){
        var validar  = localStorage.getItem('token');
        var dados = localStorage.getItem('Acesso');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }else if (dados === "" || dados === null || dados === undefined) {    
                setTimeout(() => {window.location.href="/"});        
            }else{
                var Calen = document.getElementById("Calen");
                var Func= document.getElementById("Func");
                var Shop= document.getElementById("Shop");
                var Med= document.getElementById("Med");
                var Vac= document.getElementById("Vac");
                var Pront= document.getElementById("Pront");

                if(dados[2] === "0" && dados[6] === "0" ){
                    setTimeout(() => {window.location.href="/"});  
                }else{
                    if(dados[1] === "1"){
                        Calen.style.display="block";
                    }                        
                    if(dados[2] === "1"){
                        Calen.style.display="block";
                        Func.style.display="block";
                        Shop.style.display="block";
                        Med.style.display="block";
                        Vac.style.display="block";
                        Pront.style.display="block";
                    }  
                    if(dados[4] === "1"){
                        Med.style.display="block";
                        Vac.style.display="block";
                        Pront.style.display="block";
                    }
                    if(dados[6] === "1"){
                        Calen.style.display="block";
                        Func.style.display="block";
                        Shop.style.display="block";
                    }
                }
            }       
    }
    setTimeout(() => {Validar()}, 100);

    async function Aparecer(){

        var Nome = document.getElementById("Nome");
        let response="";

        try {
            response = await api2.post('https://agendaanimal-backend.herokuapp.com/Produto/BuscarProd');
        } catch (error) {
            console.log(error);               
        } 

        if(response){
            if(response.data.error){
                if(response.data.error === "error sql"){
                    Nome.value = "Tente Novamente";
                } 
                if(response.data.error === "falha na autenticação do token"){
                    Nome.value = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 2000);
                }else{
                    Nome.value = "Tente Novamente";
                }    
            }
    
            if(response.data.response){
            var produto = response.data.response.Produto;
    
                if(produto.length == 0){
                    Nome.value = "Nenhum Produto";                
                    Nome.style.color="red";
                }else{
                    for(let i=0; i< produto.length;i++){
    
                        var tbody = document.getElementById("tbody");
                        var tr = document.createElement("tr");
                        var div = document.createElement("div");
                        var div2 = document.createElement("div");
                        var img = document.createElement("img");
                        var div3 = document.createElement("div");
                        var pNome = document.createElement("a");
                        var pDesc = document.createElement("a");
                        var br = document.createElement("BR");
                        var div4 = document.createElement("div");
                        var div5 = document.createElement("div");
                        var buttonExluir = document.createElement("button");
                        var buttonEditar = document.createElement("button");
                        var buttonVisualizar = document.createElement("button");
        
                        tr.style.width="100%";
                        tr.style.borderBottom="1px solid #c1e0fc";
                        div.className="row";
                        div2.className="col-md-0.5";
                        div2.style.paddingRight="0";
                        div2.style.marginLeft="15px";
                        img.setAttribute("src",{rodape});
                        img.className="ImagemProd";
                        img.setAttribute("align","right");
                        div3.className="col-md-4";
                        div3.style.paddingLeft="0";
                        pNome.className="NomeFunc";
                        pNome.innerHTML="Nome: "+ produto[i].NomeProd;
                        pDesc.className="NomeFunc";
                        pDesc.innerHTML="Descrição: "+produto[i].DescProd;
                        div4.className="col-md-7";
                        div5.style.width="100%";
                        div5.style.textAlign="right";
        
                        buttonExluir.setAttribute("id", i.toString() );
                        buttonExluir.onclick = function() { Excluir(produto[i].idProd) };
                        buttonExluir.className="btn btn-primary btnExcShop";
                        buttonExluir.innerHTML="Excluir";
                        buttonExluir.setAttribute("type","submit");
        
                        buttonEditar.setAttribute("id", i.toString() );
                        buttonEditar.onclick = function() { Editar(produto[i].idProd) };
                        buttonEditar.className="btn btn-primary btnEditShop";
                        buttonEditar.innerHTML="Editar";
                        buttonEditar.setAttribute("type","submit");
        
                        buttonVisualizar.setAttribute("id", i.toString() );
                        buttonVisualizar.onclick = function() { Visualizar(produto[i].idProd) };
                        buttonVisualizar.className="btn btn-primary btnVisShop";
                        buttonVisualizar.innerHTML="Visualizar";
                        buttonVisualizar.setAttribute("type","submit");
        
                        div2.appendChild(img);
                        div3.appendChild(pNome);
                        div3.appendChild(br);
                        div3.appendChild(pDesc);
                        div5.appendChild(buttonExluir);
                        div5.appendChild(buttonEditar);
                        div5.appendChild(buttonVisualizar);
                        div4.appendChild(div5);
                        div.appendChild(div2);
                        div.appendChild(div3);
                        div.appendChild(div4);
                        tr.appendChild(div);
                        tbody.appendChild(tr);
                    }
                }            
            }else{
                Nome.value = "Tente Novamente";
            }  
        }
    }

    setTimeout(() => {Aparecer()}, 1000);

    
    async function Excluir(c){
        var Nome = document.getElementById("Nome");
        let response="";

        try {
            response = await api2.post('https://agendaanimal-backend.herokuapp.com/Produto/DeleteProd', {idProd:c});
        } catch (error) {
            console.log(error);               
        } 

        if(response){
            if(response.data.message){
                if(response.data.message === "deletou")
                {
                    window.location.href="/Shopping"
                }
                else{
                    Nome.value = "Tente Novamente";
                }
            }
            if(response.data.error){
                if(response.data.error === "error sql"){
                    Nome.value = "Tente Novamente";
                }if(response.data.error === "falha na autenticação do token"){
                    Nome.value = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 2000);
                }else{
                    Nome.value = "Tente Novamente";
                }    
            }
        }       

    }

     
    function Editar(c){   
        localStorage.setItem('Codigo', c);
        window.location.href = "/EditarProduto";
    }

   
    function Visualizar(c){   
        localStorage.setItem('Codigo', c);
        window.location.href = "/VisualizarProduto";
    }

    async function Filtro(){
        var Nome = document.getElementById("Nome");
       
       
        if (Nome.value === "" || Nome.value === null || Nome.value === undefined) {
    
            Nome.value = "Preencha o campo Nome";
            Nome.style.color="red";
        }
        else{
            Nome.style.color="#009fe3";
            let response="";

          
            var tbody = document.getElementById("tbody");
            tbody.innerText= "";
            
            try {
                response = await api2.post('https://agendaanimal-backend.herokuapp.com/Produto/FiltroProd', {NomeProd:Nome.value});
            } catch (error) {
                console.log(error);               
            } 

            if(response){
                if(response.data.error){
                    if(response.data.error === "Falhou"){
                        Nome.value = "Tente Novamente";
                    }if(response.data.error === "falha na autenticação do token"){
                        Nome.value = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        Nome.value = "Tente Novamente";
                    }    
                }
    
                if(response.data.response){
                    var produto = response.data.response.Produto;
    
                    for(let i=0; i< produto.length;i++){
                        var tr = document.createElement("tr");
                        var div = document.createElement("div");
                        var div2 = document.createElement("div");
                        var img = document.createElement("img");
                        var div3 = document.createElement("div");
                        var pNome = document.createElement("a");
                        var pDesc = document.createElement("a");
                        var br = document.createElement("BR");
                        var div4 = document.createElement("div");
                        var div5 = document.createElement("div");
                        var buttonExluir = document.createElement("button");
                        var buttonEditar = document.createElement("button");
                        var buttonVisualizar = document.createElement("button");
    
                        
                        tr.style.width="100%";
                        tr.style.borderBottom="1px solid #c1e0fc";
                        div.className="row";
                        div2.className="col-md-0.5";
                        div2.style.paddingRight="0";
                        div2.style.marginLeft="15px";
                        img.setAttribute("src",{rodape});
                        img.className="ImagemProd";
                        img.setAttribute("align","right");
                        div3.className="col-md-4";
                        div3.style.paddingLeft="0";
                        pNome.className="NomeFunc";
                        pNome.innerHTML="Nome: "+ produto[i].NomeProd;
                        pDesc.className="NomeFunc";
                        pDesc.innerHTML="Descrição: "+produto[i].DescProd;
                        div4.className="col-md-7";
                        div5.style.width="100%";
                        div5.style.textAlign="right";
    
                        buttonExluir.setAttribute("id", i.toString() );
                        buttonExluir.onclick = function() { Excluir(i) };
                        buttonExluir.className="btn btn-primary btnExcShop";
                        buttonExluir.innerHTML="Excluir";
                        buttonExluir.setAttribute("type","submit");
    
                        buttonEditar.setAttribute("id", i.toString() );
                        buttonEditar.onclick = function() { Editar(i) };
                        buttonEditar.className="btn btn-primary btnEditShop";
                        buttonEditar.innerHTML="Editar";
                        buttonEditar.setAttribute("type","submit");
    
                        buttonVisualizar.setAttribute("id", i.toString() );
                        buttonVisualizar.onclick = function() { Visualizar(i) };
                        buttonVisualizar.className="btn btn-primary btnVisShop";
                        buttonVisualizar.innerHTML="Visualizar";
                        buttonVisualizar.setAttribute("type","submit");
    
                        div2.appendChild(img);
                        div3.appendChild(pNome);
                        div3.appendChild(br);
                        div3.appendChild(pDesc);
                        div5.appendChild(buttonExluir);
                        div5.appendChild(buttonEditar);
                        div5.appendChild(buttonVisualizar);
                        div4.appendChild(div5);
                        div.appendChild(div2);
                        div.appendChild(div3);
                        div.appendChild(div4);
                        tr.appendChild(div);
                        tbody.appendChild(tr);
                    }
                }else{
                    Nome.value = "Tente Novamente";
                } 
            }            
        }        
    }
    

    return(
    <div>
        <div className="wrapper ">
            <div className="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a  className="simple-text logo-normal">
                        <img alt="" src={rodape} className="ImagemLogo" align="left" />            
                    </a>
                    <a  className="simple-text logo-normal">
                        <p className="NomePrest">Cantos dos Bichos</p>
                        <p className="TipoPrest">PetShop</p>
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                    <li class="nav-item " id="Home" style={{display:'block'}}>
                            <a class="nav-link" href="/Home">
                            <i class="material-icons">dashboard</i>
                            <p>Inicio</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Calen" style={{display:'none'}}>
                            <a class="nav-link" href="/Calendario">
                            <i class="material-icons">event</i>
                            <p>Calendário</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Func" style={{display:'none'}}>
                            <a class="nav-link" href="/Funcionarios">
                            <i class="material-icons">assignment_ind</i>
                            <p>Funcionários</p>
                            </a>
                        </li>
                        <li class="nav-item active" id="Shop" style={{display:'none'}}>
                            <a class="nav-link" href="/Shopping">
                            <i class="material-icons">shopping_cart</i>
                            <p>Shopping</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Med" style={{display:'none'}}>
                            <a class="nav-link" href="/Medicacao">
                            <i class="material-icons">alarm</i>
                            <p>Medicações</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Vac" style={{display:'none'}}>
                            <a class="nav-link" href="Vacina">
                            <i class="material-icons">account_circle</i>
                            <p>Vacinas</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Pront" style={{display:'none'}}>
                            <a class="nav-link" href="/Prontuarios">
                            <i class="material-icons">assignment</i>
                            <p>Prontuários</p>
                            </a>
                        </li>
                        <li className="nav-item active-pro ">
                            <a className="nav-link" style={{background:'none'}}>
                                <table>
                                    <tr>
                                        <td style={{width: '20%'}}>
                                            <img alt="" src={rodape2} className="material-icons"/>
                                        </td>
                                        <td style={{width: '80%'}}>
                                            <p style={{color:'#009fe3'}}>Versão 1.0</p>
                                        </td>
                                    </tr>
                                </table>            
                            </a>
                        </li>
                    </ul>
                </div>
            </div>    
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#" >Shopping</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                            {/* <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">notifications</i>
                                        <span className="notification">5</span>
                                        <p className="d-lg-none d-md-block">
                                            Some Actions
                                        </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Mike John responded to your email</a>
                                        <a className="dropdown-item" href="#">You have 5 new tasks</a>
                                        <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                                        <a className="dropdown-item" href="#">Another Notification</a>
                                        <a className="dropdown-item" href="#">Another One</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                        <i className="material-icons">help_outline</i>
                                        <p className="d-lg-none d-md-block">
                                            Stats
                                        </p>
                                    </a>
                                </li>                                
                                <li className="nav-item dropdown">
                                    <a >
                                        <img alt="" src={rodape} className="iconLogo" align="right" />      
                                    </a>                                    
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card" style={{borderLeft:'4px solid #009fe3'}}>
                                    <div className="card-body" style={{padding:'0 0 0 0'}}>
                                        <div >
                                        <div className="row" >
                                            <div className="col-md-4">
                                                <div className="navbar-form" style={{textAlign: '-webkit-center'}}>
                                                    <div className="input-group no-border searchFunc" >
                                                            <span className="material-icons" style={{color:'#009fe3'}}>
                                                            search
                                                            </span>
                                                        <input type="text"  id="Nome" placeholder="Digite o Nome"/>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="col-md-4" style={{paddingLeft: '0'}}>
                                                <div style={{width: '100%',textAlign: 'left',paddingRight:'5%'}}> 
                                                    <button type="submit" className="btn btn-primary btnPrimeiroShop" onClick={Filtro} id="ButtonFiltro">Filtrar</button>
                                                    <a type="submit" className="btn btn-primary btnSegundoShop" href="/CadastroShopping">Novo Produto</a>
                                                </div> 
                                            </div>                                             
                                            <div className="col-md-4"></div>                                     
                                        </div> 
                                        <br/>
                                        </div>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="profile">
                                                <table className="table" style={{marginBottom:'0px'}} id="table">
                                                    <tbody id="tbody">  
                                                                                                            
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div> 
            </div>
        </div>
    </div>
    )
}