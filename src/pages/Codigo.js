import React from 'react';
import InputMask from 'react-input-mask';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/Login/new.css";
import "../css/material-dashboard.css";
import Logo from  "../img/login.png";
import Imagem from "../img/cover.jpg";
import api2 from '../services/api2.js';

export default function Codigo(){
    function Validar(){
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    async function Confirmar() {   
        var cpf = document.getElementById("cpf").value;
        var cod = document.getElementById("cod").value;
        var erro = document.getElementById("valida");
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");
    
        if (cpf === "" || cpf === null || cpf === undefined) {
            button.innerText="Próximo";
            button.removeAttribute("disabled");
            erro.innerHTML = "Preencha os campos obrigatório";
        }
        else {
            if(validarCPF(cpf)){
                if (cod === "" || cod === null || cod === undefined) {    
                    erro.innerHTML = "Preencha os campos obrigatório";
                    erro.style.color = "#FF0000";
                    button.innerText="Próximo";
                    button.removeAttribute("disabled");
                }
                else {                  
                    erro.innerHTML = "";
                    button.innerText="Aguardando";
                    button.setAttribute("disabled","disabled");
                    
                    let response="";
                    try {
                        response = await api2.post('https://agendaanimal-backend.herokuapp.com/Funcionario/CodFunc', {CpfFunc:cpf,CodFunc:cod});
                    } catch (error) {
                      console.log(error);               
                    }

                    if(response){
                        if(response.data.message){
                            if(response.data.message === "Código incorreto"){
                              erro.innerText = "Confira os dados";
                              button.innerText="Próximo";
                              button.removeAttribute("disabled");
                            }else if(response.data.message === "Código confirmado"){
                                erro.innerText = "Código confirmado";
                                setTimeout(() => {window.location.href="/Home"}, 1000);
                            }  
                        }
                        if(response.data.error){
                            if(response.data.error === "error sql"){
                              erro.innerText = "Tente Novamente";
                              button.innerText="Próximo";
                              button.removeAttribute("disabled");
                            }else if(response.data.error === "falha na autenticação do token"){
                                erro.innerText = "Tente Novamente";
                                setTimeout(() => {window.location.href="/"}, 1000);
                            }
                        }                       
                    }
                }                   
              
            }
            else{
                erro.innerHTML = "Verifique o CPF";
                button.innerText="Próximo";
                button.removeAttribute("disabled");
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
                return false;		
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
                                <div class="form-group input">
                                <InputMask type="text"  mask = "999.999.999-99" className="form-control" id="cpf" placeholder="CPF" maskChar=""/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group input">
                                    <input type="text" class="form-control" id="cod" placeholder="Código"/>                                    
                                    <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: '-webkit-center',paddingTop: '5%'}}>
                            <table>
                                <tr>
                                    <td style={{width:'100%'}}>
                                        <button type="submit" class="btn btn-primary pull-right" id="buttonProximo" style={{backgroundColor:' #009fe3',borderRadius: '32px',width:'100%'}} onClick={Confirmar}>Verificar</button>
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