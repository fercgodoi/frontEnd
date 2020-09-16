import React from 'react';
import InputMask from 'react-input-mask';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";
// import InputMask from 'react-input-mask';

import api from "../services/api2";
import seta from "../img/seta.png";

export default function CadastroSete(){
    function Validar(){
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();
    
    // var recepcao = "false";
    // var Admin ="false";
    // var Vet ="false";
    // var finan="false";

    var VetSim = "false";
    var VetNao = "false";
    var ButtonSim ="false";
    var ButtonNao ="false";
    var tipo = "";
    var ButtonValor = "";
    
    async function Proximo(){
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var email = document.getElementById("email").value;
        var CRMV = document.getElementById("CRMV").value;
        var date = document.getElementById("date").value;
        var erro = document.getElementById("valida");
        var num = document.getElementById("num").value;

        var vet = "";

        var segunda = document.getElementById("segunda");
        var terca = document.getElementById("terca");
        var quarta = document.getElementById("quarta");
        var quinta = document.getElementById("quinta");
        var sexta = document.getElementById("sexta");
        var sabado = document.getElementById("sabado");
        var domingo = document.getElementById("domingo");

        var ValidaSegunda = "false";
        var ValidaTerca = "false";
        var ValidaQuarta = "false";
        var ValidaQuinta = "false";
        var ValidaSexta = "false";
        var ValidaSabado = "false";
        var ValidaDomingo = "false";
        
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

        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");
        

        if (nome === "" || nome === null || nome === undefined) {
            erro.innerHTML = "Preencha o campo Nome";
            button.innerText="Próximo";
            button.removeAttribute("disabled");
        }
        else{
            if (cpf === "" || cpf === null || cpf === undefined) {
                erro.innerHTML = "Preencha o campo CPF";
                button.innerText="Próximo";
                button.removeAttribute("disabled");
            }
            if (num === "" || num === null || num === undefined) {
                erro.innerHTML = "Preencha o campo Número";
                button.innerText="Próximo";
                button.removeAttribute("disabled");
            }
            else{
                erro.innerHTML = "";
                if(validarCPF(cpf)){
                    if(ButtonSim !== "false" || ButtonNao !== "false" ){
                        if(ButtonNao === "true"){                            
                            if(email === "" || email === null || email=== undefined){
                                tipo="Pendente";
                            }else{
                                tipo="Concluido";
                            }
                        }


                            erro.innerHTML = "";
                            if(segunda.checked === true){
                                ValidaSegunda = "Pendente";                                
                                if(segundaInicio.value === "" || segundaInicio.value === null || segundaInicio.value === undefined){
                                    segundaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                }else if(segundaFinal.value === "" || segundaFinal.value === null || segundaFinal.value === undefined){  
                                    segundaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                }else if(segundaInicio.value !== "" && segundaFinal.value !== "" && segundaInicio.value !== null && segundaFinal.value !== null){
                                    segundaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    segundaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    if(segundaInicio.value < segundaFinal.value){
                                        ValidaSegunda = "true";
                                    }
                                }
                            }

                            if(terca.checked === true){
                                ValidaTerca = "Pendente";
                                if(tercaInicio.value === "" || tercaInicio.value === null || tercaInicio.value === undefined){
                                    tercaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                }else if(tercaFinal.value === "" || tercaFinal.value === null || tercaFinal.value === undefined){  
                                    tercaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                }else if(tercaInicio.value !== "" && tercaFinal.value !== "" && tercaInicio.value !== null && tercaFinal.value !== null){
                                    tercaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    tercaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    if(tercaInicio.value < tercaFinal.value){
                                        ValidaTerca = "true";
                                    }
                                }
                            }

                            if(quarta.checked === true){
                                ValidaQuarta = "Pendente";
                                if(quartaInicio.value === "" || quartaInicio.value === null || quartaInicio.value === undefined || quartaInicio.value === "00:00:00"){
                                    quartaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                }else if(quartaFinal.value === "" || quartaFinal.value === null || quartaFinal.value === undefined){  
                                    quartaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                }else if(quartaInicio.value !== "" && quartaFinal.value !== "" && quartaInicio.value !== null && quartaFinal.value !== null){
                                    quartaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    quartaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    if(quartaInicio.value < quartaFinal.value){
                                        ValidaQuarta = "true";
                                    }
                                }
                            }
                            
                            if(quinta.checked === true){ 
                                ValidaQuinta = "Pendente";
                                if(quintaInicio.value === "" || quintaInicio.value === null || quintaInicio.value === undefined || quintaInicio.value === "00:00:00"){
                                    quintaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                }else if(quintaFinal.value === "" || quintaFinal.value === null || quintaFinal.value === undefined){  
                                    quintaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                }else if(quintaInicio.value !== "" && quintaFinal.value !== "" && quintaInicio.value !== null && quintaFinal.value !== null){
                                    quintaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    quintaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    if(quintaInicio.value < quintaFinal.value){
                                        ValidaQuinta = "true";
                                    }
                                }
                            }

                            if(sexta.checked === true){
                                ValidaSexta = "Pendente";
                                if(sextaInicio.value === "" || sextaInicio.value === null || sextaInicio.value === undefined || sextaInicio.value === "00:00:00"){
                                    sextaInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                    ValidaSexta = "Pendente";
                                }else if(sextaFinal.value === "" || sextaFinal.value === null || sextaFinal.value === undefined){  
                                    sextaFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                }else if(sextaInicio.value !== "" && sextaFinal.value !== "" && sextaInicio.value !== null && sextaFinal.value !== null){
                                    sextaInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    sextaFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    if(sextaInicio.value < sextaFinal.value){
                                        ValidaSexta = "true";
                                    }
                                }
                            }

                            if(sabado.checked === true){
                                ValidaSabado = "Pendente";
                                if(sabadoInicio.value === "" || sabadoInicio.value === null || sabadoInicio.value === undefined || sabadoInicio.value === "00:00:00"){
                                    sabadoInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                }else if(sabadoFinal.value === "" || sabadoFinal.value === null || sabadoFinal.value === undefined){  
                                    sabadoFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                }else if(sabadoInicio.value !== "" && sabadoFinal.value !== "" && sabadoInicio.value !== null && sabadoFinal.value !== null){
                                    sabadoInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    sabadoFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    if(sabadoInicio.value < sabadoFinal.value){
                                        ValidaSabado = "true";
                                    }
                                }
                            }

                            if(domingo.checked === true){
                                ValidaDomingo = "Pendente";
                                if(domingoInicio.value === "" || domingoInicio.value === null || domingoInicio.value === undefined || domingoInicio.value === "00:00:00"){
                                    domingoInicio.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                 
                                }else if(domingoFinal.value === "" || domingoFinal.value === null || domingoFinal.value === undefined){  
                                    domingoFinal.style.backgroundImage="linear-gradient(to top, #e30000  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #e30000 1px, rgba(210, 210, 210, 0) 1px)";                       
                                }else if(domingoInicio.value !== "" && domingoFinal.value !== "" && domingoInicio.value !== null && domingoFinal.value !== null){
                                    domingoInicio.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)";  
                                    domingoFinal.style.backgroundImage="linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)"; 
                                    if(domingoInicio.value < domingoFinal.value){
                                        ValidaDomingo = "true";
                                    }
                                }
                            }

                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
                           
                            if(ValidaSegunda === "false" && ValidaTerca ==="false" && ValidaQuarta ==="false" && ValidaQuinta === "false" && ValidaSexta === "false" && ValidaSabado === "false" && ValidaDomingo === "false" ) {
                                erro.innerHTML = "Escolha pelo menos um dia para o horário";
                                button.innerText="Próximo";
                                button.removeAttribute("disabled");
                            }else if(ValidaSegunda === "Pendente" || ValidaTerca ==="Pendente" || ValidaQuarta ==="Pendente" || ValidaQuinta === "Pendente" || ValidaSexta === "Pendente" || ValidaSabado === "Pendente" || ValidaDomingo === "Pendente" ) {
                                erro.innerHTML = "Verefique os dados dos horarios";
                                button.innerText="Próximo";
                                button.removeAttribute("disabled");
                            }else if(VetSim === "false" && VetNao === "false"){
                                erro.innerHTML = "Responda se você é veterinario";
                                button.innerText="Próximo";
                                button.removeAttribute("disabled");
                            }
                            else{
                                if(VetSim === "true"){  
                                    if (CRMV === "" || CRMV === null || CRMV === undefined ) {
                                        erro.innerHTML = "Preencha seu CRMV";
                                        button.innerText="Próximo";
                                        button.removeAttribute("disabled");
                                    }else{
                                        if (date === "" || date === null || date === undefined ) {
                                            erro.innerHTML = "Preencha a date";
                                            button.innerText="Próximo";
                                            button.removeAttribute("disabled");
                                        }else{
                                            VetSim = "Pedente";

                                            vet = "true";
                                        }
                                    }
                                }
                                if(VetNao === "true"){
                                    VetNao = "Pedente";
                                    vet = "false";
                                }

                                if(VetSim === "Pedente" || VetNao === "Pedente"){
                                    button.innerText="Aguardando";
                                    button.setAttribute("disabled","disabled");

                                    if(tipo === "Pendente"){
                                        erro.innerHTML = "Preencha corretamente o campo do Email";
                                        button.innerText="Próximo";
                                        button.removeAttribute("disabled");
                                    }else{
                                        erro.innerHTML = "";
                                        let response="";
                                        try {
                                            response = await api.post('https://agendaback.herokuapp.com/Prestador/CadSetePrest', {NomeFunc: nome,EmailFunc: email,CpfFunc: cpf ,RecepFunc: "false",VetFunc: "false",AdminFunc: "true"  ,FinanFunc: "false" ,CelFunc:num, CRMVFunc: CRMV,DateEmiFunc:date,SegundInicio:segundaInicio.value, SegundFinal:segundaFinal.value, TercaInicio:tercaInicio.value, TercaFinal:tercaFinal.value, QuartInicio:quartaInicio.value, QuartFinal:quartaFinal.value, QuintInicio:quintaInicio.value, QuintFinal:quintaFinal.value, SextInicio:sextaInicio.value, SextFinal:sextaFinal.value, SabInicio:sabadoInicio.value, SabFinal:sabadoFinal.value, DomingInicio:domingoInicio.value, DomingFinal:domingoFinal.value,ButtonValor:ButtonValor});
                                        } catch (error) {
                                            console.log(error);               
                                        } 
                                        console.log(response)
                                        
                                        if(response){
                                            if(response.data.message){
                                                if(response.data.message === "Ja existe Email"){
                                                    erro.innerText = "Email existente";
                                                    button.innerText="Próximo";
                                                    button.removeAttribute("disabled");
                                                }else if(response.data.message === "Ja existe CPF"){
                                                        erro.innerText = "CPF existente";
                                                        button.innerText="Próximo";
                                                        button.removeAttribute("disabled");
                                                    }else if(response.data.message === "Cadastrado"){
                                                            erro.style.color = "#006600";     
                                                            erro.style.fontWeight= "700";     
                                                            erro.innerText = "Agora é só logar com a senha que foi enviada no e-mail cadastrado !!";
                                                            setTimeout(() => {window.location.href="/CadastroConcluido"}, 2000);
                                                        }else if(response.data.message === "Ja existe CRMV"){
                                                                erro.innerText = "CRMV existente";
                                                                button.innerText="Próximo";
                                                                button.removeAttribute("disabled");
                                                            }else if(response.data.message === "Ja existe Numero"){
                                                        erro.innerHTML = "Este Número já existe";
                                                        button.innerText="Próximo";
                                                        button.removeAttribute("disabled");
                                                }
                                            }
                                            
                                            if(response.data.error){
                                                if(response.data.error === "error"){
                                                    erro.innerText = "Não foi possivel enviar a senha pelo e-mail cadastrado";
                                                    button.innerText="Próximo";
                                                    button.removeAttribute("disabled");
                                                }else if(response.data.error === "falha na autenticação do token"){
                                                    erro.innerText = "Tente Novamente";
                                                    setTimeout(() => {window.location.href="/"}, 2000);
                                                }else if(response.data.error === "error sql"){
                                                    erro.innerText = "Tente Novamente";
                                                    button.innerText="Próximo";
                                                    button.removeAttribute("disabled");
                                                }else{
                                                    erro.innerText = "Tente Novamente";
                                                    button.innerText="Próximo";
                                                    button.removeAttribute("disabled");
                                                }
                                            }
                                        }
                                    }
                                }   
                            }   
                       
                    }else{
                        erro.innerHTML = "Escolha se vai querer usar o email";
                        button.innerText="Próximo";
                        button.removeAttribute("disabled");
                    }
                }
                else{
                    erro.innerHTML = "CPF Inválido";
                    button.innerText="Próximo";
                    button.removeAttribute("disabled");
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

    // //////////////////////////////////////////////////////////////////////// RECEPÇÃO /////////////////////////////////////////////////////////////////
    // function Recepcao(){
    //     var buttonRecep = document.getElementById("recepcao");
    //     if(recepcao === "Sim"){ 
    //         buttonRecep.style.backgroundColor="#fff";
    //         buttonRecep.style.color="#009fe3";
    //         buttonRecep.style.boder="1px solid #009fe3";
    //         recepcao="Não";       
    //     }else{
    //         buttonRecep.style.backgroundColor="#009fe3";
    //         buttonRecep.style.color="#fff";
    //         recepcao="Sim";
    //     }
    // }

    // //////////////////////////////////////////////////////////////////////// AMINISTRAÇÃO /////////////////////////////////////////////////////////////////
    // function Administracao(){
    //     var button = document.getElementById("admin");
    //     if(Admin === "Sim"){ 
    //         button.style.backgroundColor="#fff";
    //         button.style.color="#009fe3";
    //         button.style.boder="1px solid #009fe3";
    //         Admin="Não"; 
    //     }else{
    //         button.style.backgroundColor="#009fe3";
    //         button.style.color="#fff";
    //         Admin="Sim";
    //     }        
    // }

    // //////////////////////////////////////////////////////////////////////// VETERINARIO /////////////////////////////////////////////////////////////////
    // function Veterinario(){
    //     var buttonVet = document.getElementById("vet");
    //     var crmv = document.getElementById("crmv");
    //     var date = document.getElementById("date");
    //     var NameDate = document.getElementById("NameDate");

    //     if(Vet === "Sim"){                    
    //         buttonVet.style.backgroundColor="#fff";
    //         buttonVet.style.color="#009fe3";
    //         buttonVet.style.boder="1px solid #009fe3";                           
    //         crmv.style.display="none";
    //         date.style.display="none";
    //         NameDate.style.display="none";
    //         Vet="Não";     
    //     }else{
    //         buttonVet.style.backgroundColor="#009fe3";
    //         buttonVet.style.color="#fff";
    //         Vet="Sim";
    //         crmv.style.display="block";
    //         date.style.display="block";
    //         NameDate.style.display="block";
            
    //     }
    // }

    // //////////////////////////////////////////////////////////////////////// FINANCEIRO /////////////////////////////////////////////////////////////////
    // function Financeiro(){
    //     var button = document.getElementById("financeiro");
    //     if(finan === "Sim"){ 
    //         button.style.backgroundColor="#fff";
    //         button.style.color="#009fe3";
    //         button.style.boder="1px solid #009fe3";
    //         finan="Não"; 
    //     }else{
    //         button.style.backgroundColor="#009fe3";
    //         button.style.color="#fff";
    //         finan="Sim";
    //     }            
    // }

    function Segunda(){
        var segunda = document.getElementById("segunda");
        var horarioInicio = document.getElementById("segundaInicio");
        var horarioFinal = document.getElementById("segundaFinal");
        var pSegunda = document.getElementById("pSegunda");
        

        if(segunda.checked === true){           
            horarioInicio.style.display="block";          
            horarioFinal.style.display="block";
            pSegunda.style.display="block";
        }
        else{    
            horarioInicio.style.display="none";
            horarioFinal.style.display="none";
            pSegunda.style.display="none";
        }
    }

    function Terca(){
        var terca = document.getElementById("terca");
        var horarioInicio = document.getElementById("tercaInicio");
        var horarioFinal = document.getElementById("tercaFinal");
        var pTerca = document.getElementById("pTerca");


        if(terca.checked === true){            
            horarioInicio.style.display="block";
            horarioFinal.style.display="block";
            pTerca.style.display="block";
        }
        else{
            horarioInicio.style.display="none";            
            horarioFinal.style.display="none";
            pTerca.style.display="none";
        }
    }

    function Quarta(){        
        var quarta = document.getElementById("quarta");
        var horarioInicio = document.getElementById("quartaInicio");
        var horarioFinal = document.getElementById("quartaFinal");
        var pQuarta = document.getElementById("pQuarta");
        
        if(quarta.checked === true){            
            horarioInicio.style.display="block";            
            horarioFinal.style.display="block";
            pQuarta.style.display="block";
        }
        else{
            horarioInicio.style.display="none";
            horarioFinal.style.display="none";
            pQuarta.style.display="none";
        }
    }

    function Quinta(){        
        var quinta = document.getElementById("quinta");
        var pQuinta = document.getElementById("pQuinta");
        var horarioInicio = document.getElementById("quintaInicio");
        var horarioFinal = document.getElementById("quintaFinal");

        if(quinta.checked === true){            
            horarioInicio.style.display="block";            
            horarioFinal.style.display="block";
            pQuinta.style.display="block";            
        }
        else{
            horarioInicio.style.display="none";
            horarioFinal.style.display="none";
            pQuinta.style.display="none";
        }        
    }

    function Sexta(){        
        var sexta = document.getElementById("sexta");
        var pSexta = document.getElementById("pSexta");
        var horarioInicio = document.getElementById("sextaInicio");
        var horarioFinal = document.getElementById("sextaFinal");

        if(sexta.checked === true){      
            horarioInicio.style.display="block";
            horarioFinal.style.display="block";
            pSexta.style.display="block";
        }
        else{                 
            horarioInicio.style.display="none";           
            horarioFinal.style.display="none";
            pSexta.style.display="none";
        }       
    }

    function Sabado(){        
        var sabado = document.getElementById("sabado");
        var pSabado = document.getElementById("pSabado");        
        var horarioFinal = document.getElementById("sabadoFinal");
        var horarioInicio = document.getElementById("sabadoInicio");


        if(sabado.checked === true){            
            horarioInicio.style.display="block";
            horarioFinal.style.display="block";
            pSabado.style.display="block";
        }
        else{
            horarioInicio.style.display="none";
            horarioFinal.style.display="none";
            pSabado.style.display="none";
        }
    }

    function Domingo(){        
        var domingo = document.getElementById("domingo");
        var pDomingo = document.getElementById("pDomingo");   
        var horarioInicio = document.getElementById("domingoInicio");
        var horarioFinal = document.getElementById("domingoFinal");

        if(domingo.checked === true){
            horarioInicio.style.display="block";
            horarioFinal.style.display="block";
            pDomingo.style.display="block";          
        }
        else{
            horarioInicio.style.display="none";           
            horarioFinal.style.display="none";
            pDomingo.style.display="none";
        }        
    }

    function VeterinarioNao(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var button = document.getElementById("VeterinarioNao");
        button.style.backgroundColor="#009fe3";
        button.style.color="#fff";
        VetNao="true";
        var div=document.getElementById("DivVet");
        div.style.display="none";


        var VeterinarioSim = document.getElementById("VeterinarioSim");
        VeterinarioSim.style.backgroundColor="#fff";
        VeterinarioSim.style.border="1px solid #009fe3"; 
        VeterinarioSim.style.color="#009fe3";
        VetSim="false";
    }    

    function VeterinarioSim(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var VeterinarioSim = document.getElementById("VeterinarioSim");
        VeterinarioSim.style.backgroundColor="#009fe3";
        VeterinarioSim.style.color="#fff";
        VetSim="true";
        var div=document.getElementById("DivVet");
        div.style.display="block";

        var VeterinarioNao = document.getElementById("VeterinarioNao");
        VeterinarioNao.style.backgroundColor="#fff";
        VeterinarioNao.style.border="1px solid #009fe3"; 
        VeterinarioNao.style.color="#009fe3";
        VetNao="false";
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function Sim(){ 
        var buttonNao = document.getElementById("Nao");
        buttonNao.style.backgroundColor="#fff";
        buttonNao.style.border="1px solid #009fe3"; 
        buttonNao.style.color="#009fe3";
        ButtonNao="false";

        var input = document.getElementById('email');

        var button = document.getElementById("Sim");
        if(ButtonSim ==="true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonSim="false";
            ButtonValor="false";
            input.removeAttribute('disabled');
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonSim="true";
            ButtonValor="true";
            input.setAttribute('disabled','disabled');
        }
    }

    function Nao(){
        var buttonSim = document.getElementById("Sim");
        buttonSim.style.backgroundColor="#fff";
        buttonSim.style.border="1px solid #009fe3"; 
        buttonSim.style.color="#009fe3";
        buttonSim="false";

        var input = document.getElementById('email');

        var button = document.getElementById("Nao");
        if(ButtonNao ==="true"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonNao="false";
            ButtonValor="false";
            input.setAttribute('disabled','disabled');
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonNao="true";
            ButtonValor="false";
            input.removeAttribute('disabled');
        }
    }

    function Voltar(){
        window.location.href="/CadastroCinco";
    }

    return(
        <div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" style={{padding:'0px',margin:'0px'}}>
                        <div className="card-header card-header-blue" style={{background:'#009fe3'}}>
                            <h4 className="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>  <img  style={{width:'15px',color:'#fff',float:'left'}} onClick={Voltar} src={seta}/>Passo 6</h4>
                        </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                            <a style={{marginLeft:'5px',color:'#000000'}}>Agora vamos realizar seu cadastro na plataforma!!</a>
                                            <input type="text" className="form-control" placeholder="Nome" id="nome" style={{color:'#009fe3',marginTop:'1%'}}/>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Qual o CPF?</a>
                                        <InputMask type="text"  mask = "999.999.999-99" className="form-control" id="cpf" placeholder="CPF" maskChar="" style={{color:'#009fe3',marginTop:'1%'}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Qual o celular?</a>
                                        <InputMask type="text"  mask = "(99) 99999 -9999" className="form-control" id="num" placeholder="Número" maskChar="" style={{color:'#009fe3',marginTop:'1%'}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Esse será o seu e-mail cadastrado entrar na Plataforma</a>
                                        <input type="text" className="form-control" id="email" placeholder="Email" style={{color:'#009fe3',marginTop:'1%'}} disabled/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Deseja usar o email da primeira etapa do cadastro??</a>
                                        <div className="row">
                                            <div className="col-md-6">  
                                                <button type="submit" className="btnCadFunc" onClick={Sim} style={{marginTop:'2%'}} id="Sim">Sim</button>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="submit" className="btnCadFunc" onClick={Nao} style={{marginTop:'2%'}} id="Nao">Não</button>
                                                <div className="clearfix"></div>                                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <div className="col-md-12">
                                <p  style={{color:'black',marginBottom:'0px'}}> Dias e horarios de trabalho:</p>
                            </div>

                            <div className="row form-group" style={{marginTop:'0px'}}>                                
                                <div className="col-md-3 form-group" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                    <br/>
                                    <label className="dias">Segunda-Feira
                                        <input type="checkbox" id="segunda" onClick={Segunda}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className='row form-group'>                                        
                                        <p  style={{color:'black',marginBottom:'0px',display:'none'}} id="pSegunda"> Horário de Inicio e Termino do Turno:</p>
                                        <div className="col-md-6">
                                            <input type="time" id="segundaInicio" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>
                                        <div className="col-md-6">
                                        <input type="time" id="segundaFinal" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>                                  
                                    </div>
                                </div>


                                <div className="col-md-3" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                    <br/>
                                    <label className="dias">Terça-Feira
                                        <input type="checkbox" id="terca" onClick={Terca}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className='row form-group'>                                        
                                        <p  style={{color:'black',marginBottom:'0px',display:'none'}} id="pTerca"> Horário de Inicio e Termino do Turno:</p>
                                        <div className="col-md-6">
                                        <input type="time" id="tercaInicio" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>  
                                        </div>
                                        <div className="col-md-6">
                                        <input type="time" id="tercaFinal" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>                                  
                                    </div>
                                </div>

                                <div className="col-md-3" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                    <br/>
                                    <label className="dias">Quarta-Feira
                                        <input type="checkbox" id="quarta" onClick={Quarta}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className='row form-group'>                                        
                                        <p  style={{color:'black',marginBottom:'0px',display:'none'}} id="pQuarta"> Horário de Inicio e Termino do Turno:</p>
                                        <div className="col-md-6">
                                        <input type="time" id="quartaInicio" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>
                                        <div className="col-md-6">
                                        <input type="time" id="quartaFinal" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>                                  
                                    </div>
                                </div>

                                
                                <div className="col-md-3" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                    <br/>
                                    <label className="dias">Quinta-Feira
                                        <input type="checkbox" id="quinta" onClick={Quinta}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className='row form-group'>                                        
                                        <p  style={{color:'black',marginBottom:'0px',display:'none'}} id="pQuinta"> Horário de Inicio e Termino do Turno:</p>
                                        <div className="col-md-6">
                                        <input type="time" id="quintaInicio" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>
                                        <div className="col-md-6">
                                        <input type="time" id="quintaFinal" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>                                  
                                    </div>
                                </div>

                                <div className="col-md-3" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                    <br/>
                                    <label className="dias">Sexta-Feira
                                        <input type="checkbox" id="sexta" onClick={Sexta}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className='row form-group'>                                        
                                        <p  style={{color:'black',marginBottom:'0px',display:'none'}} id="pSexta"> Horário de Inicio e Termino do Turno:</p>
                                        <div className="col-md-6">
                                        <input type="time" id="sextaInicio" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>
                                        <div className="col-md-6">
                                        <input type="time" id="sextaFinal" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>                                  
                                    </div>
                                </div>

                                <div className="col-md-3" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                    <br/>
                                    <label className="dias">Sábado
                                        <input type="checkbox" id="sabado" onClick={Sabado}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className='row form-group'>                                        
                                        <p  style={{color:'black',marginBottom:'0px',display:'none'}} id="pSabado"> Horário de Inicio e Termino do Turno:</p>
                                        <div className="col-md-6">
                                        <input type="time" id="sabadoInicio" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>
                                        <div className="col-md-6">
                                        <input type="time" id="sabadoFinal" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>                                  
                                    </div>
                                </div>

                                <div className="col-md-3" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                    <br/>
                                    <label className="dias">Domingo
                                        <input type="checkbox" id="domingo" onClick={Domingo}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className='row form-group'>                                        
                                        <p  style={{color:'black',marginBottom:'0px',display:'none'}} id="pDomingo"> Horário de Inicio e Termino do Turno:</p>
                                        <div className="col-md-6">
                                        <input type="time" id="domingoInicio" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>
                                        <div className="col-md-6">
                                        <input type="time" id="domingoFinal" className="form-control" style={{width: '60%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
                                        </div>                                  
                                    </div>
                                </div>
                            </div>
                                  

                            <div className="row">
                                <div className="col-md-12">
                                    <p><label style={{fontWeight:'400',color:'black'}}>Exemplo:</label> Supondo que o funcionário na segunda-freira tenha um turno das 21:00 até 06:00 de terça-feira, então o cadastro seria na segunda-feira 21:00 até 23:59 e na terça-feira 00:00 até 06:00.</p>
                                </div>
                            </div>
                                
                                {/* <br/>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                                <a style={{marginLeft:'5px',color:'#000000'}}>Cargo</a>
                                            </div>
                                        </div>
                                    </div>
                                <div className="row">
                                    <div className="col-md-3"> 
                                        <button type="submit" id="recepcao" onClick={Recepcao} className="btnCadFunc">Recepção</button>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" id="admin"  onClick={Administracao} className="btnCadFunc">Administração</button>
                                        <div className="clearfix"></div>                                                   
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" id="vet" onClick={Veterinario} className="btnCadFunc">Veterinário</button>
                                        <div className="clearfix"></div>                                                   
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" id="financeiro" onClick={Financeiro} className="btnCadFunc">Financeiro</button>
                                        <div className="clearfix"></div>                                                   
                                    </div>
                                </div>   */}
                                <br/>   
                                {/* <div className="row">
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
                                <br/>    */}

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Você é veterinario?</a>
                                    </div>
                                </div>
                                {/* <div className="col-md-3"> </div> */}
                                <div className="col-md-3"> 
                                    <button type="submit" className="btnCadFunc" onClick={VeterinarioSim} id="VeterinarioSim">Sim</button>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="btnCadFunc" onClick={VeterinarioNao} id="VeterinarioNao">Não</button>
                                    <div className="clearfix"></div>                                                   
                                </div>   
                            </div>
                                <br/>
                            <div id="DivVet" style={{display:'none'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="CRMV" id="CRMV" style={{color:'#009fe3',marginTop:'1%'}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Data de Emissão do CRMV"  disabled/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="date" id="date" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <p style={{color:'red',fontWeight:'200',marginBottom:'0px',textAlign: "center"}} id="valida"></p>
                                </div>
                            </div>
                           
                            <br/>
                                <div className="row" style={{textAlign: '-webkit-center'}}>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            
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