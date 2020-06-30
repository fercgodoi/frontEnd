import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

// import api from '../services/api.js';

import api2 from '../services/api2.js';

export default function CadastroVacina(){
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

    async function Adicionar(){
        var nome = document.getElementById("nome").value;
        var valor = document.getElementById("valor").value;
        var lote = document.getElementById("lote").value;
        var dose = document.getElementById("dose").value;
        var rg = document.getElementById("rg").value;
        var dataIni = document.getElementById("dataIni").value;
        var dataProx = document.getElementById("dataProx").value;
        var observacao = document.getElementById("observacao").value;
        var erro = document.getElementById("valida");
        
        
        if (nome === "" || nome === null || nome === undefined) {
    
            erro.innerHTML = "Preencha o campo Nome";
        }
        else{
            if (valor === "" || valor === null || valor === undefined) {
    
                erro.innerHTML = "Preencha o campo de Valor";
            }
            else{
                if (lote === "" || lote === null || lote === undefined) {
    
                    erro.innerHTML = "Preencha o campo Lote";
                }
                else{
                    if (dose === "" || dose === null || dose === undefined) {
        
                        erro.innerHTML = "Preencha o campo da Dose";
                    }
                    else{
                        if (rg === "" || rg === null || rg === undefined) {
            
                            erro.innerHTML = "Preencha o campo do Rg Animal";
                        }
                        else{
                            if (dataIni === "" || dataIni === null || dataIni === undefined) {
                
                                erro.innerHTML = "Preencha o campo Data Aplicada";
                            }
                            else{
                                if (dataProx === "" || dataProx === null || dataProx === undefined) {
                    
                                    erro.innerHTML = "Preencha o campo Proxima data";
                                }
                                else{
                                    if (dataProx < dataIni)
                                    {
                                        erro.innerHTML = "A data de proxima dose deve ser mais do que a de inicio";
                                    }
                                    else{
                                        if (observacao === "" || observacao === null || observacao === undefined) {
                    
                                            erro.innerHTML = "Preencha o campo observação";
                                        }
                                        else{
                                            let response="";

                                            let Token = localStorage.getItem('token');


                                            try {
                                                response = await api2.post('https://agendaanimal-backend.herokuapp.com/Vacina/inserirVac', {dataApliVacina: dataIni,dataProxVacina: dataProx,nomeVacina: nome ,qntDoseVacina: dose,loteVacina: lote,valorVacina:  valor ,idFunc: 1,rgPet: rg,observacaoVacina: observacao});
                                            } catch (error) {
                                                console.log(error);               
                                            }  

                                            if(response){
                                                if(response.data.message){
                                                    
                                                    if(response.data.message === "Pet nao encontrado"){
                                                        erro.innerHTML= "Pet não encontrado";
                                                    }
                                                    else{
                                                        if(response.data.message === "Cadastrado")
                                                        {
                                                            erro.innerHTML= "Cadastrado com Sucesso";
                                                            setTimeout(() => {window.location.href="/CadastroVacina"}, 2000);
                                                        }
                                                        else{
                                                            erro.innerHTML= "Tente Novamente";
                                                        }
                                                    }
                                                    
                                                }
    
                                                if(response.data.error){
                                                    if(response.data.error === "error sql"){
                                                        erro.innerHTML= "Tente Novamente";
                                                    }
                                                    else{
                                                        erro.innerHTML= "Tente Novamente";
                                                    }
                                                }
                                            }                                            
                                        }                                        
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
        <div className="wrapper ">
            <div className="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a  className="simple-text logo-normal">
                        <img src={rodape}  alt="" className="ImagemLogo" align="left" />            
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
                        <li class="nav-item " id="Shop" style={{display:'none'}}>
                            <a class="nav-link" href="/Shopping">
                            <i class="material-icons">shopping_cart</i>
                            <p>Shopping</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Med" style={{display:'none'}}>
                            <a class="nav-link" href="/Medicacao">
                            <i class="material-icons">alarm</i>
                            <p>Medicações</p>
                            </a>
                        </li>
                        <li class="nav-item active" id="Vac" style={{display:'none'}}>
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
                                            <img src={rodape2} alt="" className="material-icons"/>
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
                            <a className="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Cadastro Vacina</a>
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
                                        <img src={rodape} alt="" className="iconLogo" align="right" />      
                                    </a>                                    
                                </li>
                            </ul>*/}
                        </div> 
                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-blue">
                                        <h4 className="card-title">Vacinas</h4>
                                        <p className="card-category">Complete os Dados!</p>
                                    </div>
                                    <div className="card-body">
                                        {/* <form> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                            <input type="text" className="form-control" id="nome" placeholder="Nome"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="dose" placeholder="Dose"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="lote"placeholder="Lote"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="valor" placeholder="Valor"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="rg" placeholder="RG Animal"/>
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
                                                        <input type="date" id="dataIni" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"  placeholder="Proxima data" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="date" id="dataProx" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="row">                                                
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control" rows="3" id="observacao" placeholder="Observação"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>   
                                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                                <div className="col-md-12">
                                                    <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                                    <button type="submit" className="btn btn-primary" style={{borderRadius: '30px',padding: '1% 5%',background:'#fff',border:'1px solid #009fe3',color:"#009fe3"}} onClick={Adicionar}>Salvar</button>
                                                    <div className="clearfix"></div>
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