import React from 'react';
import InputMask from 'react-input-mask';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";


import api2 from '../services/api2.js';

export default function CadastroFuncionario(){
    localStorage.setItem('Codigo', "");
    
    function Validar(){
        var validar  = localStorage.getItem('token');
        var dados = localStorage.getItem('Acesso');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }else if (dados === "" || dados === null || dados === undefined) {    
                setTimeout(() => {window.location.href="/"});        
            }else{
                var Calen = document.getElementById("Calen");
                var Func= document.getElementById("Func");
                var Shop= document.getElementById("Shop");
                var Med= document.getElementById("Med");
                var Vac= document.getElementById("Vac");
                var Pront= document.getElementById("Pront");

                if(dados[2] === "0" && dados[6] === "0" ){
                    setTimeout(() => {window.location.href="/"});  
                }else{
                    if(dados[1] === "1"){
                        Calen.style.display="block";
                    }                        
                    if(dados[2] === "1"){
                        Calen.style.display="block";
                        Func.style.display="block";
                        Shop.style.display="block";
                        Med.style.display="block";
                        Vac.style.display="block";
                        Pront.style.display="block";
                    }  
                    if(dados[4] === "1"){
                        Med.style.display="block";
                        Vac.style.display="block";
                        Pront.style.display="block";
                    }
                    if(dados[6] === "1"){
                        Calen.style.display="block";
                        Func.style.display="block";
                        Shop.style.display="block";
                    }
                }
            }       
    }
    setTimeout(() => {Validar()}, 100);
    
    var recepcao = "Não";
    var Admin ="Não";
    var Vet ="Não";
    var finan="Não";
    
    async function Salvar(){
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var email = document.getElementById("email").value;
        var crmv = document.getElementById("crmv").value;
        var date = document.getElementById("date").value;
        var erro = document.getElementById("valida");
        var num = document.getElementById("num").value;

        var segunda = document.getElementById("segunda");
        var terca = document.getElementById("terca");
        var quarta = document.getElementById("quarta");
        var quinta = document.getElementById("quinta");
        var sexta = document.getElementById("sexta");
        var sabado = document.getElementById("sabado");
        var domingo = document.getElementById("domingo");

        var ValidaSegunda = "Não";
        var ValidaTerca = "Não";
        var ValidaQuarta = "Não";
        var ValidaQuinta = "Não";
        var ValidaSexta = "Não";
        var ValidaSabado = "Não";
        var ValidaDomingo = "Não";
        
        var segundaInicio = document.getElementById("segundaInicio");
        var tercaInicio = document.getElementById("tercaInicio");
        var quartaInicio = document.getElementById("quartaInicio");
        var quintaInicio = document.getElementById("quintaInicio");
        var sextaInicio = document.getElementById("sextaInicio");
        var sabadoInicio = document.getElementById("sabadoInicio");
        var domingoInicio = document.getElementById("domingoInicio");

        var segundaFinal = document.getElementById("segundaFinal");
        var tercaFinal = document.getElementById("tercaFinal");
        var quartaFinal = document.getElementById("quartaFinal");
        var quintaFinal = document.getElementById("quintaFinal");
        var sextaFinal = document.getElementById("sextaFinal");
        var sabadoFinal = document.getElementById("sabadoFinal");
        var domingoFinal = document.getElementById("domingoFinal");
        

        if(segunda.checked === false){
            segundaInicio.style.visibility="collapse";
            segundaFinal.style.visibility="collapse";
            segundaInicio.value = "00:00:00";
            segundaFinal.value = "00:00:00";
        }
        if(terca.checked === false){
            tercaInicio.style.visibility="collapse";
            tercaFinal.style.visibility="collapse";    
            tercaInicio.value = "00:00:00";
            tercaFinal.value = "00:00:00";                    
        }
        if(quarta.checked === false){
            quartaInicio.style.visibility="collapse";
            quartaFinal.style.visibility="collapse";
            quartaInicio.value = "00:00:00";
            quartaFinal.value = "00:00:00";
        }    
        if(quinta.checked === false){
            quintaInicio.style.visibility="collapse";
            quintaFinal.style.visibility="collapse";
            quintaInicio.value = "00:00:00";
            quintaFinal.value = "00:00:00";
        }    
        if(sexta.checked === false){
            sextaInicio.style.visibility="collapse";
            sextaFinal.style.visibility="collapse";
            sextaInicio.value = "00:00:00";
            sextaFinal.value = "00:00:00";
        }    
        if(sabado.checked === false){
            sabadoInicio.style.visibility="collapse";
            sabadoFinal.style.visibility="collapse";
            sabadoInicio.value = "00:00:00";
            sabadoFinal.value = "00:00:00";
        }    
        if(domingo.checked === false){
            domingoInicio.style.visibility="collapse";
            domingoFinal.style.visibility="collapse";
            domingoInicio.value = "00:00:00";
            domingoFinal.value = "00:00:00";
        }
        if (nome === "" || nome === null || nome === undefined) {
    
            erro.innerHTML = "Preencha o campo Nome";
        }
        else{
            if (cpf === "" || cpf === null || cpf === undefined) {
    
                erro.innerHTML = "Preencha o campo CPF";
            }
            if (num === "" || num === null || num === undefined) {
    
                erro.innerHTML = "Preencha o campo Número";
            }
            else{
                if(validarCPF(cpf)){

                    if (email === "" || email === null || email === undefined ) {
                        erro.innerHTML = "Preencha seu email";
                    }
                    else{
                        if(email.indexOf("@") === -1 || email.indexOf(".") === -1  ){
                            erro.innerHTML = "Email inválido";
                        }
                        else{
                            erro.innerHTML = "";
                            
                            if(segunda.checked === true){
                                ValidaSegunda = "Pendente";                                
                                if(segundaInicio.value === "" || segundaInicio.value === null || segundaInicio.value === undefined || segundaInicio.value === "00:00:00"){
                                    segundaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaSegunda = "Pendente";
                                }
                                if(segundaFinal.value === "" || segundaFinal.value === null || segundaFinal.value === undefined || segundaFinal.value === "00:00:00"){  
                                    segundaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                    ValidaSegunda = "Pendente";
                                }
                                if(segundaInicio.value !== "" && segundaFinal.value !== "" && segundaInicio.value !== "00:00:00" && segundaFinal.value !== "00:00:00"){
                                    segundaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    segundaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    ValidaSegunda = "Sim";
                                }
                            }
                            if(terca.checked === true){
                                ValidaTerca = "Pendente";
                                if(tercaInicio.value === "" || tercaInicio.value === null || tercaInicio.value === undefined || tercaInicio.value === "00:00:00"){
                                    tercaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaTerca = "Pendente";
                                }
                                if(tercaFinal.value === "" || tercaFinal.value === null || tercaFinal.value === undefined || tercaFinal.value === "00:00:00"){  
                                    tercaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                    ValidaTerca = "Pendente";
                                }
                                if(tercaInicio.value !== "" && tercaFinal.value !== "" && tercaInicio.value !== "00:00:00" && tercaFinal.value !== "00:00:00"){
                                    tercaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    tercaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    ValidaTerca = "Sim";
                                }
                            }
                            if(quarta.checked === true){
                                ValidaQuarta = "Pendente";
                                if(quartaInicio.value === "" || quartaInicio.value === null || quartaInicio.value === undefined || quartaInicio.value === "00:00:00"){
                                    quartaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaQuarta = "Pendente";
                                }
                                if(quartaFinal.value === "" || quartaFinal.value === null || quartaFinal.value === undefined || quartaFinal.value === "00:00:00"){  
                                    quartaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                    ValidaQuarta = "Pendente";
                                }
                                if(quartaInicio.value !== "" && quartaFinal.value !== "" && quartaInicio.value !== "00:00:00" && quartaFinal.value !== "00:00:00"){
                                    quartaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    quartaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    ValidaQuarta= "Sim";
                                }
                            }
                            
                            if(quinta.checked === true){
                                ValidaQuinta = "Pendente";
                                if(quintaInicio.value === "" || quintaInicio.value === null || quintaInicio.value === undefined || quintaInicio.value === "00:00:00"){
                                    quintaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaQuinta = "Pendente";
                                }
                                if(quintaFinal.value === "" || quintaFinal.value === null || quintaFinal.value === undefined || quintaFinal.value === "00:00:00"){  
                                    quintaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                    ValidaQuinta = "Pendente";
                                }
                                if(quintaInicio.value !== "" && quintaFinal.value !== "" && quintaInicio.value !== "00:00:00" &&  quintaFinal.value !== "00:00:00"){
                                    quintaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    quintaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    ValidaQuinta = "Sim";
                                }
                            }
                            if(sexta.checked === true){
                                ValidaSexta = "Pendente";
                                if(sextaInicio.value === "" || sextaInicio.value === null || sextaInicio.value === undefined || sextaInicio.value === "00:00:00"){
                                    sextaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaSexta = "Pendente";
                                }
                                if(sextaFinal.value === "" || sextaFinal.value === null || sextaFinal.value === undefined || sextaFinal.value === "00:00:00"){  
                                    sextaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                    ValidaSexta = "Pendente";
                                }
                                if(sextaInicio.value !== "" && sextaFinal.value !== "" && sextaInicio.value !== "00:00:00" && sextaFinal.value !== "00:00:00"){
                                    sextaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    sextaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    ValidaSexta = "Sim";
                                }
                            }

                            if(sabado.checked === true){
                                ValidaSabado = "Pendente";
                                if(sabadoInicio.value === "" || sabadoInicio.value === null || sabadoInicio.value === undefined || sabadoInicio.value === "00:00:00"){
                                    sabadoInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaSabado = "Pendente";
                                }
                                if(sabadoFinal.value === "" || sabadoFinal.value === null || sabadoFinal.value === undefined || sabadoFinal.value === "00:00:00"){  
                                    sabadoFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                    ValidaSabado = "Pendente";
                                }
                                if(sabadoInicio.value !== "" && sabadoFinal.value !== "" && sabadoInicio.value !== "00:00:00" && sabadoFinal.value !== "00:00:00"){
                                    sabadoInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    sabadoFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    ValidaSabado = "Sim";
                                }
                            }
                            if(domingo.checked === true){
                                ValidaDomingo = "Pendente";
                                if(domingoInicio.value === "" || domingoInicio.value === null || domingoInicio.value === undefined || domingoInicio.value === "00:00:00"){
                                    domingoInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaDomingo = "Pendente";
                                }
                                if(domingoFinal.value === "" || domingoFinal.value === null || domingoFinal.value === undefined || domingoFinal.value === "00:00:00"){  
                                    domingoFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                    ValidaDomingo = "Pendente";
                                }
                                if(domingoInicio.value !== "" && domingoFinal.value !== "" && domingoInicio.value !== "00:00:00" && domingoFinal.value !== "00:00:00"){
                                    domingoInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    domingoFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    ValidaDomingo = "Sim";
                                }
                            }
                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
                           
                            if(ValidaSegunda === "Não" && ValidaTerca ==="Não" && ValidaQuarta ==="Não" && ValidaQuinta === "Não" && ValidaSexta === "Não" && ValidaSabado === "Não" && ValidaDomingo === "Não" ) {
                                erro.innerHTML = "Escolha pelo menos um dia para o horário";
                                console.log("ooi")
                            }else{
                                if(ValidaSegunda === "Pendente" || ValidaTerca ==="Pendente" || ValidaQuarta ==="Pendente" || ValidaQuinta === "Pendente" || ValidaSexta === "Pendente" || ValidaSabado === "Pendente" || ValidaDomingo === "Pendente" ) {
                                    erro.innerHTML = "Verefique os dados dos horarios";
                                
                                }
                                else{
                                    var AcessoRep ="0";
                                    var AcessoAdmin ="0";
                                    var AcessoVet ="0";
                                    var AcessoFinan ="0";
                                    var ControlePet = "Não";
                                    if(recepcao === "Não" && Admin === "Não" && Vet === "Não" && finan==="Não"){
                                        erro.innerHTML = "Escolha pelo menos um cargo";
        
                                    }else{
                                        if( Vet === "Sim"){
                                            ControlePet = "Pendente";
                                            if (crmv === "" || crmv === null || crmv === undefined) {
                        
                                                erro.innerHTML = "Preencha o campo CRMV";
                                            }
                                            else{
                                                if (date === "" || date === null || date === undefined) {
                        
                                                    erro.innerHTML = "Preencha o campo Data de Emissão";
                                                }
                                                else{
                                                    
                                                    ControlePet = "Sim";
                                                }                                        
                                            }        
                                        }else{
                                            date = "0000-00-00";
                                        }
                                        
                                        if(ControlePet === "Pendente")
                                        {
                                            erro.innerHTML = "Preencha os campos corretamente";
                                        }
                                        else{

                                            if(recepcao === "Sim"){
                                                AcessoRep = "1";
                                            }
                                            if(Admin === "Sim"){
                                                AcessoAdmin = '1';
                                            }
                                            if(finan === "Sim"){
                                                AcessoFinan = "1";
                                            }
                                            if(Vet === "Sim"){
                                                AcessoVet = "1";
                                            }                                          
                                            var AcessoTotal = AcessoRep + AcessoAdmin + AcessoVet + AcessoFinan ;
                                           
                                            console.log(date);
                                            
                                           
                                            let response="";
                                            try {
                                                response = await api2.post('/Funcionario/CadastrarFunc', {NomeFunc: nome,EmailFunc: email,CpfFunc: cpf ,RecepFunc: recepcao,VetFunc: Vet,AdminFunc:  Admin ,FinanFunc: finan ,AcessoFunc: AcessoTotal,CelFunc:num, CRMVFunc: crmv,DateEmiFunc:date,SegundInicio:segundaInicio.value, SegundFinal:segundaFinal.value, TercaInicio:tercaInicio.value, TercaFinal:tercaFinal.value, QuartInicio:quartaInicio.value, QuartFinal:quartaFinal.value, QuintInicio:quintaInicio.value, QuintFinal:quintaFinal.value, SextInicio:sextaInicio.value, SextFinal:sextaFinal.value, SabInicio:sabadoInicio.value, SabFinal:sabadoFinal.value, DomingInicio:domingoInicio.value, DomingFinal:domingoFinal.value});
                                            } catch (error) {
                                                console.log(error);               
                                            }   
        
                                            console.log(response);
        
                                            if(response){
                                                if(response.data.message){
                                                    if(response.data.message === "Ja existe Email"){
                                                        erro.innerText = "Email existente";
                                                    }
                                                    else{
                                                        if(response.data.message === "Ja existe CPF"){
                                                            erro.innerText = "CPF existente";
                                                        }
                                                        else{
                                                            if(response.data.message === "Cadastrado"){
                                                                erro.innerText = "Cadastrado com Sucesso";
                                                                setTimeout(() => {window.location.href="/CadastroFuncionario"}, 2000);
                                                            }
                                                            else{
                                                                if(response.data.message === "Ja existe CRMV"){
                                                                    erro.innerText = "CRMV existente";
                                                                }
                                                                else{
                                                                    if(response.data.message === "nao deu"){
                                                                        erro.innerText = "Não foi possivel enviar a senha pelo email cadastrado";
                                                                    }                                                      
                                                                }  
                                                            }
                                                        }
                                                    }
                                                }
                                                
                                                if(response.data.error){
                                                    if(response.data.error === "error sql"){
                                                        erro.innerText = "Tente Novamente";
                                                    }
                                                    if(response.data.error === "falha na autenticação do token"){
                                                        erro.innerText = "Tente Novamente";
                                                        setTimeout(() => {window.location.href="/"}, 2000);
                                                    }else{
                                                        erro.innerText = "Tente Novamente";
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
                else{
                    erro.innerHTML = "CPF Inválido";
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

    //////////////////////////////////////////////////////////////////////// RECEPÇÃO /////////////////////////////////////////////////////////////////
    function Recepcao(){
        var buttonRecep = document.getElementById("recepcao");
        if(recepcao === "Sim"){ 
            buttonRecep.style.backgroundColor="#fff";
            buttonRecep.style.color="#009fe3";
            buttonRecep.style.boder="1px solid #009fe3";
            recepcao="Não";       
        }else{
            buttonRecep.style.backgroundColor="#009fe3";
            buttonRecep.style.color="#fff";
            recepcao="Sim";
        }
    }

    //////////////////////////////////////////////////////////////////////// AMINISTRAÇÃO /////////////////////////////////////////////////////////////////
    function Administracao(){
        var button = document.getElementById("admin");
        if(Admin === "Sim"){ 
            button.style.backgroundColor="#fff";
            button.style.color="#009fe3";
            button.style.boder="1px solid #009fe3";
            Admin="Não"; 
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            Admin="Sim";
        }        
    }

    //////////////////////////////////////////////////////////////////////// VETERINARIO /////////////////////////////////////////////////////////////////
    function Veterinario(){
        var buttonVet = document.getElementById("vet");
        var crmv = document.getElementById("crmv");
        var date = document.getElementById("date");
        var NameDate = document.getElementById("NameDate");

        if(Vet === "Sim"){                    
            buttonVet.style.backgroundColor="#fff";
            buttonVet.style.color="#009fe3";
            buttonVet.style.boder="1px solid #009fe3";                           
            crmv.style.display="none";
            date.style.display="none";
            NameDate.style.display="none";
            Vet="Não";     
        }else{
            buttonVet.style.backgroundColor="#009fe3";
            buttonVet.style.color="#fff";
            Vet="Sim";
            crmv.style.display="block";
            date.style.display="block";
            NameDate.style.display="block";
            
        }
    }

    //////////////////////////////////////////////////////////////////////// FINANCEIRO /////////////////////////////////////////////////////////////////
    function Financeiro(){
        var button = document.getElementById("financeiro");
        if(finan === "Sim"){ 
            button.style.backgroundColor="#fff";
            button.style.color="#009fe3";
            button.style.boder="1px solid #009fe3";
            finan="Não"; 
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            finan="Sim";
        }            
    }

    function Segunda(){
        var segunda = document.getElementById("segunda");

        if(segunda.checked === true){
            var horarioInicio = document.getElementById("segundaInicio");
            horarioInicio.style.visibility="inherit";
            var horarioFinal = document.getElementById("segundaFinal");
            horarioFinal.style.visibility="inherit";
        }
        else{            
            var horarioInicio = document.getElementById("segundaInicio");
            horarioInicio.style.visibility="collapse";
            var horarioFinal = document.getElementById("segundaFinal");
            horarioFinal.style.visibility="collapse";
        }
    }

    function Terca(){
        var terca = document.getElementById("terca");
        if(terca.checked === true){
            var horarioInicio = document.getElementById("tercaInicio");
            horarioInicio.style.visibility="inherit";
            var horarioFinal = document.getElementById("tercaFinal");
            horarioFinal.style.visibility="inherit";
            
        }
        else{
            var horarioInicio = document.getElementById("tercaInicio");
            horarioInicio.style.visibility="collapse";
            var horarioFinal = document.getElementById("tercaFinal");
            horarioFinal.style.visibility="collapse";
        }
    }

    function Quarta(){        
        var quarta = document.getElementById("quarta");
        
        if(quarta.checked === true){
            var horarioInicio = document.getElementById("quartaInicio");
            horarioInicio.style.visibility="inherit";
            var horarioFinal = document.getElementById("quartaFinal");
            horarioFinal.style.visibility="inherit";
            
        }
        else{
            var horarioInicio = document.getElementById("quartaInicio");
            horarioInicio.style.visibility="collapse";
            var horarioFinal = document.getElementById("quartaFinal");
            horarioFinal.style.visibility="collapse";
        }
    }

    function Quinta(){        
        var quinta = document.getElementById("quinta");

        if(quinta.checked === true){
            var horarioInicio = document.getElementById("quintaInicio");
            horarioInicio.style.visibility="inherit";
            var horarioFinal = document.getElementById("quintaFinal");
            horarioFinal.style.visibility="inherit";
            
        }
        else{
            var horarioInicio = document.getElementById("quintaInicio");
            horarioInicio.style.visibility="collapse";
            var horarioFinal = document.getElementById("quintaFinal");
            horarioFinal.style.visibility="collapse";
        }        
    }

    function Sexta(){        
        var sexta = document.getElementById("sexta");

        if(sexta.checked === true){
            var horarioInicio = document.getElementById("sextaInicio");
            horarioInicio.style.visibility="inherit";
            var horarioFinal = document.getElementById("sextaFinal");
            horarioFinal.style.visibility="inherit";
            
        }
        else{
            var horarioInicio = document.getElementById("sextaInicio");
            horarioInicio.style.visibility="collapse";
            var horarioFinal = document.getElementById("sextaFinal");
            horarioFinal.style.visibility="collapse";
        }       
    }

    function Sabado(){        
        var sabado = document.getElementById("sabado");
        if(sabado.checked === true){
            var horarioInicio = document.getElementById("sabadoInicio");
            horarioInicio.style.visibility="inherit";
            var horarioFinal = document.getElementById("sabadoFinal");
            horarioFinal.style.visibility="inherit";
            
        }
        else{
            var horarioInicio = document.getElementById("sabadoInicio");
            horarioInicio.style.visibility="collapse";
            var horarioFinal = document.getElementById("sabadoFinal");
            horarioFinal.style.visibility="collapse";
        }
    }

    function Domingo(){        
        var domingo = document.getElementById("domingo");

        if(domingo.checked === true){
            var horarioInicio = document.getElementById("domingoInicio");
            horarioInicio.style.visibility="inherit";
            var horarioFinal = document.getElementById("domingoFinal");
            horarioFinal.style.visibility="inherit";
           
        }
        else{
            var horarioInicio = document.getElementById("domingoInicio");
            horarioInicio.style.visibility="collapse";
            var horarioFinal = document.getElementById("domingoFinal");
            horarioFinal.style.visibility="collapse";
        }        
    }

    return(
    <div>
        <div className="wrapper ">
            <div className="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a  className="simple-text logo-normal">
                        <img src={rodape} alt="" className="ImagemLogo" align="left" />            
                    </a>
                    <a  className="simple-text logo-normal">
                        <p className="NomePrest">Cantos dos Bichos</p>
                        <p className="TipoPrest">PetShop</p>
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                    <li class="nav-item " id="Home" style={{display:'block'}}>
                            <a class="nav-link" href="/Home">
                            <i class="material-icons">dashboard</i>
                            <p>Inicio</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Calen" style={{display:'none'}}>
                            <a class="nav-link" href="/Calendario">
                            <i class="material-icons">event</i>
                            <p>Calendário</p>
                            </a>
                        </li>
                        <li class="nav-item active" id="Func" style={{display:'none'}}>
                            <a class="nav-link" href="/Funcionarios">
                            <i class="material-icons">assignment_ind</i>
                            <p>Funcionários</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Shop" style={{display:'none'}}>
                            <a class="nav-link" href="/Shopping">
                            <i class="material-icons">shopping_cart</i>
                            <p>Shopping</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Med" style={{display:'none'}}>
                            <a class="nav-link" href="/Medicacao">
                            <i class="material-icons">alarm</i>
                            <p>Medicações</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Vac" style={{display:'none'}}>
                            <a class="nav-link" href="Vacina">
                            <i class="material-icons">account_circle</i>
                            <p>Vacinas</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Pront" style={{display:'none'}}>
                            <a class="nav-link" href="/Prontuarios">
                            <i class="material-icons">assignment</i>
                            <p>Prontuários</p>
                            </a>
                        </li>
                        <li className="nav-item active-pro ">
                            <a className="nav-link" style={{background:'none'}}>
                                <table>
                                    <tr>
                                        <td style={{width: '20%'}}>
                                            <img src={rodape2} alt="" className="material-icons"/>
                                        </td>
                                        <td style={{width: '80%'}}>
                                            <p style={{color:'#009fe3'}}>Versão 1.0</p>
                                        </td>
                                    </tr>
                                </table>            
                            </a>
                        </li>
                    </ul>
                </div>
            </div>    
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Cadastro Funcionário</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                             {/*<ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">notifications</i>
                                        <span className="notification">5</span>
                                        <p className="d-lg-none d-md-block">
                                        className Actions
                                        </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Mike John responded to your email</a>
                                        <a className="dropdown-item" href="#">You have 5 new tasks</a>
                                        <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                                        <a className="dropdown-item" href="#">Another Notification</a>
                                        <a className="dropdown-item" href="#">Another One</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                        <i className="material-icons">help_outline</i>
                                        <p className="d-lg-none d-md-block">
                                            Stats
                                        </p>
                                    </a>
                                </li>                                
                                <li className="nav-item dropdown">
                                    <a >
                                        <img src={rodape}  alt=""class="iconLogo" align="right" />      
                                    </a>                                    
                                </li>
                            </ul>*/}
                        </div> 
                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-blue">
                                        <h4 className="card-title">Funcionários</h4>
                                        <p className="card-category">Complete os Dados!</p>
                                    </div>
                                    <div className="card-body">
                                        {/* <form> */}
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                            <input type="text" className="form-control" id="nome" placeholder="Nome"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <InputMask type="text"  mask = "999.999.999-99" className="form-control" id="cpf" placeholder="CPF" maskChar=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <InputMask type="text"  mask = "(99) 99999 -9999" className="form-control" id="num" placeholder="Número" maskChar=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="email" placeholder="Email"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <p  style={{color:'black'}}> Dias e horarios de trabalho:</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                    <p  style={{color:'black',visibility:'collapse',marginBottom:'0px'}}> Dias</p>
                                                    <br/>
                                                    <label class="dias">Segunda-Feira
                                                        <input type="checkbox" id="segunda" onClick={Segunda}/>
                                                        <span class="checkmark"></span>
                                                    </label>

                                                    <label class="dias">Terça-Feira
                                                        <input type="checkbox" id="terca" onClick={Terca}/>
                                                        <span class="checkmark"></span>
                                                    </label>

                                                    <label class="dias">Quarta-Feira
                                                        <input type="checkbox" id="quarta" onClick={Quarta}/>
                                                        <span class="checkmark"></span>
                                                    </label>

                                                    <label class="dias">Quinta-Feira
                                                        <input type="checkbox" id="quinta" onClick={Quinta}/>
                                                        <span class="checkmark"></span>
                                                    </label>

                                                    <label class="dias">Sexta-Feira
                                                        <input type="checkbox" id="sexta" onClick={Sexta}/>
                                                        <span class="checkmark"></span>
                                                    </label>

                                                    <label class="dias">Sabado
                                                        <input type="checkbox" id="sabado" onClick={Sabado}/>
                                                        <span class="checkmark"></span>
                                                    </label>

                                                    <label class="dias">Domingo
                                                        <input type="checkbox" id="domingo" onClick={Domingo}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                             
                                                <div className="col-md-3">
                                                <br/>
                                                    <p  style={{color:'black',marginBottom:'0px'}}> Horário de Inicio de Turno:</p>
                                                    <input type="time" id="segundaInicio" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="tercaInicio" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="quartaInicio" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="quintaInicio" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="sextaInicio" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="sabadoInicio" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="domingoInicio" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>
                                                </div>
                                                
                                                <div className="col-md-3">
                                                    <br/>
                                                    <p  style={{color:'black',marginBottom:'0px'}}> Horário de Final de Turno:</p>
                                                    <input type="time" id="segundaFinal" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="tercaFinal" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="quartaFinal" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="quintaFinal" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="sextaFinal" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="sabadoFinal" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>

                                                    <input type="time" id="domingoFinal" className="form-control" style={{width: '40%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",visibility:'collapse'}}/>
                                                </div>
                                            </div>
                                           
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-3"> 
                                                    <label className="bmd-label-floating">Cargos</label>                                                
                                                    <br/>
                                                    <button type="submit" id="recepcao" onClick={Recepcao} className="btnCadFunc">Recepção</button>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="col-md-3">
                                                    <br/>
                                                    <button type="submit" id="admin"  onClick={Administracao} className="btnCadFunc">Administração</button>
                                                    <div className="clearfix"></div>                                                   
                                                </div>
                                                <div className="col-md-3">
                                                    <br/>
                                                    <button type="submit" id="vet" onClick={Veterinario} className="btnCadFunc">Veterinário</button>
                                                    <div className="clearfix"></div>                                                   
                                                </div>
                                                <div className="col-md-3">
                                                    <br/>
                                                    <button type="submit" id="financeiro" onClick={Financeiro} className="btnCadFunc">Financeiro</button>
                                                    <div className="clearfix"></div>                                                   
                                                </div>
                                            </div>  
                                            <br/>   
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="crmv" placeholder="CRMV" style={{display:'none'}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="NameDate" placeholder="Data de Emissão" disabled style={{display:'none'}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="date" id="date" className="form-control" style={{display:'none'}}/>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="row">
                                                <div className="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px',textAlign: 'center'}} id="valida"></p>
                                                </div>
                                            </div>
                                            <br/>   
                                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                                <div className="col-md-6">
                                                    <a type="submit" className="btn btn-primary" href="/CadastroFuncionario"  style={{borderRadius: '30px',padding: '2% 10%'}}>Novo</a>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="col-md-6">                                                    
                                                    <button type="submit" className="btn btn-primary" style={{borderRadius: '30px',padding: '2% 10%'}} onClick={Salvar}>Salvar</button>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>   
                                        {/* </form> */}
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