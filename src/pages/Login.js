import React from 'react';
import "../css/Login/main.css";
import "../css/Login/util.css";

import "../css/Login/new.css";
import "../css/material-dashboard.css";
import Logo from  "../img/login.png";
import api from '../services/api.js';

import Imagem from "../img/cover.jpg";

export default function Login(){

    localStorage.setItem('token', "");
    localStorage.setItem('Codigo', "");
  
    async function Logar(e){
        e.preventDefault();
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;
        var erro = document.getElementById("valida");
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");

        if (email === "" || email === null || email === undefined) {
          erro.innerText = "Preencha seu email";
          button.innerText="Próximo";
          button.removeAttribute("disabled");
        }
        else {
          if(email.indexOf("@") === -1 || email.indexOf(".") === -1  ){
            erro.innerText = "Email Inválido";
            button.innerText="Próximo";
            button.removeAttribute("disabled");
          }
          else{
            if (senha === "" || senha === null || senha === undefined) {
              erro.innerText = "Preencha sua senha";
              button.innerText="Próximo";
              button.removeAttribute("disabled");
            }
            else {
              let responseFunc="";
              try {
                responseFunc = await api.post('https://agendaback.herokuapp.com/Funcionario/LoginFunc', {EmailFunc:email,SenhaFunc:senha});
              } catch (error) {
                console.log(error);               
              } 

              console.log(responseFunc)
              
              if(responseFunc.data){
                if(responseFunc.data.message){                            
  
                  if(responseFunc.data.message === "Usuario inexistente"){
                    erro.innerText = "Email inexistente";
                    button.innerText="Próximo";
                      button.removeAttribute("disabled");
                  }                  else{
                    var acesso = responseFunc.data.acesso.split('', 4);
                    localStorage.setItem('Acesso', acesso);
                    localStorage.setItem('token', responseFunc.data.token); 

                    if(responseFunc.data.message === "Seu codigo expirou, enviamos um novo codigo para seu email"){
                      erro.innerText = "Enivamos um novo código ao seu email";
                      button.innerText="Próximo";
                      button.removeAttribute("disabled");
                    }
                    else if(responseFunc.data.message === "Confirmar Codigo"){
                      window.location.href="/Codigo";
                    }
                    else if(responseFunc.data.message === "Trocar Senha"){
                      window.location.href="/AlterarSenha";
                    }
                    else if(responseFunc.data.message === "Não Pode logar"){
                      erro.innerText = "Você não pode logar";
                    }
                    else if(responseFunc.data.message === "Logar"){
                      window.location.href="/Home";
                    }
                    else if(responseFunc.data.message === "nao deu"){
                      erro.innerText = "Não foi possivel enviar um email";
                      button.innerText="Próximo";
                      button.removeAttribute("disabled");
                    }else{
                      erro.innerText = "Tente Novamente";
                      button.innerText="Próximo";
                      button.removeAttribute("disabled");
                    }                
                  }
                }
  
                if(responseFunc.data.error){
                  if(responseFunc.data.error === "falha na autenticação"){
                    erro.innerText = "Senha Incorreta";
                    button.innerText="Próximo";
                    button.removeAttribute("disabled");
                  }
                  else{
                    if(responseFunc.data.error === "Error de requisição"){
                      erro.innerText = "Tente Novamente";
                      button.innerText="Próximo";
                      button.removeAttribute("disabled");
                    }
                    else{
                      erro.innerText = "Tente Novamente";
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

    function Cadastrar(e){
      e.preventDefault();
      window.location.href="/CadastroPrimeiro";
    }

    return(
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form" style={{marginBottom:'0px'}}>
                <div style={{height: '70%',width: '100%',textAlign: 'center'}}>
                  <div>
                      <img src={Logo} alt="" style={{width: '40%', height: '20%'}}/>
                  </div>
                  <div style={{width: '100%',height: 'auto',marginTop:'2%'}}>
                    <div className="col-md-12">
                      <div className="form-group input" >
                        <input type="text" className="form-control" id="email" placeholder="Email"/>
                      </div>
                    </div>
                   
                    <div className="col-md-12 ">
                      <div className="form-group input">
                        <input type="password" className="form-control"  id="senha" placeholder="Senha"/>
                        <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                      </div>
                    </div>
                  </div>
                  <div className="DivEsqueceuSenha">
                    <a style={{color:'#009fe3',fontFamily:'Arial'}} href="/EsqueciSenha"> Esqueceu Senha?</a>
                   
                  </div>
                  <div style={{textAlign: '-webkit-center',paddingTop: '5%'}}>
                    <table>
                      <tr>
                        <td style={{width:'50%'}}>
                          <button type="submit" className="btn btn-primary pull-right Login" id="buttonProximo" onClick={Logar}>Login</button>
                          <div className="clearfix"></div>
                        </td>
                        <td style={{width:'50%', paddingLeft: '2%',}}>
                        <button className="btn btn-primary pull-right Cadastro" id="buttonProximo2" onClick={Cadastrar} >Cadastro</button>
                          <div className="clearfix"></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                {/* <div  style={{height: '30%',width: '100%',textAlign: 'center'}}>
                  <div class="row" style={{textAlign: 'center'}}>
                    <div className="col-md-12">
                      <label style={{textAlignLast:'center',fontSize:'12px',marginBottom:'0px',color:'#333333'}}>89.057.884/0001-24</label>
                    </div>
                    <div className="col-md-12">
                      <label style={{textAlignLast:'center',fontSize:'12px',marginBottom:'0px',color:'#333333'}}> Copyright © 2020 Agenda Animal</label> 
                    </div>
                  </div>
                </div> */}
              </form>
              <div className="login100-more" >
                <img src={Imagem} alt="" className="ImagemTop"/>
                <img src={Imagem} alt="" className="ImagemBottom"/>
              </div>
            </div>
          </div>
        </div>
      </div>        
    )
        
}