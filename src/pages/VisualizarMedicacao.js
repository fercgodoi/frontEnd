import React from 'react';

import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api from '../services/api2.js';

export default function VisualizarMedicacao(){
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

        var erro = document.getElementById("valida");
        var id= localStorage.getItem('Codigo');

        if(id === "" || id === null || id=== undefined){
            erro.innerText = "Tente Novamente";
        }
        else{

            let response="";
            try {
                response = await api.post('https://agendaanimal-backend.herokuapp.com/Medicamento/BuscarInfo', {idMed:id});
            } catch (error) {
                console.log(error);               
            }  

            if(response){
                if(response.data.response){
                    var produto = response.data.response.Medicamento;                
                    
                    var nomePet= document.getElementById("nomePet");
                    nomePet.value = produto[0].nomePet;
                    var rgPet= document.getElementById("rgPet");
                    rgPet.value = produto[0].rgPet;
                    var nomeMed= document.getElementById("nomeMed");
                    nomeMed.value = produto[0].nomeMed;
                    var doseMed= document.getElementById("doseMed");
                    doseMed.value = produto[0].doseMed;
                    var loteMed= document.getElementById("loteMed");
                    loteMed.value = produto[0].loteMed;
    
                    var dataApliMed= document.getElementById("dataApliMed");
                    var dateInicio= produto[0].dataIniMed.split('', 10);
                    var dateCorreto = dateInicio[0] + dateInicio[1] + dateInicio[2] + dateInicio[3] + dateInicio[4] + dateInicio[5] + dateInicio[6] + dateInicio[7] + dateInicio[8] + dateInicio[9];
                    dataApliMed.value  = dateCorreto;
                    ////////////////////////////////////////////////////
    
                    var dataProxMed= document.getElementById("dataProxMed");
                    var dateInicio2= produto[0].dataFinMed.split('', 10);
                    var dateCorreto2 = dateInicio2[0] + dateInicio2[1] + dateInicio2[2] + dateInicio2[3] + dateInicio2[4] + dateInicio2[5] + dateInicio2[6] + dateInicio2[7] + dateInicio2[8] + dateInicio2[9];
                    dataProxMed.value  = dateCorreto2;
                    ////////////////////////////////////////////////////
    
                    var nomeVetMed= document.getElementById("nomeVetMed");
                    nomeVetMed.value = produto[0].nomeEstbMed;
                    var emailVetMed= document.getElementById("emailVetMed");
                    emailVetMed.value = produto[0].emailEstbMed;
                    var observacaoMed= document.getElementById("observMed");
                    observacaoMed.value = produto[0].observacaoMed;
                    var rotinaMed= document.getElementById("rotinaMed");
                    rotinaMed.value = produto[0].rotinaMed;
                
                }else{
                    erro.value = "Tente Novamente";
                }
    
                if(response.data.error){
                    if(response.data.error === 'erro sql'){
                        erro.value = "Tente Novamente";
                    }if(response.data.error === "falha na autenticação do token"){
                        erro.value = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        erro.value = "Tente Novamente";
                    }
                }
            }
        }

    }

    setTimeout(() => {Aparecer()}, 1000);

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
                        <li class="nav-item " id="Shop" style={{display:'none'}}>
                            <a class="nav-link" href="/Shopping">
                            <i class="material-icons">shopping_cart</i>
                            <p>Shopping</p>
                            </a>
                        </li>
                        <li class="nav-item active" id="Med" style={{display:'none'}}>
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
                            <a class="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Visualizar Medicação</a>
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
                                        <h4 class="card-title">Medicações</h4>
                                    </div>
                                    <div class="card-body">
                                        {/* <form> */}
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style={{color:'#009fe3'}}>Nome do Pet</label>
                                                            <input type="text" class="form-control" placeholder="Nome do Pet" id="nomePet" disabled style={{borderBottom:    '1px solid #009fe3'}} />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style={{color:'#009fe3'}}>RG Animal</label>
                                                        <input type="email" class="form-control" placeholder="RG Animal" id="rgPet"  disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                            <label style={{color:'#009fe3'}}>Nome da Medicação</label>
                                                            <input type="text" class="form-control" placeholder="Nome Medicação" id="nomeMed" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style={{color:'#009fe3'}}>Dosagem</label>
                                                        <input type="email" class="form-control" placeholder="Dose" id="doseMed" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                         <label style={{color:'#009fe3'}}>Lote</label>
                                                        <input type="text" class="form-control" placeholder="Lote" id="loteMed" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label style={{color:'#009fe3'}}>Rotina</label>
                                                        <input type="text" class="form-control" placeholder="Rotina" id="rotinaMed" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label style={{color:'#009fe3'}}>Observações</label>
                                                        <input type="text" class="form-control" placeholder="Observação" id="observMed" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>   
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Data Inicio" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="date" id="dataApliMed" className="form-control" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"  placeholder="Proxima data" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="date" id="dataProxMed" className="form-control" disabled/>
                                                    </div>
                                                </div>
                                            </div> 
                                            <br/>   
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style={{color:'#009fe3'}}>Nome do Aplicador</label>
                                                        <input type="text" class="form-control" placeholder="Nome do Aplicador" id="nomeVetMed" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style={{color:'#009fe3'}}>Email do Aplicador</label>
                                                        <input type="text" class="form-control" placeholder="Email do Aplicador" id="emailVetMed" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px',textAlign: 'center'}} id="valida"></p>                                                 
                                            </div>
                                            <br/> 
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