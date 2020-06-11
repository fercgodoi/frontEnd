import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api2 from '../services/api2.js';

export default function Funcionarios(){
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

         var Email = document.getElementById("Email");
        let response="";

        try {
            response = await api2.post('/Funcionario/BuscarFunc');
        } catch (error) {
            console.log(error);               
        } 

        if(response.data){
            if(response.data.response){
                var Funcionario = response.data.response.Funcionario;
        
                    for(let i=0; i< Funcionario.length;i++){
        
                        var tbody = document.getElementById("tbody");
                        var tr = document.createElement("tr");
                        var div = document.createElement("div");
                        var div2 = document.createElement("div");
                        var pNome = document.createElement("a");
                        var br = document.createElement("BR");
                        var pDesc = document.createElement("a");
                        var div3 = document.createElement("div");
                        var pFunc = document.createElement("p");
                        var div4 = document.createElement("div");
                        var div5 = document.createElement("div");
                        var buttonExluir   = document.createElement("button");
                        var buttonEditar  = document.createElement("button");
        
                        tr.style.width="100%";
                        tr.style.borderBottom="1px solid #c1e0fc";
                        div.className="row";
                        div2.className="col-md-4";
                        pNome.className="NomeFunc";
                        pNome.innerHTML=Funcionario[i].NomeFunc;
                        pDesc.className="NomeFunc";
                        pDesc.innerHTML=Funcionario[i].EmailFunc;
        
                        div3.className="col-md-4";
                        pFunc.className="FuncaoFunc";
                        pFunc.innerHTML="Funcionário";
        
                        div4.className="col-md-4";
                        div5.style.width="100%";
                        div5.style.textAlign="right";
                        div5.style.paddingRight="5%";
        
                        buttonExluir.setAttribute("id", i.toString() );
                        buttonExluir.onclick = function() { Excluir(Funcionario[i].idFunc) };
                        buttonExluir.className="btn btn-primary btnExcFunc";
                        buttonExluir.innerHTML="Excluir";
                        buttonExluir.setAttribute("type","submit");
        
                        buttonEditar.setAttribute("id", i.toString() );
                        buttonEditar.onclick = function() { Editar(Funcionario[i].idFunc) };
                        buttonEditar.className="btn btn-primary btnEditFunc";
                        buttonEditar.innerHTML="Editar";
                        buttonEditar.setAttribute("type","submit");
                       
                        div2.appendChild(pNome);
                        div2.appendChild(br); 
                        div2.appendChild(pDesc);
                        div3.appendChild(pFunc);
                        div5.appendChild(buttonEditar);
                        div5.appendChild(buttonExluir);                
                        div4.appendChild(div5);
                        div.appendChild(div2);
                        div.appendChild(div3);
                        div.appendChild(div4);
                        tr.appendChild(div);
                        tbody.appendChild(tr);
                    }
                }else{
                    Email.value = "Tente Novamente";
                }  
        
            if(response.data.error){
                if(response.data.error === "falha na autenticação do token"){
                    Email.innerText = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 1000);
                }
                if(response.data.error === "error sql"){
                    Email.value = "Tente Novamente";
                }else{
                   Email.value = "Tente Novamente";
                } 
            }
        }
    }

    setTimeout(() => {Aparecer()}, 1000);

    async function Excluir(c){
        var Nome = document.getElementById("Email");
        let response="";

        try {
            response = await api2.post('/Funcionario/ExcluirFunc', {idFunc:c});
        } catch (error) {
            console.log(error);               
        } 

        console.log(response)

        if(response.data.message){
            if(response.data.message === "deletou")
            {
                window.location.href="/Funcionarios"
            }
            else{
                Nome.value = "Tente Novamente";
            }
        }
        if(response.data.error){
            if(response.data.error === "error sql" ){
                Nome.value = "Tente Novamente";
            }
            if(response.data.error === "falha na autenticação do token"){
                Nome.innerText = "Tente Novamente";
                setTimeout(() => {window.location.href="/"}, 1000);
            }else{
                Nome.value = "Tente Novamente";
            }    
        }

    }

     
    function Editar(c){   
        localStorage.setItem('Codigo', c);
        window.location.href = "/EditarFuncionario";
    }

    async function Filtro(){
        var Nome = document.getElementById("Email");
        var ButtonFiltro = document.getElementById("ButtonFiltro");
        

        if (Nome.value === "" || Nome.value === null || Nome.value === undefined) {

            Nome.value = "Preencha o campo Email";
            Nome.style.color="red";
        }
        else{
            Nome.style.color="#009fe3";
            let response="";
            
            var tbody = document.getElementById("tbody");
            tbody.innerText="";
            
            try {
                response = await api2.post('/Funcionario/FiltroFunc', {EmailFunc:Nome.value});
            } catch (error) {
                console.log(error);               
            } 

            if(response.data){
                if(response.data.error){
                    if(response.data.error === "error sql"){
                        Nome.value = "Tente Novamente";
                    }
                    if(response.data.error === "falha na autenticação do token"){
                        Nome.innerText = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 1000);
                    }else{
                        Nome.value = "Tente Novamente";
                    }    
                }           
           
                if(response.data.response){
                    var Funcionario = response.data.response.Funcionario;
                    if(Funcionario.length == 0){
                        Nome.value = "Nenhum Funcionario";
                        Nome.style.color="red";
                    }else{
                        for(let i=0; i< Funcionario.length;i++){
                            
                            var tr = document.createElement("tr");
                            var div = document.createElement("div");
                            var div2 = document.createElement("div");
                            var pNome = document.createElement("a");
                            var br = document.createElement("BR");
                            var pDesc = document.createElement("a");
                            var div3 = document.createElement("div");
                            var pFunc = document.createElement("p");
                            var div4 = document.createElement("div");
                            var div5 = document.createElement("div");
                            var buttonExluir   = document.createElement("button");
                            var buttonEditar  = document.createElement("button");
            
                            tr.style.width="100%";
                            tr.style.borderBottom="1px solid #c1e0fc";
                            div.className="row";
                            div2.className="col-md-4";
                            pNome.className="NomeFunc";
                            pNome.innerHTML=Funcionario[i].NomeFunc;
                            pDesc.className="NomeFunc";
                            pDesc.innerHTML=Funcionario[i].EmailFunc;
            
                            div3.className="col-md-4";
                            pFunc.className="FuncaoFunc";
                            pFunc.innerHTML="Funcionário";
            
                            div4.className="col-md-4";
                            div5.style.width="100%";
                            div5.style.textAlign="right";
                            div5.style.paddingRight="5%";
            
                            buttonExluir.setAttribute("id", i.toString() );
                            buttonExluir.onclick = function() { Excluir(Funcionario[i].idFunc) };
                            buttonExluir.className="btn btn-primary btnExcFunc";
                            buttonExluir.innerHTML="Excluir";
                            buttonExluir.setAttribute("type","submit");
            
                            buttonEditar.setAttribute("id", i.toString() );
                            buttonEditar.onclick = function() { Editar(Funcionario[i].idFunc) };
                            buttonEditar.className="btn btn-primary btnEditFunc";
                            buttonEditar.innerHTML="Editar";
                            buttonEditar.setAttribute("type","submit");
                        
                            div2.appendChild(pNome);
                            div2.appendChild(br); 
                            div2.appendChild(pDesc);
                            div3.appendChild(pFunc);
                            div5.appendChild(buttonEditar);
                            div5.appendChild(buttonExluir);                
                            div4.appendChild(div5);
                            div.appendChild(div2);
                            div.appendChild(div3);
                            div.appendChild(div4);
                            tr.appendChild(div);
                            tbody.appendChild(tr);
                        }
                    }
                }
            }
        }     
        
    }

    function Nova(){
        window.location.href="/CadastroFuncionario";
    }

    return(
    <div>
        <div class="wrapper ">
            <div class="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div class="logo">
                    <a  class="simple-text logo-normal">
                        <img  alt="" src={rodape} class="ImagemLogo" align="left" />            
                    </a>
                    <a  class="simple-text logo-normal">
                        <p class="NomePrest">Cantos dos Bichos</p>
                        <p class="TipoPrest">PetShop</p>
                    </a>
                </div>
                <div class="sidebar-wrapper">
                    <ul class="nav">
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
                        <li class="nav-item active" id="Func" style={{display:'none'}}>
                            <a class="nav-link" href="/Funcionarios">
                            <i class="material-icons">assignment_ind</i>
                            <p>Funcionários</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Shop" style={{display:'none'}}>
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
                        <li class="nav-item active-pro ">
                            <a class="nav-link" style={{background:'none'}}>
                                <table>
                                    <tr>
                                        <td style={{width: '20%'}}>
                                            <img alt="" src={rodape2} class="material-icons"/>
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
            <div class="main-panel">
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <a class="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Funcionários</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>
                      <div class="collapse navbar-collapse justify-content-end">
                            {/*   <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">notifications</i>
                                        <span class="notification">5</span>
                                        <p class="d-lg-none d-md-block">
                                            Some Actions
                                        </p>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Mike John responded to your email</a>
                                        <a class="dropdown-item" href="#">You have 5 new tasks</a>
                                        <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                                        <a class="dropdown-item" href="#">Another Notification</a>
                                        <a class="dropdown-item" href="#">Another One</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="material-icons">help_outline</i>
                                        <p class="d-lg-none d-md-block">
                                            Stats
                                        </p>
                                    </a>
                                </li>                                
                                <li class="nav-item dropdown">
                                    <a >
                                        <img alt="" src={rodape} class="iconLogo" align="right" />      
                                    </a>                                    
                                </li>
                            </ul>*/}
                        </div> 
                    </div>
                </nav>
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card" style={{borderLeft:'4px solid #009fe3'}}>
                                    <div class="card-body" style={{padding:'0 0 0 0'}}>
                                        <div style={{borderBottom:'1px solid #c1e0fc'}}>
                                        <div class="row" >
                                            <div class="col-md-4">
                                                <div class="navbar-form" style={{textAlign: '-webkit-center'}}>
                                                    <div class="input-group no-border searchFunc" >
                                                            <span class="material-icons" style={{color:'#009fe3'}}>
                                                            search
                                                            </span>
                                                        <input type="text" id="Email"  class="" placeholder="Digite o Email"/>
                                                    </div>
                                                </div>
                                            </div> 
                                         <div class="col-md-4"></div>   
                                            <div class="col-md-4">
                                                <div style={{width: '100%',textAlign: 'right',paddingRight:'5%'}}> 
                                                 <button type="submit" id="ButtonFiltro" onClick={Filtro} class="btn btn-primary btnPrimeiroFunc" >Filtrar</button>
                                                    <button type="submit" class="btn btn-primary btnSegundoFunc" onClick={Nova}>Novo Funcionário</button>
                                                </div> 
                                            </div>                                    
                                        </div> 
                                        <br/>
                                        </div>
                                        
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="profile">
                                                <table class="table" style={{marginBottom:'0px'}}>
                                                    <tbody id="tbody">                                                    
                                                        {/* <tr style={{width: '100%',borderBottom:'1px solid #c1e0fc'}}>
                                                            <div class="row">
                                                            <div class="col-md-4">
                                                                    <p className="NomeFunc">José da Silva <br/> nanda.cgodoi@gmail.com </p>
                                                            </div>
                                                            <div class="col-md-4"> 
                                                            <p className="FuncaoFunc">Funcionário</p></div>
                                                            <div class="col-md-4">
                                                                <div style={{width: '100%',textAlign: 'right',paddingRight:'5%'}}>
                                                                <button type="submit" className=" btn btn-primary btnEditFunc" >Editar</button>
                                                                 <button type="submit" className=" btn btn-primary btnExcFunc" >Excluir</button>
                                                                </div> 
                                                           </div>
                                                           </div>
                                                        </tr>                                                        */}
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