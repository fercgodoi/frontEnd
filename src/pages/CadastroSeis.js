import React from 'react';
import InputMask from 'react-input-mask';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";

import api from "../services/api2";

export default function CadastroSeis(){
    function Validar(){
        localStorage.setItem('Codigo', "");
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    var VetSim = "Não";
    var VetNao = "Não";

    async function Proximo() {
        var CPF = document.getElementById("CPF").value;
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var celular = document.getElementById("celular").value;
        var erro = document.getElementById("valida");
        var CRMV = document.getElementById("CRMV").value;
        var date = document.getElementById("date").value;
        var vet = "";

        if (nome === "" || nome === null || nome === undefined ) {
            erro.innerHTML = "Preencha seu nome";
        }
        else{
            if (CPF === "" || CPF === null || CPF === undefined ) {
                erro.innerHTML = "Preencha seu CPF";
            }
            else{
                if(validarCPF(CPF)){                   
                    if (celular === "" || celular === null || celular === undefined ) {
                        erro.innerHTML = "Preencha seu celular";
                    }
                    else{
                        if (email === "" || email === null || email === undefined ) {
                            erro.innerHTML = "Preencha seu email";
                        }
                        else{
                            if(email.indexOf("@") === -1 || email.indexOf(".") === -1  ){
                                erro.innerHTML = "Email inválido";
                            }
                            else{
                                if(VetSim === "Não" && VetNao === "Não"){
                                    erro.innerHTML = "Responda se você é veterinario";
                                }
                                else{
                                    if(VetSim === "Sim"){  
                                        if (CRMV === "" || CRMV === null || CRMV === undefined ) {
                                            erro.innerHTML = "Preencha seu CRMV";
                                        }else{
                                            if (date === "" || date === null || date === undefined ) {
                                                erro.innerHTML = "Preencha a date";
                                            }else{
                                                VetSim = "Pedente";
                                                vet = "Sim";
                                            }
                                        }
                                    }
                                    if(VetNao === "Sim"){
                                        VetNao = "Pedente";
                                        vet = "Não";
                                    }

                                    if(VetSim === "Pedente" || VetNao === "Pedente"){
                                        erro.innerHTML = "";
                                        
                                        let response="";
                                        try {
                                            response = await api.post('/Prestador/CadSeisPrest',{NomeResp:nome,CpfResp:CPF,CelResp:celular,EmailResp:email,VetResp:vet,CRMVResp:CRMV,DataEmiResp:date});
                                        } catch (error) {
                                            console.log(error);               
                                        }

                                        if(response){
                                            if(response.data.message){
                                                if(response.data.message === "Codigo incorreto"){
                                                    erro.innerHTML = "O código esta incorreto";
                                                }else if(response.data.message === "Alterado"){
                                                    erro.innerHTML = "Agora tem que realizar o cadastro de um funcioanrio para logar, lembrando que o responsavel não loga";
                                                    setTimeout(() => {window.location.href="/CadastroSete"}, 2000); 
                                                }
                                            }
                                            if(response.data.error){
                                                if(response.data.error === "error sql"){
                                                    erro.innerHTML = "Tente Novamente";
                                                }else if(response.data.error === "falha na autenticação do token"){
                                                    erro.value = "Tente Novamente";
                                                    setTimeout(() => {window.location.href="/"}, 2000);
                                                }else{
                                                    erro.innerHTML = "Tente Novamente";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else{
                    erro.innerHTML = "CPF inválido";
                }
            }
        }
    }

    function validarCPF(cpf) {	
        var cpf1 = document.getElementById("CPF").value;
        cpf = cpf1;
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf === '') return false;	
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length !== 11 || 
            cpf === "00000000000" || 
            cpf ==="11111111111" || 
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

    function VeterinarioNao(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var button = document.getElementById("VeterinarioNao");
        button.style.backgroundColor="#009fe3";
        button.style.color="#fff";
        VetNao="Sim";
        var div=document.getElementById("DivVet");
        div.style.display="none";


        var VeterinarioSim = document.getElementById("VeterinarioSim");
        VeterinarioSim.style.backgroundColor="#fff";
        VeterinarioSim.style.border="1px solid #009fe3"; 
        VeterinarioSim.style.color="#009fe3";
        VetSim="Não";
    }    

    function VeterinarioSim(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var VeterinarioSim = document.getElementById("VeterinarioSim");
        VeterinarioSim.style.backgroundColor="#009fe3";
        VeterinarioSim.style.color="#fff";
        VetSim="Sim";
        var div=document.getElementById("DivVet");
        div.style.display="block";

        var VeterinarioNao = document.getElementById("VeterinarioNao");
        VeterinarioNao.style.backgroundColor="#fff";
        VeterinarioNao.style.border="1px solid #009fe3"; 
        VeterinarioNao.style.color="#009fe3";
        VetNao="Não";
    }

    return(
    <div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12" style={{padding:'0px',margin:'0px'}}>

                    <div class="card-header card-header-blue" style={{background:'#009fe3'}}>
                        <h4 class="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 6</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Agora vamos cadastrar o responsável do estabelecimento!!</a>
                                    <input type="text" class="form-control" placeholder="Nome" id="nome" style={{color:'#009fe3',marginTop:'1%'}}/>
                                </div>
                            </div>
                        </div>
                       
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                        <InputMask type="text"  mask = "999.999.999-99" className="form-control" placeholder="CPF" style={{color:'#009fe3',marginTop:'1%'}} maskChar="" id="CPF" />   
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <InputMask type="text"  mask = "(99) 99999-9999" className="form-control" placeholder="Celular" style={{color:'#009fe3',marginTop:'1%'}} maskChar="" id="celular" />   
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email" id="email" style={{color:'#009fe3',marginTop:'1%'}}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Você é veterinario?</a>
                                </div>
                            </div>
                            <div class="col-md-3"> </div>
                            <div class="col-md-3"> 
                                <button type="submit" className="btnCadFunc" onClick={VeterinarioSim} id="VeterinarioSim">Sim</button>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-3">
                                <button type="submit" className="btnCadFunc" onClick={VeterinarioNao} id="VeterinarioNao">Não</button>
                                <div class="clearfix"></div>                                                   
                            </div>   
                        </div>

                        <div id="DivVet" style={{display:'none'}}>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                            <input type="text" class="form-control" placeholder="CRMV" id="CRMV" style={{color:'#009fe3',marginTop:'1%'}}/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control"  placeholder="Data de Emissão"  disabled/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <input type="date" id="date" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row" style={{textAlign: '-webkit-center'}}>
                            <div class="col-md-12">
                                <div class="form-group">
                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                <button type="submit" className=" btn btn-primary btnEditShop" onClick={Proximo}>Proximo</button>
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