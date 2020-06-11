import React from 'react';
import InputMask from 'react-input-mask';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";
import api from "../services/api2";

export default function CadastroTerceiro(){
    function Validar(){
        localStorage.setItem('Codigo', "");
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    var ButtonClinica="Não";
    var ButtonPetShop="Não";
    var ButtonHotel ="Não";
    var ButtonPasseador = "Não";
    var btnCEP = "Não";

    async function Proximo() {   
        var NomeFantasia = document.getElementById("NomeFantasia").value;
        var cep = document.getElementById("cep").value;
        var numero = document.getElementById("numero").value;
        var erro = document.getElementById("valida");

        if (NomeFantasia === "" || NomeFantasia === null || NomeFantasia === undefined) {
    
            erro.innerHTML = "Preencha o campo Nome Fantasia";
        }
        else {       
            if (cep === "" || cep === null || cep === undefined) {
    
                erro.innerHTML = "Preencha o campo CEP";
            }
            else{
                if(btnCEP === "Sim")
                {
                    if (numero === "" || numero === null || numero === undefined) {    
                        erro.innerHTML = "Preencha o campo Número";
                    }
                    else{
                        if (ButtonClinica === "Não" && ButtonPetShop === "Não" && ButtonHotel=== "Não" && ButtonPasseador=== "Não") {
                            erro.innerHTML = "Escolha uma atuação";
                        }
                        else{
                            let response="";
                            try {
                                response = await api.post('/Prestador/CadTercPrest',{NomeFantsPrest:NomeFantasia,PetShopPrest:ButtonPetShop,ClinicaPrest:ButtonClinica,PasseadorPrest:ButtonPasseador,HotelPrest:ButtonHotel,CepPrest:cep,NumPrest:numero});
                            } catch (error) {
                                console.log(error);               
                            }
                            
                            if(response){
                                if(response.data.message){
                                    if(response.data.message === "Alterado"){
                                        erro.innerHTML = "Parabens mais uma etapa concluida, vamos para a proxima !!";
                                        setTimeout(() => {window.location.href="/CadastroQuatro"}, 2000); 
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
                else{
                    erro.innerHTML = "Preencha o CEP corretamente";
                }
            }
        }
    }

    function Clinica(){
        var button = document.getElementById("Clinica");
        if(ButtonClinica === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonClinica ="Não";
        }else{          
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";  
            ButtonClinica="Sim"; 
        }      
    }

    function PetShop(){
        var button = document.getElementById("PetShop");
        if(ButtonPetShop === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";
            ButtonPetShop="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPetShop="Sim";
        }
    }

    function Hotel(){
        var button = document.getElementById("Hotel");
        if(ButtonHotel === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";
            ButtonHotel="Não";
        }else{ 
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonHotel="Sim";
        }
    }

    function Passeador(){
        var button = document.getElementById("Passeador");
        if(ButtonPasseador === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";
            ButtonPasseador="Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPasseador="Sim";
        }
    }

    //Pesquisa do CEP
    async function getCepInfo(){
        btnCEP = "Não";
        var array = [];
        var num =0;
        var novo =0;
        var erro = document.getElementById("valida");
        var cep = document.getElementById("cep").value;
        
        var DivEstado = document.getElementById("DivEstado");
        var DivCidade = document.getElementById("DivCidade");
        var DivBairro = document.getElementById("DivBairro");
        var DivRua = document.getElementById("DivRua");

       array.push(cep)
       novo = cep.split('', 9)
       num= novo[0]+novo[1]+novo[2]+novo[3]+novo[4]+novo[6]+novo[7]+novo[8];
        if(num.length === 8){
            var axios = require('axios');
            const response = await axios.get('https://viacep.com.br/ws/'+ num + '/json');            

            if(response.data){
                if(response.data.erro){
                    if(response.data.erro === true){
                        erro.innerHTML = "CEP não encontrado";
                        btnCEP = "Não";
                        return false;
                    }
                }
                else{
                    
                    DivEstado.style.display="block";                    
                    DivCidade.style.display="block";                   
                    DivBairro.style.display="block";                   
                    DivRua.style.display="block";

                    var estado = document.getElementById("estado");
                    estado.value = response.data.uf;
                    var cidade = document.getElementById("cidade");
                    cidade.value = response.data.localidade;
                    var bairro = document.getElementById("bairro");
                    bairro.value = response.data.bairro;
                    var rua = document.getElementById("rua");
                    rua.value = response.data.logradouro;
                    btnCEP = "Sim";
                    return true;
                }
            }
            else{
            
            }
        }
        else{
            DivEstado.style.display="none";
            DivCidade.style.display="none";
            DivBairro.style.display="none";
            DivRua.style.display="none";
            erro.innerHTML = "Preencha o CEP corretamente";
            btnCEP = "Não";
            return false;
        }        
    }

    return(
    <div>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" style={{padding:'0px',margin:'0px'}}>

                    <div className="card-header card-header-blue" style={{background:'#009fe3'}}>
                        <h4 className="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 3</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Miau! Qual é o seu nome fantasia?</a>
                                        <input type="text" className="form-control" id="NomeFantasia" placeholder="Nome Fantasia" style={{color:'#009fe3',marginTop:'1%'}}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Perfeito! Qual sua área de atuação?</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">                                                 
                                <br/>
                                <button type="submit" className="btnCadFunc" id="Clinica" onClick={Clinica}>Clinica</button>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" id="PetShop"  onClick={PetShop}>PetShop</button>
                                <div className="clearfix"></div>                                                   
                            </div>
                            <div className="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" id="Hotel" onClick={Hotel}>Hotel</button>
                                <div className="clearfix"></div>                                                   
                            </div> 
                            <div className="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" id="Passeador" onClick={Passeador}>Passeador</button>
                                <div className="clearfix"></div>                                                   
                            </div>                           
                        </div>
                        <br/>   
                        <div className="row" >
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Legal, agora precisamos saber qual é o seu cep do seu estabelecimento! </a>
                                        <InputMask type="text"  mask = "99999-999" onChange={getCepInfo} className="form-control"  placeholder="CEP" id="cep" style={{color:'#009fe3',marginTop:'1%'}} maskChar=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{display:'none'}} id="DivEstado">
                        <br/>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Seu estado é? </a>
                                        <input type="text" className="form-control" placeholder="Estado" id="estado" style={{color:'#009fe3',marginTop:'1%'}} disabled/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row" style={{display:'none'}} id="DivCidade">
                        <br/>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Sua cidade é? </a>
                                        <input type="text" className="form-control" placeholder="Cidade" id="cidade" style={{color:'#009fe3',marginTop:'1%'}} disabled/>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{display:'none'}} id="DivBairro">
                        <br/>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Seu bairro é? </a>
                                        <input type="text" className="form-control" placeholder="Bairro" id="bairro" style={{color:'#009fe3',marginTop:'1%'}} disabled/>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{display:'none'}} id="DivRua">
                        <br/>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Sua rua é? </a>
                                        <input type="text" className="form-control" placeholder="Rua" id="rua" style={{color:'#009fe3',marginTop:'1%'}} disabled/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row" >
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Show! Para poder atender melhor seus clientes, precisamos do número da Empresa!</a>
                                        <input type="text" className="form-control" placeholder="Número" id="numero" style={{color:'#009fe3',marginTop:'1%'}}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row" style={{textAlign: '-webkit-center'}}>
                            <div className="col-md-12">
                                <div className="form-group">
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