import React from 'react';
// import InputMask from 'react-input-mask';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/Login/new.css";
import "../css/material-dashboard.css";
import Logo from  "../img/login.png";
import Imagem from "../img/cover.jpg";

import api2 from '../services/api2.js';

export default function AlterarSenha(){
    localStorage.setItem('Codigo', "");

    function Validar(){
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }

    Validar();

    async function Confirmar() {   
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;
        var confSenha = document.getElementById("confSenha").value;
        var erro = document.getElementById("valida");
    
        if (email === "" || email === null || email === undefined) {
    
            erro.innerHTML = "Preencha os campos obrigatório";
        }
        else {
            if(email.indexOf("@") === -1 || email.indexOf(".") === -1  ){
                erro.innerText = "Email Inválido";
            }
            else{
                if (senha === "" || senha === null || senha === undefined) {

                    erro.innerHTML = "Preencha os campos obrigatório";
                    erro.style.color = "#FF0000";
                }
                else {
                    if(senha.length < 6  || senha.length > 15)
                    {
                        erro.innerHTML = "A senha deve conter de 6 a 15 caracteres";
                    }
                    else{
    
                        if (confSenha === "" || confSenha === null || confSenha === undefined) {
        
                            erro.innerHTML = "Preencha os campos obrigatório";
                        }
                        else{
            
                            if(confSenha !== senha){
                                erro.innerHTML = "As senhas não conhecidem ";
                            }
                            else{
                                    
                                let response="";
                                try {
                                    response = await api2.post('https://agendaanimal-backend.herokuapp.com/Funcionario/TrocarSenhaFunc', {EmailFunc:email, SenhaFunc:senha});
                                } catch (error) {
                                    console.log(error);               
                                }    
                                
                    
                                if(response){
                                    if(response.data.message){
                                        if(response.data.message === "error sql"){
                                            erro.innerText = "Tente Novamente";
                                        }
                                        else{
                                            if(response.data.message === "erro no bcript"){
                                                erro.innerText = "Tente Novamente";
                                            }
                                            else{
                                                if(response.data.message === "Usuario nao encontrado"){
                                                    erro.innerText = "Confirme os dados.";
                                                }
                                                else{                                              
                                                    if(response.data.message === "deu certo"){
                                                        erro.innerText = "Alteramos sua senha, agora faça login.";
                                                        setTimeout(() => {window.location.href="/"}, 2000);
                                                    }else{
                                                        erro.innerText = "Tente Novamente";
                                                    }                                                    
                                                }
                                            }
                                        }
                                    }
                                    if(response.data.error){
                                        if(response.data.error === "falha na autenticação do token"){
                                            erro.innerText = "Tente Novamente";
                                            setTimeout(() => {window.location.href="/"}, 2000);
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
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form validate-form" style={{marginBottom:'0px'}}>				
                    <div style={{height: '100%',width: '100%',textAlign: 'center'}}>
                        <div>
                            <img src={Logo} alt="" style={{width: '40%', height: '20%'}}/>
                        </div>
                        <div style={{width: '100%',height: 'auto',marginTop:'2%'}}>
                            <div class="col-md-12">
                                <div class="form-group input" >
                                    <input type="text" className="form-control" id="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group input" >
                                    <input type="password" class="form-control" id="senha" placeholder="Nova Senha"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group input" >
                                    <input type="password" class="form-control" id="confSenha" placeholder="Confrimar Nova Senha"/>
                                    <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: '-webkit-center',paddingTop: '5%'}}>
                            <table>
                                <tr>
                                    <td style={{width:'100%'}}>
                                        <button type="submit" class="btn btn-primary pull-right" style={{backgroundColor:' #009fe3',borderRadius: '32px',width:'100%'}} onClick={Confirmar}>Trocar Senha</button>
                                        <div class="clearfix"></div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
				</div>
				<div class="login100-more" >
                    <img src={Imagem}  alt="" className="ImagemTop"/>
                    <img src={Imagem} alt="" className="ImagemBottom"/>
				</div>
			</div>
		</div>
	</div>    
    </div>
    )
}