import React from 'react';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";

import api from "../services/api2";

export default function CdastroQuatro(){
    function Validar(){
        localStorage.setItem('Codigo', "");
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    var  ButtonAcupuntura = "Não";
    var  ButtonAdestramento = "Não";
    var  ButtonAnestesia = "Não";
    var  ButtonBanho = "Não";
    var  ButtonCastração  = "Não";
    var  ButtonCirurgias = "Não";
    var  ButtonClinicaVeterinaria = "Não";
    var  ButtonConsultasEspecificas = "Não";
    var  ButtonConsultasGerais = "Não";
    var  ButtonCorteUnha = "Não";
    var  ButtonCreche = "Não";
    var  ButtonCremacao = "Não";
    var  ButtonDogWalker = "Não";
    var  ButtonEscovacaoDentes = "Não";
    var  ButtonEutanasia = "Não";
    var  ButtonExamesImagens = "Não";
    var  ButtonExamesParasitologicos = "Não";
    var  ButtonExameSanguineos = "Não";
    var  ButtonHemoterapia = "Não";
    var  ButtonHidratacao = "Não";
    var  ButtonHospedagem = "Não";
    var  ButtonHotelPet = "Não";
    var  ButtonIoga = "Não";
    var  ButtonNatacao = "Não";
    var  ButtonPetSitter = "Não";
    var  ButtonRadiologia = "Não";
    var  ButtonRemocao = "Não";
    var  ButtonSepultamento = "Não";
    var  ButtonTaxiDog = "Não";
    var  ButtonTinturaPelagem = "Não";
    var  ButtonTosa = "Não";
    var  ButtonTransfusaoSanguinea = "Não";
    var  ButtonTransporte = "Não";
    var  ButtonVacinacao = "Não";
    var  ButtonVendaAnimais = "Não";
    var  ButtonVendaProdutos = "Não";

    async function Proximo(){
        var erro = document.getElementById("valida");

        if (ButtonAcupuntura === "Não" && ButtonAdestramento === "Não" && ButtonAnestesia === "Não" && ButtonBanho === "Não" && ButtonCastração === "Não" && ButtonCirurgias === "Não" && ButtonClinicaVeterinaria === "Não" &&  ButtonConsultasEspecificas === "Não" && ButtonConsultasGerais === "Não" && ButtonCorteUnha === "Não" && ButtonCreche === "Não" && ButtonCremacao === "Não" && ButtonDogWalker === "Não" && ButtonEscovacaoDentes === "Não" && ButtonEutanasia === "Não" &&  ButtonExamesImagens === "Não" && ButtonExamesParasitologicos === "Não" && ButtonExameSanguineos === "Não" && ButtonHemoterapia === "Não" && ButtonHidratacao === "Não" && ButtonHospedagem === "Não" && ButtonHotelPet === "Não" && ButtonIoga === "Não" && ButtonNatacao === "Não" && ButtonPetSitter === "Não" && ButtonRadiologia === "Não" && ButtonRemocao === "Não" && ButtonSepultamento === "Não" && ButtonTaxiDog === "Não" && ButtonTinturaPelagem === "Não" && ButtonTosa === "Não" && ButtonTransfusaoSanguinea === "Não" && ButtonTransporte === "Não" && ButtonVacinacao === "Não" && ButtonVendaAnimais === "Não" && ButtonVendaProdutos === "Não"){
            erro.innerHTML = "Escolha pelo menos um serviço";
        }
        else{
            erro.innerHTML = "";
            let response="";
            try {
                response = await api.post('/Prestador/CadQuartPrest',{AcumpunturaServ:ButtonAcupuntura,AdestramentoServ:ButtonAdestramento, AnestesiaoServ:ButtonAnestesia,BanhoServ:ButtonBanho,CastracaoServ:ButtonCastração,CirurgiaoServ:ButtonCirurgias,ClinicaVetServ:ButtonClinicaVeterinaria,ConsultasEspecificasoServ:ButtonConsultasEspecificas,ConsultasGeraisoServ:ButtonConsultasGerais,CorteUnhaServ:ButtonCorteUnha,CrecheServ:ButtonCreche,CremacaoServ:ButtonCremacao,DogWalkerServ:ButtonDogWalker,EscaDentServ:ButtonEscovacaoDentes,EutanasiaServ:ButtonEutanasia,ExamesImagemServ:ButtonExamesImagens,ExamesParasitologicoServ:ButtonExamesParasitologicos,ExamesSangueServ:ButtonExameSanguineos,HemoterapiaoServ:ButtonHemoterapia,HidracaoServ:ButtonHidratacao,HospedagemServ:ButtonHospedagem,HotelServ:ButtonHotelPet,IogaServ:ButtonIoga,NatacaoServ:ButtonNatacao,PetSitterServ:ButtonPetSitter,RadiologiaoServ:ButtonRadiologia,RemocaoServ:ButtonRemocao,SepultamentoServ:ButtonSepultamento,TaxiDogServ:ButtonTaxiDog,TinturaPelaServ:ButtonTinturaPelagem,TosaServ:ButtonTosa,TransfusaoSangueoServ:ButtonTransfusaoSanguinea,TransporteServ:ButtonTransporte,VacinaServ:ButtonVacinacao,VendaAnimalServ:ButtonVendaAnimais,VendaServ:ButtonVendaProdutos});
            } catch (error) {
                console.log(error);               
            }
            
            if(response){
                if(response.data.message){
                    if(response.data.message === "Alterado"){
                        erro.innerHTML = "Parabens mais uma etapa concluida, vamos para a proxima !!";
                        setTimeout(() => {window.location.href="/CadastroCinco"}, 2000); 
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

    function Acupuntura(){
        var button = document.getElementById("Acupuntura");
        if(ButtonAcupuntura === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonAcupuntura ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonAcupuntura="Sim";
        }        
    }
    function Adestramento(){
        var button = document.getElementById("Adestramento");
        if(ButtonAdestramento === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonAdestramento ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonAdestramento="Sim";
        }
    }
    function Anestesia(){
        var button = document.getElementById("Anestesia");
        if(ButtonAnestesia === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonAnestesia ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonAnestesia="Sim";
        }
    }
    function Banho(){
        var button = document.getElementById("Banho");
        if(ButtonBanho === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonBanho ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonBanho="Sim";
        }
    }
    function Castração(){
        var button = document.getElementById("Castração");
        if(ButtonCastração === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonCastração ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCastração="Sim";
        }
    }
    function ClinicaVeterinaria(){
        var button = document.getElementById("ClinicaVeterinaria");
        if(ButtonClinicaVeterinaria === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonClinicaVeterinaria ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonClinicaVeterinaria="Sim";
        }
    }
    function Cirurgias(){
        var button = document.getElementById("Cirurgias");
        if(ButtonCirurgias === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonCirurgias ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCirurgias="Sim";
        }
    }
    function ConsultasEspecificas(){
        var button = document.getElementById("ConsultasEspecificas");
        if(ButtonConsultasEspecificas === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonConsultasEspecificas ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonConsultasEspecificas="Sim";
        }
    }
    function ConsultasGerais(){
        var button = document.getElementById("ConsultasGerais");
        if(ButtonConsultasGerais === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonConsultasGerais ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonConsultasGerais="Sim";
        }
    }
    function CorteUnha(){
        var button = document.getElementById("CorteUnha");
        if(ButtonCorteUnha === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonCorteUnha ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCorteUnha="Sim";
        }
    }
    function Creche(){
        var button = document.getElementById("Creche");
        if(ButtonCreche === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonCreche ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCreche="Sim";
        }        
    }
    function Cremacao(){
        var button = document.getElementById("Cremacao");
        if(ButtonCremacao === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonCremacao ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCremacao="Sim";
        }
    }
    function DogWalker(){
        var button = document.getElementById("DogWalker");
        if(ButtonDogWalker === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonDogWalker ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonDogWalker="Sim";
        }
    }
    function EscovacaoDentes(){
        var button = document.getElementById("EscovacaoDentes");
        if(ButtonEscovacaoDentes === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonEscovacaoDentes ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEscovacaoDentes="Sim";
        }
    }
    function Eutanasia(){
        var button = document.getElementById("Eutanasia");
        if(ButtonEutanasia === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonEutanasia ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEutanasia="Sim";
        }
    }
    function ExamesImagens(){
        var button = document.getElementById("ExamesImagens");
        if(ButtonExamesImagens === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonExamesImagens ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonExamesImagens="Sim";
        }
    }
    function ExamesParasitologicos(){
        var button = document.getElementById("ExamesParasitologicos");
        if(ButtonExamesParasitologicos === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonExamesParasitologicos ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonExamesParasitologicos="Sim";
        }
    }
    function ExameSanguineos(){
        var button = document.getElementById("ExameSanguineos");
        if(ButtonExameSanguineos === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonExameSanguineos ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonExameSanguineos="Sim";
        }
    }
    function Hemoterapia(){
        var button = document.getElementById("Hemoterapia");
        if(ButtonHemoterapia === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonHemoterapia ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonHemoterapia="Sim";
        }
    }
    function Hidratacao(){
        var button = document.getElementById("Hidratacao");
        if(ButtonHidratacao === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonHidratacao ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonHidratacao="Sim";
        }
    }
    function Hospedagem(){
        var button = document.getElementById("Hospedagem");
        if(ButtonHospedagem === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonHospedagem ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            ButtonHospedagem="Sim";
        }
    }
    function HotelPet(){
        var button = document.getElementById("HotelPet");
        if(ButtonHotelPet === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonHotelPet ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonHotelPet="Sim";
        }
    }
    function Ioga(){
        var button = document.getElementById("Ioga");
        if(ButtonIoga === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonIoga ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonIoga="Sim";
        }
    }
    function Natacao(){
        var button = document.getElementById("Natacao");
        if(ButtonNatacao === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonNatacao ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonNatacao="Sim";
        }
    }
    function PetSitter(){
        var button = document.getElementById("PetSitter");
        if(ButtonPetSitter === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonPetSitter ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPetSitter="Sim";
        }
    }
    function Radiologia(){
        var button = document.getElementById("Radiologia");
        if(ButtonRadiologia === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonRadiologia ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonRadiologia="Sim";
        }
    }
    function Remocao(){
        var button = document.getElementById("Remocao");
        if(ButtonRemocao === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonRemocao ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonRemocao="Sim";
        }
    }
    function Sepultamento(){
        var button = document.getElementById("Sepultamento");
        if(ButtonSepultamento === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonSepultamento ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonSepultamento="Sim";
        }
    }
    function TaxiDog(){
        var button = document.getElementById("TaxiDog");
        if(ButtonTaxiDog === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonTaxiDog ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonTaxiDog="Sim";
        }
    }
    function TinturaPelagem(){
        var button = document.getElementById("TinturaPelagem");
        if(ButtonTinturaPelagem === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonTinturaPelagem ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonTinturaPelagem="Sim";
        }
    }
    function Tosa(){
        var button = document.getElementById("Tosa");
        if(ButtonTosa === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonTosa ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonTosa="Sim";
        }
    }
    function TransfusaoSanguinea(){
        var button = document.getElementById("TransfusaoSanguinea");
        if(ButtonTransfusaoSanguinea === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonTransfusaoSanguinea ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonTransfusaoSanguinea="Sim";
        }
    }
    function Transporte(){
        var button = document.getElementById("Transporte");
        if(ButtonTransporte === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonTransporte ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonTransporte="Sim";
        }
    }
    function Vacinacao(){
        var button = document.getElementById("Vacinacao");
        if(ButtonVacinacao === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonVacinacao ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonVacinacao="Sim";
        }
    }
    function VendaAnimais(){
        var button = document.getElementById("VendaAnimais");
        if(ButtonVendaAnimais === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonVendaAnimais ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonVendaAnimais="Sim";
        }
    }
    function VendaProdutos(){
        var button = document.getElementById("VendaProdutos");
        if(ButtonVendaProdutos === "Sim"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonVendaProdutos ="Não";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonVendaProdutos="Sim";
        }
    }
    return(
    <div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12" style={{padding:'0px',margin:'0px'}}>

                    <div class="card-header card-header-blue" style={{background:'#009fe3'}}>
                        <h4 class="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 4</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                <a style={{marginLeft:'5px',color:'#000000'}}>Legal! Quais são seus serviços?</a>                                           
                                <br/>
                                <button type="submit" className="btnCadFunc"  onClick={Acupuntura} id="Acupuntura">Acupuntura</button>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Adestramento} id="Adestramento">Adestramento</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Anestesia} id="Anestesia">Anestesia</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Banho} id="Banho">Banho</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Castração} id="Castração">Castração</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Cirurgias} id="Cirurgias">Cirurgias</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={ClinicaVeterinaria} id="ClinicaVeterinaria">Clínica Veterinária</button>
                                <div class="clearfix"></div>                                                   
                            </div>                            
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={ConsultasEspecificas} id="ConsultasEspecificas">Consultas Específicas</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={ConsultasGerais} id="ConsultasGerais">Consultas Gerais </button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={CorteUnha} id="CorteUnha">Corte de unha</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Creche} id="Creche">Creche</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Cremacao} id="Cremacao">Cremação</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={DogWalker} id="DogWalker">Dog Walker</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={EscovacaoDentes} id="EscovacaoDentes">Escovação dos dentes</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Eutanasia} id="Eutanasia">Eutanásia</button>
                                <div class="clearfix"></div>                                                   
                            </div>                            
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={ExamesImagens} id="ExamesImagens">Exames de imagens</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={ExamesParasitologicos} id="ExamesParasitologicos">Exames parasitológicos</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={ExameSanguineos} id="ExameSanguineos">Exames sanguíneos</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Hemoterapia} id="Hemoterapia">Hemoterapia</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Hidratacao} id="Hidratacao">Hidratação</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Hospedagem} id="Hospedagem">Hospedagem</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={HotelPet} id="HotelPet">Hotel para Pet</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Ioga} id="Ioga">Ioga</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Natacao} id="Natacao">Natação</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={PetSitter} id="PetSitter">Pet Sitter</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Radiologia} id="Radiologia">Radiologia</button>
                                <div class="clearfix"></div>                                                   
                            </div>                            
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Remocao} id="Remocao">Remoção</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Sepultamento} id="Sepultamento">Sepultamento</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={TaxiDog} id="TaxiDog">Taxi Dog</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={TinturaPelagem} id="TinturaPelagem">Tintura de pelagem</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Tosa} id="Tosa">Tosa</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={TransfusaoSanguinea} id="TransfusaoSanguinea">Transfusão sanguínea</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Transporte} id="Transporte">Transporte</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={Vacinacao} id="Vacinacao">Vacinação</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/> 
                                <button type="submit" className="btnCadFunc" onClick={VendaAnimais} id="VendaAnimais">Venda de Animais</button>
                                <div class="clearfix"></div>                                                   
                            </div>
                            <div class="col-md-3">
                                <br/>
                                <button type="submit" className="btnCadFunc" onClick={VendaProdutos} id="VendaProdutos">Venda de Produtos</button>
                                <div class="clearfix"></div>                                                   
                            </div>                            
                        </div>  
                       
                        <div class="row" style={{textAlign: '-webkit-center'}}>
                            <div class="col-md-12">
                                <div class="form-group" style={{paddingBottom:'0px'}}>
                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                <button type="submit" className=" btn btn-primary btnEditShop" style={{border:'2px solid #009fe3'}} onClick={Proximo}>Proximo</button>
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