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

    var valida1 = "Não";
    var valida2 = "Não";
    var valida3 = "Não";
    var valida4 = "Não";
    var valida5 = "Não";
    var valida6 = "Não";
    var valida7 = "Não";
    var valida8 = "Não";
    var valida9 = "Não";
    var valida10 = "Não";
    var valida11 = "Não";
    var valida12 = "Não";
    var valida13 = "Não";
    var valida14 = "Não";
    var valida15 = "Não";

    function Proximo(){
        var erro = document.getElementById("valida");
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");

        if(valida1 === "Não" && valida2 === "Não" && valida3 === "Não" && valida4 === "Não" && valida5 === "Não" && valida6 === "Não" &&
        valida7 === "Não" && valida8 === "Não" && valida9 === "Não" && valida10 === "Não" && valida11 === "Não" && valida12 === "Não" &&
        valida13 === "Não" && valida14 === "Não" && valida15 === "Não"){
            erro.innerHTML = "Não esqueça de clicar no botões de adicionar para prosseguir!!";
            button.innerText="Próximo";
            button.removeAttribute("disabled");
        }else{
            erro.style.color = "#09ff00";    
            erro.style.fontWeight= "700";  
            erro.innerHTML = "Você será direcionado para próxima etapa.";
            setTimeout(() => {window.location.href="/CadastroCinco"}, 2000);  
        }
    }

    async function Adicionar1(){
        var nome = document.getElementById("inputNome1");
        var valor = document.getElementById("inputValor1");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }
    async function Adicionar2(){
        var nome = document.getElementById("inputNome2");
        var valor = document.getElementById("inputValor2");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');
                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }

                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }
    async function Adicionar3(){
        var nome = document.getElementById("inputNome3");
        var valor = document.getElementById("inputValor3");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');
                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }
    async function Adicionar4(){
        var nome = document.getElementById("inputNome4");
        var valor = document.getElementById("inputValor4");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }
    async function Adicionar5(){
        var nome = document.getElementById("inputNome5");
        var valor = document.getElementById("inputValor5");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }
    async function Adicionar6(){
        var nome = document.getElementById("inputNome6");
        var valor = document.getElementById("inputValor6");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }
    async function Adicionar7(){
        var nome = document.getElementById("inputNome7");
        var valor = document.getElementById("inputValor7");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }

    async function Adicionar8(){
        var nome = document.getElementById("inputNome8");
        var valor = document.getElementById("inputValor8");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }

    async function Adicionar9(){
        var nome = document.getElementById("inputNome9");
        var valor = document.getElementById("inputValor9");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
                    }
                }
            }
        }
    }

    async function Adicionar10(){
        var nome = document.getElementById("inputNome10");
        var valor = document.getElementById("inputValor10");

        if (nome.value === "" || nome.value === null || nome.value === undefined ) {
            nome.value = "Preencha o campo Nome";
        }else{
            if (valor.value === "" || valor.value === null || valor.value === undefined ) {
                valor.value = "Preencha o campo valor";
            }
            else{
                valor.value= valor.value.replace(/,/g, '.');

                let response="";
                try {
                    response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadQuartPrest',{tipoServ: nome.value,valorServ:valor.value});
                } catch (error) {
                    console.log(error);               
                }

                if(response){
                    if(response.data.message){
                        if(response.data.message === "Salvo"){
                            valida1 = "Sim";
                            nome.setAttribute("disabled","disabled");
                            valor.setAttribute("disabled","disabled");                                                                               
                        }else if(response.data.message === "ja existe"){
                            nome.style.color="#ff0000";
                            nome.value = "Serviço já cadastrado";
                        }
                    }
                    if(response.data.error){
                        if(response.data.error === "error sql"){
                            nome.value = "Tente Novamente";
                            valor.value="";
                        }else if(response.data.error === "falha na autenticação do token"){
                            nome.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 2000);
                        }
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
    //                         valida1 = "Sim";
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
    //                         valida1 = "Sim";
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
    //                         valida1 = "Sim";
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
    //                         valida1 = "Sim";
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
    //                         valida1 = "Sim";
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

    // function Formato(){
    //     // var atual = 10529.89;

    //     var valor = (document.getElementById("inputValor1"));

    //     valor.value= valor.value.replace(/,/g, '.');

    //     var atual = new Intl.NumberFormat('pt-BR').format(valor.value);
    //     //

    //     console.log(atual)
    //     valor.value= atual;

    // //    atual.toLocaleString('pt-br');

    //     console.log(atual);

        // var into = atual.split('',10);
        // console.log(atual.length)

        // if()

        // if(atual.value.length === 3){
        //     atual.value = atual.value[0] + "," + atual.value[1] + atual.value[2];
        // }else if(atual.value.length === 5){
        //     var into = atual.value.split('',10);
        //     atual.value= into[0] + into[2] + into[3] + into[4] ;
        //     console.log(atual.value)
        //     atual.value = atual.value[0] + atual.value[1]+ "," +  + atual.value[2]+atual.value[3];
        //     console.log(atual.value)
        // }else if(atual.value.length === 6){
        //     var into = atual.value.split('',10);
        //     atual.value= into[0] + into[1] +into[3] + into[4] +  into[5];
        //     console.log(atual.value)
        //     atual.value = atual.value[0] + atual.value[1]+ atual.value[2]+  "," + atual.value[3] + atual.value[4];
        //     console.log(atual.value)
        // }else if(atual.value.length === 7){
        //     var into = atual.value.split('',10);
        //     atual.value= into[0] + into[1] +into[2] + into[4] +  into[5] +  into[6];
        //     console.log(into)
        //     atual.value = atual.value[0] + atual.value[1]+ atual.value[2]+ atual.value[3]+ "," + atual.value[4] + atual.value[5];
        //     console.log(atual.value)
        // }
        // }else  if(atual.value.length === 6){
        //     var into = atual.value.split('',10);
        //     atual.value= into[0] + into[1] + into[2] + into[4] + into[5];
        //     atual.value = atual.value[0] + atual.value[1]+ atual.value[2]+ atual.value[3] +  "," + atual.value[5] + atual.value[6];
        // }
        // else if(atual.value.length > 3) {

        //     var into = atual.value.split('',10);
        //     atual.value= into[0] + into[2] + into[3] + into[4] ;

        //     console.log(into)
            // if(atual.value.length === 4){
            //     atual.value = atual.value[0] + atual.value[1]+ "," +  + atual.value[2]+atual.value[3];
            // }else if(atual.value.length > 4 && atual.value.length < 6 ) {

                // var into = atual.value.split('',10);
                //     atual.value= into[0] + into[1] + into[3] + into[4];
                // console.log(into)
                // if(atual.value.length === 5){
                //     atual.value = atual.value[0] + atual.value[1]+ atual.value[2]+  "," + atual.value[3] + atual.value[5];
                // }
                // else if(atual.value.length > 5){
                //     var into = atual.value.split('',10);
                //     atual.value= into[0] + into[1] + into[2] + into[4] + into[5];
                //     console.log(into)
                //     if(atual.value.length === 6){
                //         atual.value = atual.value[0] + atual.value[1]+ atual.value[2]+ atual.value[3] +  "," + atual.value[5] + atual.value[6];
                //     }
                //     else{
                //         alert("passou")

                //     }
                // }
            // }
        // }
        
        
        
        // if(atual.value.length === 5){
        //     atual.value = atual.value[0] + atual.value[1]+ atual.value[2]+  "," + atual.value[3] + atual.value[5];
            
        //     console.log(atual.value)
        // }else if(atual.value.length === 6){
        //     atual.value = atual.value[0] + atual.value[1]+ atual.value[2]+ atual.value[3] +  "," + atual.value[5] + atual.value[6];
            
        //     console.log(atual.value)
        // }else {
        //    console.log("passou")
        // }

        // if(into.lenght)
        // if(into[1]

        // // //com R$
        // // var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

        // //sem R$
        // // var f2 = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

        // var f2 = atual.toLocaleString('pt-br');

        // // console.log(f);
        // console.log(f2);
    // }
    
    return(
    <div>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" style={{padding:'0px',margin:'0px'}}>
                        <div className="card-header card-header-blue" style={{background:'#009fe3'}}>
                            <h4 className="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 4</h4>
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
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome1" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor1" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar1}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- SEGUNDO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome2" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor2" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar2}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- TERCEIRO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome3" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor3" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar3}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- QUARTA SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome4" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor4" placeholder="Valor" />
                                </div>
                                
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar4}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- CINCO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome5" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor5" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar5}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- SEIS SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome6" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor6" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar6}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- SETE SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome7" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor7" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar7}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- OITO SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome8" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor8" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar8}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- NOVE SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome9" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div><div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor9" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar9}>Adicionar</button>
                                </div>
                            </div>
                            {/*--------------------------------- DEZ SERVICO--------------------------- */}
                            <div className="row" id="div">
                                <div className="col-md-3">                                                                
                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                        <input type="text" className="form-control"  id="inputNome10" placeholder="Nome" style={{display:'block'}}/>                                                        
                                    </div>
                                </div>
                                <div className="input-group col-md-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">R$</span>
                                    </div>
                                    <input type="text" className="form-control"  id="inputValor10" placeholder="Valor" />
                                </div>
                                <div className="col-md-4" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btnEditShop" style={{width:'50%',height:'auto'}} id="button1" onClick={Adicionar10}>Adicionar</button>
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
                        
                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                <div className="col-md-12">
                                    <div className="form-group" style={{paddingBottom:'0px'}}>
                                        <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
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