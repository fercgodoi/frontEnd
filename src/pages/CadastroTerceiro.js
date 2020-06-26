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
    var Latitude = "";
    var Longitude = "";

    async function Proximo() {   
        var NomeFantasia = document.getElementById("NomeFantasia").value;
        var cep = document.getElementById("cep").value;
        var numero = document.getElementById("numero").value;
        var desc = document.getElementById("desc").value;
        var erro = document.getElementById("valida");

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

        if (NomeFantasia === "" || NomeFantasia === null || NomeFantasia === undefined) {
    
            erro.innerHTML = "Preencha o campo Nome Fantasia";
        }
        else {   
            if (desc === "" || desc === null || desc === undefined) {
    
                erro.innerHTML = "Preencha o campo Descrição";
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
                                }else{
                                    if(ValidaSegunda === "Pendente" || ValidaTerca ==="Pendente" || ValidaQuarta ==="Pendente" || ValidaQuinta === "Pendente" || ValidaSexta === "Pendente" || ValidaSabado === "Pendente" || ValidaDomingo === "Pendente" ) {
                                        erro.innerHTML = "Verefique os dados dos horarios";
                                    }
                                    else{
                                        let response="";
                                        try {
                                            response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/CadTercPrest',{NomeFantsPrest:NomeFantasia,PetShopPrest:ButtonPetShop,ClinicaPrest:ButtonClinica,PasseadorPrest:ButtonPasseador,HotelPrest:ButtonHotel,CepPrest:cep,NumPrest:numero,descricaoPrest:desc,latitude:Latitude,longitude:Longitude,SegundInicio:segundaInicio.value, SegundFinal:segundaFinal.value, TercaInicio:tercaInicio.value, TercaFinal:tercaFinal.value, QuartInicio:quartaInicio.value, QuartFinal:quartaFinal.value, QuintInicio:quintaInicio.value, QuintFinal:quintaFinal.value, SextInicio:sextaInicio.value, SextFinal:sextaFinal.value, SabInicio:sabadoInicio.value, SabFinal:sabadoFinal.value, DomingInicio:domingoInicio.value, DomingFinal:domingoFinal.value});
                                        } catch (error) {
                                            console.log(error);               
                                        }

                                        console.log(response);
                                        
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
                        }
                    }
                    else{
                        erro.innerHTML = "Preencha o CEP corretamente";
                    }
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

    
     //Pesquisa do Logitude
    async function getLongitudeInfo(){
        var cep = document.getElementById("cep").value;

        var axios = require('axios');
        const response = await axios.get('https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=hdj3yK-fUmveI0ovgeGNjWq43ugrJocZp_uDeNlYXL8&postalcode='+cep);            

        if(response){
            Latitude = response.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
            Longitude = response.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
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

            // https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=hdj3yK-fUmveI0ovgeGNjWq43ugrJocZp_uDeNlYXL8&postalcode=${cep}
            if(response.data){
                if(response.data.erro){
                    if(response.data.erro === true){
                        erro.innerHTML = "CEP não encontrado";
                        btnCEP = "Não";
                        return false;
                    }
                }
                else{
                    getLongitudeInfo();
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
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Descreve sua empresa em 3 (três) linhas</a>
                                    <textarea class="form-control" rows="2" id="desc" placeholder="Descrição"></textarea>
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
                        <div className="row" >
                            <div className="col-md-12">
                                <div className="form-group">
                                    <img alt="" src={gatinho} style={{width:'30px'}}></img> 
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Legal, agora precisamos saber qual é o seu CEP do seu estabelecimento! </a>
                                        <InputMask type="text"  mask = "99999-999" onChange={getCepInfo} className="form-control"  placeholder="CEP" id="cep" style={{color:'#009fe3',marginTop:'1%'}} maskChar=""/>
                                </div>
                            </div>
                        </div>
                        <br/>
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
                                    <a style={{marginLeft:'5px',color:'#000000'}}>Show! Para poder atender melhor seus clientes, precisamos do Nº Loja/Estabelecimento.</a>
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