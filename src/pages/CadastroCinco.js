import React from 'react';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";


import api from "../services/api2";

export default function CadastroCinco(){
    function Validar(){
        localStorage.setItem('Codigo', "");
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    var ButtonEmergenciaSim = "Não";
    var ButtonEmergenciaNao = "Não";
    var ButtonOngSim = "Não";
    var ButtonOngNao = "Não";
    var Ong = "Não";
    var Emergencia = "Não";
    var ButtonConta= "Não";
    var ButtonCielo= "Não";
    var ButtonWibx= "Não";
    var ButtonCorrente= "Não";
    var ButtonPoupanca= "Não";

    async function Proximo(){
        var erro = document.getElementById("valida");
        var Foto = document.getElementById("Foto").value;

        console.log(Foto)
        if(ButtonEmergenciaSim === "Não" && ButtonEmergenciaNao === "Não"){
            erro.innerHTML = "Selecione se você é 24horas.";
        }else{
            if(ButtonOngSim === "Não" && ButtonOngNao === "Não"){
                erro.innerHTML = "Selecione se você é ONG.";
            }else{
                if (Foto === "" || Foto === null || Foto === undefined) {    
                    erro.innerHTML = "Preencha o campo Logo";
                }
                else{
                    if( ButtonConta === "Não" && ButtonCielo === "Não" && ButtonWibx === "Não"){
                        erro.innerHTML = "Escolha um tipo de conta";
                    }
                    else{                        
                        var Banco = document.getElementById("Banco").value;
                        var Agencia = document.getElementById("Agencia").value;
                        var Conta = document.getElementById("NumConta").value;
                        var CodCielo = document.getElementById("CodCielo").value;                    
                        var CodWibx = document.getElementById("CodWibx").value;
                        var tipo =""; 

                        if(ButtonConta === "Sim"){                        
                            if (Banco === "" || Banco === null || Banco === undefined) {
                                erro.innerHTML = "Preencha o campo Banco";
                            }
                            else{
                                if (Agencia === "" || Agencia === null || Agencia === undefined) {
                                    erro.innerHTML = "Preencha o campo Agencia";
                                }
                                else{
                                    if (Conta === "" || Conta === null || Conta === undefined) {
                                        erro.innerHTML = "Preencha o campo Conta";
                                    }
                                    else{
                                        if(ButtonCorrente === "Não" && ButtonPoupanca === "Não"){ 
                                            erro.innerHTML = "Selecione um tipo de conta";
                                        }else{
                                            ButtonConta= "Pendente";
                                            if(ButtonCorrente === "Sim"){
                                                tipo = "Corrente";
                                            }else if(ButtonPoupanca === "Sim"){
                                                tipo = "Poupança";                                            
                                            }
                                        }
                                    }
                                }
                            }
                        }
    
                        if(ButtonCielo === "Sim"){
                            if (CodCielo === "" || CodCielo === null || CodCielo === undefined) {
                                erro.innerHTML = "Preencha o campo do Codigo da Cielo";
                            }else{
                                ButtonCielo= "Pendente";
                            }
                        }
    
                        if(ButtonWibx === "Sim"){
                            if (CodWibx === "" || CodWibx === null || CodWibx === undefined) {
                                erro.innerHTML = "Preencha o campo do Codigo da Wibx";
                            }else{                            
                                ButtonConta= "Pendente";
                            }
                        }
    
                        if(ButtonConta === "Pendente" || ButtonWibx == "Pendente" || ButtonCielo === "Pendente"){                    
                            let response="";

                            // let dados  = new FormData();

                            // var ooi = "oooi";
                            // dados.set("Conta","ooi");
                            // dados.set('BancoCont', Banco);
                            // dados.append("AgenciaCont", Agencia);
                            // dados.append('TipoCont', tipo);
                            // dados.append('CartCont', CodWibx);
                            // dados.append('CieloCont', CodCielo);
                            // dados.append('EmergenciaPrest', Emergencia);
                            // dados.append('LogoPrest', Foto);
                            // dados.append('OngPrest', Ong);
                           
                            // console.log(dados)
                            try {
                                response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadCincoPrest',{ContaCont:Conta,BancoCont:Banco,AgenciaCont:Agencia,TipoCont:tipo,CartCont:CodWibx,CieloCont:CodCielo,EmergenciaPrest:Emergencia,LogoPrest:"123",OngPrest:Ong});
                                // response = await api.post('/Prestador/CadCincoPrest',dados);
                            } catch (error) {
                                console.log(error);               
                            }

                            console.log(response)

                            
                            if(response){
                                if(response.data.message){
                                    if(response.data.message === "Codigo incorreto"){
                                        erro.innerHTML = "O código esta incorreto";
                                    }else if(response.data.message === "Alterado"){
                                        erro.innerHTML = "Verificação correta, vamos para a proxima etapa agora !!";
                                        setTimeout(() => {window.location.href="/CadastroSeis"}, 2000); 
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

    function EmergenciaSim(){
        var buttonNao = document.getElementById("EmergenciaNao");
        buttonNao.style.backgroundColor="#fff";
        buttonNao.style.border="1px solid #009fe3"; 
        buttonNao.style.color="#009fe3";
        ButtonEmergenciaNao="Não";

        var button = document.getElementById("EmergenciaSim");
        if(ButtonEmergenciaSim === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonEmergenciaSim="Não";
            Emergencia = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEmergenciaSim="Sim";
            Emergencia = "Sim";
        }
    }
    function EmergenciaNao(){
        var buttonSim = document.getElementById("EmergenciaSim");
        buttonSim.style.backgroundColor="#fff";
        buttonSim.style.border="1px solid #009fe3"; 
        buttonSim.style.color="#009fe3";
        ButtonEmergenciaSim="Não";

        var button = document.getElementById("EmergenciaNao");
        if(ButtonEmergenciaNao === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonEmergenciaNao="Não";
            Emergencia = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEmergenciaNao="Sim";
            Emergencia = "Não";
        }
    }

    function OngSim(){
        var buttonNao = document.getElementById("OngNao");
        buttonNao.style.backgroundColor="#fff";
        buttonNao.style.border="1px solid #009fe3"; 
        buttonNao.style.color="#009fe3";
        ButtonOngNao="Não";

        var button = document.getElementById("OngSim");
        if(ButtonOngSim === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonOngSim="Não";
            Ong = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonOngSim="Sim";
            Ong = "Sim";
        }
    }
    function OngNao(){
        var buttonSim = document.getElementById("OngSim");
        buttonSim.style.backgroundColor="#fff";
        buttonSim.style.border="1px solid #009fe3"; 
        buttonSim.style.color="#009fe3";
        ButtonOngSim="Não";

        var button = document.getElementById("OngNao");
        if(ButtonOngNao === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonOngNao="Não";
            Ong = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonOngNao="Sim";
            Ong = "Não";
        }
    }


    function Conta(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var buttonCielo = document.getElementById("Cielo");
        buttonCielo.style.backgroundColor="#fff";
        buttonCielo.style.border="1px solid #009fe3"; 
        buttonCielo.style.color="#009fe3";
        ButtonCielo="Não";
        var divCielo=document.getElementById("DivCielo");
        divCielo.style.display="none";

        var buttonWibx = document.getElementById("Wibx");
        buttonWibx.style.backgroundColor="#fff";
        buttonWibx.style.border="1px solid #009fe3"; 
        buttonWibx.style.color="#009fe3";
        ButtonWibx="Não";
        var divWibx=document.getElementById("DivWibx");
        divWibx.style.display="none";

        var button = document.getElementById("Conta");
        var div=document.getElementById("DivConta");
        if(ButtonConta === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonConta="Não";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonConta="Sim";
            div.style.display="block";
        }
    }

    function Corrente(){ 
        var buttonPoupa = document.getElementById("Poupanca");
        buttonPoupa.style.backgroundColor="#fff";
        buttonPoupa.style.border="1px solid #009fe3"; 
        buttonPoupa.style.color="#009fe3";
        ButtonPoupanca="Não";

        var button = document.getElementById("Corrente");
        if(ButtonCorrente ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonCorrente="Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCorrente="Sim";
        }
    }

    function Poupanca(){
        var buttonCorrent = document.getElementById("Corrente");
        buttonCorrent.style.backgroundColor="#fff";
        buttonCorrent.style.border="1px solid #009fe3"; 
        buttonCorrent.style.color="#009fe3";
        ButtonCorrente="Não";

        var button = document.getElementById("Poupanca");
        if(ButtonPoupanca ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonPoupanca="Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPoupanca="Sim";
        }
    }

    function Cielo(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var buttonConta = document.getElementById("Conta");
        buttonConta.style.backgroundColor="#fff";
        buttonConta.style.border="1px solid #009fe3"; 
        buttonConta.style.color="#009fe3";
        ButtonConta="Não";
        var divConta=document.getElementById("DivConta");
        divConta.style.display="none";

        var buttonWibx = document.getElementById("Wibx");
        buttonWibx.style.backgroundColor="#fff";
        buttonWibx.style.border="1px solid #009fe3"; 
        buttonWibx.style.color="#009fe3";
        ButtonWibx="Não";
        var divWibx=document.getElementById("DivWibx");
        divWibx.style.display="none";

        var button = document.getElementById("Cielo");
        var div=document.getElementById("DivCielo");
        if(ButtonCielo ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonCielo="Não";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCielo="Sim";
            div.style.display="block";
        }        
    }

    function Wibx(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var buttonCielo = document.getElementById("Cielo");
        buttonCielo.style.backgroundColor="#fff";
        buttonCielo.style.border="1px solid #009fe3"; 
        buttonCielo.style.color="#009fe3";
        ButtonCielo="Não";
        var divCielo=document.getElementById("DivCielo");
        divCielo.style.display="none";

        var buttonConta = document.getElementById("Conta");
        buttonConta.style.backgroundColor="#fff";
        buttonConta.style.border="1px solid #009fe3"; 
        buttonConta.style.color="#009fe3";
        ButtonConta="Não";
        var divConta=document.getElementById("DivConta");
        divConta.style.display="none";

        var button = document.getElementById("Wibx");
        var div=document.getElementById("DivWibx");
        if(ButtonWibx ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonWibx="Não";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonWibx="Sim";
            div.style.display="block";
        }   
    }

    return(
    <div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12" style={{padding:'0px',margin:'0px'}}>

                    <div class="card-header card-header-blue" style={{background:'#009fe3'}}>
                        <h4 class="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 5</h4>
                    </div>
                    <div class="card-body">
                       
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Fica aberto 24h?</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">                                                 
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={EmergenciaSim} id="EmergenciaSim" >Sim</button>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-6">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={EmergenciaNao} id="EmergenciaNao" >Não</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>É ONG?</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">                                                 
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={OngSim} id="OngSim" >Sim</button>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-6">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={OngNao} id="OngNao" >Não</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="">
                                {/* form-group */}
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Ótimo, precisamos do logo da sua empresa, para aparecer bem bonito no aplicativo.</a>
                                        <input type="file" class="form-control" accept="image/png, image/jpeg" placeholder="Foto" id="Foto" style={{color:'#009fe3',marginTop:'1%',backgroundImage:'none'}}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                       
                        <div class="row">
                            <div class="col-md-12">
                            <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                <a style={{marginLeft:'5px',color:'#000000'}}>Show de bola! Agora precisamos saber, qual será a sua conta para recebimentos!</a>    <br/>             
                                <a style={{marginLeft:'35px',color:'#000000',fontWeight:'400'}}>OBS: A conta cadastrada precisa ser a mesma do titular do CNPJ.</a>   
                            </div>
                        </div>
                        <div class="row" id="DivCartao">
                            <div class="col-md-4">                                                 
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Conta} id="Conta">Conta</button>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-4">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Cielo} id="Cielo">ID Cielo</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-4">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Wibx} id="Wibx">Wibx</button>
                                <div class="clearfix"></div>                                                   
                            </div>                            
                        </div>                        
                        <br/>   
                        <div id="DivConta" style={{display:'none'}}>
                        <div class="row" >
                            <div class="col-md-12">
                                <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Banco" id="Banco" style={{color:'#009fe3'}}/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Agência" id="Agencia" style={{color:'#009fe3'}}/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Conta com o digíto" id="NumConta" style={{color:'#009fe3'}}/>
                                </div>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col-md-6">                                                 
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Corrente} id="Corrente">Corrente</button>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-6">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Poupanca} id="Poupanca">Poupança</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                        </div>
                        </div>
                        <div class="row" id="DivCielo" style={{display:'none'}}>
                            <div class="col-md-12">
                                <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Codigo da Cielo" id="CodCielo" style={{color:'#009fe3'}}/>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="DivWibx" style={{display:'none'}}>
                            <div class="col-md-12">
                                <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Carteira Wibx" id="CodWibx" style={{color:'#009fe3'}}/>
                                </div>
                            </div>
                        </div>
                        <br/>
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