import React from 'react';
import InputMask from 'react-input-mask';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";

import api from "../services/api";

export default function CadastroPrimeiro(){    
    localStorage.setItem('Codigo', "");
    localStorage.setItem('token', "");
   
    async function Proximo() {
        var cnpj = document.getElementById("CNPJ").value;
        var email = document.getElementById("email").value;
        var celular = document.getElementById("celular").value;
        var erro = document.getElementById("valida");

        if (email === "" || email === null || email === undefined ) {
            erro.innerHTML = "Preencha seu email";
        }
        else{
            if(email.indexOf("@") === -1 || email.indexOf(".") === -1  ){
                erro.innerHTML = "Email inválido";
            }
            else{
                if (cnpj === "" || cnpj === null || cnpj === undefined ) {
                    erro.innerHTML = "Preencha seu CNPJ";
                }
                else{
                    var novo = cnpj.split('', 18);
                    var novoCNPJ = novo[0]+novo[1]+novo[3]+novo[4]+novo[5]+novo[7]+novo[8]+novo[9]+novo[11]+novo[12]+novo[13]+novo[14]+novo[16]+novo[17];

                    //  if(validarCNPJ(novoCNPJ)){
                        if (celular === "" || celular === null || celular === undefined ) {
                            erro.innerHTML = "Preencha seu celular";
                        } 
                        else{
                            erro.innerHTML ="";

                            let response="";
                            try {
                                response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadPriPrest',{CnpjPrest: cnpj,CelularPrest:celular,EmailPrest:email});
                            } catch (error) {
                                console.log(error);               
                            }

                            console.log(response)
                              
                            if(response){
                                if(response.data.message){
                                    if(response.data.message === "cnpj ja existe"){
                                        erro.innerHTML = "CNPJ ja existente";
                                    }else if(response.data.message === "email ja existe"){
                                        erro.innerHTML = "Email ja existente";
                                    }else if(response.data.message === "numero ja existe"){
                                        erro.innerHTML = "Celular ja existente";
                                    }else if(response.data.message === "Enviado"){
                                        localStorage.setItem('token', response.data.token);
                                        erro.innerHTML = "Foi enviado um código por email para que digite na tela que será direcionado";
                                        setTimeout(() => {window.location.href="/CadastroSegundo"}, 2000);                                                                               
                                    }
                                }

                                if(response.data.error){
                                    if(response.data.error === "error sql"){
                                        erro.innerHTML = "Tente Novamente";
                                    }else if(response.data.error === "nao deu"){
                                        erro.innerHTML = "Verifique o email digitado";
                                    }
                                }
                            }
                        }
                    // }
                    // else{
                    //     erro.innerHTML = "CNPJ inválido";
                    // }                    
                }
            }
        }       
    }


    function validarCNPJ(novoCNPJ) {
 
        var cnpj = novoCNPJ.replace(/[^\d]+/g,'');
     
        if(cnpj === '') {console.log(cnpj); return false};
         
        if (cnpj.length !== 14)
            return false;
     
        // Elimina CNPJs invalidos conhecidos
        if (cnpj === "00000000000000" || 
            cnpj === "11111111111111" || 
            cnpj === "22222222222222" || 
            cnpj === "33333333333333" || 
            cnpj === "44444444444444" || 
            cnpj === "55555555555555" || 
            cnpj === "66666666666666" || 
            cnpj === "77777777777777" || 
            cnpj === "88888888888888" || 
            cnpj === "99999999999999")
            return false;
             
        // Valida DVs
        var tamanho = cnpj.length - 2
        var numeros = cnpj.substring(0,tamanho);
        var digitos = cnpj.substring(tamanho);
        var  soma = 0;
        var pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(0))
            return false;
            
        var tamanho1 = tamanho + 1;
        var numeros1 = cnpj.substring(0,tamanho);
        var soma1 = 0;
        var pos1 = tamanho - 7;
        for (let i = tamanho1; i >= 1; i--) {
        soma1 += numeros1.charAt(tamanho1 - i) * pos1--;
        if (pos1 < 2)
                pos1 = 9;
        }
        var resultado1 = soma1 % 11 < 2 ? 0 : 11 - soma1 % 11;
        if (resultado1 !== digitos.charAt(1))
            return false;
            
        return true;
        
    }

  
    return(
    <div>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" style={{padding:'0px',margin:'0px'}}>

                    <div className="card-header card-header-blue" style={{background:'#009fe3'}}>
                        <h4 className="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 1</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Oi, eu sou o Jhon! Vou te ajudar no passo a passo do cadastro na Plataforma Agenda Animal.</a>
                                    <br/>
                                    <a style={{marginLeft:'35px',color:'#000000'}}>Qual é o e-mail da sua empresa?</a>
                                        <input type="text" className="form-control" placeholder="Email" id="email" style={{color:'#009fe3',marginTop:'1%'}}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Precisamos do seu CNPJ para confirmar o seu cadastro! </a>
                                    <InputMask type="text"  mask = "99.999.999/9999-99" className="form-control" id="CNPJ" placeholder="CNPJ" style={{color:'#009fe3',marginTop:'1%'}} maskChar=""/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Certo, agora precisamos confirmar é o celular da sua empresa? </a>
                                    <InputMask type="text"  mask = "(99) 99999-9999" className="form-control" placeholder="Celular" style={{color:'#009fe3',marginTop:'1%'}} maskChar="" id="celular" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{textAlign: '-webkit-center', marginTop:'8%'}}>
                            <div className="col-md-12">
                                <div className="form-group">
                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                <button type="submit" className=" btn btn-primary btnEditShop" onClick={Proximo} style={{marginRight:'0px'}}>Proximo</button>
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