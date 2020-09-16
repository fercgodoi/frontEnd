import React from 'react';
import CurrencyInput from 'react-currency-input';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";

import api from "../services/api2";
import seta from "../img/seta.png";

export default function CdastroQuatro(){
    function Validar(){
        localStorage.setItem('Codigo', "");
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    var valida1 = "false";
    var valida2 = "false";
    var valida3 = "false";
    var valida4 = "false";
    var valida5 = "false";
    var valida6 = "false";
    var valida7 = "false";
    var valida8 = "false";
    var valida9 = "false";
    var valida10 = "false";
    var valida11 = "false";
    var valida12 = "false";
    var valida13 = "false";
    var valida14 = "false";
    var valida15 = "false";

    function Proximo(){
        var erro = document.getElementById("valida");
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");

        if(valida1 === "false" && valida2 === "false" && valida3 === "false" && valida4 === "false" && valida5 === "false" && valida6 === "false" &&
        valida7 === "false" && valida8 === "false" && valida9 === "false" && valida10 === "false" && valida11 === "false" && valida12 === "false" &&
        valida13 === "false" && valida14 === "false" && valida15 === "false"){
            erro.innerHTML = "Não esqueça de clicar no botões de adicionar para prosseguir!!";
            button.innerText="Próximo";
            button.removeAttribute("disabled");
        }else{
            erro.style.color = "#006600";    
            erro.style.fontWeight= "700";  
            erro.innerHTML = "Você será direcionado para próxima etapa.";
            setTimeout(() => {window.location.href="/CadastroCinco"}, 2000);  
        }
    }

    async function Adicionar1(){
        var nome = document.getElementById("inputNome1");
        var valor = document.getElementById("inputValor1");
        var codigo = document.getElementById("inputCodigo1");        
        var button = document.getElementById("button1");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }else{
            valor.value= valor.value.replace(/,/g, '.');

            let response="";
            try {
                response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
            } catch (error) {
                console.log(error);               
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "Salvo"){
                        valida1 = "true";
                        nome.style.color="#009fe3";
                        valor.style.color="#009fe3";
                        codigo.style.color="#009fe3";
                        erro.style.color = "#006600";
                        erro.style.fontWeight= "700"; 
                        erro.innerHTML="Adicionado com sucesso";
                        // nome.setAttribute("disabled","disabled");
                        // valor.setAttribute("disabled","disabled"); 
                        button.setAttribute("name", response.data.id);
                        Servicos();
                    }else if(response.data.message === "ja existe"){
                        nome.style.color="#ff0000";
                        nome.value = "Serviço já cadastrado";
                        valor.value="";
                        codigo.value="";
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        } 
    }

    async function Adicionar2(){
        var nome = document.getElementById("inputNome2");
        var valor = document.getElementById("inputValor2");
        var codigo = document.getElementById("inputCodigo2");   
        var button = document.getElementById("button2");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');
                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            erro.style.color = "#006600";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled");   
                            button.setAttribute("name", response.data.id); 
                            Servicos();                                                                           
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }

                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }

    async function Adicionar3(){
        var nome = document.getElementById("inputNome3");
        var valor = document.getElementById("inputValor3");
        var codigo = document.getElementById("inputCodigo3");   
        var button = document.getElementById("button3");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');
                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            erro.style.color = "#006600";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled");  
                            button.setAttribute("name", response.data.id); 
                            Servicos();                                                                            
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }

    async function Adicionar4(){
        var nome = document.getElementById("inputNome4");
        var valor = document.getElementById("inputValor4");
        var codigo = document.getElementById("inputCodigo4");   
        var button = document.getElementById("button4");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            erro.style.color = "#006600";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled"); 
                            button.setAttribute("name", response.data.id);  
                            Servicos();                                                                            
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }

    async function Adicionar5(){
        var nome = document.getElementById("inputNome5");
        var valor = document.getElementById("inputValor5");
        var codigo = document.getElementById("inputCodigo5");   
        var button = document.getElementById("button5");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            erro.style.color = "#006600";
                            codigo.style.color="#009fe3";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled");  
                            button.setAttribute("name", response.data.id);   
                            Servicos();                                                                          
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }

    async function Adicionar6(){
        var nome = document.getElementById("inputNome6");
        var valor = document.getElementById("inputValor6");
        var codigo = document.getElementById("inputCodigo6");   
        var button = document.getElementById("button6");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            erro.style.color = "#006600";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled"); 
                            button.setAttribute("name", response.data.id); 
                            Servicos();                                                                             
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }
    async function Adicionar7(){
        var nome = document.getElementById("inputNome7");
        var valor = document.getElementById("inputValor7");
        var codigo = document.getElementById("inputCodigo7");   
        var button = document.getElementById("button7");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            erro.style.color = "#006600";
                            codigo.style.color="#009fe3";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled"); 
                            button.setAttribute("name", response.data.id); 
                            Servicos();                                                                             
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }

    async function Adicionar8(){
        var nome = document.getElementById("inputNome8");
        var valor = document.getElementById("inputValor8");
        var codigo = document.getElementById("inputCodigo8");   
        var button = document.getElementById("button8");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            erro.style.color = "#006600";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled");  
                            button.setAttribute("name", response.data.id); 
                            Servicos();                                                                            
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }
    
    async function Adicionar9(){
        var nome = document.getElementById("inputNome9");
        var valor = document.getElementById("inputValor9");
        var codigo = document.getElementById("inputCodigo9");   
        var button = document.getElementById("button9");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            erro.style.color = "#006600";
                            codigo.style.color="#009fe3";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled");    
                            button.setAttribute("name", response.data.id); 
                            Servicos();                                                                          
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }

    async function Adicionar10(){
        var nome = document.getElementById("inputNome10");
        var valor = document.getElementById("inputValor10");
        var codigo = document.getElementById("inputCodigo10");   
        var button = document.getElementById("button10");
        var erro = document.getElementById("valida");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
            valor.value = "Preencha o campo valor";
        }
        else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
            codigo.value = "Preencha o campo Código";
        }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value,Codigo:codigo.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "true";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            erro.style.color = "#006600";
                            codigo.style.color="#009fe3";
                            erro.style.fontWeight= "700"; 
                            erro.innerHTML="Adicionado com sucesso";
                            // nome.setAttribute("disabled","disabled");
                            // valor.setAttribute("disabled","disabled");    
                            button.setAttribute("name", response.data.id);  
                            Servicos();                                                                         
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                            valor.value="";
                            codigo.value="";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        
    }
    // async function Adicionar11(){
    //     var nome = document.getElementById("inputNome11");
    //     var valor = document.getElementById("inputValor11");

    //     if (nome.value === "" || nome.value === null || nome.value === undefined ) {
    //         nome.value = "Preencha o campo Nome";
    //     }else{
    //         if (valor.value === "" || valor.value === null || valor.value === undefined ) {
    //             valor.value = "Preencha o campo valor";
    //         }
    //         else{
    //             valor.value= valor.value.replace(/,/g, '.');

    //             let response="";
    //             try {
    //                 response = await api.post('/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
    //             } catch (error) {
    //                 console.log(error);               
    //             }

    //             if(response){
    //                 if(response.data.message){
    //                     if(response.data.message === "Salvo"){
    //                         valida1 = "true";
    //                         nome.setAttribute("disabled","disabled");
    //                         valor.setAttribute("disabled","disabled");                                                                               
    //                     }else if(response.data.message === "ja existe"){
    //                         nome.style.color="#ff0000";
    //                         nome.value = "Serviço já cadastrado";
    //                     }
    //                 }
    //                 if(response.data.error){
    //                     if(response.data.error === "error sql"){
    //                         nome.value = "Tente Novamente";
    //                         valor.value="";
    //                     }else if(response.data.error === "falha na autenticação do token"){
    //                         nome.value = "Tente Novamente";
    //                         setTimeout(() => {window.location.href="/"}, 2000);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // async function Adicionar12(){
    //     var nome = document.getElementById("inputNome12");
    //     var valor = document.getElementById("inputValor12");

    //     if (nome.value === "" || nome.value === null || nome.value === undefined ) {
    //         nome.value = "Preencha o campo Nome";
    //     }else{
    //         if (valor.value === "" || valor.value === null || valor.value === undefined ) {
    //             valor.value = "Preencha o campo valor";
    //         }
    //         else{

    //             valor.value= valor.value.replace(/,/g, '.');

    //             let response="";
    //             try {
    //                 response = await api.post('/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
    //             } catch (error) {
    //                 console.log(error);               
    //             }

    //             if(response){
    //                 if(response.data.message){
    //                     if(response.data.message === "Salvo"){
    //                         valida1 = "true";
    //                         nome.setAttribute("disabled","disabled");
    //                         valor.setAttribute("disabled","disabled");                                                                               
    //                     }else if(response.data.message === "ja existe"){
    //                         nome.style.color="#ff0000";
    //                         nome.value = "Serviço já cadastrado";
    //                     }
    //                 }
    //                 if(response.data.error){
    //                     if(response.data.error === "error sql"){
    //                         nome.value = "Tente Novamente";
    //                         valor.value="";
    //                     }else if(response.data.error === "falha na autenticação do token"){
    //                         nome.value = "Tente Novamente";
    //                         setTimeout(() => {window.location.href="/"}, 2000);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // async function Adicionar13(){
    //     var nome = document.getElementById("inputNome13");
    //     var valor = document.getElementById("inputValor13");

    //     if (nome.value === "" || nome.value === null || nome.value === undefined ) {
    //         nome.value = "Preencha o campo Nome";
    //     }else{
    //         if (valor.value === "" || valor.value === null || valor.value === undefined ) {
    //             valor.value = "Preencha o campo valor";
    //         }
    //         else{
    //             valor.value= valor.value.replace(/,/g, '.');

    //             let response="";
    //             try {
    //                 response = await api.post('/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
    //             } catch (error) {
    //                 console.log(error);               
    //             }

    //             if(response){
    //                 if(response.data.message){
    //                     if(response.data.message === "Salvo"){
    //                         valida1 = "true";
    //                         nome.setAttribute("disabled","disabled");
    //                         valor.setAttribute("disabled","disabled");                                                                               
    //                     }else if(response.data.message === "ja existe"){
    //                         nome.style.color="#ff0000";
    //                         nome.value = "Serviço já cadastrado";
    //                     }
    //                 }
    //                 if(response.data.error){
    //                     if(response.data.error === "error sql"){
    //                         nome.value = "Tente Novamente";
    //                         valor.value="";
    //                     }else if(response.data.error === "falha na autenticação do token"){
    //                         nome.value = "Tente Novamente";
    //                         setTimeout(() => {window.location.href="/"}, 2000);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // async function Adicionar14(){
    //     var nome = document.getElementById("inputNome14");
    //     var valor = document.getElementById("inputValor14");

    //     if (nome.value === "" || nome.value === null || nome.value === undefined ) {
    //         nome.value = "Preencha o campo Nome";
    //     }else{
    //         if (valor.value === "" || valor.value === null || valor.value === undefined ) {
    //             valor.value = "Preencha o campo valor";
    //         }
    //         else{
    //             valor.value= valor.value.replace(/,/g, '.');

    //             let response="";
    //             try {
    //                 response = await api.post('/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
    //             } catch (error) {
    //                 console.log(error);               
    //             }

    //             if(response){
    //                 if(response.data.message){
    //                     if(response.data.message === "Salvo"){
    //                         valida1 = "true";
    //                         nome.setAttribute("disabled","disabled");
    //                         valor.setAttribute("disabled","disabled");                                                                               
    //                     }else if(response.data.message === "ja existe"){
    //                         nome.style.color="#ff0000";
    //                         nome.value = "Serviço já cadastrado";
    //                     }
    //                 }
    //                 if(response.data.error){
    //                     if(response.data.error === "error sql"){
    //                         nome.value = "Tente Novamente";
    //                         valor.value="";
    //                     }else if(response.data.error === "falha na autenticação do token"){
    //                         nome.value = "Tente Novamente";
    //                         setTimeout(() => {window.location.href="/"}, 2000);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // async function Adicionar15(){
    //     var nome = document.getElementById("inputNome15");
    //     var valor = document.getElementById("inputValor15");

    //     if (nome.value === "" || nome.value === null || nome.value === undefined ) {
    //         nome.value = "Preencha o campo Nome";
    //     }else{
    //         if (valor.value === "" || valor.value === null || valor.value === undefined ) {
    //             valor.value = "Preencha o campo valor";
    //         }
    //         else{
    //             valor.value= valor.value.replace(/,/g, '.');

    //             let response="";
    //             try {
    //                 response = await api.post('/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
    //             } catch (error) {
    //                 console.log(error);               
    //             }

    //             if(response){
    //                 if(response.data.message){
    //                     if(response.data.message === "Salvo"){
    //                         valida1 = "true";
    //                         nome.setAttribute("disabled","disabled");
    //                         valor.setAttribute("disabled","disabled");                                                                               
    //                     }else if(response.data.message === "ja existe"){
    //                         nome.style.color="#ff0000";
    //                         nome.value = "Serviço já cadastrado";
    //                     }
    //                 }
    //                 if(response.data.error){
    //                     if(response.data.error === "error sql"){
    //                         nome.value = "Tente Novamente";
    //                         valor.value="";
    //                     }else if(response.data.error === "falha na autenticação do token"){
    //                         nome.value = "Tente Novamente";
    //                         setTimeout(() => {window.location.href="/"}, 2000);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }


    async function Excluir1(){
        var nome = document.getElementById("inputNome1");
        var valor = document.getElementById("inputValor1");
        var codigo = document.getElementById("inputCodigo1");   
        var button = document.getElementById("button1").name;
        var erro = document.getElementById("valida");

       if (valida1 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";                       
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir2(){
        var nome = document.getElementById("inputNome2");
        var valor = document.getElementById("inputValor2");
        var codigo = document.getElementById("inputCodigo2");   
        var button = document.getElementById("button2").name;
        var erro = document.getElementById("valida");
        

       if (valida2 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir3(){
        var nome = document.getElementById("inputNome3");
        var valor = document.getElementById("inputValor3");
        var codigo = document.getElementById("inputCodigo3");   
        var button = document.getElementById("button3").name;
        var erro = document.getElementById("valida");

       if (valida3 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ: button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir4(){
        var nome = document.getElementById("inputNome4");
        var valor = document.getElementById("inputValor4");
        var codigo = document.getElementById("inputCodigo4");   
        var button = document.getElementById("button4").name;
        var erro = document.getElementById("valida");
        

       if (valida4 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ: button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                       erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir5(){
        var nome = document.getElementById("inputNome5");
        var valor = document.getElementById("inputValor5");
        var codigo = document.getElementById("inputCodigo5");   
        var button = document.getElementById("button5").name;
        var erro = document.getElementById("valida");
       

       if (valida5 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ: button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir6(){
        var nome = document.getElementById("inputNome6");
        var valor = document.getElementById("inputValor6");
        var codigo = document.getElementById("inputCodigo6");   
        var button = document.getElementById("button6").name;
        var erro = document.getElementById("valida");

       if (valida6 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir7(){
        var nome = document.getElementById("inputNome7");
        var valor = document.getElementById("inputValor7");
        var codigo = document.getElementById("inputCodigo7");   
        var button = document.getElementById("button7").name;
        var erro = document.getElementById("valida");

       if (valida7 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir8(){
        var nome = document.getElementById("inputNome8");
        var valor = document.getElementById("inputValor8");
        var codigo = document.getElementById("inputCodigo8");   
        var button = document.getElementById("button8").name;
        var erro = document.getElementById("valida");

       if (valida8 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir9(){
        var nome = document.getElementById("inputNome9");
        var valor = document.getElementById("inputValor9");
        var codigo = document.getElementById("inputCodigo9");   
        var button = document.getElementById("button9").name;
        var erro = document.getElementById("valida");

       if (valida9 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        nome.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Excluir10(){
        var nome = document.getElementById("inputNome10");
        var valor = document.getElementById("inputValor10");
        var codigo = document.getElementById("inputCodigo10");   
        var button = document.getElementById("button10").name;
        var erro = document.getElementById("valida");

       if (valida10 !== "false"){
            let response= "";       

            try{
                response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest2',{idServ:button});
            }catch(erro){
                console.log(erro);
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "excluido"){
                        nome.style.color="black";
                        valor.style.color="black";
                        codigo.style.color="black";
                        codigo.value="";
                        erro.innerHTML="Excluido com sucesso";
                        // nome.removeAttribute("disabled");
                        // valor.removeAttribute("disabled");
                        valor.value="";
                        Servicos();
                    }
                }
                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else if(response.data.error === "falha na autenticação do token"){
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }
    }

    async function Editar1(){
        var nome = document.getElementById("inputNome1");
        var valor = document.getElementById("inputValor1");
        var codigo = document.getElementById("inputCodigo1");   
        var button = document.getElementById("button1").name;
        var erro = document.getElementById("valida");

        if (valida1 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (codigo.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }      
    }


    async function Editar2(){
        var nome = document.getElementById("inputNome2");
        var valor = document.getElementById("inputValor2");
        var codigo = document.getElementById("inputCodigo2");   
        var button = document.getElementById("button2").name;
        var erro = document.getElementById("valida");

        if (valida2 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }
    async function Editar3(){
        var nome = document.getElementById("inputNome3");
        var valor = document.getElementById("inputValor3");
        var codigo = document.getElementById("inputCodigo3");   
        var button = document.getElementById("button3").name;
        var erro = document.getElementById("valida");

        if (valida3 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }
    async function Editar4(){
        var nome = document.getElementById("inputNome4");
        var valor = document.getElementById("inputValor4");
        var codigo = document.getElementById("inputCodigo4");   
        var button = document.getElementById("button4").name;
        var erro = document.getElementById("valida");

        if (valida4 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }

    
    async function Editar5(){
        var nome = document.getElementById("inputNome5");
        var valor = document.getElementById("inputValor5");
        var codigo = document.getElementById("inputCodigo5");   
        var button = document.getElementById("button5").name;
        var erro = document.getElementById("valida");

        if (valida5 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }


    async function Editar6(){
        var nome = document.getElementById("inputNome6");
        var valor = document.getElementById("inputValor6");
        var codigo = document.getElementById("inputCodigo6");   
        var button = document.getElementById("button6").name;
        var erro = document.getElementById("valida");

        if (valida6 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }


    async function Editar7(){
        var nome = document.getElementById("inputNome7");
        var valor = document.getElementById("inputValor7");
        var codigo = document.getElementById("inputCodigo7");   
        var button = document.getElementById("button7").name;
        var erro = document.getElementById("valida");

        if (valida7 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }

    async function Editar8(){
        var nome = document.getElementById("inputNome8");
        var valor = document.getElementById("inputValor8");
        var codigo = document.getElementById("inputCodigo8");   
        var button = document.getElementById("button8").name;
        var erro = document.getElementById("valida");

        if (valida8 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }

    async function Editar9(){
        var nome = document.getElementById("inputNome9");
        var valor = document.getElementById("inputValor9");
        var codigo = document.getElementById("inputCodigo9");   
        var button = document.getElementById("button9").name;
        var erro = document.getElementById("valida");

        if (valida9 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }

    async function Editar10(){
        var nome = document.getElementById("inputNome10");
        var valor = document.getElementById("inputValor10");
        var codigo = document.getElementById("inputCodigo10");   
        var button = document.getElementById("button10").name;
        var erro = document.getElementById("valida");

        if (valida10 !== "false"){
            let response= "";   
            
            if (nome.value === "" || nome.value === null || nome.value === undefined ) {
                nome.value = "Preencha o campo Nome";
            }else if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }else if (codigo.value === "" || codigo.value === null || codigo.value === undefined ) {
                codigo.value = "Preencha o campo Código";
            }
            else{
    
                valor.value= valor.value.replace(/,/g, '.');
    
                try{
                    response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: nome.value, valorServ:valor.value, idServ:button,Codigo:codigo.value});
                }catch(erro){
                    console.log(erro);
                }
        
                if(response){
                    if(response.data.message){
                        if(response.data.message === "alterado"){
                            erro.innerHTML="Alterado com sucesso";
                            nome.style.color="#009fe3";
                            valor.style.color="#009fe3";
                            codigo.style.color="#009fe3";
                            Servicos();
                        }
                    }
    
                    if(response.data.error){
                        if(response.data.error === "erro sql"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }else if(response.data.error === "falha na autenticação do token"){
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }else{
            erro.innerHTML= "Realize o cadastro primeiro!!"
        }    
    }


    async function Servicos(){
        var tbody = document.getElementById("tobdy");
        var erro = document.getElementById("valida");
        document.getElementById("texto").innerHTML= "";
        document.getElementById("texto").display= "none";

        let responseServ= "";
        try{
            responseServ= await api.post('https://agendaback.herokuapp.com/Prestador/BuscaServicosPresQuatro');
        }catch(erro){
            console.log(erro)
        }
        tbody.innerText="";

        if(responseServ){
            if(responseServ.data.response){
                var servico =responseServ.data.response.Servicos;

                for(let i=0; i < servico.length;i++){
                    
                    var tr = document.createElement("tr");
                    var div = document.createElement("div");
                    var div1 = document.createElement("div");
                    var div2 = document.createElement("div");
                    var div3 = document.createElement("div");
                    var div4 = document.createElement("div");
                    var div5 = document.createElement("div");
                    var div6 = document.createElement("div");
                    var div7 = document.createElement("div");
                    var inputNome= document.createElement("input");
                    var spanValor= document.createElement("span");
                    var inputValor= document.createElement("input");
                    var inputCodigo= document.createElement("input");
                    
                    // var buttonEditar = document.createElement("button");    
                    // var buttonExcluir = document.createElement("button");       
    
                    tr.style.width="100%";
                    div.className="row";
                    div1.className="col-md-6";
                    div2.className="col-md-4";
                    div2.style.verticalAlign = "middle";
                    div2.style.display = "inline-grid";

                    inputNome.value= servico[i].tipoServ;
                    inputNome.setAttribute("type","text");
                    inputNome.setAttribute("id", "inputNome" + servico[i].idServ);
                    inputNome.setAttribute("placeholder","Nome");
                    inputNome.className="form-control";
                    inputNome.style.display ="block";   

                    div3.className="input-group col-md-4";                                                
                    div4.className="input-group-prepend";

                    spanValor.className="input-group-text";
                    spanValor.innerHTML="R$";

                    inputNome.setAttribute("disabled","disabled");
                    inputValor.setAttribute("disabled","disabled");
                    inputCodigo.setAttribute("disabled","disabled");

                    inputValor.value= servico[i].valorServ;
                    inputValor.setAttribute("type","text");
                    inputValor.setAttribute("id","inputValor" + servico[i].idServ);
                    inputValor.setAttribute("placeholder","Valor");
                    inputValor.className="form-control";

                    div7.className="col-md-4";
                    inputCodigo.value= servico[i].codigoServ;
                    inputCodigo.setAttribute("type","text");
                    inputCodigo.setAttribute("id","inputCodigo" + servico[i].idServ);
                    inputCodigo.setAttribute("placeholder","Valor");
                    inputCodigo.className="form-control";

                    div5.style.textAlign ="center";   
                    div5.className="col-md-2";
                    div6.style.textAlign ="center";   
                    div6.className="col-md-2";

                    // buttonEditar.setAttribute("id", i.toString() );
                    // buttonEditar.onclick = function() { Editar(servico[i].idServ) };
                    // buttonEditar.className="btn btn-primary btnEditShop";
                    // buttonEditar.innerHTML="Editar";
                    // buttonEditar.style.height ="auto";   
                    // buttonEditar.style.width ="100%";   
                    // buttonEditar.setAttribute("type","submit");

                    // buttonExcluir.setAttribute("id", i.toString() );
                    // buttonExcluir.onclick = function() { Excluir(servico[i].idServ) };
                    // buttonExcluir.className="btn btn-primary btnEditShop";
                    // buttonExcluir.innerHTML="Excluir";
                    // buttonExcluir.style.height ="auto";   
                    // buttonExcluir.style.width ="100%";   
                    // buttonExcluir.setAttribute("type","submit");
    
                    // div6.appendChild(buttonExcluir);
                    // div5.appendChild(buttonEditar);
                    div4.appendChild(spanValor);
                    div3.appendChild(div4);
                    div3.appendChild(inputValor);
                    div2.appendChild(inputNome);
                    div7.appendChild(inputCodigo);
                    // div1.appendChild(div2);

                    // div.appendChild(div1);
                    div.appendChild(div7);
                    div.appendChild(div2);
                    div.appendChild(div3);
                    div.appendChild(div5);
                    div.appendChild(div6);
                    tr.appendChild(div);
                    tbody.appendChild(tr);  
                }
            }
            if(responseServ.data.error){
                if(responseServ.data.error ==="erro sql"){
                    erro.innerHTML ="Tente novamente"
                }else if(responseServ.data.error === "falha na autenticação do token"){
                    erro.value = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 1);
                }
            }
        }   
    }

    function Voltar(){
        window.location.href="/CadastroTerceiro";
    }

    
    return(
    <div>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" style={{padding:'0px',margin:'0px'}}>
                        <div className="card-header card-header-blue" style={{background:'#009fe3'}}>
                            <h4 className="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>  <img  style={{width:'15px',color:'#fff',float:'left'}} onClick={Voltar} src={seta}/>Passo 4</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Legal! Quais são seus serviços?</a>                                           
                                    <br/>
                                </div>
                            </div>
                            <br/>
                            {/*--------------------------------- PRIMEIRO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo1" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome1" placeholder="Nome" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor1" precision="2" decimalSeparator="," thousandSeparator="."/>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button1" onClick={Adicionar1}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar1" onClick={Editar1}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir1" onClick={Excluir1}>Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- SEGUNDO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo2" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome2" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                     <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor2" precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button2" onClick={Adicionar2}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar2" onClick={Editar2}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir2"  onClick={Excluir2} >Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- TERCEIRO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo3" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome3" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                     <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor3"  precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button3" onClick={Adicionar3}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar3" onClick={Editar3}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir3" onClick={Excluir3}>Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- QUARTA SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo4" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome4" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                     <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor4"  precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button4" onClick={Adicionar4}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar4" onClick={Editar4}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir4" onClick={Excluir4}>Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- CINCO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo5" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome5" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                     <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor5" precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button5" onClick={Adicionar5}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar5" onClick={Editar5}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir5" onClick={Excluir5}>Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- SEIS SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo6" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome6" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                     <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor6" precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button6" onClick={Adicionar6}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar6" onClick={Editar6}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir6" onClick={Excluir6} >Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- SETE SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo7" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome7" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor7"  precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button7" onClick={Adicionar7}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar7" onClick={Editar7}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir7" onClick={Excluir7} >Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- OITO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo8" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome8" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                     <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor8"  precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button8" onClick={Adicionar8}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar8" onClick={Editar8}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir8" onClick={Excluir8}>Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- NOVE SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo9" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome9" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div><div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor9"  precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button9" onClick={Adicionar9}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar9" onClick={Editar9}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir9" onClick={Excluir9}>Excluir</button>
                                </div>
                            </div>
                            {/*--------------------------------- DEZ SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputCodigo10" placeholder="Código EAN" style={{display:'block'}}/>   
                                    </div>
                                </div>
                                <div className="col-md-2" style={{paddingRight:"2px"}}>                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome10" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-2" style={{paddingRight:"2px"}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    {/* <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" /> */}
                                    <CurrencyInput  className="form-control"  id="inputValor10"  precision="2" decimalSeparator="," thousandSeparator="." />
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:'auto'}} id="button1" onClick={Adicionar10}>Adicionar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="buttonEditar10" onClick={Editar10}>Editar</button>
                                </div>
                                <div className="col-md-2" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="buttonExcluir10" onClick={Excluir10}>Excluir</button>
                                </div>
                            </div>
                            {/* --------------------------------- ONZE SERVICO---------------------------
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome11" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div class="input-group col-md-5">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor11" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar11}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- DOZE SERVICO--------------------------- */}
                            {/* <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome12" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div class="input-group col-md-5">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor12" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar12}>Adicionar</button>
                                </div>
                            </div> */}
                            {/*--------------------------------- TREZE SERVICO--------------------------- */}
                            {/* <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome13" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div class="input-group col-md-5">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor13" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar13}>Adicionar</button>
                                </div>
                            </div> */}
                            {/*--------------------------------- QUATORZE SERVICO--------------------------- */}
                            {/* <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome14" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div class="input-group col-md-5">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor14" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar14}>Adicionar</button>
                                </div>
                            </div> */}
                            {/*--------------------------------- QUINTA SERVICO--------------------------- */}
                            {/* <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome15" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div class="input-group col-md-5">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor15" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar15}>Adicionar</button>
                                </div>
                            </div> */} 

                            <div className="card-body">
                                <label className="bmd-label-floating" style={{   color:"#009fe3",textAlign: "center", width: '100%',fontSize: '20px',fontWeight: '500'}}>Serviços Cadastrados</label>      
                                <label className="bmd-label-floating" style={{   color:"#009fe3",textAlign: "center", width: '100%',fontSize: '12px'}} id="texto">Não há serviços cadastrados</label>      
                                <div class="row">
                                    <div class="col-md-12">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="profile">
                                                <table className="table" style={{marginBottom:'0px'}} id="table">
                                                    <tbody id="tobdy">                                          
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                <div className="col-md-12">
                                    <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                </div>
                            </div>
                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                <div className="col-md-12">
                                    <div className="form-group" style={{paddingBottom:'0px'}}>                                       
                                        <button type="submit" className="btn btn-primary btnEditShop" style={{border:'2px solid #009fe3'}} id="buttonProximo" onClick={Proximo}>Proximo</button>
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