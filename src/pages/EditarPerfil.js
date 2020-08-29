import React from 'react';
import InputMask from 'react-input-mask';
// import CurrencyInput from 'react-currency-input';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import inicio from "../img/Icon/inicio.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

import api from '../services/api2.js';
import "../js/menu.js";

export default function EditarPerfil(){
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

                if(dados[2] === "0" ){
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
            response = await api.post('https://agendaback.herokuapp.com/Prestador/BuscarPrest2');
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
              imgImg.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAyCAYAAADMb4LpAAAABHNCSVQICAgIfAhkiAAABlFJREFUaEPtmWtMk1cYx//nfVtaWi6WW8tFkA2cTtniDBoRvGzOTWZEwN2dCe7Cki27mGUzJkv2Ydn2Zfs2MzVhkmi2ibcBSpYF4xQFL5PBFC+T4QC5lEs7Lr28bd+znLeUtlwKNKHIwvnWnnN6fud/nvM8z3lKMIsbmcXsmIOfqdObU35OeT8U+B+azRHKo695HTh+d0o4r2nI1dGYH9p4oyBOvFlKKDjqkISkIKDgwA3JSiFK33g2NgbgATaHnIEBXz2fAHOJIcGOQmLzdSCjYQ71hEEwNYAgnk1MDeVxPVcL7Y/tMAre6/px0hNOYUCfL5Gj2UTp/ib7aQr7NhQkW8aa6A1PKUFRy2lw5FnX4EDDs3V5AlSvD8bfgyJeqrEYYSRx2DXfPHID3vDFbYlwOJpAhg864MoPmRvWRhGUZAQj64wZtwfEL7EzcY9v+IP/LAflrnoOmgnl2foJSqB2oxrFTQI+qrd1YMCyAO+lWj3ZvJXf35wOObn8IMFf6LJja7XVBF4egx26wVkBH6cE6jaqweBzq60mOpvgY5VA/Rx8AP28y6bnlJ+Kq1wSziMvSYWbRhuONnsGRYoXkoKRGibDyWYzbhjtAPGdaUxd+e+b0wE/XCWleCZeidKnohDEE1BKcbjRhNfO90pWcGiNBq88pAYhBFYHRW5lNyravFz2qOg/dfiilpUgqJmqn1fxQF2OFilh8uGpDpEi5VgHOEJxMzdW2pSr3TIKeKJMD7MzfRuzBQw+bZ5MgmfKuhpT/4v6PgRzBB8uDfXqEynFsp87Uc/MZ6bhs2KCcC47ZhRGSdMg1DxBdqJqVN+6Cj1+6xRmHn5puAx1W7XgRij/WW0flDyw+7EwL+WZSS0r7cSfM6G8Vsnh7YVqKHig6K4J9wcduLZFi0Xz3DZvFymSS9rBEeBOfiwUHjbfYBCwvEyPeBWPN1JVsDiAvbcH0GV1vxemxeYJpTi7KRprdErpyLvMDqSX65EcwqP86SioZRyYTRffHcTOC0ant8nU4OWHVdLJDNhE5FR2496AA5c2xyCKHQ2Aqg4rsiq64KokTQu8Tsnhbr4OarnrbQccbhzE9nO90AVzKEhR43KXgDqDDRqF8wVoFESkaeRYEa2QNnXf5EBRpgYFqSHDNt8viFhQ0o5em1P9aYGPDCJo3BaL8CA3/HWDDWknO6TAszCMR1GGBquHTsZFd0lvxY6qXtzpcwCUoj5Hi7SIoGF4tsGkI+3os08jPFv4fHY0MrVOs3EeuQVrKrqQnxSMI+sjvS6npzth5vTi2R4cu2fGuU0xyNQphrtr9FasOqUfjrzTojxbbVEYj4vPxWBeEAcHBXZW9aLXKqJsQ9S44J7+P6+yB2o5wcGsCOm9ahBErCrX406/O2pNGzwDYUbzuEaGpn67tImbeTooZW5TGteBAzDZRCw52SHdhQUhMul+OCsg7uYFXyMMUk6m9f2S8ic9oBT7MzR48xH35fMF7uo7cHsAb100jJugTavyLgjmff7K1yHEw/tMBr5PEJF6vB16y9i1oIDA58xX4MSTE9v6yA2x3Cf/TA9OtIxZT5oeVzkSYtdiNb5eqZmM2KPGfHLFgG8aBpEdr0Bpq3eKHBDlCxeq8F1GhF/w71QbsPfWgHRn9vz+L7o9yokBgZ+v4lC7RYvIoTDv6RLFIXNm+Y1nuszGtJvsWF7aieRQGY6uj8SKMj1azeKwCAGBZ0ErVsWDpcWRCh4dZjtaTaKUAnRZROm1xxI5loQlqHhEB3PQm0VU6QV88GgIPk4LRXmLGVsre0A9stLAwPtlMM44cWVztPSa2vBLFyxu0aVffKDhGWCYnICZ1sBQPjNukJpUxcyfIOWn8hNNm7ry/lYPJiLxoz9eCfyxUY3jrTYUXhP06Lck+q4SH+hIhszWiOEnQeD/GXHtc3UEwYlMFbacN6HGQL9Fwfx3R2rgnQ3tuyqHPOZXELLWNXAqRSc/BB5zCg+KU5lK6XmYV2PtFq38YhTGdfuGZ70HWhMgoxcAJLKPgYbnQPFqopymR3D292uFKkrpdrye2DbWLseuue1rUyHI8SkoyUwJ5YNv5GpF7U/tHEthfTaWsBDizrQo5UBYiJpMo2xeCw++mIf1liAomlEYZ/I1c5I/PJnFAz9mDj7wmjtX/A/ifE5vFJ5ABQAAAABJRU5ErkJggg==");
              img.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAyCAYAAADMb4LpAAAABHNCSVQICAgIfAhkiAAABlFJREFUaEPtmWtMk1cYx//nfVtaWi6WW8tFkA2cTtniDBoRvGzOTWZEwN2dCe7Cki27mGUzJkv2Ydn2Zfs2MzVhkmi2ibcBSpYF4xQFL5PBFC+T4QC5lEs7Lr28bd+znLeUtlwKNKHIwvnWnnN6fud/nvM8z3lKMIsbmcXsmIOfqdObU35OeT8U+B+azRHKo695HTh+d0o4r2nI1dGYH9p4oyBOvFlKKDjqkISkIKDgwA3JSiFK33g2NgbgATaHnIEBXz2fAHOJIcGOQmLzdSCjYQ71hEEwNYAgnk1MDeVxPVcL7Y/tMAre6/px0hNOYUCfL5Gj2UTp/ib7aQr7NhQkW8aa6A1PKUFRy2lw5FnX4EDDs3V5AlSvD8bfgyJeqrEYYSRx2DXfPHID3vDFbYlwOJpAhg864MoPmRvWRhGUZAQj64wZtwfEL7EzcY9v+IP/LAflrnoOmgnl2foJSqB2oxrFTQI+qrd1YMCyAO+lWj3ZvJXf35wOObn8IMFf6LJja7XVBF4egx26wVkBH6cE6jaqweBzq60mOpvgY5VA/Rx8AP28y6bnlJ+Kq1wSziMvSYWbRhuONnsGRYoXkoKRGibDyWYzbhjtAPGdaUxd+e+b0wE/XCWleCZeidKnohDEE1BKcbjRhNfO90pWcGiNBq88pAYhBFYHRW5lNyravFz2qOg/dfiilpUgqJmqn1fxQF2OFilh8uGpDpEi5VgHOEJxMzdW2pSr3TIKeKJMD7MzfRuzBQw+bZ5MgmfKuhpT/4v6PgRzBB8uDfXqEynFsp87Uc/MZ6bhs2KCcC47ZhRGSdMg1DxBdqJqVN+6Cj1+6xRmHn5puAx1W7XgRij/WW0flDyw+7EwL+WZSS0r7cSfM6G8Vsnh7YVqKHig6K4J9wcduLZFi0Xz3DZvFymSS9rBEeBOfiwUHjbfYBCwvEyPeBWPN1JVsDiAvbcH0GV1vxemxeYJpTi7KRprdErpyLvMDqSX65EcwqP86SioZRyYTRffHcTOC0ant8nU4OWHVdLJDNhE5FR2496AA5c2xyCKHQ2Aqg4rsiq64KokTQu8Tsnhbr4OarnrbQccbhzE9nO90AVzKEhR43KXgDqDDRqF8wVoFESkaeRYEa2QNnXf5EBRpgYFqSHDNt8viFhQ0o5em1P9aYGPDCJo3BaL8CA3/HWDDWknO6TAszCMR1GGBquHTsZFd0lvxY6qXtzpcwCUoj5Hi7SIoGF4tsGkI+3os08jPFv4fHY0MrVOs3EeuQVrKrqQnxSMI+sjvS6npzth5vTi2R4cu2fGuU0xyNQphrtr9FasOqUfjrzTojxbbVEYj4vPxWBeEAcHBXZW9aLXKqJsQ9S44J7+P6+yB2o5wcGsCOm9ahBErCrX406/O2pNGzwDYUbzuEaGpn67tImbeTooZW5TGteBAzDZRCw52SHdhQUhMul+OCsg7uYFXyMMUk6m9f2S8ic9oBT7MzR48xH35fMF7uo7cHsAb100jJugTavyLgjmff7K1yHEw/tMBr5PEJF6vB16y9i1oIDA58xX4MSTE9v6yA2x3Cf/TA9OtIxZT5oeVzkSYtdiNb5eqZmM2KPGfHLFgG8aBpEdr0Bpq3eKHBDlCxeq8F1GhF/w71QbsPfWgHRn9vz+L7o9yokBgZ+v4lC7RYvIoTDv6RLFIXNm+Y1nuszGtJvsWF7aieRQGY6uj8SKMj1azeKwCAGBZ0ErVsWDpcWRCh4dZjtaTaKUAnRZROm1xxI5loQlqHhEB3PQm0VU6QV88GgIPk4LRXmLGVsre0A9stLAwPtlMM44cWVztPSa2vBLFyxu0aVffKDhGWCYnICZ1sBQPjNukJpUxcyfIOWn8hNNm7ry/lYPJiLxoz9eCfyxUY3jrTYUXhP06Lck+q4SH+hIhszWiOEnQeD/GXHtc3UEwYlMFbacN6HGQL9Fwfx3R2rgnQ3tuyqHPOZXELLWNXAqRSc/BB5zCg+KU5lK6XmYV2PtFq38YhTGdfuGZ70HWhMgoxcAJLKPgYbnQPFqopymR3D292uFKkrpdrye2DbWLseuue1rUyHI8SkoyUwJ5YNv5GpF7U/tHEthfTaWsBDizrQo5UBYiJpMo2xeCw++mIf1liAomlEYZ/I1c5I/PJnFAz9mDj7wmjtX/A/ifE5vFJ5ABQAAAABJRU5ErkJggg==");
            }
           
        }
    }
    
    setTimeout(() => {Dados()}, 1);
    
    // var recepcao = "false";
    // var Admin ="false";
    // var Vet ="false";
    // var finan="false";
    var ButtonClinica="false";
    var ButtonPetShop="false";
    var ButtonHotel ="false";
    var ButtonPasseador = "false";
    var btnCEP = "false";
    var Latitude = "";
    var Longitude = "";
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

    var idResp = "";
    var idFunc = "";
    var idHorarioPrest = "";
    var idConta = "";

    async function Aparecer(){
        var erro= document.getElementById("valida2");

        let response="";
        try {
            response = await api.post('https://agendaback.herokuapp.com/Prestador/BuscaPrest');
        } catch (error) {
            console.log(error);               
        }   

        console.log(response);

        if(response){
            if(response.data.response){
                var dados = response.data.response.Prestadores;

                var NomeFantasia = document.getElementById("NomeFantasia");
                var cep = document.getElementById("cep");
                var numero = document.getElementById("numero");
                var desc = document.getElementById("desc");
                var cnpj = document.getElementById("cnpj");
                var email = document.getElementById("emailPrest");
                var celular = document.getElementById("celular");

                NomeFantasia.value = dados[0].NomeFantsPrest;
                cep.value = dados[0].CepPrest;
                numero.value = dados[0].NumPrest;
                desc.value = dados[0].descricaoPrest;
                cnpj.value = dados[0].CnpjPrest;
                email.value = dados[0].EmailPrest;
                celular.value = dados[0].CelularPrest;


                if(dados[0].EmergenciaPrest === "true"){
                    var buttonEmergSim = document.getElementById("EmergenciaSim");
                    buttonEmergSim.style.backgroundColor="#009fe3";
                    buttonEmergSim.style.color="#fff";
                    ButtonEmergenciaSim="true";
                    Emergencia = "true";
                }else{
                    var buttonEmergNao = document.getElementById("EmergenciaNao");
                    buttonEmergNao.style.backgroundColor="#009fe3";
                    buttonEmergNao.style.color="#fff";
                    ButtonEmergenciaNao="true";
                    Emergencia = "false";
                }

                if(dados[0].OngPrest === "true"){
                    var buttonOngSim = document.getElementById("OngSim");
                    buttonOngSim.style.backgroundColor="#009fe3";
                    buttonOngSim.style.color="#fff";
                    ButtonOngSim="true";
                    Ong = "true";
                }else{
                    var buttonOngNao = document.getElementById("OngNao");
                    buttonOngNao.style.backgroundColor="#009fe3";
                    buttonOngNao.style.color="#fff";
                    ButtonOngNao="true";
                    Ong = "Nãfalseo";
                }

               
                var buttonClinica = document.getElementById("Clinica");
                if(dados[0].ClinicaPrest === "true"){
                    buttonClinica.style.backgroundColor="#009fe3";
                    buttonClinica.style.color="#fff";  
                    ButtonClinica="true"; 
                }else{          
                    buttonClinica.style.color="#009fe3";
                    buttonClinica.style.border="1px solid #009fe3";
                    buttonClinica.style.background="#fff";                    
                    ButtonClinica ="false";
                }      

                var buttonPetShop = document.getElementById("PetShop");
                if(dados[0].PetShopPrest === "true"){
                    buttonPetShop.style.backgroundColor="#009fe3";
                    buttonPetShop.style.color="#fff";
                    ButtonPetShop="true";
                }else{  
                    buttonPetShop.style.color="#009fe3";
                    buttonPetShop.style.border="1px solid #009fe3";
                    buttonPetShop.style.background="#fff";
                    ButtonPetShop="false";
                }
                
                var buttonHotel = document.getElementById("Hotel");
                if(dados[0].HotelPrest === "true"){
                    buttonHotel.style.backgroundColor="#009fe3";
                    buttonHotel.style.color="#fff";
                    ButtonHotel="true";
                }else{ 
                    buttonHotel.style.color="#009fe3";
                    buttonHotel.style.border="1px solid #009fe3";
                    buttonHotel.style.background="#fff";
                    ButtonHotel="false";
                }
                
            
                var buttonPasseador= document.getElementById("Passeador");
                if(dados[0].PasseadorPrest  === "true"){
                    buttonPasseador.style.backgroundColor="#009fe3";
                    buttonPasseador.style.color="#fff";
                    ButtonPasseador="true";
                    
                }else{
                    buttonPasseador.style.color="#009fe3";
                    buttonPasseador.style.border="1px solid #009fe3";
                    buttonPasseador.style.background="#fff";
                    ButtonPasseador="false";
                }
                

                if(dados[0].ContaCont !== "" && dados[0].BancoCont !== "" && dados[0].AgenciaCont !== "" && dados[0].TipoCont !== ""){
                    var buttonConta = document.getElementById("Conta");
                    var divConta =document.getElementById("DivConta");
                    var Banco = document.getElementById("Banco");
                    var Agencia = document.getElementById("Agencia");
                    var Conta = document.getElementById("NumConta");
                    var buttonPoupa = document.getElementById("Poupanca");
                    var buttonCorrent = document.getElementById("Corrente");

                    buttonConta.style.backgroundColor="#009fe3";
                    buttonConta.style.color="#fff";
                    ButtonConta="true";
                    divConta.style.display="block";

                    Banco.value = dados[0].BancoCont;
                    Agencia.value = dados[0].AgenciaCont;
                    Conta.value = dados[0].ContaCont ;
                    
                    if(dados[0].innerHTML === "Poupanca"){
                        buttonPoupa.style.backgroundColor="#009fe3";
                        buttonPoupa.style.color="#fff";
                        ButtonPoupanca="true";
                    }else{
                        buttonCorrent.style.backgroundColor="#009fe3";
                        buttonCorrent.style.color="#fff";
                        ButtonCorrente="true";
                    }

                }else if(dados[0].CartCont !== ""){
                    var CodWibx = document.getElementById("CodWibx");
                    var buttonWibx = document.getElementById("Wibx");
                    var divWibx =document.getElementById("DivWibx");

                    buttonWibx.style.backgroundColor="#009fe3";
                    buttonWibx.style.color="#fff";
                    divWibx.style.display="block"; 
                    ButtonWibx="true";
                    CodWibx.value = dados[0].CartCont;

                }else if(dados[0].CieloCont !== ""){
                    var CodCielo = document.getElementById("CodCielo"); 
                    var buttonCielo = document.getElementById("Cielo");
                    var divCielo=document.getElementById("DivCielo");

                    buttonCielo.style.backgroundColor="#009fe3";
                    buttonCielo.style.color="#fff";
                    ButtonCielo="true";
                    divCielo.style.display="block"; 
                    CodCielo.value = dados[0].CieloCont;
                }


                if(dados[0].SegundInicio !== "" && dados[0].SegundInicio !== null && dados[0].SegundFinal !== "" && dados[0].SegundFinal !== null){
                    var segundaInicio = document.getElementById("segundaInicio");
                    var segundaFinal = document.getElementById("segundaFinal");
                    var segunda = document.getElementById("segunda");
 		    var pSegunda = document.getElementById("pSegunda");

                    segunda.checked = true;
                    segundaInicio.style.display="block";  
                    segundaInicio.value = dados[0].SegundInicio;
                    segundaFinal.style.display="block";  
                    segundaFinal.value = dados[0].SegundFinal;  
		pSegunda.style.display="block";   
                }

                if(dados[0].TercaInicio !== "" && dados[0].TercaInicio !== null && dados[0].TercaFinal !== "" && dados[0].TercaFinal !== null){
                    var tercaInicio = document.getElementById("tercaInicio");
                    var tercaFinal = document.getElementById("tercaFinal");
                    var terca = document.getElementById("terca");
 var pTerca = document.getElementById("pTerca");

                    terca.checked = true;
                    tercaInicio.style.display="block";  
                    tercaInicio.value = dados[0].TercaInicio;
                    tercaFinal.style.display="block";  
                    tercaFinal.value = dados[0].TercaFinal;  
 pTerca.style.display="block"; 
                }

                if(dados[0].QuartInicio !== "" && dados[0].QuartInicio !== null && dados[0].QuartFinal !== "" && dados[0].QuartFinal !== null){
                    var quartaInicio = document.getElementById("quartaInicio");
                    var quartaFinal = document.getElementById("quartaFinal");
                    var quarta = document.getElementById("quarta");
 var pQuarta = document.getElementById("pQuarta");

                    quarta.checked = true;
                    quartaInicio.style.display="block";  
                    quartaInicio.value = dados[0].QuartInicio;
                    quartaFinal.style.display="block";  
                    quartaFinal.value = dados[0].QuartFinal; 
  pQuarta.style.display="block";  
                }

                if(dados[0].QuintInicio !== "" && dados[0].QuintInicio !== null && dados[0].QuintFinal !== "" && dados[0].QuintFinal !== null){
                    var quintaInicio = document.getElementById("quintaInicio");
                    var quintaFinal = document.getElementById("quintaFinal");
                    var quinta = document.getElementById("quinta");
 var pQuinta = document.getElementById("pQuinta");

                    quinta.checked = true;
                    quintaInicio.style.display="block";  
                    quintaInicio.value = dados[0].QuintInicio;
                    quintaFinal.style.display="block";  
                    quintaFinal.value = dados[0].QuintFinal;   
pQuinta.style.display="block";         
                }

                if(dados[0].SextInicio !== "" && dados[0].SextInicio !== null && dados[0].SextFinal !== "" && dados[0].SextFinal !== null){
                    var sextaInicio = document.getElementById("sextaInicio");
                    var sextaFinal = document.getElementById("sextaFinal");
                    var sexta = document.getElementById("sexta");
 var pSexta = document.getElementById("pSexta");

                    sexta.checked = true;
                    sextaInicio.style.display="block";  
                    sextaInicio.value = dados[0].SextInicio;
                    sextaFinal.style.display="block";  
                    sextaFinal.value = dados[0].SextFinal;
 pSexta.style.display="block";   
                }

                if(dados[0].SabInicio !== "" && dados[0].SabInicio !== null && dados[0].SabFinal !== "" && dados[0].SabFinal !== null){
                    var sabadoInicio = document.getElementById("sabadoInicio");
                    var sabadoFinal = document.getElementById("sabadoFinal");
                    var sabado = document.getElementById("sabado");
 var pSabado = document.getElementById("pSabado");    
pSabado.style.display="block";

                    sabado.checked = true;
                    sabadoInicio.style.display="block";  
                    sabadoInicio.value = dados[0].SabInicio;
                    sabadoFinal.style.display="block";  
                    sabadoFinal.value = dados[0].SabFinal;   
                }

                if(dados[0].DomingInicio !== "" && dados[0].DomingInicio !== null && dados[0].DomingFinal !== "" && dados[0].DomingFinal !== null){
                    var domingoInicio = document.getElementById("domingoInicio");
                    var domingoFinal = document.getElementById("domingoFinal");
                    var domingo = document.getElementById("domingo");
 var pDomingo = document.getElementById("pDomingo");   

                    domingo.checked = true;
                    domingoInicio.style.display="block";  
                    domingoInicio.value = dados[0].DomingInicio;
                    domingoFinal.style.display="block";  
                    domingoFinal.value = dados[0].DomingFinal;  
 pDomingo.style.display="block";  
                }  

                var nomeResp = document.getElementById("nome");
                var cpfResp = document.getElementById("cpf");
                var emailResp = document.getElementById("email");
                var numResp = document.getElementById("num");

                nomeResp.value = dados[0].NomeResp;
                cpfResp.value = dados[0].CpfResp;
                numResp.value = dados[0].CelResp;
                emailResp.value = dados[0].EmailFunc;
                


                idResp = dados[0].idResp;
                idFunc = dados[0].idFunc;
                idHorarioPrest = dados[0].idHorarioPrest; 
                idConta = dados[0].idConta;


                let responseServ= "";
                try{
                    responseServ= await api.post('https://agendaback.herokuapp.com/Prestador/BuscaServicoPrest');
                }catch(erro){
                    console.log(erro)
                }

                if(responseServ){
                    if(responseServ.data.response){
                        var servico =responseServ.data.response.Servicos;

                        for(let i=0; i < servico.length;i++){
                            var tbody = document.getElementById("tobdy");
                            var tr = document.createElement("tr");
                            var div = document.createElement("div");
                            var div1 = document.createElement("div");
                            var div2 = document.createElement("div");
                            var div3 = document.createElement("div");
                            var div4 = document.createElement("div");
                            var div5 = document.createElement("div");
                            var div6 = document.createElement("div");
                            var inputNome= document.createElement("input");
                            var spanValor= document.createElement("span");
                            var inputValor= document.createElement("input");
                            
                            var buttonEditar = document.createElement("button");    
                            var buttonExcluir = document.createElement("button");       
            
                            tr.style.width="100%";
                            div.className="row";
                            div1.className="col-md-5";
                            div2.className="col-md-5";
                            div2.style.verticalAlign = "middle";
                            div2.style.display = "inline-grid";
                                // <CurrencyInput  className="form-control"  id="inputValor3" precision="3" decimalSeparator="," thousandSeparator="." prefix="$ "/>

                            inputNome.value= servico[i].tipoServ;
                            inputNome.setAttribute("type","text");
                            inputNome.setAttribute("id", "inputNome" + servico[i].idServ);
                            inputNome.setAttribute("placeholder","Nome");
                            inputNome.className="form-control";
                            inputNome.style.display ="block";   

                            div3.className="input-group col-md-3";                                                
                            div4.className="input-group-prepend";

                            spanValor.className="input-group-text";
                            spanValor.innerHTML="R$";

                            inputValor.value= servico[i].valorServ;
                            inputValor.setAttribute("type","text");
                            inputValor.setAttribute("id","inputValor" + servico[i].idServ);
                            inputValor.setAttribute("placeholder","Valor");
                            inputValor.className="form-control";

                            div5.style.textAlign ="center";   
                            div5.className="col-md-2";
                            div6.style.textAlign ="center";   
                            div6.className="col-md-2";

                            buttonEditar.setAttribute("id", i.toString() );
                            buttonEditar.onclick = function() { Editar(servico[i].idServ) };
                            buttonEditar.className="btn btn-primary btnEditShop";
                            buttonEditar.innerHTML="Editar";
                            buttonEditar.style.height ="auto";   
                            buttonEditar.style.width ="100%";   
                            buttonEditar.setAttribute("type","submit");

                            buttonExcluir.setAttribute("id", i.toString() );
                            buttonExcluir.onclick = function() { Excluir(servico[i].idServ) };
                            buttonExcluir.className="btn btn-primary btnEditShop";
                            buttonExcluir.innerHTML="Excluir";
                            buttonExcluir.style.height ="auto";   
                            buttonExcluir.style.width ="100%";   
                            buttonExcluir.setAttribute("type","submit");
            
                            div6.appendChild(buttonExcluir);
                            div5.appendChild(buttonEditar);
                            div4.appendChild(spanValor);
                            div3.appendChild(div4);
                            div3.appendChild(inputValor);
                            div2.appendChild(inputNome);
                            // div1.appendChild(div2);

                            // div.appendChild(div1);
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
                        }else if(response.data.error === "falha na autenticação do token"){
                            erro.value = "Tente Novamente";
                            setTimeout(() => {window.location.href="/"}, 1);
                        }
                    }
                }              
            }

            if(response.data.error){
                if(response.data.error ==="erro sql"){
                    erro.innerHTML ="Tente novamente"
                }else if(response.data.error === "falha na autenticação do token"){
                    erro.value = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 1);
                }
            } 
        }
    }

    setTimeout(() => {Aparecer()}, 1);
    
    async function Salvar(){
        var erro= document.getElementById("valida2");
        var button = document.getElementById("buttonSalvar");
        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");
        
        var nomeResp = document.getElementById("nome").value;
        var cpfResp = document.getElementById("cpf").value;
        var emailResp = document.getElementById("email").value;
        var numResp = document.getElementById("num").value;

        var NomeFantasia = document.getElementById("NomeFantasia").value;
        var cep = document.getElementById("cep").value;
        var numero = document.getElementById("numero").value;
        var desc = document.getElementById("desc").value;
        var cnpj = document.getElementById("cnpj").value;
        var email = document.getElementById("emailPrest").value;
        var celular = document.getElementById("celular").value;

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


        if(idResp === "" && idFunc === "" & idHorarioPrest === "" && idConta === ""){
            erro.innerHTML ="Tente Novamente";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(nomeResp === "" || nomeResp === null || nomeResp === undefined ) {
            erro.innerHTML ="Preencha o campo Nome Responsável";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(cpfResp=== "" || cpfResp === null || cpfResp === undefined ) {
            erro.innerHTML ="Preencha o campo CPF Responsável";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(emailResp === "" || emailResp === null || emailResp === undefined ) {
            erro.innerHTML ="Preencha o campo Email Responsável";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(numResp=== "" || numResp === null || numResp === undefined ) {
            erro.innerHTML ="Preencha o campo Celular Responsável";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(NomeFantasia === "" || NomeFantasia === null || NomeFantasia === undefined ) {
            erro.innerHTML ="Preencha o campo Nome Empresa";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(desc === "" || desc === null || desc === undefined ) {
            erro.innerHTML ="Preencha o campo Descrição Empresa";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(email === "" || email === null || email === undefined ) {
            erro.innerHTML ="Preencha o campo Email Empresa";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(celular === "" || celular === null || celular === undefined ) {
            erro.innerHTML ="Preencha o campo Celular Empresa";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(cnpj === "" || cnpj === null || cnpj === undefined ) {
            erro.innerHTML ="Preencha o campo CNPJ Empresa";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
        }else if(btnCEP === "true"){
            if (numero === "" || numero === null || numero === undefined) {    
                erro.innerHTML = "Preencha o campo Número Empresa";
                button.innerText="Salvar";
                button.removeAttribute("disabled");
            }else if (ButtonClinica === "false" && ButtonPetShop === "false" && ButtonHotel=== "false" && ButtonPasseador=== "false") {
                erro.innerHTML = "Escolha uma atuação";
                button.innerText="Salvar";
                button.removeAttribute("disabled");
            }else{
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
                }else if(ButtonEmergenciaSim === "false" && ButtonEmergenciaNao === "false"){
                    erro.innerHTML = "Selecione se é 24horas.";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }else if(ButtonOngSim === "false" && ButtonOngNao === "false"){
                    erro.innerHTML = "Selecione se é ONG";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }else if( ButtonConta === "false" && ButtonCielo === "false" && ButtonWibx === "false"){
                    erro.innerHTML = "Escolha um tipo de conta";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }else{  
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
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else if (Agencia === "" || Agencia === null || Agencia === undefined) {
                            erro.innerHTML = "Preencha o campo Agencia";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else if(Conta === "" || Conta === null || Conta === undefined) {
                            erro.innerHTML = "Preencha o campo Conta";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else if(ButtonCorrente === "false" && ButtonPoupanca === "false"){ 
                            erro.innerHTML = "Selecione um tipo de conta";
                            button.innerText="Salvar";
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

                    if(ButtonCielo === "true"){
                        if (CodCielo === "" || CodCielo === null || CodCielo === undefined) {
                            erro.innerHTML = "Preencha o campo do Codigo da Cielo";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else{
                            ButtonCielo= "Pendente";
                        }
                    }

                    if(ButtonWibx === "true"){
                        if (CodWibx === "" || CodWibx === null || CodWibx === undefined) {
                            erro.innerHTML = "Preencha o campo do Codigo da Wibx";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else{                            
                            ButtonConta= "Pendente";
                        }
                    }

                    if(ButtonConta === "Pendente" || ButtonWibx === "Pendente" || ButtonCielo === "Pendente"){                    
                        
                        button.innerText="Aguardando";
                        button.setAttribute("disabled","disabled");

                        console.log("chegou");                       

                        let response="";
                        console.log(idResp);
                        try {
                            response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarPrest',{EmailPrest:email,EmergenciaPrest:Emergencia,CnpjPrest:cnpj,CelularPrest:celular,ContaCont:Conta,BancoCont:Banco,AgenciaCont:Agencia,TipoCont:tipo,CartCont:CodWibx,CieloCont:CodCielo,idCont:idConta,SegundInicio:segundaInicio.value,SegundFinal:segundaFinal.value, TercaInicio:tercaInicio.value, TercaFinal:tercaFinal.value, QuartInicio:quartaInicio.value, QuartFinal:quartaFinal.value, QuintInicio:quintaInicio.value, QuintFinal:quintaFinal.value, SextInicio:sextaInicio.value, SextFinal:sextaFinal.value, SabInicio:sabadoInicio.value, SabFinal:sabadoFinal.value, DomingInicio:domingoInicio.value, DomingFinal:domingoFinal.value,idHorarioPrest:idHorarioPrest,NomeFantsPrest:NomeFantasia,PetShopPrest:ButtonPetShop,ClinicaPrest:ButtonClinica,PasseadorPrest:ButtonPasseador,HotelPrest:ButtonHotel,CepPrest:cep,NumPrest:numero,descricaoPrest:desc,latitude:Latitude,longitude:Longitude,NomeResp:nomeResp,CpfResp:cpfResp,CelResp:numResp,idResp:idResp,EmailFunc:emailResp,idFunc:idFunc});
                        } catch (error) {
                            console.log(error);               
                        }

                        console.log(response);  
                        
                        if(response){
                            if(response.data.message){
                                if(response.data.message === "Alterado"){
                                    erro.style.color = "#09ff00";      
                                    erro.style.fontWeight= "700";
                                    erro.innerHTML="Aletrado com sucesso";
                                    setTimeout(() => {window.location.href="/EditarPerfil"}, 2000);
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
        }else{
            erro.innerHTML = "Reescreva seu CEP";
            button.innerText="Salvar";
            button.removeAttribute("disabled");
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

    async function Clinica(){
        var button = document.getElementById("Clinica");
        if(ButtonClinica === "true"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";                    
            ButtonClinica ="false";
        }else{          
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";  
            ButtonClinica="true"; 

            var erro= document.getElementById("clinicaValida");

            let response= "";

            try {
                response = await api.post('https://agendaback.herokuapp.com/Funcionario/FuncClinica');
            } catch (error) {
                console.log(error);               
            }
            
            if(response){
                if(response.data.message){
                    if(response.data.message === "Usuario inexistente"){
                        erro.innerHTML = "Você terá que cadastrar um funcionário que seja veterinário antes";
                        setTimeout(() => {window.location.href="/CadastroFuncionario"}, 2000);
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

    function PetShop(){
        var button = document.getElementById("PetShop");
        if(ButtonPetShop === "true"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";
            ButtonPetShop="false";
        }else{  
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPetShop="true";
        }
    }

    function Hotel(){
        var button = document.getElementById("Hotel");
        if(ButtonHotel === "true"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";
            ButtonHotel="false";
        }else{ 
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonHotel="true";
        }
    }

    function Passeador(){
        var button = document.getElementById("Passeador");
        if(ButtonPasseador === "true"){
            button.style.color="#009fe3";
            button.style.border="1px solid #009fe3";
            button.style.background="#fff";
            ButtonPasseador="false";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPasseador="true";
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
        btnCEP = "false";
        var array = [];
        var num =0;
        var novo =0;
        var erro = document.getElementById("valida2");
        var cep = document.getElementById("cep").value;
        
        var DivEstado = document.getElementById("DivEstado");
        var DivCidade = document.getElementById("DivCidade");
        var DivBairro = document.getElementById("DivBairro");
        var DivRua = document.getElementById("DivRua");

        erro.innerHTML= "";
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
                        btnCEP = "false";
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
                    btnCEP = "true";
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
            btnCEP = "false";
            return false;
        }        
    }

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

    async function Excluir(id){ 
        let response= "";
        var erro= document.getElementById("valida");

        try{
            response= await api.post('https://agendaback.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:id});
        }catch(erro){
            console.log(erro);
        }

        if(response){
            if(response.data.message){
                if(response.data.message === "excluido"){
                    erro.innerHTML ="Exluído com sucesso";
                    window.location.href="/EditarPerfil";
                }
            }
            if(response.data.error){
                if(response.data.error === "erro sql"){
                    erro.innerHTML ="Tente novamente";
                }else if(response.data.error === "falha na autenticação do token"){
                    erro.value = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 2000);
                }
            }
        }
    }

    async function Editar(id){ 
        let response= "";
        var erro= document.getElementById("valida");
        var inputNome= document.getElementById("inputNome" + id);
        var inputValor= document.getElementById("inputValor" + id);

        if (inputNome.value === "" || inputNome.value === null || inputNome.value === undefined ) {
            inputNome.value = "Preencha o campo Nome";
        }else if (inputValor.value === "" || inputValor.value === null || inputValor.value === undefined ) {
            inputValor.value = "Preencha o campo valor";
        }
        else{
            inputValor.setAttribute("disabled","disabled");
            inputNome.setAttribute("disabled","disabled");

            inputValor.value= inputValor.value.replace(/,/g, '.');

            try{
                response = await api.post('https://agendaback.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: inputNome.value, valorServ:inputValor.value, idServ:id});
            }catch(erro){
                console.log(erro);
            }
    
            if(response){
                if(response.data.message){
                    if(response.data.message === "alterado"){
                        erro.innerHTML = "Alterado com sucesso";
                        window.location.href="/EditarPerfil";
                    }
                }

                if(response.data.error){
                    if(response.data.error === "erro sql"){
                        erro.innerHTML ="Tente novamente";
                    }else if(response.data.error === "falha na autenticação do token"){
                        erro.value = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }
                }
            }
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
                        <li class="nav-item active" id="Home" style={{display:'block'}}>
                            <a class="nav-link" href="/Home">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={inicio} alt=""/> 
                            <p style={{textAlign: '-webkit-center'}}>Inicio</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Calen" style={{display:'none'}}>
                            <a class="nav-link" href="/Calendario">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={calendario} alt=""/>
                            <p style={{textAlign: '-webkit-center'}}>Calendário</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Func" style={{display:'none'}}>
                            <a class="nav-link" href="/Funcionarios">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'11%',height:'5%'}} src={funcionario} alt=""/>
                            <p style={{textAlign: '-webkit-center'}}>Funcionários</p>
                            </a>
                        </li>
                        {/* <li class="nav-item " id="Shop" style={{display:'none'}}>
                            <a class="nav-link" href="/Shopping">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={shop}/>
                            <p style={{textAlign: '-webkit-center'}}>Shopping</p>
                            </a>
                        </li> */}
                        <li class="nav-item " id="Med" style={{display:'none'}}>
                            <a class="nav-link" href="/Medicacao">
                            <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={medicacao} alt=""/>
                            <p style={{textAlign: '-webkit-center'}}>Medicações</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Vac" style={{display:'none'}}>
                            <a class="nav-link" href="Vacina">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={vacinas} alt=""/>
                            <p style={{textAlign: '-webkit-center'}}>Vacinas</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Pront" style={{display:'none'}}>
                            <a class="nav-link" href="/Prontuarios">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={prontuarios} alt=""/>
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
                            <a className="navbar-brand" href="#pablo" >Editar Perfil</a>
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
                                    <div className="card-body">
                                        <label className="bmd-label-floating" style={{   color:"#009fe3",textAlign: "center", width: '100%',fontSize: '20px',fontWeight: '500'}}>Responsável</label>      
                                    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color:'#009fe3'}}>Nome:</label>
                                                <input type="text" class="form-control" placeholder="Nome" id="nome" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color:'#009fe3'}}>Email:</label>
                                                <input type="text" className="form-control" id="email" placeholder="Email" disabled/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color:'#009fe3'}}>CPF:</label>
                                                <InputMask type="text"  mask = "999.999.999-99" className="form-control" id="cpf" placeholder="CPF" maskChar="" disabled/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color:'#009fe3'}}>Celular:</label>
                                                <InputMask type="text"  mask = "(99) 99999 -9999" className="form-control" id="num" placeholder="Número" maskChar="" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    {/* //////////////////////////// PRESTADORES //////////////////////// */}
                                    <div className="card-body">
                                        <label className="bmd-label-floating" style={{   color:"#009fe3",textAlign: "center", width: '100%',fontSize: '20px',fontWeight: '500'}}>Prestadores</label>      
                                        {/* <form> */}
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                    <label style={{color:'#009fe3'}}>Nome</label>
                                                            <input type="text" className="form-control" id="NomeFantasia" placeholder="Nome"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                    <label style={{color:'#009fe3'}}>CNPJ</label>
                                                    <input type="text" className="form-control" id="cnpj" placeholder="CNPJ" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                    <label style={{color:'#009fe3'}}>Telefone</label>
                                                        <InputMask type="text"  mask = "(99) 99999 -9999" className="form-control" id="celular" placeholder="Número" maskChar=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                    <label style={{color:'#009fe3'}}>Email</label>
                                                        <input type="text" className="form-control" id="emailPrest" placeholder="Email" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Descrição da Empresa</label>
                                                        <textarea class="form-control" rows="2" id="desc" placeholder="Descrição"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label style={{color:'#009fe3'}}>Fica aberto 24h?</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">    
                                                            <button type="submit" className="btnCadFunc" onClick={EmergenciaSim} id="EmergenciaSim" >Sim</button>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <button type="submit" className="btnCadFunc" onClick={EmergenciaNao} id="EmergenciaNao" >Não</button>
                                                            <div class="clearfix"></div>                                                   
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label style={{color:'#009fe3'}}>É ONG?</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">  
                                                            <button type="submit" className="btnCadFunc" onClick={OngSim} id="OngSim" >Sim</button>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <button type="submit" className="btnCadFunc" onClick={OngNao} id="OngNao" >Não</button>
                                                            <div class="clearfix"></div>                                                   
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
                <input type="time" id="segundaInicio" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
            </div>
            <div className="col-md-6">
            <input type="time" id="segundaFinal" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
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
            <input type="time" id="tercaInicio" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>  
            </div>
            <div className="col-md-6">
            <input type="time" id="tercaFinal" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
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
            <input type="time" id="quartaInicio" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
            </div>
            <div className="col-md-6">
            <input type="time" id="quartaFinal" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
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
            <input type="time" id="quintaInicio" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
            </div>
            <div className="col-md-6">
            <input type="time" id="quintaFinal" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
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
            <input type="time" id="sextaInicio" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
            </div>
            <div className="col-md-6">
            <input type="time" id="sextaFinal" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
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
            <input type="time" id="sabadoInicio" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
            </div>
            <div className="col-md-6">
            <input type="time" id="sabadoFinal" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
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
            <input type="time" id="domingoInicio" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
            </div>
            <div className="col-md-6">
            <input type="time" id="domingoFinal" className="form-control" style={{width: '100%',backgroundImage:"linear-gradient(to top, #009fe3  2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #009fe3 1px, rgba(210, 210, 210, 0) 1px)",display:'none'}}/>
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
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Área de atuação:</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3">  
                                                    <button type="submit" className="btnCadFunc" id="Clinica" onClick={Clinica}>Clinica</button>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" className="btnCadFunc" id="PetShop"  onClick={PetShop}>PetShop</button>
                                                    <div className="clearfix"></div>                                                   
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" className="btnCadFunc" id="Hotel" onClick={Hotel}>Hotel</button>
                                                    <div className="clearfix"></div>                                                   
                                                </div> 
                                                <div className="col-md-3">
                                                    <button type="submit" className="btnCadFunc" id="Passeador" onClick={Passeador}>Passeador</button>
                                                    <div className="clearfix"></div>                                                   
                                                </div> 

                                                <div className="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px',marginTop:'1%',textAlign: 'center'}} id="clinicaValida"></p>                                                                          
                                                </div> 
                                                
                                                
                                            </div>
                                            <br/>   
                    
                                            
                                            <div className="row" >
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',marginBottom:'0px'}}>CEP do estabelecimento:</label>
                                                            <InputMask type="text"  mask = "99999-999" onChange={getCepInfo} className="form-control"  placeholder="CEP" id="cep"  maskChar=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row" style={{display:'none'}} id="DivEstado">
                                            <br/>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',marginBottom:'0px'}}>Seu estado é? </label>
                                                            <input type="text" className="form-control" placeholder="Estado" id="estado" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row" style={{display:'none'}} id="DivCidade">
                                            <br/>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',marginBottom:'0px'}}>Sua cidade é? </label>
                                                        <input type="text" className="form-control" placeholder="Cidade" id="cidade"  disabled/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row" style={{display:'none'}} id="DivBairro">
                                            <br/>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',marginBottom:'0px'}}>Seu bairro é? </label>
                                                            <input type="text" className="form-control" placeholder="Bairro" id="bairro" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{display:'none'}} id="DivRua">
                                            <br/>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',marginBottom:'0px'}}>Sua rua é? </label>
                                                            <input type="text" className="form-control" placeholder="Rua" id="rua" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row" >
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',marginBottom:'0px'}}> Nº Loja/Estabelecimento:</label>
                                                            <input type="text" className="form-control" placeholder="Número" id="numero" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>

                                              

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label style={{color:'#009fe3'}}>Sua conta para recebimentos:</label>    <br/>             
                                                    <a style={{color:'#000000',fontWeight:'200',fontSize:'12px'}}>OBS: A conta cadastrada precisa ser a mesma do titular do CNPJ.</a>   
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
                                                    <label style={{color:'#009fe3'}}>Banco</label>
                                                            <input type="text" class="form-control" placeholder="Banco" id="Banco" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                    <label style={{color:'#009fe3'}}>Agência</label>
                                                            <input type="text" class="form-control" placeholder="Agência" id="Agencia" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                    <label style={{color:'#009fe3'}}>Código com o digíto</label>
                                                            <input type="text" class="form-control" placeholder="Conta com o digíto" id="NumConta" />
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
                                                    <label style={{color:'#009fe3'}}>Código Cielo</label>
                                                            <input type="text" class="form-control" placeholder="Codigo da Cielo" id="CodCielo" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" id="DivWibx" style={{display:'none'}}>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                    <label style={{color:'#009fe3'}}>Carteira Wibx</label>
                                                            <input type="text" class="form-control" placeholder="Carteira Wibx" id="CodWibx" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>

                                            <div className="row">
                                                <div className="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px',textAlign: 'center'}} id="valida2"></p>
                                                </div>
                                            </div>
                                            <br/> 

                                            <div className="row" style={{textAlign: '-webkit-center'}}>                                               
                                                <div className="col-md-12">                                                    
                                                    <button type="submit" className="btn btn-primary" style={{borderRadius: '30px',padding: '1% 10%'}} id="buttonSalvar" onClick={Salvar}>Salvar</button>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div> 
                                            <br/>

                                            <div className="card-body">
                                                <label className="bmd-label-floating" style={{   color:"#009fe3",textAlign: "center", width: '100%',fontSize: '20px',fontWeight: '500'}}>Serviços</label>      
                                            
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="profile">
                                                                <table className="table" style={{marginBottom:'0px'}} id="table">
                                                                    <tbody id="tobdy">                                                    
                                                                        {/* <tr style={{width: '100%'}}>
                                                                            <div className="row" id="div">
                                                                                <div className="col-md-5">                                                                
                                                                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                                        <input type="text" className="form-control"  id="inputNome2" placeholder="Nome" style={{display:'block'}}/>                                                        
                                                                                    </div>
                                                                                </div>
                                                                                <div class="input-group col-md-3">
                                                                                    <div class="input-group-prepend">
                                                                                        <span class="input-group-text">R$</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control"  id="inputValor2" placeholder="Valor" />
                                                                                </div>
                                                                                {/* <div className="row" id="div"> 
                                                                                    <div className="col-md-2" style={{textAlign: 'center'}}>
                                                                                        <button type="submit" className="btn btn-primary btnEditShop" style={{width:'100%',height:"auto"}} id="B" >Editar</button>
                                                                                    </div>
                                                                                    <div className="col-md-2" style={{textAlign: 'center'}}>
                                                                                        <button type="submit" className="btn btn-primary btnEditShop"  style={{width:'100%',height:"auto"}}  id="button1" >Excluir</button>
                                                                                    </div>
                                                                                {/* </div> 
                                                                            </div>
                                                                        </tr>  */}                                             
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>

                                            <br/> 
                                            <div className="row">
                                                <div className="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px',textAlign: 'center'}} id="valida"></p>
                                                </div>
                                            </div>
                                            
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