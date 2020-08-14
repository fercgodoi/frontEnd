import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api from '../services/api2.js';

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuario_branco.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

import "../js/menu.js";


export default function VisualizarProntuario(){
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

                if(dados[2] === "0" && dados[4] === "0" ){
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
            response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/BuscarPrest2');
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
            if(produto.PetShopPrest === "Sim"){
                nomeTipo= nomeTipo + "PetShop";
            }
            if(produto.ClinicaPrest === "Sim"){
                nomeTipo= nomeTipo + " Clinica";
            }
            if(produto.OngPrest === "Sim"){
                nomeTipo= nomeTipo + " ONG";
            }
            if(produto.PasseadorPrest === "Sim"){
                nomeTipo= nomeTipo + " Passeador";
            }
            if(produto.HotelPrest === "Sim"){
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

    async function Aparecer(){
        var erro = document.getElementById("valida");
        var id= localStorage.getItem('Codigo');

        if(id === "" || id === null || id=== undefined){
            erro.innerText = "Tente Novamente";
        }
        else{

            let response="";
            try {
                response = await api.post('https://agendaanimal-backend.herokuapp.com/Prontuario/BuscarInfo', {idConst:id});
            } catch (error) {
                console.log(error);               
            }  
            console.log(response)


            if(response){
                if(response.data.response){
                    var produto = response.data.response.Prontuario;
                    var nomePrest= document.getElementById("nomePrest");
                    var nomeFunc= document.getElementById("nomeFunc");
                    var rgPet= document.getElementById("rgPet");
                    var nomePet= document.getElementById("nomePet");
                    var nomeVacina= document.getElementById("nomeVacina");
                    var qntDoseVacina= document.getElementById("qntDoseVacina");
                    var loteVacina= document.getElementById("loteVacina");
                    var observacaoVacina= document.getElementById("observacaoVacina");
                    var nomeVetVacina= document.getElementById("nomeVetVacina");
                    var emailVetVacina= document.getElementById("emailVetVacina");
                    var crmvVetVacina= document.getElementById("crmvVetVacina");
                    var dataConst= document.getElementById("dataConst");
                    var dataProxVacina= document.getElementById("dataProxVacina");
                    var dataApliVacina= document.getElementById("dataApliVacina");
                    var nomeMed= document.getElementById("nomeMed");
                    var doseMed= document.getElementById("doseMed");
                    var loteMed= document.getElementById("loteMed");
                    var observacaoMed= document.getElementById("observacaoMed");
                    var rotinaMed= document.getElementById("rotinaMed");
                    var nomeEstbMed= document.getElementById("nomeEstbMed");
                    var emailEstbMed= document.getElementById("emailEstbMed");
                    var dataIniMed= document.getElementById("dataIniMed");
                    var dataFinMed= document.getElementById("dataFinMed");
    
    
                    var Medicacao = document.getElementById("Medicacao");
                    var Vacina = document.getElementById("Vacina");
                    var Exame = document.getElementById("Exame");
    
                    var dateInicio= "";
                    var dateCorreto= "";
                    var dateInicioApliMed= "";
                    var dateCorretoApliMed =   "";             
                    var dateInicioProxMed= "";
                    var dateCorretoProxMed = "";
                    var dateInicioProxVac= "";
                    var dateCorretoProxVac ="";
                    var dateInicioApliVac= "";
                    var dateCorretoApliVac = "";
    
                    if(produto[0].idVacina !== "Não"){                       
                        var idVacinaa = produto[0].idVacina;
                        let responseVacina="";
                        try {
                            responseVacina = await api.post('https://agendaanimal-backend.herokuapp.com/Vacina/BuscarInfo', {idVacina:idVacinaa});
                        } catch (error) {
                            console.log(error);               
                        } 

                        if(responseVacina){
                            if(responseVacina.data.response){
                                var produtoVacina = responseVacina.data.response.Vacina;
                                nomePrest.value = produto[0].nomePrest;                    
                                nomeFunc.value = produto[0].nomeFunc;                    
                                rgPet.value = produto[0].rgPet;                    
                                nomePet.value = produto[0].nomePet;                   
                                nomeVacina.value = produtoVacina[0].NomeVacina;                    
                                qntDoseVacina.value = produtoVacina[0].qntDoseVacina;                    
                                loteVacina.value = produtoVacina[0].loteVacina;                    
                                observacaoVacina.value = produtoVacina[0].observacaoVacina;                    
                                nomeVetVacina.value = produtoVacina[0].nomeVetVacina;                    
                                emailVetVacina.value = produtoVacina[0].emailVetVacina;                    
                                crmvVetVacina.value = produtoVacina[0].crmvVetVacina;
                                        
                                dateInicio= produto[0].dataConst.split('', 10);
                                dateCorreto = dateInicio[0] + dateInicio[1] + dateInicio[2] + dateInicio[3] + dateInicio[4] + dateInicio[5] + dateInicio[6] + dateInicio[7] + dateInicio[8] + dateInicio[9];
                                dataConst.value = dateCorreto;                        
                                dateInicioProxVac= produtoVacina[0].dataProxVacina.split('', 10);
                                dateCorretoProxVac = dateInicioProxVac[0] + dateInicioProxVac[1] + dateInicioProxVac[2] + dateInicioProxVac[3] + dateInicioProxVac[4] + dateInicioProxVac[5] + dateInicioProxVac[6] + dateInicioProxVac[7] + dateInicioProxVac[8] + dateInicioProxVac[9];
                                dataProxVacina.value = dateCorretoProxVac;                        
                                dateInicioApliVac= produtoVacina[0].dataApliVacina.split('', 10);
                                dateCorretoApliVac = dateInicioApliVac[0] + dateInicioApliVac[1] + dateInicioApliVac[2] + dateInicioApliVac[3] + dateInicioApliVac[4] + dateInicioApliVac[5] + dateInicioApliVac[6] + dateInicioApliVac[7] + dateInicioApliVac[8] + dateInicioApliVac[9];
                                dataApliVacina.value = dateCorretoApliVac;    
                                Vacina.style.display="block";
                            }
                            if(response.data.error){
                                if(response.data.error === 'erro sql'){
                                    Vacina.style.display="none";
                                } if(response.data.error === "falha na autenticação do token"){
                                    erro.value = "Tente Novamente";
                                    setTimeout(() => {window.location.href="/"}, 2000);
                                }
                            }
                            if(response.data.message){
                                if(response.data.error === "Vacina nao encontrado"){
                                    Vacina.style.display="none";
                                }
                            }                   
                        }                        
                    }else{
                        Vacina.style.display="none";
                    }
                    ///////////////////////////////////////////////////////////////////////////////////////
                    if(produto[0].idMed !== "Não"){ 
                        var idMedd = produto[0].idMed;  
                        let responseMed="";
                        try {
                            responseMed = await api.post('https://agendaanimal-backend.herokuapp.com/Medicamento/BuscarInfo', {idMed:idMedd});
                        } catch (error) {
                            console.log(error);               
                        } 

                        if(responseMed){
                            if(responseMed.data.response){
                                var produtoMed = responseMed.data.response.Medicamento;
                                nomePrest.value = produto[0].nomePrest;
                                nomeFunc.value = produto[0].nomeFunc;
                                rgPet.value = produto[0].rgPet;
                                nomePet.value = produto[0].nomePet;
                                nomeMed.value = produtoMed[0].nomeMed;
                                doseMed.value = produtoMed[0].doseMed;
                                loteMed.value = produtoMed[0].loteMed;
                                emailEstbMed.value=produtoMed[0].emailEstbMed;
                                observacaoMed.value = produtoMed[0].observacaoMed;
                                rotinaMed.value = produtoMed[0].rotinaMed;
                                nomeEstbMed.value = produtoMed[0].nomeEstbMed;
                                
                                dateInicio= produto[0].dataConst.split('', 10);
                                dateCorreto = dateInicio[0] + dateInicio[1] + dateInicio[2] + dateInicio[3] + dateInicio[4] + dateInicio[5] + dateInicio[6] + dateInicio[7] + dateInicio[8] + dateInicio[9];
                                dataConst.value = dateCorreto;     
                                dateInicioApliMed= produtoMed[0].dataIniMed.split('', 10);
                                dateCorretoApliMed = dateInicioApliMed[0] + dateInicioApliMed[1] + dateInicioApliMed[2] + dateInicioApliMed[3] + dateInicioApliMed[4] + dateInicioApliMed[5] + dateInicioApliMed[6] + dateInicioApliMed[7] + dateInicioApliMed[8] + dateInicioApliMed[9];
                                dataIniMed.value = dateCorretoApliMed;
                                dateInicioProxMed= produtoMed[0].dataFinMed.split('', 10);
                                dateCorretoProxMed = dateInicioProxMed[0] + dateInicioProxMed[1] + dateInicioProxMed[2] + dateInicioProxMed[3] + dateInicioProxMed[4] + dateInicioProxMed[5] + dateInicioProxMed[6] + dateInicioProxMed[7] + dateInicioProxMed[8] + dateInicioProxMed[9];
                                dataFinMed.value = dateCorretoProxMed;
                            
                                Medicacao.style.display="block";
                            }
                            if(response.data.error){
                                if(response.data.error === 'erro sql'){
                                    Medicacao.style.display="none";
                                }if(response.data.error === "falha na autenticação do token"){
                                    erro.value = "Tente Novamente";
                                    setTimeout(() => {window.location.href="/"}, 2000);
                                }
                            }
                            if(response.data.message){
                                if(response.data.error === "Medicamento nao encontrado"){
                                    Medicacao.style.display="none";
                                }
                            } 
                        }
                    }
                    else{
                        Medicacao.style.display="none";
                    }
                    ////////////////////////////////////////////////////////////////////////////////////
                    if(produto[0].idExames !== "Não"){   
                        var idExamess = produto[0].idExames;
                        let responseExames="";
                        try {
                            responseExames = await api.post('https://agendaanimal-backend.herokuapp.com/Exame/BuscarInfo', {idExames:idExamess});
                        } catch (error) {
                            console.log(error);               
                        } 
                        
                        if(responseExames){
                            if(responseExames.data.response){
                                var produtoExames = responseExames.data.response.Exame;
                                nomePrest.value = produto[0].nomePrest;
                                nomeFunc.value = produto[0].nomeFunc;
                                rgPet.value = produto[0].rgPet;
                                nomePet.value = produto[0].nomePet;
                                dateInicio= produto[0].dataConst.split('', 10);
                                dateCorreto = dateInicio[0] + dateInicio[1] + dateInicio[2] + dateInicio[3] + dateInicio[4] + dateInicio[5] + dateInicio[6] + dateInicio[7] + dateInicio[8] + dateInicio[9];
                                dataConst.value = dateCorreto;
                                Exame.style.display="block";

                                var divFezes= document.getElementById("divFezes");
                                var InputFezes= document.getElementById("InputFezes");
                                var divRadiologiaSimples= document.getElementById("divRadiologiaSimples");
                                var InputRadiologiaSimples= document.getElementById("InputRadiologiaSimples");
                                var divRadiologiaContrastada= document.getElementById("divRadiologiaContrastada");
                                var InputRadiologiaContrastada= document.getElementById("InputRadiologiaContrastada");
                                var divEletrocardiograma= document.getElementById("divEletrocardiograma");
                                var InputEletrocardiograma= document.getElementById("InputEletrocardiograma");
                                var divUltrassonografiAbdominal= document.getElementById("divUltrassonografiAbdominal");
                                var InputUltrassonografiAbdominal= document.getElementById("InputUltrassonografiAbdominal");
                                var divHemogramaCompleto= document.getElementById("divHemogramaCompleto");
                                var InputHemogramaCompleto= document.getElementById("InputHemogramaCompleto");
                                var divPesquisaHemoparasitas= document.getElementById("divPesquisaHemoparasitas");
                                var InputPesquisaHemoparasitas= document.getElementById("InputPesquisaHemoparasitas");
                                var divFuncaoHepatica= document.getElementById("divFuncaoHepatica");
                                var InputFuncaoHepatica= document.getElementById("InputFuncaoHepatica");
                                var divSorologicoFIVFELV= document.getElementById("divSorologicoFIVFELV");
                                var InputSorologicoFIVFELV= document.getElementById("InputSorologicoFIVFELV");
                                var divUrina= document.getElementById("divUrina");
                                var InputUrina= document.getElementById("InputUrina");
                                var divAcidoUrico= document.getElementById("divAcidoUrico");
                                var InputAcidoUrico= document.getElementById("InputAcidoUrico");
                                var divAlbumina= document.getElementById("divAlbumina");
                                var InputAlbumina= document.getElementById("InputAlbumina");
                                var divALT= document.getElementById("divALT");
                                var InputALT= document.getElementById("InputALT");
                                var divAmilase= document.getElementById("divAmilase");
                                var InputAmilase= document.getElementById("InputAmilase");
                                var divAST= document.getElementById("divAST");
                                var InputAST= document.getElementById("InputAST");
                                var divBilirrubina= document.getElementById("divBilirrubina");
                                var InputBilirrubina= document.getElementById("InputBilirrubina");
                                var divCalcioSerico= document.getElementById("divCalcioSerico");
                                var InputCalcioSerico= document.getElementById("InputCalcioSerico");
                                var divColesterol= document.getElementById("divColesterol");
                                var InputColesterol= document.getElementById("InputColesterol");
                                var divColinesterase= document.getElementById("divColinesterase");
                                var InputColinesterase= document.getElementById("InputColinesterase");
                                var divCreatinaQuinase= document.getElementById("divCreatinaQuinase");
                                var InputCreatinaQuinase= document.getElementById("InputCreatinaQuinase");
                                var divCreatinina= document.getElementById("divCreatinina");
                                var InputCreatinina= document.getElementById("InputCreatinina");     
                                var divFerroSerico= document.getElementById("divFerroSerico");
                                var InputFerroSerico= document.getElementById("InputFerroSerico");
                                var divFosfataseAlcalina= document.getElementById("divFosfataseAlcalina");
                                var InputFosfataseAlcalina= document.getElementById("InputFosfataseAlcalina");
                                var divFosforo= document.getElementById("divFosforo");
                                var InputFosforo= document.getElementById("InputFosforo");
                                var divGama= document.getElementById("divGama");
                                var InputGama= document.getElementById("InputGama");
                                var divGlicose= document.getElementById("divGlicose");
                                var InputGlicose= document.getElementById("InputGlicose");
                                var divMagnesio= document.getElementById("divMagnesio");
                                var InputMagnesio= document.getElementById("InputMagnesio");
                                var divProteinasTotais= document.getElementById("divProteinasTotais");
                                var InputProteinasTotais= document.getElementById("InputProteinasTotais");
                                var divNAKCL= document.getElementById("divNAKCL");
                                var InputNAKCL= document.getElementById("InputNAKCL");
                                var divTriglicerideos= document.getElementById("divTriglicerideos");
                                var InputTriglicerideos= document.getElementById("InputTriglicerideos");                                
                                var divUreia= document.getElementById("divUreia");
                                var InputUreia= document.getElementById("InputUreia");
                                var divExameTumoral= document.getElementById("divExameTumoral");
                                var InputExameTumoral= document.getElementById("InputExameTumoral");
                                var divExameGinecologico= document.getElementById("divExameGinecologico");
                                var InputExameGinecologico= document.getElementById("InputExameGinecologico");  
                                var divGlicemiaJejum= document.getElementById("divGlicemiaJejum");
                                var InputGlicemiaJejum= document.getElementById("InputGlicemiaJejum");
                                var divBiopsia= document.getElementById("divBiopsia");
                                var InputBiopsia= document.getElementById("InputBiopsia");
                                var divSexagemAves= document.getElementById("divSexagemAves");
                                var InputSexagemAves= document.getElementById("InputExameGinecologico");

                                if(produtoExames[0].Fezes !== "0"){                                    
                                    divFezes.style.display="block";
                                    InputFezes.value=produtoExames[0].Fezes;
                                }else{
                                    divFezes.style.display="none";
                                }
                                if(produtoExames[0].RadiologiaSimples !== "0"){                                    
                                    divRadiologiaSimples.style.display="block";
                                    InputRadiologiaSimples.value=produtoExames[0].RadiologiaSimples;
                                }else{
                                    divRadiologiaSimples.style.display="none";
                                }
                                if(produtoExames[0].RadiologiaContrastada !== "0"){                                    
                                    divRadiologiaContrastada.style.display="block";
                                    InputRadiologiaContrastada.value=produtoExames[0].RadiologiaContrastada;
                                }else{
                                    divRadiologiaContrastada.style.display="none";
                                }
                                if(produtoExames[0].Eletrocardiograma !== "0"){                                    
                                    divEletrocardiograma.style.display="block";
                                    InputEletrocardiograma.value=produtoExames[0].Eletrocardiograma;
                                }else{
                                    divEletrocardiograma.style.display="none";
                                }
                                if(produtoExames[0].UltrassonografiAbdominal !== "0"){                                    
                                    divUltrassonografiAbdominal.style.display="block";
                                    InputUltrassonografiAbdominal.value=produtoExames[0].UltrassonografiAbdominal;
                                }else{
                                    divUltrassonografiAbdominal.style.display="none";
                                }
                                if(produtoExames[0].HemogramaCompleto !== "0"){                                    
                                    divHemogramaCompleto.style.display="block";
                                    InputHemogramaCompleto.value=produtoExames[0].HemogramaCompleto;
                                }else{
                                    divHemogramaCompleto.style.display="none";
                                }  
                                if(produtoExames[0].PesquisaHemoparasitas !== "0"){                                    
                                    divPesquisaHemoparasitas.style.display="block";
                                    InputPesquisaHemoparasitas.value=produtoExames[0].PesquisaHemoparasitas;
                                }else{
                                    divPesquisaHemoparasitas.style.display="none";
                                }
                                if(produtoExames[0].FuncaoHepatica !== "0"){                                    
                                    divFuncaoHepatica.style.display="block";
                                    InputFuncaoHepatica.value=produtoExames[0].FuncaoHepatica;
                                }else{
                                    divFuncaoHepatica.style.display="none";
                                }
                                if(produtoExames[0].SorologicoFIVFELV !== "0"){                                    
                                    divSorologicoFIVFELV.style.display="block";
                                    InputSorologicoFIVFELV.value=produtoExames[0].SorologicoFIVFELV;
                                }else{
                                    divSorologicoFIVFELV.style.display="none";
                                } 
                                if(produtoExames[0].Urina !== "0"){                                    
                                    divUrina.style.display="block";
                                    InputUrina.value=produtoExames[0].Urina;
                                }else{
                                    divUrina.style.display="none";
                                }
                                if(produtoExames[0].AcidoUrico !== "0"){                                    
                                    divAcidoUrico.style.display="block";
                                    InputAcidoUrico.value=produtoExames[0].AcidoUrico;
                                }else{
                                    divAcidoUrico.style.display="none";
                                }
                                if(produtoExames[0].Albumina !== "0"){                                    
                                    divAlbumina.style.display="block";
                                    InputAlbumina.value=produtoExames[0].Albumina;
                                }else{
                                    divAlbumina.style.display="none";
                                }                               
                                if(produtoExames[0].ALT !== "0"){                                    
                                    divALT.style.display="block";
                                    InputALT.value=produtoExames[0].ALT;
                                }else{
                                    divALT.style.display="none";
                                }
                                if(produtoExames[0].Amilase !== "0"){                                    
                                    divAmilase.style.display="block";
                                    InputAmilase.value=produtoExames[0].Amilase;
                                }else{
                                    divAmilase.style.display="none";
                                }
                                if(produtoExames[0].AST !== "0"){                                    
                                    divAST.style.display="block";
                                    InputAST.value=produtoExames[0].AST;
                                }else{
                                    divAST.style.display="none";
                                }
                                if(produtoExames[0].Bilirrubina !== "0"){                                    
                                    divBilirrubina.style.display="block";
                                    InputBilirrubina.value=produtoExames[0].Bilirrubina;
                                }else{
                                    divBilirrubina.style.display="none";
                                }
                                if(produtoExames[0].CalcioSerico !== "0"){                                    
                                    divCalcioSerico.style.display="block";
                                    InputCalcioSerico.value=produtoExames[0].CalcioSerico;
                                }else{
                                    divCalcioSerico.style.display="none";
                                }
                                if(produtoExames[0].Colesterol !== "0"){                                    
                                    divColesterol.style.display="block";
                                    InputColesterol.value=produtoExames[0].Colesterol;
                                }else{
                                    divColesterol.style.display="none";
                                }
                                if(produtoExames[0].Colinesterase !== "0"){                                    
                                    divColinesterase.style.display="block";
                                    InputColinesterase.value=produtoExames[0].Colinesterase;
                                }else{
                                    divColinesterase.style.display="none";
                                }
                                if(produtoExames[0].CreatinaQuinase !== "0"){                                    
                                    divCreatinaQuinase.style.display="block";
                                    InputCreatinaQuinase.value=produtoExames[0].CreatinaQuinase;
                                }else{
                                    divCreatinaQuinase.style.display="none";
                                }
                                if(produtoExames[0].Creatinina !== "0"){                                    
                                    divCreatinina.style.display="block";
                                    InputCreatinina.value=produtoExames[0].Creatinina;
                                }else{
                                    divCreatinina.style.display="none";
                                }
                                if(produtoExames[0].FerroSerico !== "0"){                                    
                                    divFerroSerico.style.display="block";
                                    InputFerroSerico.value=produtoExames[0].FerroSerico;
                                }else{
                                    divFerroSerico.style.display="none";
                                }
                                if(produtoExames[0].FosfataseAlcalina !== "0"){                                    
                                    divFosfataseAlcalina.style.display="block";
                                    InputFosfataseAlcalina.value=produtoExames[0].FosfataseAlcalina;
                                }else{
                                    divFosfataseAlcalina.style.display="none";
                                }
                                if(produtoExames[0].Fosforo !== "0"){                                    
                                    divFosforo.style.display="block";
                                    InputFosforo.value=produtoExames[0].Fosforo;
                                }else{
                                    divFosforo.style.display="none";
                                }  
                                if(produtoExames[0].Gama !== "0"){                                    
                                    divGama.style.display="block";
                                    InputGama.value=produtoExames[0].Gama;
                                }else{
                                    divGama.style.display="none";
                                }
                                if(produtoExames[0].Glicose !== "0"){                                    
                                    divGlicose.style.display="block";
                                    InputGlicose.value=produtoExames[0].Glicose;
                                }else{
                                    divGlicose.style.display="none";
                                }
                                if(produtoExames[0].Magnesio !== "0"){                                    
                                    divMagnesio.style.display="block";
                                    InputMagnesio.value=produtoExames[0].Magnesio;
                                }else{
                                    divMagnesio.style.display="none";
                                }    
                                if(produtoExames[0].ProteinasTotais !== "0"){                                    
                                    divProteinasTotais.style.display="block";
                                    InputProteinasTotais.value=produtoExames[0].ProteinasTotais;
                                }else{
                                    divProteinasTotais.style.display="none";
                                }
                                if(produtoExames[0].NAKCL !== "0"){                                    
                                    divNAKCL.style.display="block";
                                    InputNAKCL.value=produtoExames[0].NAKCL;
                                }else{
                                    divNAKCL.style.display="none";
                                }
                                if(produtoExames[0].Triglicerideos !== "0"){                                    
                                    divTriglicerideos.style.display="block";
                                    InputTriglicerideos.value=produtoExames[0].Triglicerideos;
                                }else{
                                    divTriglicerideos.style.display="none";
                                }
                                if(produtoExames[0].Ureia !== "0"){                                    
                                    divUreia.style.display="block";
                                    InputUreia.value=produtoExames[0].Ureia;
                                }else{
                                    divUreia.style.display="none";
                                }
                                if(produtoExames[0].ExameTumoral !== "0"){                                    
                                    divExameTumoral.style.display="block";
                                    InputExameTumoral.value=produtoExames[0].ExameTumoral;
                                }else{
                                    divExameTumoral.style.display="none";
                                }
                                if(produtoExames[0].ExameGinecologico !== "0"){                                    
                                    divExameGinecologico.style.display="block";
                                    InputExameGinecologico.value=produtoExames[0].ExameGinecologico;
                                }else{
                                    divExameGinecologico.style.display="none";
                                }
                                if(produtoExames[0].GlicemiaJejum !== "0"){                                    
                                    divGlicemiaJejum.style.display="block";
                                    InputGlicemiaJejum.value=produtoExames[0].GlicemiaJejum;
                                }else{
                                    divGlicemiaJejum.style.display="none";
                                }
                                if(produtoExames[0].Biopsia !== "0"){                                    
                                    divBiopsia.style.display="block";
                                    InputBiopsia.value=produtoExames[0].Biopsia;
                                }else{
                                    divBiopsia.style.display="none";
                                }
                                if(produtoExames[0].SexagemAves !== "0"){                                    
                                    divSexagemAves.style.display="block";
                                    InputSexagemAves.value=produtoExames[0].SexagemAves;
                                }else{
                                    divSexagemAves.style.display="none";
                                }
                                
                            }
                            if(response.data.error){
                                if(response.data.error === 'erro sql'){
                                    Exame.style.display="none";
                                }if(response.data.error === "falha na autenticação do token"){
                                    erro.value = "Tente Novamente";
                                    setTimeout(() => {window.location.href="/"}, 2000);
                                }
                            }
                            if(response.data.message){
                                if(response.data.error === "Exame nao encontrado"){
                                    Exame.style.display="none";
                                }
                            } 
                        }                             
                    }else{
                        Exame.style.display="none";
                    }
                    //////////////////////////////////////////////////////////////////////////////////////
                    if (produto[0].idExames === "Não" && produto[0].idMed === "Não" && produto[0].idVacina === "Não"){   
                        nomePrest.value = produto[0].nomePrest;
                        nomeFunc.value = produto[0].nomeFunc;  
                        rgPet.value = produto[0].rgPet;
                        nomePet.value = produto[0].nomePet;  
                   
                        dateInicio= produto[0].dataConst.split('', 10);
                        dateCorreto = dateInicio[0] + dateInicio[1] + dateInicio[2] + dateInicio[3] + dateInicio[4] + dateInicio[5] + dateInicio[6] + dateInicio[7] + dateInicio[8] + dateInicio[9];
                        dataConst.value = dateCorreto;                      
    
                        Medicacao.style.display="none";
                        Vacina.style.display="none";
                        Exame.style.display="none";
                    }
                }else{
                    erro.value = "Tente Novamente";
                }
    
                if(response.data.error){
                    if(response.data.error === 'error sql'){
                        erro.value = "Tente Novamente";
                    }if(response.data.error === "falha na autenticação do token"){
                        erro.innerText = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        erro.value = "Tente Novamente";
                    }
                }
    
                if(response.data.message){
                    if(response.data.message === "Prontuario nao encontrado"){
                        erro.value = "Tente Novamente";
                    }else{
                        erro.value = "Tente Novamente";                                 
                    }
                }
            }
        }
    }

    setTimeout(() => {Aparecer()}, 1000);

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
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={inicio}/> 
                                <p style={{textAlign: '-webkit-center'}}>Inicio</p>
                            </a>
                        </li>
                        <li className="nav-item" id="Calen" style={{display:'none'}}>
                            <a className="nav-link" href="/Calendario">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={calendario}/>
                                <p style={{textAlign: '-webkit-center'}}>Calendário</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Func" style={{display:'none'}}>
                            <a className="nav-link" href="/Funcionarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'11%',height:'5%'}} src={funcionario}/>
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
                            <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={medicacao}/>
                                <p style={{textAlign: '-webkit-center'}}>Medicações</p>
                            </a>
                        </li>
                        <li className="nav-item " id="Vac" style={{display:'none'}}>
                            <a className="nav-link" href="Vacina">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={vacinas}/>
                                <p style={{textAlign: '-webkit-center'}}>Vacinas</p>
                            </a>
                        </li>
                        <li className="nav-item active" id="Pront" style={{display:'none'}}>
                            <a className="nav-link" href="/Prontuarios">
                                <img className="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={prontuarios}/>
                                <p style={{textAlign: '-webkit-center'}}>Prontuários</p>
                            </a>
                        </li>
                        <li className="nav-item active-pro ">
                            <a className="nav-link" style={{background:'none'}}>
                                <table>
                                    <tr>
                                        <td style={{width: '20%'}}>
                                            <img src={rodape2} className="material-icons" alt="" />
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
                            <a className="navbar-brand" href="#pablo" >Visualizar Prontuário</a>
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
                                        <h4 className="card-title">Prontuários</h4>
                                    </div>
                                    <div className="card-body">
                                            <div className="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px',textAlign: 'center'}} id="valida"></p>                                                 
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Nome do Animal</label>
                                                        <input type="text" className="form-control" id="nomePet" placeholder="Nome do Animal" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>RG do Animal</label>
                                                        <input type="text" className="form-control" id="rgPet" placeholder="RG do Animal" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',visibility:'hidden'}}>RG do Animal</label>
                                                        <input type="text" className="form-control" placeholder="Data"  disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3',visibility:'hidden'}}>RG do Animal</label>
                                                        <input type="date" className="form-control" id="dataConst" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Clinica Veterinaria</label>
                                                        <input type="text" className="form-control" id="nomePrest" placeholder="Clinica Veterinaria" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label style={{color:'#009fe3'}}>Veterinario Responsavel</label>
                                                        <input type="text" className="form-control" id="nomeFunc" placeholder="Veterinario Responsavel" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div id="Medicacao" style={{display:"none"}}>                                                
                                                <div className="row">                                                    
                                                    <div className="col-md-12">
                                                        <label className="bmd-label-floating" style={{    color:"#009fe3",textAlign: "center", width: '100%',fontSize: '20px',fontWeight: '500',}}>Medicações</label>                                                
                                                            <div id="Med">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome da Medicação</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} id="nomeMed"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Dosagem</label>
                                                                            <input type="email" className="form-control" placeholder="Dose" disabled style={{borderBottom:    '1px solid #009fe3'}} id="doseMed"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Rotina</label>
                                                                            <input type="email" className="form-control" placeholder="Rotina" disabled style={{borderBottom:    '1px solid #009fe3'}} id="rotinaMed"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Lote</label>
                                                                            <input type="text" className="form-control" placeholder="Lote" disabled style={{borderBottom:    '1px solid #009fe3'}} id="loteMed"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observações</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="observacaoMed"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/>   
                                                                <div class="row">
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" placeholder="Data Aplicada"  disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date" className="form-control" id="dataIniMed" disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" placeholder="Proxima Aplicação"  disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date" className="form-control" id="dataFinMed" disabled/>
                                                                        </div>
                                                                    </div>
                                                                </div>  
                                                                <br/>   
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome do Aplicador</label>
                                                                            <input type="text" className="form-control" placeholder="Nome do Aplicador" disabled style={{borderBottom:    '1px solid #009fe3'}} id="nomeEstbMed"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Email do Aplicador</label>
                                                                            <input type="text" className="form-control" placeholder="Email do Aplicador" disabled style={{borderBottom:    '1px solid #009fe3'}} id="emailEstbMed"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/> 
                                                            </div>
                                                        </div>                                                
                                                    </div>
                                                <br/>
                                            <br/>
                                        </div>  
                                           
                                            <div id="Vacina" style={{display:"none"}}>    
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label className="bmd-label-floating" style={{   color:"#009fe3",textAlign: "center", width: '100%',fontSize: '20px',fontWeight: '500'}}>Vacina</label>      
                                                            <div id="Vacina">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome da Vacina</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} id="nomeVacina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Dosagem</label>
                                                                            <input type="email" className="form-control" placeholder="Dose" disabled style={{borderBottom:    '1px solid #009fe3'}} id="qntDoseVacina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Lote</label>
                                                                            <input type="text" className="form-control" placeholder="Lote" disabled style={{borderBottom:    '1px solid #009fe3'}} id="loteVacina"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/>  
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" placeholder="Data Aplicada"  disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date" className="form-control" id="dataApliVacina" disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" placeholder="Proxima Aplicação"  disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date" className="form-control" id="dataProxVacina" disabled/>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                <br/> 
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <label style={{color:'#009fe3'}}>Observações</label>
                                                                        <input type="text" className="form-control" placeholder="Observações" disabled style={{borderBottom:    '1px solid #009fe3'}} id="observacaoVacina"/>
                                                                    </div>
                                                                </div>  
                                                                <br/>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome do Aplicador</label>
                                                                            <input type="text" className="form-control" placeholder="Nome do Aplicador" disabled style={{borderBottom:    '1px solid #009fe3'}} id="nomeVetVacina" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Email do Aplicador</label>
                                                                            <input type="text" className="form-control" placeholder="Email do Aplicador" disabled style={{borderBottom:    '1px solid #009fe3'}}  id="emailVetVacina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>CRMV  do Aplicador</label>
                                                                            <input type="text" className="form-control" placeholder="CRMV  do Aplicador" disabled style={{borderBottom:    '1px solid #009fe3'}}  id="crmvVetVacina"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <br/>   
                                            <br/> 
                                            </div>
                                              
                                            <div id="Exame" style={{display:"none"}}>    
                                                <div className="col-md-12">
                                                    <div className="row">                                                   
                                                        <label className="bmd-label-floating" style={{    color:"#009fe3",textAlign: "center", width: '100%',fontSize: '20px',fontWeight: '500',}}>Exames</label>   
                                                            <div className="col-md-12" id="divFezes" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div class="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Fezes"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputFezes"/>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                           
                                                            </div>
                                                            <div className="col-md-12" id="divRadiologiaSimples" style={{display:"none"}}>
                                                                <div className='row'>
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Radiologia Simples"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputRadiologiaSimples"/>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                            
                                                            </div>
                                                            <div className="col-md-12" id="divRadiologiaContrastada" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Radiologia Contrastada"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputRadiologiaContrastada"/>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                           
                                                            </div>
                                                            <div className="col-md-12" id="divEletrocardiograma" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Eletrocardiograma"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputEletrocardiograma"/>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                            
                                                            </div>
                                                            <div className="col-md-12" id="divUltrassonografiAbdominal" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Ultrassonografia Abdominal"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputUltrassonografiAbdominal"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divHemogramaCompleto" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Hemograma Completo"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputHemogramaCompleto"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divPesquisaHemoparasitas" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Pesquisa Hemoparasitas"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputPesquisaHemoparasitas"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divFuncaoHepatica" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div class="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Função Hepatica"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputFuncaoHepatica"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divSorologicoFIVFELV" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div class="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Sorologico FIVFELV"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputSorologicoFIVFELV"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divUrina" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Urina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputUrina"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divAcidoUrico" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Acido Urico"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputAcidoUrico"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divAlbumina" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Albumina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputAlbumina"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divALT" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="ALT"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputALT"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divAmilase" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Amilase"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputAmilase"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divAST" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="AST"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputAST"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divBilirrubina" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Bilirrubina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputBilirrubina"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divCalcioSerico" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="CalcioSerico"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputCalcioSerico"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divColesterol" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Colesterol"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputColesterol"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divColinesterase" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Colinesterase"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputColinesterase"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divCreatinaQuinase" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="CreatinaQuinase"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputCreatinaQuinase"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divCreatinina" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Creatinina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputCreatinina"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divFerroSerico" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Ferro Serico"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputFerroSerico"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divFosfataseAlcalina" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Fosfatase Alcalina"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputFosfataseAlcalina"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divFosforo" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Fosforo"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputFosforo"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divGama" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" clclassNameass="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Gama"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputGama"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divGlicose" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Glicose"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputGlicose"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divMagnesio" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Magnesio"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>Glicose
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputMagnesio"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divProteinasTotais" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="ProteinasTotais"/>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputProteinasTotais"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divNAKCL" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="NAKCL"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputNAKCL"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divTriglicerideos" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Triglicerideos"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputTriglicerideos"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divUreia" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Ureia"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputUreia"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divExameTumoral" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div class="col-md-4">
                                                                        <div class="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="ExameTumoral"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>Glicose
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputExameTumoral"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divExameGinecologico" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="ExameGinecologico"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputExameGinecologico"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divGlicemiaJejum" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Glicemia Jejum"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputGlicemiaJejum"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divBiopsia" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="Biopsia"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputBiopsia"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12" id="divSexagemAves" style={{display:"none"}}>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Nome</label>
                                                                            <input type="text" className="form-control" placeholder="Nome" disabled style={{borderBottom:    '1px solid #009fe3'}} value="SexagemAves"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="form-group">
                                                                            <label style={{color:'#009fe3'}}>Observação</label>
                                                                            <input type="text" className="form-control" placeholder="Observação" disabled style={{borderBottom:    '1px solid #009fe3'}} id="InputSexagemAves"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            <br/>
                                        <br/>                                              
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