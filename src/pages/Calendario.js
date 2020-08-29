import React from 'react';
import "../css/material-dashboard.css";
import "../css/material-dashboard.css";
import rodape from  "../img/aprovacoes.png";
import rodape2 from  "../img/Icon/versao.png";
import Calendar from 'react-calendar';
import notas from "../img/pata.png";

import "../js/menu.js";

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendario_branco.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

import api from "../services/api2";

export default function Calendario(){

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

              if(dados[2] === "0" && dados[0] === "0" && dados[6] === "0"  ){
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
        response = await api.post('https://agendaback.herokuapp.com/Prestador/BuscarPrest2');
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

  async function Aparecer(){
      let response="";
      try {
          response = await api.post('https://agendaback.herokuapp.com/Agendamento/BuscarAprovados');
      } catch (error) {
          console.log(error);               
      } 

      var tbody = document.getElementById("tbody");

      if(response){
        if(response.data.response){
          var produto = response.data.response.Agendamento;
          if(produto.length > 0){
            for(let i=0; i< produto.length;i++){ 
              document.getElementById("imgAparecer").style.display="none";
              var tr = document.createElement("tr");
              // var tdImg = document.createElement("td");
              // var imgPet = document.createElement("img");
              var tdNomePet = document.createElement("td");
              var PNomePet = document.createElement("p");
              var aRaca = document.createElement("p");
              var aTipo = document.createElement("p");
              var aData = document.createElement("p");
              var tdPagamento = document.createElement("td");
              var PNomeDono = document.createElement("p");
              var PFormaPagamento = document.createElement("p");
              var br = document.createElement("BR");
      
              tr.style.width="100%";
              // tr.style.borderBottom="1px solid #009fe3";
              tr.style.marginTop="2%";
              // tdImg.style.width="20%";
              tdNomePet.style.width="55%";
              // imgPet.className="ImagemTabGrand";
              // imgPet.setAttribute("alt","");
              // imgPet.src="data:image/png;base64,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";
              PNomePet.className="TituloTabGrand";
              PNomePet.innerHTML=produto[i].nomePet;
              aRaca.className="ParagTabGrand";
              aRaca.style.marginBottom="0";
              aRaca.innerHTML=produto[i].racaPet + "&nbsp;&nbsp;";
              aTipo.className="ParagTabGrand" + "&nbsp;&nbsp;";
              aTipo.innerHTML=produto[i].tipoServicoAgen;
              aTipo.style.marginBottom="0";
              aData.className="ParagTabGrand";
              
              var dateInicio= produto[i].DataAgen.split('', 10);
              var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;

              aData.innerHTML=dateCorreto+ "  -  " + produto[0].HoraAgen;
              aData.style.marginBottom="0";
              tdPagamento.style.width="25%";
              tdPagamento.style.textAlignLast="right";
              PNomeDono.className="DonoTabGrand";
              PNomeDono.innerHTML=produto[i].nomeCli;
              PFormaPagamento.className="TituloTabGrand";
              PFormaPagamento.innerHTML=produto[i].formaPagtAgen;

              tdPagamento.appendChild(PNomeDono);
              tdPagamento.appendChild(PFormaPagamento);              
              tdNomePet.appendChild(PNomePet);
              tdNomePet.appendChild(aRaca);
              tdNomePet.appendChild(aTipo);
              tdNomePet.appendChild(aData);  
              // tdImg.appendChild(imgPet);
              // tr.appendChild(tdImg);
              tr.appendChild(tdNomePet);              
              tr.appendChild(tdPagamento);             
              tbody.appendChild(tr);
              tbody.appendChild(br);
            }
          }
        }
        if(response.data.error){
          var a = document.createElement("p");
          a.innerHTML="Tente Novamente";
          tbody.appendChild(a);
        }
      }
  }

  setTimeout(() => {Aparecer()}, 100);

  async function Contagem(){
     
     let response="";
      try {
          response = await api.post('https://agendaback.herokuapp.com/Agendamento/ContAgendamentoDia');
      } catch (error) {
          console.log(error);               
      } 
      console.log(response) 

      var ContaDia = document.getElementById("Dia");
      if(response){
        if(response.data.response){          
          ContaDia.innerHTML = response.data.response.Agendamento[0].contador ;
        }
        if(response.data.error){
          ContaDia.innerHTML = "";
        }
      }
  }
 setTimeout(() => {Contagem()}, 100);

 function Edit(){
  window.location.href="/EditarPerfil";
  }
  function Login(){
    window.location.href="/";
  }

  async function Dia(valor){

    if(valor[5] === "9"){
      valor = valor[0] + valor[1] + valor[2] + valor[3] + valor[4] +  (parseInt(valor[5]) +1) + valor[6] + valor[7]+ valor[8];

    }else if(valor[5] + valor[6] === "10" || valor[5] + valor[6] === "11" ){
      valor = valor[0] + valor[1] + valor[2] + valor[3] + valor[4] + valor[5] + (parseInt(valor[6]) + 1) + valor[7]+ valor[8] + valor[9];
    }

    var mes = valor[5] + valor[6];

    if(mes.indexOf("-") === 1 ){
      valor = valor[0] + valor[1] + valor[2] + valor[3] + valor[4] +"0" + (parseInt(valor[5]) +1) + valor[6] + valor[7]+ valor[8];
    }

    if(valor.indexOf("undefined") === 9){
      valor = valor[0] + valor[1] + valor[2] + valor[3] + valor[4] + valor[5] + valor[6] + valor[7] + "0"+ valor[8];
    }

    if(valor[9] !== undefined){
      let response="";
      try {
          response = await api.post('https://agendaback.herokuapp.com/Agendamento/BuscarAprovadosDia',{dataCorreta: valor});
      } catch (error) {
          console.log(error);               
      }
      var tbody = document.getElementById("tbody");
      tbody.innerText="";

      if(response){
        if(response.data.response){
          var produto = response.data.response.Agendamento;
          if(produto.length > 0){
            
            for(let i=0; i< produto.length;i++){ 
              // document.getElementById("imgAparecer").style.display="none";
              var tr = document.createElement("tr");
              // var tdImg = document.createElement("td");
              // var imgPet = document.createElement("img");
              var tdNomePet = document.createElement("td");
              var PNomePet = document.createElement("p");
              var aRaca = document.createElement("p");
              var aTipo = document.createElement("p");
              var aData = document.createElement("p");
              var tdPagamento = document.createElement("td");
              var PNomeDono = document.createElement("p");
              var PFormaPagamento = document.createElement("p");
              var br = document.createElement("BR");
      
              tr.style.width="100%";
              // tr.style.borderBottom="1px solid #009fe3";
              tr.style.marginTop="2%";
              // tdImg.style.width="20%";
              tdNomePet.style.width="55%";
              // imgPet.className="ImagemTabGrand";
              // imgPet.setAttribute("alt","");
              // imgPet.src="data:image/png;base64,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";
              PNomePet.className="TituloTabGrand";
              PNomePet.innerHTML=produto[i].nomePet;
              aRaca.className="ParagTabGrand";
              aRaca.style.marginBottom="0";
              aRaca.innerHTML=produto[i].racaPet + "&nbsp;&nbsp;";
              aTipo.className="ParagTabGrand" + "&nbsp;&nbsp;";
              aTipo.innerHTML=produto[i].tipoServicoAgen;
              aTipo.style.marginBottom="0";
              aData.className="ParagTabGrand";
              
              var dateInicio= produto[i].DataAgen.split('', 10);
              var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1];

              aData.innerHTML= dateCorreto+ "  -  " + produto[0].HoraAgen;
              aData.style.marginBottom="0";
              tdPagamento.style.width="25%";
              tdPagamento.style.textAlignLast="right";
              PNomeDono.className="DonoTabGrand";
              PNomeDono.innerHTML=produto[i].nomeCli;
              PFormaPagamento.className="TituloTabGrand";
              PFormaPagamento.innerHTML=produto[i].formaPagtAgen;

              tdPagamento.appendChild(PNomeDono);
              tdPagamento.appendChild(PFormaPagamento);              
              tdNomePet.appendChild(PNomePet);
              tdNomePet.appendChild(aRaca);
              tdNomePet.appendChild(aTipo);
              tdNomePet.appendChild(aData);  
              // tdImg.appendChild(imgPet);
              // tr.appendChild(tdImg);
              tr.appendChild(tdNomePet);              
              tr.appendChild(tdPagamento);             
              tbody.appendChild(tr);
              tbody.appendChild(br);
            }
          }else{
            var img = document.createElement("img");
            img.setAttribute("src",'/static/media/aprovacoes.edcaf57e.png');
            img.style.width="100%";
            img.setAttribute("id",'imgAparecer');
            img.className ="material-icons"
            img.setAttribute("alt","");

            tbody.appendChild(img);
            // <img src={rodape} style={{width:'100%'}} id="imgAparecer" className= alt=""/>
          }
        }
        if(response.data.error){
          var a = document.createElement("p");
          a.innerHTML="Tente Novamente";
          tbody.appendChild(a);
        }
      }
    }
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
          <li className="nav-item " id="Home" style={{display:'block'}}>
            <a className="nav-link" href="/Home">
              <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={inicio} alt=""/> 
              <p style={{textAlign: '-webkit-center'}}>Inicio</p>
              </a>
            </li>
            <li className="nav-item active" id="Calen" style={{display:'none'}}>
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
            <li className="nav-item " id="Vac" style={{display:'none'}}>
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
                            <a className="navbar-brand" href="#pablo" >Calendário</a>
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
            <div className="col-lg-6 col-md-12">
              <div className="card" >
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="profile">
                    <Calendar onClickDay={(value, event) =>Dia(value.getFullYear()+ "-"+ value.getMonth()+ "-" +value.getDate())} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                          <div className="card-icon">
                            <i className="material-icons">sticky_note_2</i>
                          </div>
                        <p className="card-category">Contagem de Agendamentos Dia</p>
                        <h3 className="card-title" id="Dia"></h3>
                        </div> 
                        <div className="card-footer"></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header  card-header-icon">
                        <div class="card-icon" style={{width:'50%',backgroundColor:'#fc1d30'}}>
                        <img src={notas} style={{width:'100%'}} class="material-icons" alt=""/>
                        </div>
                        <p class="card-category">Notas</p>
                        <h3 class="card-title" >     </h3>
                      </div>
                      <div class="card-footer">
                        <div class="stats">
                          <i class="material-icons">history</i> EM BREVE
                        </div>
                      </div>   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">               
                <div className="card-body table-responsive">
                  <table className="table table-hover">
                    <tbody id="tbody">
                        <img src={rodape} style={{width:'100%'}} id="imgAparecer" className="material-icons" alt=""/>
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
    )
}