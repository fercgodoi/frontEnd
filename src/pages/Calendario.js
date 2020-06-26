import React from 'react';
import "../css/material-dashboard.css";
import "../css/material-dashboard.css";
import rodape from  "../img/cover.jpg";
import rodape2 from  "../img/Icon/versao.png";
import Calendar from 'react-calendar';

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
              var Shop= document.getElementById("Shop");
              var Med= document.getElementById("Med");
              var Vac= document.getElementById("Vac");
              var Pront= document.getElementById("Pront");

              if(dados[2] === "0" && dados[0] === "0" && dados[6] === "0"  ){
                  setTimeout(() => {window.location.href="/"});  
              }else{
                var Calen = document.getElementById("Calen");
                var Func= document.getElementById("Func");
                var Shop= document.getElementById("Shop");
                var Med= document.getElementById("Med");
                var Vac= document.getElementById("Vac");
                var Pront= document.getElementById("Pront");

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
      let response="";
      try {
          response = await api.post('https://agendaanimal-backend.herokuapp.com/Agendamento/BuscarAprovados');
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
              PNomePet.innerHTML=produto[0].nomePet;
              aRaca.className="ParagTabGrand";
              aRaca.style.marginBottom="0";
              aRaca.innerHTML=produto[0].racaPet + "&nbsp;&nbsp;";
              aTipo.className="ParagTabGrand" + "&nbsp;&nbsp;";
              aTipo.innerHTML=produto[0].tipoServicoAgen;
              aTipo.style.marginBottom="0";
              aData.className="ParagTabGrand";
              
              var dateInicio= produto[0].DataAgen.split('', 10);
              var dateCorreto = dateInicio[0] + dateInicio[1] + dateInicio[2] + dateInicio[3] + dateInicio[4] + dateInicio[5] + dateInicio[6] + dateInicio[7] + dateInicio[8] + dateInicio[9];

              aData.innerHTML=dateCorreto+ "  -  " + produto[0].HoraAgen;
              aData.style.marginBottom="0";
              tdPagamento.style.width="25%";
              tdPagamento.style.textAlignLast="right";
              PNomeDono.className="DonoTabGrand";
              PNomeDono.innerHTML=produto[0].nomeCli;
              PFormaPagamento.className="TituloTabGrand";
              PFormaPagamento.innerHTML=produto[0].formaPagtAgen;

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
          response = await api.post('https://agendaanimal-backend.herokuapp.com/Agendamento/ContAgendamentoDia');
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

    return(
        <div>
       
  <div class="wrapper ">
    <div class="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
          <div class="logo">
        <a  class="simple-text logo-normal">
          <img src={rodape} class="ImagemLogo" align="left" alt="" />            
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
                        <li class="nav-item active" id="Calen" style={{display:'none'}}>
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
                        <li class="nav-item " id="Vac" style={{display:'none'}}>
                            <a class="nav-link" href="Vacina">
                            <i class="material-icons">account_circle</i>
                            <p>Vacinas</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Pront" style={{display:'none'}}>
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
                            <img src={rodape2} class="material-icons" alt=""/>
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
            <a class="navbar-brand" href="#pablo">Calendário</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
       <div class="collapse navbar-collapse justify-content-end">
              {/*  <ul class="navbar-nav">
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
                    <img src={rodape} class="iconLogo" align="right" alt="" />      
                </a>
              </li>
            </ul> */}
          </div>
      </div>
      </nav>
   
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card" >
                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane active" id="profile">
                      <Calendar />
                    </div>
                  </div>
                </div>
              </div>

              
              <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="card card-stats">
                        <div class="card-header card-header-success card-header-icon">
                        <div class="card-icon">
                            <i class="material-icons">content_copy</i>
                        </div>
                        <p class="card-category">Contagem de Agendamentos Dia</p>
                        <h3 class="card-title" id="Dia">     </h3>
                         
                        </div> 
                        <div class="card-footer">
                       
                        </div>
                    </div>
                </div>
                {/* <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="card card-stats">
                        <div class="card-header card-header-warning card-header-icon">
                        <div class="card-icon">
                            <i class="material-icons">store</i>
                        </div>
                        <p class="card-category">Contagem de Agendamentos Mês</p>
                        <h3 class="card-title">21     </h3>
                        </div>
                        <div class="card-footer">
                       
                        </div>
                    </div>
                </div> */}
                </div>

            </div>
            <div class="col-lg-6 col-md-12">
              <div class="card">               
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <tbody id="tbody">
                        <img src={rodape} style={{width:'100%'}} id="imgAparecer" class="material-icons" alt=""/>
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