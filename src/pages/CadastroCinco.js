import React from 'react';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";
// import axios from "axios";
//import React, { useState } from 'react';                //--------alteração rodrigo-----//

import api from "../services/api3";

export default function CadastroCinco(){
    function Validar(){
        localStorage.setItem('Codigo', "");
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    var ButtonEmergenciaSim = "false";
    var ButtonEmergenciaNao = "false";
    var ButtonOngSim = "false";
    var ButtonOngNao = "false";
    var Ong = "false";
    var Emergencia = "false";
    var ButtonConta= "false";
    var ButtonCielo= "false";
    var ButtonWibx= "false";
    var ButtonCorrente= "false";
    var ButtonPoupanca= "false";

    //alteração rdsq
    var imageSrc = null;

    async function Proximo(){

        var erro = document.getElementById("valida");
        //var Foto = document.getElementById("Foto").value;
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");

        if(ButtonEmergenciaSim === "false" && ButtonEmergenciaNao === "false"){
            erro.innerHTML = "Selecione se você é 24horas.";
            button.innerText="Próximo";
            button.removeAttribute("disabled");
        }else{
            if(ButtonOngSim === "false" && ButtonOngNao === "false"){
                erro.innerHTML = "Selecione se você é ONG.";
                button.innerText="Próximo";
                button.removeAttribute("disabled");
            }else{
                if (imageSrc === "" || imageSrc === null || imageSrc === undefined) {    
                    erro.innerHTML = "Preencha o campo Logo";
                    button.innerText="Próximo";
                    button.removeAttribute("disabled");
                }
                else{
                    if( ButtonConta === "false" && ButtonCielo === "false" && ButtonWibx === "false"){
                        erro.innerHTML = "Escolha um tipo de conta";
                        button.innerText="Próximo";
                        button.removeAttribute("disabled");
                    }
                    else{  
                        button.innerText="Aguardando";
                        button.setAttribute("disabled","disabled");

                        var Banco = document.getElementById("Banco").value;
                        var Agencia = document.getElementById("Agencia").value;
                        var Conta = document.getElementById("NumConta").value;
                        var CodCielo = document.getElementById("CodCielo").value;                    
                        var CodWibx = document.getElementById("CodWibx").value;
                        var tipo =""; 

                        if(ButtonConta === "true"){                        
                            if (Banco === "" || Banco === null || Banco === undefined) {
                                erro.innerHTML = "Preencha o campo Banco";
                                button.innerText="Próximo";
                                button.removeAttribute("disabled");
                            }
                            else{
                                if (Agencia === "" || Agencia === null || Agencia === undefined) {
                                    erro.innerHTML = "Preencha o campo Agencia";
                                    button.innerText="Próximo";
                                    button.removeAttribute("disabled");
                                }
                                else{
                                    if (Conta === "" || Conta === null || Conta === undefined) {
                                        erro.innerHTML = "Preencha o campo Conta";
                                        button.innerText="Próximo";
                                        button.removeAttribute("disabled");
                                    }
                                    else{
                                        if(ButtonCorrente === "false" && ButtonPoupanca === "false"){ 
                                            erro.innerHTML = "Selecione um tipo de conta";
                                            button.innerText="Próximo";
                                            button.removeAttribute("disabled");
                                        }else{
                                            ButtonConta= "Pendente";
                                            if(ButtonCorrente === "true"){
                                                tipo = "Corrente";
                                            }else if(ButtonPoupanca === "true"){
                                                tipo = "Poupança";                                            
                                            }
                                        }
                                    }
                                }
                            }
                        }
    
                        if(ButtonCielo === "true"){
                            if (CodCielo === "" || CodCielo === null || CodCielo === undefined) {
                                erro.innerHTML = "Preencha o campo do Codigo da Cielo";
                                button.innerText="Próximo";
                                button.removeAttribute("disabled");
                            }else{
                                ButtonCielo= "Pendente";
                            }
                        }
    
                        if(ButtonWibx === "true"){
                            if (CodWibx === "" || CodWibx === null || CodWibx === undefined) {
                                erro.innerHTML = "Preencha o campo do Codigo da Wibx";
                                button.innerText="Próximo";
                                button.removeAttribute("disabled");
                            }else{                            
                                ButtonConta= "Pendente";
                            }
                        }
    
                        if(ButtonConta === "Pendente" || ButtonWibx === "Pendente" || ButtonCielo === "Pendente"){                    
                            
                            button.innerText="Aguardando";
                            button.setAttribute("disabled","disabled");

                            let response="";

                            try {

                                let dados = new FormData();

                                dados.set("ContaCont","ooi");
                                dados.set('BancoCont', Banco);
                                dados.append("AgenciaCont", Agencia);
                                dados.append('TipoCont', tipo);
                                dados.append('CartCont', CodWibx);
                                dados.append('CieloCont', CodCielo);
                                dados.append('EmergenciaPrest', Emergencia);
                                dados.append('LogoPrest', imageSrc);
                                dados.append('OngPrest', Ong);

                                console.log('---------------rdsq envio de dados-------------')
                                console.log(dados)

                                // response = await api.post('/Prestador/CadCincoPrest',{ContaCont:Conta,BancoCont:Banco,AgenciaCont:Agencia,TipoCont:tipo,CartCont:CodWibx,CieloCont:CodCielo,EmergenciaPrest:Emergencia,LogoPrest:"123",OngPrest:Ong});

                                response = await api.post('https://agendaback.herokuapp.com/Prestador/CadCincoPrest', dados);

                                
                                //  response = await api.post('',);
                                // const token = localStorage.getItem('token');
                               
                                // require('dotenv').config();
                                //  response = await axios({
                                //     method: 'post',
                                //     url: 'http://localhost:3000/Prestador/CadCincoPrest',
                                //     data: dados,
                                //     headers: {'Authorization': `Bearer ${token}`}
                                //     })
                            } catch (error) {
                                console.log(error);
                                erro.innerHTML = "Error Server";
                                // button.innerText="Aguarde um momento e tente novamente";
                                // button.removeAttribute("disabled");               
                            }

                            console.log(response)
                            
                            if(response){
                                if(response.data.message){
                                    if(response.data.message === "Codigo incorreto"){
                                        erro.innerHTML = "O código esta incorreto"; 
                                        button.innerText="Próximo";
                                        button.removeAttribute("disabled");
                                    }else if(response.data.message === "Alterado"){
                                        erro.style.color = "#09ff00";      
                                        erro.style.fontWeight= "700";
                                        erro.innerHTML = "Verificação correta, vamos para a proxima etapa agora !!";
                                        setTimeout(() => {window.location.href="/CadastroSete"}, 2000); 
                                    }
                                }
                                if(response.data.error){
                                    if(response.data.error === "error sql"){
                                        erro.innerHTML = "Tente Novamente";
                                        button.innerText="Próximo";
                                        button.removeAttribute("disabled");
                                    }else if(response.data.error === "falha na autenticação do token"){
                                        erro.value = "Tente Novamente";
                                        setTimeout(() => {window.location.href="/"}, 2000);
                                    }else{
                                        erro.innerHTML = "Tente Novamente";
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

    //--------------------------------alteraçoes rdsq------------------------------------------------//

    //const [imgPreviw, setImage] = useState({ preview: "", raw: "" });
 
    const fileChangedHandler = event => {
        console.log('----------alteraçoes rdsq------------')
        if(event.target.files.length > 0){
            const file = event.target.files[0];
            imageSrc = file;
            console.log(file)

            const reader = new FileReader();
            reader.onload = function(){
                var imgPrev = reader.result;
                document.getElementById("TheImagePreview").innerHTML = '<p><img width="20%" src="'+imgPrev+'" /></p>';
            };
            reader.readAsDataURL(file);

        } else {
            imageSrc = null
            document.getElementById("TheImagePreview").innerHTML = '<h5>Nenhuma imagem selecionada</h5>';

        }

    } 
     

    //--------------------------------------------------------------------------------------------//

    function EmergenciaSim(){
        var buttonNao = document.getElementById("EmergenciaNao");
        buttonNao.style.backgroundColor="#fff";
        buttonNao.style.border="1px solid #009fe3"; 
        buttonNao.style.color="#009fe3";
        ButtonEmergenciaNao="false";

        var button = document.getElementById("EmergenciaSim");
        if(ButtonEmergenciaSim === "true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonEmergenciaSim="false";
            Emergencia = "false";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEmergenciaSim="true";
            Emergencia = "true";
        }
    }
    function EmergenciaNao(){
        var buttonSim = document.getElementById("EmergenciaSim");
        buttonSim.style.backgroundColor="#fff";
        buttonSim.style.border="1px solid #009fe3"; 
        buttonSim.style.color="#009fe3";
        ButtonEmergenciaSim="false";

        var button = document.getElementById("EmergenciaNao");
        if(ButtonEmergenciaNao === "true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonEmergenciaNao="false";
            Emergencia = "false";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEmergenciaNao="true";
            Emergencia = "false";
        }
    }

    function OngSim(){
        var buttonNao = document.getElementById("OngNao");
        buttonNao.style.backgroundColor="#fff";
        buttonNao.style.border="1px solid #009fe3"; 
        buttonNao.style.color="#009fe3";
        ButtonOngNao="false";

        var button = document.getElementById("OngSim");
        if(ButtonOngSim === "true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonOngSim="false";
            Ong = "false";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonOngSim="true";
            Ong = "true";
        }
    }
    function OngNao(){
        var buttonSim = document.getElementById("OngSim");
        buttonSim.style.backgroundColor="#fff";
        buttonSim.style.border="1px solid #009fe3"; 
        buttonSim.style.color="#009fe3";
        ButtonOngSim="false";

        var button = document.getElementById("OngNao");
        if(ButtonOngNao === "true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonOngNao="false";
            Ong = "false";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonOngNao="true";
            Ong = "false";
        }
    }


    function Conta(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var buttonCielo = document.getElementById("Cielo");
        buttonCielo.style.backgroundColor="#fff";
        buttonCielo.style.border="1px solid #009fe3"; 
        buttonCielo.style.color="#009fe3";
        ButtonCielo="false";
        var divCielo=document.getElementById("DivCielo");
        divCielo.style.display="none";

        var buttonWibx = document.getElementById("Wibx");
        buttonWibx.style.backgroundColor="#fff";
        buttonWibx.style.border="1px solid #009fe3"; 
        buttonWibx.style.color="#009fe3";
        ButtonWibx="false";
        var divWibx=document.getElementById("DivWibx");
        divWibx.style.display="none";

        var button = document.getElementById("Conta");
        var div=document.getElementById("DivConta");
        if(ButtonConta === "true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonConta="false";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonConta="true";
            div.style.display="block";
        }

    }

    function Corrente(){ 
        var buttonPoupa = document.getElementById("Poupanca");
        buttonPoupa.style.backgroundColor="#fff";
        buttonPoupa.style.border="1px solid #009fe3"; 
        buttonPoupa.style.color="#009fe3";
        ButtonPoupanca="false";

        var button = document.getElementById("Corrente");
        if(ButtonCorrente ==="true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonCorrente="false";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCorrente="true";
        }
    }

    function Poupanca(){
        var buttonCorrent = document.getElementById("Corrente");
        buttonCorrent.style.backgroundColor="#fff";
        buttonCorrent.style.border="1px solid #009fe3"; 
        buttonCorrent.style.color="#009fe3";
        ButtonCorrente="false";

        var button = document.getElementById("Poupanca");
        if(ButtonPoupanca ==="true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonPoupanca="false";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPoupanca="true";
        }
    }

    function Cielo(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var buttonConta = document.getElementById("Conta");
        buttonConta.style.backgroundColor="#fff";
        buttonConta.style.border="1px solid #009fe3"; 
        buttonConta.style.color="#009fe3";
        ButtonConta="false";
        var divConta=document.getElementById("DivConta");
        divConta.style.display="none";

        var buttonWibx = document.getElementById("Wibx");
        buttonWibx.style.backgroundColor="#fff";
        buttonWibx.style.border="1px solid #009fe3"; 
        buttonWibx.style.color="#009fe3";
        ButtonWibx="false";
        var divWibx=document.getElementById("DivWibx");
        divWibx.style.display="none";

        var button = document.getElementById("Cielo");
        var div=document.getElementById("DivCielo");
        if(ButtonCielo ==="true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonCielo="false";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCielo="true";
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
        ButtonCielo="false";
        var divCielo=document.getElementById("DivCielo");
        divCielo.style.display="none";

        var buttonConta = document.getElementById("Conta");
        buttonConta.style.backgroundColor="#fff";
        buttonConta.style.border="1px solid #009fe3"; 
        buttonConta.style.color="#009fe3";
        ButtonConta="false";
        var divConta=document.getElementById("DivConta");
        divConta.style.display="none";

        var button = document.getElementById("Wibx");
        var div=document.getElementById("DivWibx");
        if(ButtonWibx ==="true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonWibx="false";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonWibx="true";
            div.style.display="block";
        }   
    }

    return(
    <div>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" style={{padding:'0px',margin:'0px'}}>
                        <div className="card-header card-header-blue" style={{background:'#009fe3'}}>
                            <h4 className="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 5</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Fica aberto 24h?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">                                                 
                                    <br/>
                                        <button type="submit" className="btnCadFunc" onClick={EmergenciaSim} id="EmergenciaSim" >Sim</button>
                                    <div class="clearfix"></div>
                                </div>
                                <div className="col-md-6">
                                    <br/>
                                        <button type="submit" className="btnCadFunc" onClick={EmergenciaNao} id="EmergenciaNao" >Não</button>
                                    <div className="clearfix"></div>                                                   
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>É ONG?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">                                                 
                                    <br/>
                                        <button type="submit" className="btnCadFunc" onClick={OngSim} id="OngSim" >Sim</button>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-6">
                                    <br/>
                                        <button type="submit" className="btnCadFunc" onClick={OngNao} id="OngNao" >Não</button>
                                    <div className="clearfix"></div>                                                   
                                </div>
                            </div>
                            <br/>


                            {/*-----------------------image------------------*/}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="">
                                    
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Ótimo, precisamos do logo da sua empresa, para aparecer bem bonito no aplicativo.</a>
                                        <input type="file" name="avatar" onChange={fileChangedHandler}  className="form-control" accept="image/png, image/jpeg" placeholder="Foto" id="Foto" style={{color:'#009fe3',marginTop:'1%',backgroundImage:'none'}}/>
                                        <div id="TheImagePreview" ></div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        
                            <div className="row">
                                <div className="col-md-12">
                                <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Show de bola! Agora precisamos saber, qual será a sua conta para recebimentos!</a>    <br/>             
                                    <a style={{marginLeft:'35px',color:'#000000',fontWeight:'400'}}>OBS: A conta cadastrada precisa ser a mesma do titular do CNPJ.</a>   
                                </div>
                            </div>
                            <div className="row" id="DivCartao">
                                <div className="col-md-4">                                                 
                                    <br/>
                                        <button type="submit" className="btnCadFunc" onClick={Conta} id="Conta">Conta</button>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-4">
                                    <br/>
                                        <button type="submit" className="btnCadFunc" onClick={Cielo} id="Cielo">ID Cielo</button>
                                    <div className="clearfix"></div>                                                   
                                </div>
                                <div className="col-md-4">
                                    <br/>
                                        <button type="submit" className="btnCadFunc" onClick={Wibx} id="Wibx">Wibx</button>
                                    <div className="clearfix"></div>                                                   
                                </div>                            
                            </div>                        
                            <br/>   
                            <div id="DivConta" style={{display:'none'}}>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Banco" id="Banco" style={{color:'#009fe3'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Agência" id="Agencia" style={{color:'#009fe3'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Conta com o digíto" id="NumConta" style={{color:'#009fe3'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-6">                                                 
                                        <br/>
                                            <button type="submit" className="btnCadFunc" onClick={Corrente} id="Corrente">Corrente</button>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="col-md-6">
                                        <br/>
                                            <button type="submit" className="btnCadFunc" onClick={Poupanca} id="Poupanca">Poupança</button>
                                        <div className="clearfix"></div>                                                   
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="DivCielo" style={{display:'none'}}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Codigo da Cielo" id="CodCielo" style={{color:'#009fe3'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="DivWibx" style={{display:'none'}}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Carteira Wibx" id="CodWibx" style={{color:'#009fe3'}}/>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                        <button type="submit" className=" btn btn-primary btnEditShop" id="buttonProximo" onClick={Proximo}>Proximo</button>
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