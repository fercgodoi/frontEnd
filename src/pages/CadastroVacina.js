import React from 'react';
import CurrencyInput from 'react-currency-input';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import "../js/menu.js";

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacina_branco.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

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
                // var Shop= document.getElementById("Shop");
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
                        // Shop.style.display="block";
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
                        // Shop.style.display="block";
                    }
                }
            }       
    }
    setTimeout(() => {Validar()}, 100);

    async function Dados(){

        let response="";
        try {
            response = await api2.post('https://agendaback.herokuapp.com/Prestador/BuscarPrest2');
        } catch (error) {
            console.log(error);               
        }          
        console.log(response);
  
        if(response){
            var produto = response.data.response.Prestadores[0];
  
            var Nome = document.getElementById("NomeLogo");
            Nome.innerHTML= produto.NomeFantsPrest;
  
            var Tipo = document.getElementById("TipoLogo");
            var nomeTipo="";
            if(produto.PetShopPrest === "true"){
                nomeTipo= nomeTipo + "PetShop";
            }
            if(produto.ClinicaPrest === "true"){
                nomeTipo= nomeTipo + " Clinica";
            }
            if(produto.OngPrest === "true"){
                nomeTipo= nomeTipo + " ONG";
            }
            if(produto.PasseadorPrest === "true"){
                nomeTipo= nomeTipo + " Passeador";
            }
            if(produto.HotelPrest === "true"){
                nomeTipo= nomeTipo + " Hotel";
            }
            if(produto.AdestradorPrest === "true"){
                nomeTipo= nomeTipo + " Adestrador";
            }
  
            Tipo.innerHTML= nomeTipo;
  
            var img = document.getElementById("LogoImg");
            var imgImg = document.getElementById("SairImg");
  
            if(produto.fotoPrest !== "" || produto.fotoPrest !== null || produto.fotoPrest !== undefined){
              imgImg.setAttribute("src", produto.fotoPrest);
              img.setAttribute("src", produto.fotoPrest);
            }else{
              imgImg.setAttribute("src", "data:image/png;base64,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");
              img.setAttribute("src", "data:image/png;base64,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");
            }
           
        }
    }
    
    setTimeout(() => {Dados()}, 1);

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
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");
        
        
        if (nome === "" || nome === null || nome === undefined) {
            erro.innerHTML = "Preencha o campo Nome";
            button.innerText="Próximo";
            button.removeAttribute("disabled");
        }
        else{
            if (valor === "" || valor === null || valor === undefined) {
                erro.innerHTML = "Preencha o campo de Valor";
                button.innerText="Próximo";
                button.removeAttribute("disabled");
            }
            else{
                if (lote === "" || lote === null || lote === undefined) {
                    erro.innerHTML = "Preencha o campo Lote";
                    button.innerText="Próximo";
                    button.removeAttribute("disabled");
                }
                else{
                    if (dose === "" || dose === null || dose === undefined) {
                        erro.innerHTML = "Preencha o campo da Dose";
                        button.innerText="Próximo";
                        button.removeAttribute("disabled");
                    }
                    else{
                        if (rg === "" || rg === null || rg === undefined) {
                            erro.innerHTML = "Preencha o campo do Rg Animal";
                            button.innerText="Próximo";
                            button.removeAttribute("disabled");
                        }
                        else{
                            if (dataIni === "" || dataIni === null || dataIni === undefined) {
                                erro.innerHTML = "Preencha o campo Data Aplicada";
                                button.innerText="Próximo";
                                button.removeAttribute("disabled");
                            }
                            else{
                                if (dataProx === "" || dataProx === null || dataProx === undefined) {
                                    erro.innerHTML = "Preencha o campo Proxima data";
                                    button.innerText="Próximo";
                                    button.removeAttribute("disabled");
                                }
                                else{
                                    if (dataProx < dataIni){
                                        erro.innerHTML = "A data de proxima dose deve ser mais do que a de inicio";
                                        button.innerText="Próximo";
                                        button.removeAttribute("disabled");
                                    }
                                    else{
                                        if (observacao === "" || observacao === null || observacao === undefined) {
                                            erro.innerHTML = "Preencha o campo observação";
                                            button.innerText="Próximo";
                                            button.removeAttribute("disabled");
                                        }
                                        else{
                                            let response="";
                                            valor= valor.replace(/,/g, '.');

                                            try {
                                                response = await api2.post('https://agendaback.herokuapp.com/Vacina/inserirVac', {dataApliVacina: dataIni,dataProxVacina: dataProx,nomeVacina: nome ,qntDoseVacina: dose,loteVacina: lote,valorVacina:  valor ,rgPet: rg,observacaoVacina: observacao});
                                            } catch (error) {
                                                console.log(error);               
                                            }  

                                            if(response){
                                                if(response.data.message){
                                                    if(response.data.message === "Pet nao encontrado"){
                                                        erro.innerHTML= "Pet não encontrado";
                                                        button.innerText="Próximo";
                                                        button.removeAttribute("disabled");
                                                    }else if(response.data.message === "Cadastrado"){
                                                        erro.style.color = "#006600";      
                                                        erro.style.fontWeight= "700";
                                                            erro.innerHTML= "Cadastrado com Sucesso";
                                                            setTimeout(() => {window.location.href="/CadastroVacina"}, 2000);
                                                        }
                                                        else{
                                                            erro.innerHTML= "Tente Novamente";
                                                            button.innerText="Próximo";
                                                            button.removeAttribute("disabled");
                                                        }                                                    
                                                }
    
                                                if(response.data.error){
                                                    if(response.data.error === "error sql"){
                                                        erro.innerHTML= "Tente Novamente";
                                                        button.innerText="Próximo";
                                                        button.removeAttribute("disabled");
                                                    }
                                                    else{
                                                        erro.innerHTML= "Tente Novamente";
                                                        button.innerText="Próximo";
                                                        button.removeAttribute("disabled");
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
                <a  class="simple-text logo-normal">
          <img src={rodape} class="ImagemLogo" id="LogoImg" align="left"  alt=""/>            
        </a>
        <a  class="simple-text logo-normal">
          <p class="NomePrest" id="NomeLogo"></p>
          <p class="TipoPrest" id="TipoLogo"></p>
        </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li class="nav-item " id="Home" style={{display:'block'}}>
                            <a className="nav-link" href="/Home">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={inicio} alt=""/> 
                                <p style={{textAlign: '-webkit-center'}}>Inicio</p>
                            </a>
                        </li>
                        <li className="nav-item" id="Calen" style={{display:'none'}}>
                            <a className="nav-link" href="/Calendario">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={calendario} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Calendário</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Func" style={{display:'none'}}>
                            <a className="nav-link" href="/Funcionarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'11%',height:'5%'}} src={funcionario} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Funcionários</p>
                            </a>
                        </li>
                        {/* <li className="nav-item " id="Shop" style={{display:'none'}}>
                            <a className="nav-link" href="/Shopping">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={shop}/>
                                <p style={{textAlign: '-webkit-center'}}>Shopping</p>
                            </a>
                        </li> */}
                        <li className="nav-item " id="Med" style={{display:'none'}}>
                            <a className="nav-link" href="/Medicacao">
                            <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={medicacao} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Medicações</p>
                            </a>
                        </li>
                        <li className="nav-item active" id="Vac" style={{display:'none'}}>
                            <a className="nav-link" href="Vacina">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={vacinas} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Vacinas</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Pront" style={{display:'none'}}>
                            <a className="nav-link" href="/Prontuarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={prontuarios} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Prontuários</p>
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
                            <a className="navbar-brand" href="#pablo" >Cadastro Vacina</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={rodape} class="iconLogo" align="right" alt="" id="SairImg"/> 
                                <p class="d-lg-none d-md-block">
                                    Some Actions
                                </p>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" onClick={Edit}>Editar Perfil</a>
                                <a class="dropdown-item" onClick={Login}>Sair</a>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" >
                                <i class="material-icons">help_outline</i>
                                <p class="d-lg-none d-md-block">
                                    Stats
                                </p>
                                </a>
                            </li>
                            
                            <li class="nav-item dropdown" >
                                <a >
                                    <img src={rodape} class="iconLogo" align="right" alt="" id="SairImg"/>   
                                </a>
                            </li> */}
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
                                                        <input type="text" className="form-control" id="rg" placeholder="RG Animal"/>
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
                                                        <input type="text" className="form-control" id="dose" placeholder="Dose"/>
                                                    </div>
                                                </div>
                                               
                                                <div class="input-group col-md-3">
                                                    {/* <div class="input-group-prepend">
                                                        <span class="input-group-text" style={{color:'#009fe3'}}>R$</span>
                                                    </div>
                                                    <input type="text" class="form-control" id="valor" placeholder="Preço Unitário"/> */}
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">R$</span>
                                                    </div>
                                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                                     <CurrencyInput  className="form-control"  id="valor" precision="2" decimalSeparator="," thousandSeparator="."/>
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
                                            <div className="row">                                                
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="3" id="observacao" placeholder="Observação"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>   
                                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                                <div className="col-md-12">
                                                    <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                                        <button type="submit" className="btn btn-primary" style={{borderRadius: '30px',padding: '1% 5%',background:'#fff',border:'1px solid #009fe3',color:"#009fe3"}} id="buttonProximo" onClick={Adicionar}>Salvar</button>
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