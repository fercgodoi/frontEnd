import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api from '../services/api2.js';

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacina_branco.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";

export default function VisualizarVacna(){

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
                response = await api.post('https://agendaanimal-backend.herokuapp.com/Vacina/BuscarInfo', {idVacina:id});
            } catch (error) {
                console.log(error);               
            }  

            if(response){
                if(response.data.response){
                    var produto = response.data.response.Vacina;
                    
                    var nomePet= document.getElementById("nomePet");
                    nomePet.value = produto[0].nomePet;
                    var rgPet= document.getElementById("rgPet");
                    rgPet.value = produto[0].rgPet;
                    var NomeVacina= document.getElementById("NomeVacina");
                    NomeVacina.value = produto[0].NomeVacina;
                    var qntDoseVacina= document.getElementById("qntDoseVacina");
                    qntDoseVacina.value = produto[0].qntDoseVacina;
                    var loteVacina= document.getElementById("loteVacina");
                    loteVacina.value = produto[0].loteVacina;
    
                    var dataApliVacina= document.getElementById("dataApliVacina");
                    var dateInicio= produto[0].dataApliVacina.split('', 10);
                    var dateCorreto = dateInicio[0] + dateInicio[1] + dateInicio[2] + dateInicio[3] + dateInicio[4] + dateInicio[5] + dateInicio[6] + dateInicio[7] + dateInicio[8] + dateInicio[9];
                    dataApliVacina.value  = dateCorreto;
                    ////////////////////////////////////////////////////
    
                    var dataProxVacina= document.getElementById("dataProxVacina");
                    var dateInicio2= produto[0].dataProxVacina.split('', 10);
                    var dateCorreto2 = dateInicio2[0] + dateInicio2[1] + dateInicio2[2] + dateInicio2[3] + dateInicio2[4] + dateInicio2[5] + dateInicio2[6] + dateInicio2[7] + dateInicio2[8] + dateInicio2[9];
                    dataProxVacina.value  = dateCorreto2;
                    ////////////////////////////////////////////////////
    
                    var nomeVetVacina= document.getElementById("nomeVetVacina");
                    nomeVetVacina.value = produto[0].nomeVetVacina;
                    var emailVetVacina= document.getElementById("emailVetVacina");
                    emailVetVacina.value = produto[0].emailVetVacina;
                    var crmvVetVacina= document.getElementById("crmvVetVacina");
                    crmvVetVacina.value = produto[0].crmvVetVacina;
                    var observacaoVacina= document.getElementById("observacaoVacina");
                    observacaoVacina.value = produto[0].observacaoVacina;
                
                }else{
                    erro.value = "Tente Novamente";
                }
    
                if(response.data.error){
                    if(response.data.error === "error sql"){
                        erro.value = "Tente Novamente";
                    } if(response.data.error === "falha na autenticação do token"){
                        erro.innerText = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        erro.value = "Tente Novamente";
                    }
                }
            }
        }
    }

    setTimeout(() => {Aparecer()}, 1000);

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
                        <img alt="" src={rodape} className="ImagemLogo" align="left" />            
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
                        <li className="nav-item active" id="Vac" style={{display:'none'}}>
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
                                            <img  alt="" src={rodape2} className="material-icons"/>
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
                            <a className="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Visualizar Vacina</a>
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
                                <div className="card">
                                    <div className="card-header card-header-blue">
                                        <h4 className="card-title">Vacina</h4>
                                    </div>
                                    <div className="card-body">
                                        {/* <form> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Nome do Pet</label>
                                                        <input type="text" className="form-control" placeholder="Nome do Pet" disabled id="nomePet" style={{borderBottom:    '1px solid #009fe3'}} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>RG Animal</label>
                                                        <input type="email" className="form-control" placeholder="RG Animal" id="rgPet" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Nome da Vacina</label>
                                                        <input type="text" className="form-control" placeholder="Nome"id="NomeVacina" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Dosagem</label>
                                                        <input type="email" className="form-control" placeholder="Dose" id="qntDoseVacina" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Lote</label>
                                                        <input type="text" className="form-control" placeholder="Lote" id="loteVacina" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>  
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Data Aplicada" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="date" id="dataApliVacina" className="form-control" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"  placeholder="Proxima data" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="date" id="dataProxVacina" className="form-control" disabled/>
                                                    </div>
                                                </div>
                                            </div> 
                                            <br/>   
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Nome do Aplicador</label>
                                                        <input type="text" className="form-control" placeholder="Nome do Aplicador" id="nomeVetVacina" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Email do Aplicador</label>
                                                        <input type="text" className="form-control" placeholder="Email do Aplicador" id="emailVetVacina" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>CRMV  do Aplicador</label>
                                                        <input type="text" className="form-control" placeholder="CRMV  do Aplicador" id="crmvVetVacina" disabled style={{borderBottom:    '1px solid #009fe3'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">                                                
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Observação</label>
                                                        <textarea className="form-control" rows="3"  id="observacaoVacina" placeholder="Observação" disabled></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
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