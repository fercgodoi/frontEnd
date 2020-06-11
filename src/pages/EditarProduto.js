import React from 'react';

import "../css/material-dashboard.css";
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import Confrimar from  "../img/cover.jpg";

import api from '../services/api2.js';

export default function EditarProduto(){
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

    async function Buscar(){
        var erro = document.getElementById("valida");
        var id= localStorage.getItem('Codigo');

        if(id === "" || id === null || id=== undefined){
            erro.innerText = "Tente Novamente";
            var button = document.getElementById("buttonSalvar"); 
            button.onclick = function() { window.location.href="/Shopping" }; 
        }
        else{
            var nome = document.getElementById("nome");
            var desc = document.getElementById("desc");
            var valor = document.getElementById("preco");
            var quant = document.getElementById("quantidade");

            let response="";

            try {
                response = await api.post('https://agendaanimal-backend.herokuapp.com/Produto/Buscar', {idProd:id});
            } catch (error) {
                console.log(error);               
            } 

            if(response){
                if(response.data.response){
                    var produto = response.data.response.Produto;
    
                       nome.value = produto[0].NomeProd;
                       desc.value = produto[0].DescProd;
                       quant.value = produto[0].QuantProd;
                       valor.value = produto[0].PrecoProd;
                    //    img.innerHTML = produto[i].NomeProd;
                    //    img.innerHTML = produto[i].NomeProd;      
                }
    
                if(response.data.error){
                    if(response.data.error === "error sql"){
                        erro.innerText = "Tente Novamente";
                    }
                    if(response.data.error === "falha na autenticação do token"){
                        erro.value = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        erro.innerText = "Tente Novamente";
                    }    
                }
            }          

        }
        
    }

    setTimeout(() => {Buscar()}, 1000);
    
    async function Editar(){
        var erro = document.getElementById("valida");
        var id= localStorage.getItem('Codigo');

        var nome = document.getElementById("nome");
        var desc = document.getElementById("desc");
        var valor = document.getElementById("preco");
        var quant = document.getElementById("quantidade");

        if (nome.value === "" || nome.value === null || nome.value === undefined) {
    
            erro.innerHTML = "Preencha o campo Nome";
        }
        else{
            if (quant.value === "" || quant.value === null || quant.value === undefined) {
            
                erro.innerHTML = "Preencha o campo Quantidade";
            }            
            else{                
                if (quant.value === 0 || quant.value === "0") {
    
                    erro.innerHTML = "A quantidade tem que ser maior que 0";
                }
                else{
                    if (valor.value === "" || valor.value === null || valor.value === undefined) {
            
                        erro.innerHTML = "Preencha o campo Preço";
                    }
                    else{
                        if (desc.value === "" || desc.value === null || desc.value === undefined) {
            
                            erro.innerHTML = "Escreva uma descrição para o produto";
                        }
                        else{
                            erro.innerHTML ="";

                            let response="";

                            try {
                                response = await api.post('https://agendaanimal-backend.herokuapp.com/Produto/EditarProd', {NomeProd:nome.value ,DescProd: desc.value ,PrecoProd:valor.value ,QuantProd:quant.value ,ImgProd:"Ooi",ImgsProd:"ooi",idProd:id});
                            } catch (error) {
                                console.log(error);               
                            } 

                            if(response){
                                if(response.data.message){
                                    if(response.data.message === "Já existe"){
                                        erro.innerText = "Este nome ja esta sendo utilizado";
                                    }
                                    else{
                                        if(response.data.message === "Alterado"){
                                            erro.innerText = "Produto Alterado com sucesso";
    
                                            var button = document.getElementById("buttonSalvar");
                                            nome.setAttribute("disabled", "disabled");
                                            valor.setAttribute("disabled", "disabled");
                                            valor.setAttribute("disabled", "disabled");
                                            quant.setAttribute("disabled", "disabled");  
                                            desc.setAttribute("disabled", "disabled");  
                                            localStorage.setItem('Codigo',"");
                                            window.location.href="/Shopping" ;                              
                                        }
                                        else{
                                            erro.innerText = "Tente Novamente";     
                                        }
                                    }
                                    
                                }
                    
                                if(response.data.error){
                                    if(response.data.error === "error sql"){
                                        erro.innerText = "Tente Novamente";
                                    }if(response.data.error === "falha na autenticação do token"){
                                        erro.value = "Tente Novamente";
                                        setTimeout(() => {window.location.href="/"}, 2000);
                                    }else{
                                        erro.innerText = "Tente Novamente";
                                    }    
                                }
                            }                           

                        }
                    }
                }
            }
        }
    }
    return(
    <div>
        <div class="wrapper ">
            <div class="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div class="logo">
                    <a  class="simple-text logo-normal">
                        <img alt="" src={rodape} class="ImagemLogo" align="left" />            
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
                            <a class="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Editar Produtos</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>
                         <div class="collapse navbar-collapse justify-content-end">
                           {/* <ul class="navbar-nav">
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
                            </ul> */}
                        </div>
                    </div>
                </nav>
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header card-header-blue">
                                        <h4 class="card-title">Produtos</h4>
                                        <p class="card-category">Revise os Dados!</p>
                                    </div>
                                    <div class="card-body">
                                        {/* <form> */}
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <button type="submit" style={{background:'#009fe3',textAlign:'center',color:'#fff',width:'100%',height:'100%'}}>Imagem</button>
                                                </div>
                                                <div class="col-md-6">
                                                <img alt="" src={Confrimar} style={{width:'100%',height:'100%'}} />   
                                                </div>
                                            </div>  
                                            <br/> 
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                    <label style={{color:'#009fe3'}}>Nome</label>
                                                            <input type="text" class="form-control" id="nome" placeholder="Nome"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                    <label style={{color:'#009fe3'}}>Quantidade</label>
                                                        <input type="text" class="form-control" id="quantidade" placeholder="Quantidade"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                    <label style={{color:'#009fe3'}}>Preço R$</label>
                                                        <input type="text" class="form-control" id="preco" placeholder="Preço R$"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">                                                
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                    <label style={{color:'#009fe3'}}>Descrição</label>
                                                        <textarea class="form-control" rows="3" id="desc" placeholder="Descrição"></textarea>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>   
                                            <div class="row" style={{textAlign: '-webkit-center'}}>
                                               
                                                <div class="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px',textAlign: 'center'}} id="valida"></p>
                                                    <button type="submit" class="btn btn-primary" style={{borderRadius: '30px',padding: '1% 05%'}} onClick={Editar} id="buttonSalvar">Salvar</button>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>   
                                        {/* </form> */}
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