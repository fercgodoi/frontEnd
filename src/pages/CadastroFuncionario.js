import React from 'react';
import InputMask from 'react-input-mask';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import "../js/menu.js";

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarios_branco.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

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
                // var Shop= document.getElementById("Shop");
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
                        // Shop.style.display="block";
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
                        // Shop.style.display="block";
                    }
                }
            }       
    }
    setTimeout(() => {Validar()}, 100);

    async function Dados(){

        let response="";
        try {
            response = await api2.post('https://agendaback.herokuapp.com/Prestador/BuscarPrest2');
        } catch (error) {
            console.log(error);               
        }          
        console.log(response);
  
        if(response){
            var produto = response.data.response.Prestadores[0];
  
            var Nome = document.getElementById("NomeLogo");
            Nome.innerHTML= produto.NomeFantsPrest;
  
            var Tipo = document.getElementById("TipoLogo");
            var nomeTipo="";
            if(produto.PetShopPrest === "true"){
                nomeTipo= nomeTipo + "PetShop";
            }
            if(produto.ClinicaPrest === "true"){
                nomeTipo= nomeTipo + " Clinica";
            }
            if(produto.OngPrest === "true"){
                nomeTipo= nomeTipo + " ONG";
            }
            if(produto.PasseadorPrest === "true"){
                nomeTipo= nomeTipo + " Passeador";
            }
            if(produto.HotelPrest === "true"){
                nomeTipo= nomeTipo + " Hotel";
            }
  
            Tipo.innerHTML= nomeTipo;
  
            var img = document.getElementById("LogoImg");
            var imgImg = document.getElementById("SairImg");
  
            if(produto.fotoPrest !== "" || produto.fotoPrest !== null || produto.fotoPrest !== undefined){
              imgImg.setAttribute("src", produto.fotoPrest);
              img.setAttribute("src", produto.fotoPrest);
            }else{
              imgImg.setAttribute("src", "data:image/png;base64,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");
              img.setAttribute("src", "data:image/png;base64,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");
            }
           
        }
    }
    
    setTimeout(() => {Dados()}, 1);
    
    var recepcao = "false";
    var Admin ="false";
    var Vet ="false";
    var finan="false";
    
    async function Salvar(){
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var email = document.getElementById("email").value;
        var crmv = document.getElementById("crmv").value;
        var date = document.getElementById("date").value;
        var erro = document.getElementById("valida");
        var num = document.getElementById("num").value;
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");

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
        

        if (nome === "" || nome === null || nome === undefined) {
            erro.innerHTML = "Preencha o campo Nome";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(cpf === "" || cpf === null || cpf === undefined) {
                erro.innerHTML = "Preencha o campo CPF";
                button.innerText="Salvar";
                button.removeAttribute("disabled");
            }else if (num === "" || num === null || num === undefined) {
                erro.innerHTML = "Preencha o campo Número";
                button.innerText="Salvar";
                button.removeAttribute("disabled");
            }else if(validarCPF(cpf)){
                    if (email === "" || email === null || email === undefined ) {
                        erro.innerHTML = "Preencha seu email";
                        button.innerText="Salvar";
                        button.removeAttribute("disabled");
                    }else if(email.indexOf("@") === -1 || email.indexOf(".") === -1  ){
                            erro.innerHTML = "Email inválido";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }
                        else{
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
                                button.innerText="Salvar";
                                button.removeAttribute("disabled");
                            }else if(ValidaSegunda === "Pendente" || ValidaTerca ==="Pendente" || ValidaQuarta ==="Pendente" || ValidaQuinta === "Pendente" || ValidaSexta === "Pendente" || ValidaSabado === "Pendente" || ValidaDomingo === "Pendente" ) {
                                    erro.innerHTML = "Verefique os dados dos horarios";
                                    button.innerText="Salvar";
                                    button.removeAttribute("disabled");
                                }
                                else{
                                    var AcessoRep ="0";
                                    var AcessoAdmin ="0";
                                    var AcessoVet ="0";
                                    var AcessoFinan ="0";
                                    var ControlePet = "false";
                                    if(recepcao === "false" && Admin === "false" && Vet === "false" && finan==="false"){
                                        erro.innerHTML = "Escolha pelo menos um cargo";
                                        button.innerText="Salvar";
                                        button.removeAttribute("disabled");        
                                    }else if( Vet === "true"){
                                            ControlePet = "Pendente";
                                            if (crmv === "" || crmv === null || crmv === undefined) {
                                                erro.innerHTML = "Preencha o campo CRMV";
                                                button.innerText="Salvar";
                                                button.removeAttribute("disabled");
                                            }else if(date === "" || date === null || date === undefined) {
                                                    erro.innerHTML = "Preencha o campo Data de Emissão";
                                                    button.innerText="Salvar";
                                                    button.removeAttribute("disabled");
                                                }else{
                                                    
                                                    ControlePet = "true";
                                                }                                              
                                        }else{
                                            date = "0000-00-00";
                                        }
                                        
                                        if(ControlePet === "Pendente"){
                                            erro.innerHTML = "Preencha os campos corretamente";
                                            button.innerText="Salvar";
                                            button.removeAttribute("disabled");
                                        }
                                        else{

                                            if(recepcao === "true"){
                                                AcessoRep = "1";
                                            }
                                            if(Admin === "true"){
                                                AcessoAdmin = '1';
                                            }
                                            if(finan === "true"){
                                                AcessoFinan = "1";
                                            }
                                            if(Vet === "true"){
                                                AcessoVet = "1";
                                            }                                          
                                            var AcessoTotal = AcessoRep + AcessoAdmin + AcessoVet + AcessoFinan ;

                                            console.log(domingoFinal.value);
                                            let response="";
                                            try {
                                                response = await api2.post('https://agendaback.herokuapp.com/Funcionario/CadastrarFunc', {NomeFunc: nome,EmailFunc: email,CpfFunc: cpf ,RecepFunc: recepcao,VetFunc: Vet,AdminFunc:  Admin ,FinanFunc: finan ,AcessoFunc: AcessoTotal,CelFunc:num, CRMVFunc: crmv,DateEmiFunc:date,SegundInicio:segundaInicio.value, SegundFinal:segundaFinal.value, TercaInicio:tercaInicio.value, TercaFinal:tercaFinal.value, QuartInicio:quartaInicio.value, QuartFinal:quartaFinal.value, QuintInicio:quintaInicio.value, QuintFinal:quintaFinal.value, SextInicio:sextaInicio.value, SextFinal:sextaFinal.value, SabInicio:sabadoInicio.value, SabFinal:sabadoFinal.value, DomingInicio:domingoInicio.value, DomingFinal:domingoFinal.value});
                                            } catch (error) {
                                                console.log(error);               
                                            }   
        
                                            console.log(response);
        
                                            if(response){
                                                if(response.data.message){
                                                    if(response.data.message === "Ja existe Email"){
                                                        erro.innerText = "Email existente";
                                                        button.innerText="Salvar";
                                                        button.removeAttribute("disabled");
                                                    }else if(response.data.message === "Ja existe CPF"){
                                                            erro.innerText = "CPF existente";
                                                            button.innerText="Salvar";
                                                            button.removeAttribute("disabled");
                                                        }
                                                        else if(response.data.message === "Cadastrado"){
                                                                erro.style.color = "#09ff00"; 
                                                                erro.style.fontWeight= "700";     
                                                                erro.innerText = "Cadastrado com Sucesso";
                                                                setTimeout(() => {window.location.href="/CadastroFuncionario"}, 2000);
                                                            } else if(response.data.message === "Ja existe CRMV"){
                                                                    erro.innerText = "CRMV existente";
                                                                    button.innerText="Salvar";
                                                                    button.removeAttribute("disabled");
                                                                }else if(response.data.message === "nao deu"){
                                                                        erro.innerText = "Não foi possivel enviar a senha pelo email cadastrado";
                                                                        button.innerText="Salvar";
                                                                        button.removeAttribute("disabled");
                                                                    }                                                      
                                                                // }  
                                                        //     }
                                                        // }
                                                    // }
                                                }
                                                
                                                if(response.data.error){
                                                    if(response.data.error === "error sql"){
                                                        erro.innerText = "Tente Novamente";
                                                        button.innerText="Salvar";
                                                        button.removeAttribute("disabled");
                                                    }else if(response.data.error === "falha na autenticação do token"){
                                                        erro.innerText = "Tente Novamente";
                                                        setTimeout(() => {window.location.href="/"}, 2000);
                                                    }else{
                                                        erro.innerText = "Tente Novamente";
                                                        button.innerText="Salvar";
                                                        button.removeAttribute("disabled");
                                                    }
                                                }   
                                            }
                                        }
                                    }
                                }
                            // }
                    //     }
                    // }     
                }
                else{
                    erro.innerHTML = "CPF Inválido";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }

            // }
        // }
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
            if (rev != parseInt(cpf.charAt(9)))		
                return false;		
        // Valida 2o digito	
        var add2 = 0;	
        for (i = 0; i < 10; i ++)		
            add2 += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add2 % 11);	
        if (rev === 10 || rev === 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }

    //////////////////////////////////////////////////////////////////////// RECEPÇÃO /////////////////////////////////////////////////////////////////
    function Recepcao(){
        var buttonRecep = document.getElementById("recepcao");
        if(recepcao === "true"){ 
            buttonRecep.style.backgroundColor="#fff";
            buttonRecep.style.color="#009fe3";
            buttonRecep.style.boder="1px solid #009fe3";
            recepcao="false";       
        }else{
            buttonRecep.style.backgroundColor="#009fe3";
            buttonRecep.style.color="#fff";
            recepcao="true";
        }
    }

    //////////////////////////////////////////////////////////////////////// AMINISTRAÇÃO /////////////////////////////////////////////////////////////////
    function Administracao(){
        var button = document.getElementById("admin");
        if(Admin === "true"){ 
            button.style.backgroundColor="#fff";
            button.style.color="#009fe3";
            button.style.boder="1px solid #009fe3";
            Admin="false"; 
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            Admin="true";
        }        
    }

    //////////////////////////////////////////////////////////////////////// VETERINARIO /////////////////////////////////////////////////////////////////
    function Veterinario(){
        var buttonVet = document.getElementById("vet");
        var crmv = document.getElementById("crmv");
        var date = document.getElementById("date");
        var NameDate = document.getElementById("NameDate");

        if(Vet === "true"){                    
            buttonVet.style.backgroundColor="#fff";
            buttonVet.style.color="#009fe3";
            buttonVet.style.boder="1px solid #009fe3";                           
            crmv.style.display="none";
            date.style.display="none";
            NameDate.style.display="none";
            Vet="false";     
        }else{
            buttonVet.style.backgroundColor="#009fe3";
            buttonVet.style.color="#fff";
            Vet="true";
            crmv.style.display="block";
            date.style.display="block";
            NameDate.style.display="block";
            
        }
    }

    //////////////////////////////////////////////////////////////////////// FINANCEIRO /////////////////////////////////////////////////////////////////
    function Financeiro(){
        var button = document.getElementById("financeiro");
        if(finan === "true"){ 
            button.style.backgroundColor="#fff";
            button.style.color="#009fe3";
            button.style.boder="1px solid #009fe3";
            finan="false"; 
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            finan="true";
        }            
    }

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

    function Edit(){
        window.location.href="/EditarPerfil";
      }
      function Login(){
        window.location.href="/";
      }

    

    return(
    <div>
        <div className="wrapper ">
            <div className="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                <a  class="simple-text logo-normal">
          <img src={rodape} class="ImagemLogo" id="LogoImg" align="left"  alt=""/>            
        </a>
        <a  class="simple-text logo-normal">
          <p class="NomePrest" id="NomeLogo"></p>
          <p class="TipoPrest" id="TipoLogo"></p>
        </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item " id="Home" style={{display:'block'}}>
                            <a className="nav-link" href="/Home">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={inicio} alt=""/> 
                                <p style={{textAlign: '-webkit-center'}}>Inicio</p>
                            </a>
                        </li>
                        <li className="nav-item" id="Calen" style={{display:'none'}}>
                            <a className="nav-link" href="/Calendario">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={calendario} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Calendário</p>
                            </a>
                        </li>
                        <li className="nav-item active" id="Func" style={{display:'none'}}>
                            <a className="nav-link" href="/Funcionarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'11%',height:'5%'}} src={funcionario} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Funcionários</p>
                            </a>
                        </li>
                        {/* <li className="nav-item " id="Shop" style={{display:'none'}}>
                            <a className="nav-link" href="/Shopping">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={shop}/>
                                <p style={{textAlign: '-webkit-center'}}>Shopping</p>
                            </a>
                        </li> */}
                        <li className="nav-item " id="Med" style={{display:'none'}}>
                            <a className="nav-link" href="/Medicacao">
                            <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={medicacao} alt=""/>
                            <p style={{textAlign: '-webkit-center'}}>Medicações</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Vac" style={{display:'none'}}>
                            <a className="nav-link" href="Vacina">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={vacinas} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Vacinas</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Pront" style={{display:'none'}}>
                            <a className="nav-link" href="/Prontuarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={prontuarios} alt=""/>
                                <p style={{textAlign: '-webkit-center'}}>Prontuários</p>
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
                            <a className="navbar-brand" href="#pablo" >Cadastro Funcionário</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={rodape} class="iconLogo" align="right" alt="" id="SairImg"/> 
                                <p class="d-lg-none d-md-block">
                                    Some Actions
                                </p>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" onClick={Edit}>Editar Perfil</a>
                                <a class="dropdown-item" onClick={Login}>Sair</a>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" >
                                <i class="material-icons">help_outline</i>
                                <p class="d-lg-none d-md-block">
                                    Stats
                                </p>
                                </a>
                            </li>
                            
                            <li class="nav-item dropdown" >
                                <a >
                                    <img src={rodape} class="iconLogo" align="right" alt="" id="SairImg"/>   
                                </a>
                            </li> */}
                            </ul>
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
                                                {/* <div className="col-md-6">
                                                    <a type="submit" className="btn btn-primary" onClick={Novo} id="buttonProximo2" style={{borderRadius: '30px',padding: '2% 10%'}}>Novo</a>
                                                    <div className="clearfix"></div>
                                                </div> */}
                                                <div className="col-md-12">                                                    
                                                    <button type="submit" className="btn btn-primary" style={{borderRadius: '30px',padding: '1% 10%'}} id="buttonProximo" onClick={Salvar}>Salvar</button>
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