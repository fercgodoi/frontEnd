import React from 'react';
import InputMask from 'react-input-mask';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/Login/new.css";
import "../css/material-dashboard.css";
import Logo from  "../img/login.png";
import Imagem from "../img/cover.jpg";

import api from '../services/api.js';

export default function EsqueciSenha(){
    //Efetuar o login
    async function Enviar(e) {
        e.preventDefault();
        
        var email = document.getElementById("email").value;
        var cpf = document.getElementById("cpf").value;
        var erro = document.getElementById("valida");

        if (email === "" || email === null || email === undefined ) {
            erro.innerHTML = "Preencha seu email";
        }
        else{
            if(email.indexOf("@") === -1 || email.indexOf(".") === -1  ){
                erro.innerHTML = "Email inválido";
            }
            else {
                if (cpf === "" || cpf === null || cpf === undefined) {
                    erro.innerHTML = "Preencha o CPF";
                }
                else {
                    erro.innerHTML = "";

                    if(validarCPF(cpf))
                    {
                        let response="";
                        try {
                            response = await api.post('/Funcionario/EsqueciSenhaFunc', {EmailFunc:email});
                        } catch (error) {
                            console.log(error);               
                        }                     
            
                        if(response.data.message){
                            if(response.data.message === "error sql"){
                                erro.innerText = "Tente Novamente";
                            }
                            else{
                                if(response.data.message === "erro no bcript"){
                                    erro.innerText = "Tente Novamente";
                                }
                                else{
                                    if(response.data.message === "Enviamos uma nova senha, verifique seu email"){
                                        erro.innerText = "Enviamos um email contendo uma nova senha para ser trocada.";
                                        setTimeout(() => {window.location.href="/"}, 2000);
                                    }
                                    else{
                                        if(response.data.message === "nao deu"){
                                            erro.innerText = "Verifique o email digitado";
                                        }
                                        else{                                                
                                            erro.innerText = "Tente Novamente";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else{
                        erro.innerHTML = "CPF Inválido";
                    }
                }
            }
        } 
    }

    function validarCPF(cpf) {	
        var cpf1 = document.getElementById("cpf").value;
        cpf = cpf1;
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf === '') return false;	
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length !== 11 || 
            cpf === "00000000000" || 
            cpf === "11111111111" || 
            cpf === "22222222222" || 
            cpf === "33333333333" || 
            cpf === "44444444444" || 
            cpf === "55555555555" || 
            cpf === "66666666666" || 
            cpf === "77777777777" || 
            cpf === "88888888888" || 
            cpf === "99999999999")
                return false;		
        // Valida 1o digito	
        var add = 0;	
        var i=0;
        var rev=0;
        for (i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            rev = 11 - (add % 11);	
            if (rev === 10 || rev === 11)		
                rev = 0;	
            if (rev !== parseInt(cpf.charAt(9)))		
                return false ;		
        // Valida 2o digito	
        var add2 = 0;	
        for (i = 0; i < 10; i ++)		
            add2 += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add2 % 11);	
        if (rev === 10 || rev === 11)	
            rev = 0;	
        if (rev !== parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }


    return(
    <div>        
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" style={{marginBottom:'0px',paddingTop:'8%'}}>				
                        <div style={{height: '100%',width: '100%',textAlign: 'center'}}>
                            <div>
                                <img src={Logo} alt="" style={{width: '40%', height: '20%'}}/>
                            </div>
                            <div className="TituloEsq">
                                <p style={{color:'#009fe3',fontFamily:'Arial'}}> Preencha os campos corretamente e será enviado um email para a mudança de senha.</p>
                            </div>
                            <div style={{width: '100%',height: 'auto',marginTop:'1%'}}>
                                <div className="col-md-12">
                                    <div className="form-group input" >
                                        <input type="text" className="form-control" id="email" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group input">
                                        <InputMask type="text"  mask = "999.999.999-99" className="form-control" id="cpf" placeholder="CPF" maskChar=""/>
                                        <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                    </div>
                                </div>                       
                            </div>                    
                            <div style={{textAlign: '-webkit-center',paddingTop: '1%'}}>
                                <table>
                                    <tr>
                                        <td style={{width:'100%'}}>
                                            <button type="submit" className="btn btn-primary pull-right" style={{backgroundColor:' #009fe3',borderRadius: '32px',width:'100%'}} onClick={Enviar}>Enviar</button>
                                            <div className="clearfix"></div>
                                        </td>  
                                    </tr>
                                </table>
                            </div>
                        </div>
				</form>
				<div className="login100-more" >
                    <img src={Imagem} alt="" className="ImagemTop"/>
                    <img src={Imagem} alt=""  className="ImagemBottom"/>
				</div>
			</div>
		</div>
	</div>    
    </div>
    )
}