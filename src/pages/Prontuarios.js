import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api from '../services/api2.js';

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuario_branco.png";

export default function Prontuarios(){
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

                if(dados[2] === "0" && dados[4] === "0" ){
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

        var Nome = document.getElementById("rg");
        let response="";
        try {
            response = await api.post('https://agendaanimal-backend.herokuapp.com/Prontuario/BuscarPront');
        } catch (error) {
            console.log(error);               
        }  

        if(response){
            if(response.data.response){
                var produto = response.data.response.Prontuario;
                if(produto.length === 0){
                    Nome.value = "Não tem Vacina";
                    Nome.style.color="red";
                }else{
                    for(let i=0; i< produto.length;i++){
    
                        var tbody = document.getElementById("tbody");
                        var tr = document.createElement("tr");
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
                        var img = document.createElement("img");
                        var div3 = document.createElement("div");
                        var aTutor = document.createElement("a");
                        var br = document.createElement("BR");
                        var aNome = document.createElement("a");
                        var aPet = document.createElement("a");
                        var aPetNome = document.createElement("a");
                        var div4 = document.createElement("div");
                        var pRg = document.createElement("p");
                        var div5 = document.createElement("div");
                        var div6 = document.createElement("div");
                        // var buttonCompartilhar = document.createElement("button");         
                        var buttonVisualizar = document.createElement("button");   
                        // var buttonAtualizar = document.createElement("button");    
                        
                        tr.style.width="100%";
                        tr.style.borderBottom = "1px solid #c1e0fc";
                        div1.className="row";
                        div2.className="col-md-0.5";
                        div2.style.paddingRight="0";
                        div2.style.marginLeft= "15px";
                        img.setAttribute("src",{rodape});
                        img.className="ImagemProd";
                        img.setAttribute("align","right");
                        img.setAttribute("alt","");
                        div3.className="col-md-4";
                        div3.style.paddingLeft="0";
                        aTutor.className="TextPront";
                        aTutor.innerHTML="Tutor: ";
                        aTutor.style.padding= "5% 5%";
                        aNome.className = "NomeFunc";
                        aNome.style.padding="0";
                        aNome.innerHTML = produto[i].nomeCli;
                        aPet.className="PetPront";
                        aPet.innerHTML="Pet: ";
                        aPetNome.style.color="#676767";
                        aPetNome.innerHTML = produto[i].nomePet;
                        div4.className="col-md-2";
                        pRg.className="FuncaoPront";
                        pRg.innerHTML= produto[i].rgPet;
                        div5.className="col-md-5";
                        div6.style.width="100%";
                        div6.style.textAlign="right";
        
                        buttonVisualizar.setAttribute("id", i.toString() );
                        buttonVisualizar.onclick = function() { Visualizar(produto[i].idConst) };
                        buttonVisualizar.className=" btn btn-primary btnVisShop";
                        buttonVisualizar.innerHTML="Visualizar";
                        buttonVisualizar.setAttribute("type","submit");
        
                        // buttonCompartilhar.setAttribute("id", i.toString() );
                        // // buttonCompartilhar.onclick = function() { Visualizar(produto[i].idVacina) };
                        // buttonCompartilhar.className=" btn btn-primary btnExcShop";
                        // buttonCompartilhar.innerHTML="Compartilhar";
                        // buttonCompartilhar.setAttribute("type","submit");
        
                        // buttonAtualizar.setAttribute("id", i.toString() );
                        // // buttonCompartilhar.onclick = function() { Visualizar(produto[i].idVacina) };
                        // buttonAtualizar.className=" btn btn-primary btnVisShop";
                        // buttonAtualizar.innerHTML="Atualizar";
                        // buttonAtualizar.setAttribute("type","submit");
        
                        // div6.appendChild(buttonCompartilhar);
                        // div6.appendChild(buttonAtualizar);
                        div6.appendChild(buttonVisualizar);
                        div5.appendChild(div6);
                        div4.appendChild(pRg);
                        div3.appendChild(aTutor);
                        div3.appendChild(aNome);
                        div3.appendChild(br);
                        div3.appendChild(aPet);
                        div3.appendChild(aPetNome);
                        div2.appendChild(img);
                        div1.appendChild(div2);
                        div1.appendChild(div3);
                        div1.appendChild(div4);
                        div1.appendChild(div5);
                        tr.appendChild(div1);
                        tbody.appendChild(tr);
                   }
                }                
            }else{
                Nome.value = "Tente Novamente";
            }
    
            if(response.data.error){
                if(response.data.error === "error"){
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
    setTimeout(() => {Aparecer()}, 100);

    function Visualizar(c){   
        localStorage.setItem('Codigo', c);
        window.location.href = "/VisualizarProntuario";
    }
    function Cadastro(){   
        window.location.href = "/CadastroProntuario";
    }

    async function Filtro(){
            var Nome = document.getElementById("rg");
            var ButtonFiltro = document.getElementById("ButtonFiltro");

            if (Nome.value === "" || Nome.value === null || Nome.value === undefined) {    
                Nome.value = "Preencha o campo Nome";
                Nome.style.color="red";
            }
            else{
                Nome.style.color="#009fe3";
                let response="";    
                
                var tbody = document.getElementById("tbody");
                tbody.innerText="";
                
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prontuario/FiltroPront', {rgPet:Nome.value});
                } catch (error) {
                    console.log(error);               
                }  

                if(response){

                    if(response.data){
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
        
                            var produto = response.data.response.Prontuario;
        
                            if(produto.length === 0){
                                Nome.value = "Não tem Vacina";
                                Nome.style.color="red";
                            }
                            else{
                                for(let i=0; i< produto.length;i++){
        
                                    var tr = document.createElement("tr");
                                    var div1 = document.createElement("div");
                                    var div2 = document.createElement("div");
                                    var img = document.createElement("img");
                                    var div3 = document.createElement("div");
                                    var aTutor = document.createElement("a");
                                    var br = document.createElement("BR");
                                    var aNome = document.createElement("a");
                                    var aPet = document.createElement("a");
                                    var aPetNome = document.createElement("a");
                                    var div4 = document.createElement("div");
                                    var pRg = document.createElement("p");
                                    var div5 = document.createElement("div");
                                    var div6 = document.createElement("div");
                                    // var buttonCompartilhar = document.createElement("button");         
                                    var buttonVisualizar = document.createElement("button");   
                                    // var buttonAtualizar = document.createElement("button");    
                                    
                                    tr.style.width="100%";
                                    tr.style.borderBottom = "1px solid #c1e0fc";
                                    div1.className="row";
                                    div2.className="col-md-0.5";
                                    div2.style.paddingRight="0";
                                    div2.style.marginLeft= "15px";
                                    img.setAttribute("src",{rodape});
                                    img.className="ImagemProd";
                                    img.setAttribute("align","right");
                                    div3.className="col-md-4";
                                    div3.style.paddingLeft="0";
                                    aTutor.className="TextPront";
                                    aTutor.innerHTML="Tutor: ";
                                    aTutor.style.padding= "5% 5%";
                                    aNome.className = "NomeFunc";
                                    aNome.style.padding="0";
                                    aNome.innerHTML = produto[i].nomeCli;
                                    aPet.className="PetPront";
                                    aPet.innerHTML="Pet: ";
                                    aPetNome.style.color="#676767";
                                    aPetNome.innerHTML = produto[i].nomePet;
                                    div4.className="col-md-2";
                                    pRg.className="FuncaoPront";
                                    pRg.innerHTML= produto[i].rgPet;
                                    div5.className="col-md-5";
                                    div6.style.width="100%";
                                    div6.style.textAlign="right";
                    
                                    buttonVisualizar.setAttribute("id", i.toString() );
                                    buttonVisualizar.onclick = function() { Visualizar(produto[i].idConst) };
                                    buttonVisualizar.className=" btn btn-primary btnVisShop";
                                    buttonVisualizar.innerHTML="Visualizar";
                                    buttonVisualizar.setAttribute("type","submit");
                    
                                    // buttonCompartilhar.setAttribute("id", i.toString() );
                                    // // buttonCompartilhar.onclick = function() { Visualizar(produto[i].idVacina) };
                                    // buttonCompartilhar.className=" btn btn-primary btnExcShop";
                                    // buttonCompartilhar.innerHTML="Compartilhar";
                                    // buttonCompartilhar.setAttribute("type","submit");
                    
                                    // buttonAtualizar.setAttribute("id", i.toString() );
                                    // // buttonCompartilhar.onclick = function() { Visualizar(produto[i].idVacina) };
                                    // buttonAtualizar.className=" btn btn-primary btnVisShop";
                                    // buttonAtualizar.innerHTML="Atualizar";
                                    // buttonAtualizar.setAttribute("type","submit");
                    
                                    // div6.appendChild(buttonCompartilhar);
                                    // div6.appendChild(buttonAtualizar);
                                    div6.appendChild(buttonVisualizar);
                                    div5.appendChild(div6);
                                    div4.appendChild(pRg);
                                    div3.appendChild(aTutor);
                                    div3.appendChild(aNome);
                                    div3.appendChild(br);
                                    div3.appendChild(aPet);
                                    div3.appendChild(aPetNome);
                                    div2.appendChild(img);
                                    div1.appendChild(div2);
                                    div1.appendChild(div3);
                                    div1.appendChild(div4);
                                    div1.appendChild(div5);
                                    tr.appendChild(div1);
                                    tbody.appendChild(tr);
                                }
                            }
                            
                        }else{
                            Nome.value = "Tente Novamente";
                        } 
                    } 
                }
            }
        }

        function Edit(){
            window.location.href="/EditarPerfil";
        }
        function Login(){
            window.location.href="/";
        }

    return(
    <div>
        <div className="wrapper ">
            <div className="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a  className="simple-text logo-normal">
                        <img src={rodape} className="ImagemLogo" align="left" alt="" />            
                    </a>
                    <a  className="simple-text logo-normal">
                        <p className="NomePrest">Cantos dos Bichos</p>
                        <p className="TipoPrest">PetShop</p>
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item " id="Home" style={{display:'block'}}>
                            <a className="nav-link" href="/Home">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={inicio}/> 
                                <p style={{textAlign: '-webkit-center'}}>Inicio</p>
                            </a>
                        </li>
                        <li className="nav-item" id="Calen" style={{display:'none'}}>
                            <a className="nav-link" href="/Calendario">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={calendario}/>
                                <p style={{textAlign: '-webkit-center'}}>Calendário</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Func" style={{display:'none'}}>
                            <a className="nav-link" href="/Funcionarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'11%',height:'06%'}} src={funcionario}/>
                                <p style={{textAlign: '-webkit-center'}}>Funcionários</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Shop" style={{display:'none'}}>
                            <a className="nav-link" href="/Shopping">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={shop}/>
                                <p style={{textAlign: '-webkit-center'}}>Shopping</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Med" style={{display:'none'}}>
                            <a className="nav-link" href="/Medicacao">
                                <i className="material-icons">alarm</i>
                                <p style={{textAlign: '-webkit-center'}}>Medicações</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Vac" style={{display:'none'}}>
                            <a className="nav-link" href="Vacina">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={vacinas}/>
                                <p style={{textAlign: '-webkit-center'}}>Vacinas</p>
                            </a>
                        </li>
                        <li className="nav-item active" id="Pront" style={{display:'none'}}>
                            <a className="nav-link" href="/Prontuarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={prontuarios}/>
                                <p style={{textAlign: '-webkit-center'}}>Prontuários</p>
                            </a>
                        </li>
                        <li className="nav-item active-pro ">
                            <a className="nav-link" style={{background:'none'}}>
                                <table>
                                    <tr>
                                        <td style={{width: '20%'}}>
                                            <img src={rodape2} className="material-icons" alt=""/>
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
                            <a className="navbar-brand" href="#pablo" >Prontuários</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            {/* <li class="nav-item dropdown">
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
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" onClick={Edit}>
                                <i class="material-icons">help_outline</i>
                                <p class="d-lg-none d-md-block">
                                    Stats
                                </p>
                                </a>
                            </li>
                            
                            <li class="nav-item dropdown" >
                                <a onClick={Login}>
                                    <img src={rodape} class="iconLogo" align="right" alt="" />      
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card" style={{borderLeft:'4px solid #009fe3'}}>
                                    <div className="card-body" style={{padding:'0 0 0 0'}}>
                                        <div className="row" >
                                             <div className="col-md-4">
                                                <div className="navbar-form" style={{textAlign: '-webkit-center'}}>
                                                    <div className="input-group no-border searchFunc" >
                                                        <span className="material-icons" style={{color:'#009fe3'}}>
                                                        search
                                                        </span>
                                                        <input type="text"  id="rg" placeholder="Digite o Rg"/>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="col-md-4" style={{paddingLeft: '0'}}>
                                                <div style={{width: '100%',textAlign: 'left',paddingRight:'5%'}}> 
                                                    <button type="submit" id="ButtonFiltro" onClick={Filtro} className="btn btn-primary btnPrimeiroVacina" style={{width:'40%'}} >Filtrar</button>
                                                    <button type="submit" className="btn btn-primary btnSegundoVacina" onClick={Cadastro} style={{width:'45%'}}>Novo Prontuario</button>
                                                </div> 
                                            </div>                                             
                                            <div className="col-md-4"></div>
                                            <br/>
                                        </div>
                                        <table style={{width:'100%'}}>
                                            <tr style={{width:'100%'}}>
                                                <td style={{width:'40%'}}>
                                                    <p className="TituloPront" align="left">Meus Prontuários</p>
                                                </td>
                                                <td style={{width:'60%',paddingLeft: '6%'}}>
                                                    <p className="TituloPront" align="left">RG Animal</p>
                                                </td>
                                            </tr>
                                        </table>


                                        <div className="tab-content">
                                            <div className="tab-pane active" id="profile">
                                                <table className="table" style={{marginBottom:'0px'}} id="table">
                                                    <tbody id="tbody">                                                    
                                                        
                                                    {/* <tr style={{width: '100%',borderBottom:'1px solid #c1e0fc'}}>
                                                            <div class="row">
                                                                <div class="col-md-0.5" style={{paddingRight: '0',marginLeft: '15px'}}>
                                                                    <img src={rodape} class="ImagemProd" align="right" />            
                                                                </div>
                                                                <div class="col-md-4" style={{paddingLeft: '0'}}>
                                                                    <a className="NomeFunc"><a class="TextPront">Tutor:</a>José da Silva </a> <br/> <a className="PetPront">Pet: <a style={{color:'#676767'}}>Auau</a> </a>
                                                                </div>
                                                                <div class="col-md-2"> 
                                                                <p class="FuncaoPront">2011900</p></div>
                                                                <div class="col-md-5">
                                                                    <div style={{width: '100%',textAlign: 'right'}}>
                                                                        <button type="submit" className=" btn btn-primary btnExcShop" >Compartilhar</button>
                                                                        <button type="submit" className=" btn btn-primary btnEditShop" >Atualizar</button>
                                                                        <button type="submit" className=" btn btn-primary btnVisShop" >Vizualizar</button>
                                                                    </div> 
                                                                </div>
                                                           </div>
                                                        </tr>    */}                                              
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