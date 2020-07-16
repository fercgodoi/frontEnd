import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api2 from '../services/api2.js';

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarios_branco.png";
import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";

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
            response = await api2.post('https://agendaanimal-backend.herokuapp.com/Funcionario/BuscarFunc');
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
                        pFunc.innerHTML=Funcionario[i].TipoFunc;
        
                        div4.className="col-md-4";
                        div5.style.width="100%";
                        div5.style.textAlign="right";
                        div5.style.paddingRight="5%";
        
                        buttonEditar.setAttribute("id", i.toString() );
                        buttonEditar.onclick = function() { Editar(Funcionario[i].idFunc) };
                        buttonEditar.className="btn btn-primary btnEditFunc";
                        buttonEditar.innerHTML="Editar";
                        buttonEditar.setAttribute("type","submit");

                        

                        if(Funcionario[i].TipoFunc=== "Funcionário"){
                            var buttonExluir   = document.createElement("button");
                            buttonExluir.setAttribute("id", "idExcluir"+ Funcionario[i].idFunc) ;
                            buttonExluir.onclick = function() { Excluir(Funcionario[i].idFunc) };
                            buttonExluir.className="btn btn-primary btnExcFunc";
                            buttonExluir.innerHTML="Excluir";
                            buttonExluir.setAttribute("type","submit");
                            div5.appendChild(buttonExluir);  
                        }
        
                       
                       
                        div2.appendChild(pNome);
                        div2.appendChild(br); 
                        div2.appendChild(pDesc);
                        div3.appendChild(pFunc);
                        div5.appendChild(buttonEditar);                                      
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

        var button = document.getElementById("idExcluir"+c)

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");

        try {
            response = await api2.post('https://agendaanimal-backend.herokuapp.com/Funcionario/ExcluirFunc', {idFunc:c});
        } catch (error) {
            console.log(error);               
        }

        if(response.data.message){
            if(response.data.message === "deletou"){
                window.location.href="/Funcionarios"
            }else if(response.data.message === "Nao pode"){
                Nome.value = "Impossivel excluir";
                button.innerText="Excluir";
                button.removeAttribute("disabled");
            }else{
                Nome.value = "Tente Novamente";
                button.innerText="Excluir";
                button.removeAttribute("disabled");
            }
        }
        if(response.data.error){
            if(response.data.error === "error sql" ){
                Nome.value = "Tente Novamente";
                button.innerText="Excluir";
                button.removeAttribute("disabled");
            }else if(response.data.error === "falha na autenticação do token"){
                Nome.innerText = "Tente Novamente";
                setTimeout(() => {window.location.href="/"}, 1000);
            }else{
                Nome.value = "Tente Novamente";
                button.innerText="Excluir";
                button.removeAttribute("disabled");
            }    
        }

    }

     
    function Editar(c){   
        localStorage.setItem('Codigo', c);
        window.location.href = "/EditarFuncionario";
    }

    async function Filtro(){
        var Nome = document.getElementById("Email");
        // var ButtonFiltro = document.getElementById("ButtonFiltro");
        
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
                response = await api2.post('https://agendaanimal-backend.herokuapp.com/Funcionario/FiltroFunc', {EmailFunc:Nome.value});
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
                            pFunc.innerHTML=Funcionario[i].TipoFunc;
            
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
                    <a className="simple-text logo-normal">
                        <img  alt="" src={rodape} className="ImagemLogo" align="left" />            
                    </a>
                    <a className="simple-text logo-normal">
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
                        <li className="nav-item active" id="Func" style={{display:'none'}}>
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
                        <li className="nav-item " id="Pront" style={{display:'none'}}>
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
                            <a className="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Funcionários</a>
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
                                        <div style={{borderBottom:'1px solid #c1e0fc'}}>
                                            <div className="row" >
                                                <div className="col-md-4">
                                                    <div className="navbar-form" style={{textAlign: '-webkit-center'}}>
                                                        <div className="input-group no-border searchFunc" >
                                                            <span className="material-icons" style={{color:'#009fe3'}}>
                                                            search
                                                            </span>
                                                            <input type="text" id="Email"  className="" placeholder="Digite o Email"/>
                                                        </div>
                                                    </div>
                                                </div> 
                                            <div className="col-md-4"></div>   
                                                <div className="col-md-4">
                                                    <div style={{width: '100%',textAlign: 'right',paddingRight:'5%'}}> 
                                                        <button type="submit" id="ButtonFiltro" onClick={Filtro} className="btn btn-primary btnPrimeiroFunc" >Filtrar</button>
                                                        <button type="submit" className="btn btn-primary btnSegundoFunc" onClick={Nova}>Novo Funcionário</button>
                                                    </div> 
                                                </div>                                    
                                            </div> 
                                        <br/>
                                        </div>
                                        
                                        <div class="tab-content">
                                            <div className="tab-pane active" id="profile">
                                                <table className="table" style={{marginBottom:'0px'}}>
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