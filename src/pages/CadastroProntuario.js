import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import api2 from '../services/api2.js';
import "../js/menu.js";

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuario_branco.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

export default function CadastroProntuario(){
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
            response = await api2.post('https://agendaanimal-backend.herokuapp.com/Prestador/BuscarPrest2');
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
    
    var idVac = "Não";
    var idMed = "Não";
    var idExames = "Não";

    var VacSim ="Não";
    var VacNao = "Não";
    var VacInfo = "Não";

    var MedSim ="Não";
    var MedNao ="Não";

    var ExSim ="Não";
    var ExNao ="Não";
    var MedInfo="Não";

    var ButtonImagem= "Não";
    var ButtonHematologico = "Não";
    var ButtonBioquimico = "Não";
    var ButtonParasitologico = "Não";
    var ButtonOutros = "Não";

    async function Aparecer(){

        var erro = document.getElementById("valida");
        var clinica = document.getElementById("clinica");
        var veterinario = document.getElementById("veterinario");      

            let response="";
            try {
                response = await api2.post('https://agendaanimal-backend.herokuapp.com/Funcionario/BuscarFuncPrest');
            } catch (error) {
                console.log(error);               
            }  

            if(response.data){
                if(response.data.response){
                    var produto = response.data.response.Funcionario;
                    clinica.value = produto[0].nomePrest;
                    veterinario.value= produto[0].nomeFunc;
                }
    
                if(response.data.error){
                    if(response.data.error === "error sql"){
                        erro.innerHTML="Tente Novamente";
                    }
                    if(response.data.error === "falha na autenticação do token"){
                        erro.innerText = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }                
                    else{
                        erro.innerHTML="Tente Novamente";
                    }
                }
            }            
        
    }

    setTimeout(() => {Aparecer()}, 1000);

    async function Salvar(){
        // var tutor = document.getElementById("tutor").value;
        // var pet = document.getElementById("pet").value;
        var date = document.getElementById("date").value;
        var rg = document.getElementById("rg").value;
        var erro = document.getElementById("valida");

        //////////////////////////////////////////////////////////    EXAMES HEMO       ////////////////////////////////////////////////////////////////
        var HemogramaCompleto = document.getElementById("HemogramaCompleto");
        var Fribrinogenio = document.getElementById("Fribrinogenio");
        var PesquisaHemoparasitas = document.getElementById("PesquisaHemoparasitas");
        var FuncaoHepatica = document.getElementById("FuncaoHepatica");
        var SorologicoFIVFELV = document.getElementById("SorologicoFIVFELV");

        
        //////////////////////////////////////////////////////////    EXAMES IMAGEM       ////////////////////////////////////////////////////////////////
        var RadiologiaSimples = document.getElementById("RadiologiaSimples");
        var RadiologiaContrastada = document.getElementById("RadiologiaContrastada");
        var Eletrocardiograma = document.getElementById("Eletrocardiograma");
        var UltrassonografiAbdominal = document.getElementById("UltrassonografiAbdominal");

        //////////////////////////////////////////////////////////    EXAMES PARASITOLOGICO       ////////////////////////////////////////////////////////////
        var Fezes = document.getElementById("Fezes");

        //////////////////////////////////////////////////////////    EXAMES OUTROS       ////////////////////////////////////////////////////////////////
        var ExameTumoral = document.getElementById("ExameTumoral");
        var ExameGinecologico = document.getElementById("ExameGinecologico");
        var GlicemiaJejum = document.getElementById("GlicemiaJejum");
        var Biopsia = document.getElementById("Biopsia");
        var SexagemAves = document.getElementById("SexagemAves");

          //////////////////////////////////////////////////////////    EXAMES BIOQUIMICO       ////////////////////////////////////////////////////////////////
          var Urina = document.getElementById("Urina");
          var AcidoUrico = document.getElementById("AcidoUrico");
          var Albumina = document.getElementById("Albumina");
          var ALT = document.getElementById("ALT");
          var Amilase = document.getElementById("Amilase");
          var AST = document.getElementById("AST");
          var Bilirrubina = document.getElementById("Bilirrubina");
          var CalcioSerico = document.getElementById("CalcioSerico");
          var Colesterol = document.getElementById("Colesterol");
          var Colinesterase = document.getElementById("Colinesterase");
          var CreatinaQuinase = document.getElementById("CreatinaQuinase");
          var Creatinina = document.getElementById("Creatinina");
          var FerroSerico = document.getElementById("FerroSerico");
          var FosfataseAlcalina = document.getElementById("FosfataseAlcalina");
          var Fosforo = document.getElementById("Fosforo");
          var Gama = document.getElementById("Gama");
          var Glicose = document.getElementById("Glicose");
          var Magnesio = document.getElementById("Magnesio");
          var ProteinasTotais = document.getElementById("ProteinasTotais");
          var NAKCL = document.getElementById("NAKCL");
          var Triglicerideos = document.getElementById("Triglicerideos");
          var Ureia = document.getElementById("Ureia");

        
        
        if (rg === "" || rg === null || rg === undefined) {

            erro.innerHTML = "Preencha o campo Rg Animal";
        }
        else{
            if (date === "" || date === null || date === undefined) {
                erro.innerHTML = "Preencha o campo Data";
            }
            else{
                erro.innerHTML ="";

                var DataAtual = new Date()
                var MesAtual = DataAtual.getMonth() + 1;                                        
                var AnoAtual = DataAtual.getFullYear();
                var DiaAtual= DataAtual.getDate();
                if(MesAtual < 10){
                    MesAtual="0" + MesAtual;
                }
                var DataCorreta = AnoAtual + "-"+ MesAtual +"-"+ DiaAtual;

                if(date > DataCorreta){
                    erro.innerHTML = "O data deve ser menor ou igual a de hoje";
                }
                else{
                    if(VacSim === "Não" && VacNao === "Não"){
                        erro.innerHTML = "Escolha pelo menos uma opção na vacina";
                        var buttonVacSimm = document.getElementById("VacSim");
                        buttonVacSimm.style.backgroundColor="#fff";
                        buttonVacSimm.style.border="1px solid #009fe3"; 
                        buttonVacSimm.style.color="#009fe3";        
                        VacSim="Não";
                
                        var DivVacinaSim = document.getElementById("DivVacinaSim");
                        DivVacinaSim.style.display="none";  
                
                        var buttonVacNaoo = document.getElementById("VacNao");
                        buttonVacNaoo.style.backgroundColor="#fff";
                        buttonVacNaoo.style.border="1px solid #009fe3"; 
                        buttonVacNaoo.style.color="#009fe3";  
                        VacNao="Não";
                    }else{
                        if(VacSim === "Sim"){
                            if(VacInfo === "Pendente"){
                                SalvarVacina();   
                            }                               
                        }
                        if(MedSim === "Não" && MedNao === "Não"){
                            erro.innerHTML = "Escolha pelo menos uma opção de medicação";
                            var buttonMedSimm = document.getElementById("MedSim");
                            buttonMedSimm.style.backgroundColor="#fff";
                            buttonMedSimm.style.border="1px solid #009fe3"; 
                            buttonMedSimm.style.color="#009fe3";        
                            MedSim="Não";
                
                            var DivMedicacaoSim = document.getElementById("DivMedicacaoSim");
                            DivMedicacaoSim.style.display="none";  
                
                            var buttonMedNaoo = document.getElementById("MedNao");
                            buttonMedNaoo.style.backgroundColor="#fff";
                            buttonMedNaoo.style.border="1px solid #009fe3"; 
                            buttonMedNaoo.style.color="#009fe3";  
                            MedNao="Não";
                        }else{
                            if(MedSim === "Sim"){
                                if(MedInfo === "Pendente"){
                                    SalvarMed();   
                                }                                                                         
                            }

                            if(MedInfo === "Pendente" || VacInfo === "Pendente"){
                                erro.innerHTML = "Verifique os dados da vacina ou da medicação";
                            }
                            else{
                                if(ExSim === "Sim" && ExNao === "Sim"){
                                    erro.innerHTML = "Escolha apenas uma opção no exame";
                                    var buttonExeSim = document.getElementById("ExSim");
                                    buttonExeSim.style.backgroundColor="#fff";
                                    buttonExeSim.style.border="1px solid #009fe3"; 
                                    buttonExeSim.style.color="#009fe3";        
                                    ExSim="Não";
                    
                                    var buttonExeNao = document.getElementById("ExNao");
                                    buttonExeNao.style.backgroundColor="#fff";
                                    buttonExeNao.style.border="1px solid #009fe3"; 
                                    buttonExeNao.style.color="#009fe3";  
                                    ExNao="Não";
                                }
                                else{
                                    if(ExSim === "Não" && ExNao === "Não"){
                                        erro.innerHTML = "Escolha pelo menos uma opção de exame";
                                        var buttonExeSimm = document.getElementById("ExSim");
                                        buttonExeSimm.style.backgroundColor="#fff";
                                        buttonExeSimm.style.border="1px solid #009fe3"; 
                                        buttonExeSimm.style.color="#009fe3";        
                                        ExSim="Não";
                    
                                        var buttonExeNaoo = document.getElementById("ExNao");
                                        buttonExeNaoo.style.backgroundColor="#fff";
                                        buttonExeNaoo.style.border="1px solid #009fe3"; 
                                        buttonExeNaoo.style.color="#009fe3";  
                                        ExNao="Não";
                                    }
                                    else{
                                        if(ExSim === "Sim"){
                                            if(ButtonImagem === "Não" && ButtonHematologico === "Não" && ButtonBioquimico === "Não" && ButtonParasitologico === "Não" && ButtonOutros === "Não" ){
                    
                                                erro.innerHTML = "Escolha pelo menos uma opção de exame";
                                                var buttonImagemm = document.getElementById("Imagem");
                                                buttonImagemm.style.backgroundColor="#fff";
                                                buttonImagemm.style.border="1px solid #009fe3"; 
                                                buttonImagemm.style.color="#009fe3";  
                                                ButtonImagem="Não";
                                                var DivImagem = document.getElementById("DivImagem");
                                                DivImagem.style.display="none";
                    
                    
                                                var buttonHematologicoo = document.getElementById("Hematologico");
                                                buttonHematologicoo.style.backgroundColor="#fff";
                                                buttonHematologicoo.style.border="1px solid #009fe3"; 
                                                buttonHematologicoo.style.color="#009fe3";  
                                                ButtonHematologico="Não";
                                                var DivHematologico = document.getElementById("DivHematologico");
                                                DivHematologico.style.display="none";
                    
                    
                                                var buttonBioquimicoo = document.getElementById("Bioquimico");
                                                buttonBioquimicoo.style.backgroundColor="#fff";
                                                buttonBioquimicoo.style.border="1px solid #009fe3"; 
                                                buttonBioquimicoo.style.color="#009fe3";  
                                                ButtonBioquimico="Não";
                                                var DivBioquimico = document.getElementById("DivBioquimico");
                                                DivBioquimico.style.display="none";
                                                // var DivBioquimico2 = document.getElementById("DivBioquimico2");
                                                // DivBioquimico2.style.display="none";
                    
                    
                                                var buttonParasitologicoo = document.getElementById("Parasitologico");
                                                buttonParasitologicoo.style.backgroundColor="#fff";
                                                buttonParasitologicoo.style.border="1px solid #009fe3"; 
                                                buttonParasitologicoo.style.color="#009fe3";  
                                                ButtonParasitologico="Não";
                                                var DivParasitologico = document.getElementById("DivParasitologico");
                                                DivParasitologico.style.display="none";
                    
                    
                                                var buttonOutross = document.getElementById("Outros");
                                                buttonOutross.style.backgroundColor="#fff";
                                                buttonOutross.style.border="1px solid #009fe3"; 
                                                buttonOutross.style.color="#009fe3";  
                                                ButtonOutros="Não";
                                                var DivOutros = document.getElementById("DivOutros");
                                                DivOutros.style.display="none";
                                            }
                                            else{
                                                if(ButtonImagem === "Sim" || ButtonHematologico === "Sim" || ButtonBioquimico === "Sim" || ButtonParasitologico === "Sim" || ButtonOutros === "Sim" ) {
                                                    
                    
                                                    var OpcaoParasitologico = "Não";                                                    
                                                    var InputFezes = document.getElementById("InputFezes");

                                                    var OpcaoImagem= "Não";
                                                    var InputRadiologiaSimples = document.getElementById("InputRadiologiaSimples");
                                                    var InputRadiologiaContrastada = document.getElementById("InputRadiologiaContrastada");
                                                    var InputEletrocardiograma = document.getElementById("InputEletrocardiograma");
                                                    var InputUltrassonografiAbdominal = document.getElementById("InputUltrassonografiAbdominal");                                                        
                                                               
                                                    var OpcaoHematologico = "Não";
                                                    var InputHemogramaCompleto = document.getElementById("InputHemogramaCompleto");
                                                    var InputFribrinogenio = document.getElementById("InputFribrinogenio");      
                                                    var InputPesquisaHemoparasitas = document.getElementById("InputPesquisaHemoparasitas");
                                                    var InputFuncaoHepatica = document.getElementById("InputFuncaoHepatica");
                                                    var InputSorologicoFIVFELV = document.getElementById("InputSorologicoFIVFELV");

                                                    var OpcaoOutros = "Não";
                                                    var InputExameTumoral = document.getElementById("InputExameTumoral");
                                                    var InputExameGinecologico = document.getElementById("InputExameGinecologico");
                                                    var InputGlicemiaJejum = document.getElementById("InputGlicemiaJejum");
                                                    var InputBiopsia = document.getElementById("InputBiopsia");
                                                    var InputSexagemAves = document.getElementById("InputSexagemAves");
                                                                    
                                                    var OpcaoBioquimico = "Não";
                                                    var InputUrina = document.getElementById("InputUrina");
                                                    var InputAcidoUrico = document.getElementById("InputAcidoUrico");
                                                    var InputAlbumina = document.getElementById("InputAlbumina");
                                                    var InputALT = document.getElementById("InputALT");
                                                    var InputAmilase = document.getElementById("InputAmilase");
                                                    var InputAST = document.getElementById("InputAST");
                                                    var InputBilirrubina = document.getElementById("InputBilirrubina");
                                                    var InputCalcioSerico = document.getElementById("InputCalcioSerico");
                                                    var InputColesterol = document.getElementById("InputColesterol");
                                                    var InputColinesterase = document.getElementById("InputColinesterase");
                                                    var InputCreatinaQuinase = document.getElementById("InputCreatinaQuinase");
                                                    var InputCreatinina = document.getElementById("InputCreatinina");
                                                    var InputFerroSerico = document.getElementById("InputFerroSerico");
                                                    var InputFosfataseAlcalina = document.getElementById("InputFosfataseAlcalina");
                                                    var InputFosforo = document.getElementById("InputFosforo");
                                                    var InputGama = document.getElementById("InputGama");
                                                    var InputGlicose = document.getElementById("InputGlicose");
                                                    var InputMagnesio = document.getElementById("InputMagnesio");
                                                    var InputProteinasTotais = document.getElementById("InputProteinasTotais");
                                                    var InputNAKCL = document.getElementById("InputNAKCL");
                                                    var InputTriglicerideos = document.getElementById("InputTriglicerideos");
                                                    var InputUreia = document.getElementById("InputUreia");
                    
                                                    if(ButtonParasitologico === "Sim") {
                                                        if(Fezes.checked === false){
                                                            erro.innerHTML = "Escolha pelo menos uma opção de exame Parasitologico ";
                                                            OpcaoParasitologico= "Pendente";
                                                        }else{
                                                            OpcaoParasitologico= "Pendente";
                                                            if(InputFezes.value === "" || InputFezes.value === null || InputFezes.value === undefined){
                                                                erro.innerHTML = "Preencha a observação do exame de fezes."
                                                            }else{
                                                                OpcaoParasitologico= "Sim";
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        OpcaoParasitologico= "Não";
                                                        InputFezes.value="0";
                                                    }
                    
                                                    if(ButtonImagem === "Sim") {
                                                        if(RadiologiaSimples.checked === false && RadiologiaContrastada.checked === false && Eletrocardiograma.checked === false && UltrassonografiAbdominal.checked === false){
                                                            erro.innerHTML = "Escolha pelo menos uma opção de exame Imagem";
                                                            OpcaoImagem= "Pendente";
                                                        }else{
                                                            if(RadiologiaSimples.checked === true){
                                                                OpcaoImagem= "Pendente";                                                               
                                                                if(InputRadiologiaSimples.value === "" || InputRadiologiaSimples.value === null || InputRadiologiaSimples.value === undefined){
                                                                    erro.innerHTML = "Preencha a observação do exame de InputRadiologiaSimples.";
                                                                }else{
                                                                    OpcaoImagem= "Sim";
                                                                }
                                                            }else{
                                                                InputRadiologiaContrastada.value="0";                                                                
                                                            }
                    
                                                            if(RadiologiaContrastada.checked === true){
                                                                OpcaoImagem= "Pendente";
                                                                if(InputRadiologiaContrastada.value === "" || InputRadiologiaContrastada.value === null || InputRadiologiaContrastada.value === undefined){
                                                                    erro.innerHTML = "Preencha a observação do exame de RadiologiaContrastada.";
                                                                }else{
                                                                    OpcaoImagem= "Sim";
                                                                }
                                                            }else{
                                                                InputRadiologiaContrastada.value="0";                                                                
                                                            }
                    
                                                            if(Eletrocardiograma.checked === true){
                                                                OpcaoImagem= "Pendente";
                                                                if(InputEletrocardiograma.value === "" || InputEletrocardiograma.value === null || InputEletrocardiograma.value === undefined){
                                                                    erro.innerHTML = "Preencha a observação do exame de Eletrocardiograma.";
                                                                }else{
                                                                    OpcaoImagem= "Sim";
                                                                }
                                                            }else{
                                                                InputEletrocardiograma.value="0";                                                                
                                                            }
                    
                                                            if(UltrassonografiAbdominal.checked === true){
                                                                OpcaoImagem= "Pendente";
                                                                if(InputUltrassonografiAbdominal.value === "" || InputUltrassonografiAbdominal.value === null || InputUltrassonografiAbdominal.value === undefined){
                                                                    erro.innerHTML = "Preencha a observação do exame de Ultrassonografia Abdominal."
                                                                }else{
                                                                    OpcaoImagem= "Sim";
                                                                }
                                                            }else{
                                                                InputUltrassonografiAbdominal.value="0";                                                                
                                                            }
                                                        }
                                                    }
                                                    else{
                                                        OpcaoImagem= "Não";
                                                        InputRadiologiaSimples.value="0";
                                                        InputRadiologiaContrastada.value="0";
                                                        InputEletrocardiograma.value="0";
                                                        InputUltrassonografiAbdominal.value="0";
                                                    }


                                                    if(ButtonHematologico === "Sim") {
                                                        if(HemogramaCompleto.checked === false && Fribrinogenio.checked === false && PesquisaHemoparasitas.checked === false && FuncaoHepatica.checked === false && SorologicoFIVFELV.checked === false){
                                                            erro.innerHTML = "Escolha pelo menos uma opção de exame Hematologico";
                                                            OpcaoHematologico= "Pendente";      
                                                        }else{
                                                            if(HemogramaCompleto.checked === true){
                                                                OpcaoHematologico= "Pendente";
                                                                 if(InputHemogramaCompleto.value === "" || InputHemogramaCompleto.value === null || InputHemogramaCompleto.value === undefined){
                                                                }else{
                                                                    OpcaoHematologico= "Sim";
                                                                }
                                                            }else{
                                                                InputHemogramaCompleto.value="0";                                                                
                                                            }


                                                            if(Fribrinogenio.checked === true){
                                                                OpcaoHematologico= "Pendente";
                                                                if(InputFribrinogenio.value === "" || InputFribrinogenio.value === null || InputFribrinogenio.value === undefined){
                                                                }else{
                                                                    OpcaoHematologico= "Sim";
                                                                }
                                                            }else{
                                                                InputFribrinogenio.value="0";                                                                
                                                            }

                                                            if(PesquisaHemoparasitas.checked === true){
                                                                OpcaoHematologico= "Pendente";
                                                                if(InputPesquisaHemoparasitas.value === "" || InputPesquisaHemoparasitas.value === null || InputPesquisaHemoparasitas.value === undefined){
                                                                }else{
                                                                    OpcaoHematologico= "Sim";
                                                                }
                                                            }else{
                                                                InputPesquisaHemoparasitas.value="0";                                                                
                                                            }

                                                            if(FuncaoHepatica.checked === true){
                                                                OpcaoHematologico= "Pendente";
                                                                if(InputFuncaoHepatica.value === "" || InputFuncaoHepatica.value === null || InputFuncaoHepatica.value === undefined){
                                                                }else{
                                                                    OpcaoHematologico= "Sim";
                                                                }
                                                            }else{
                                                                InputFuncaoHepatica.value="0";                                                                
                                                            }

                                                            if(SorologicoFIVFELV.checked === true){
                                                                OpcaoHematologico= "Pendente";
                                                                if(InputSorologicoFIVFELV.value === "" || InputSorologicoFIVFELV.value === null || InputSorologicoFIVFELV.value === undefined){
                                                                }else{
                                                                    OpcaoHematologico= "Sim";
                                                                }
                                                            }else{
                                                                InputSorologicoFIVFELV.value="0";                                                                
                                                            }

                                                        }
                                                    }else{
                                                        OpcaoHematologico = "Não";                                                                                                                
                                                        InputHemogramaCompleto.value="0";
                                                        InputFribrinogenio.value="0";
                                                        InputPesquisaHemoparasitas.value="0";
                                                        InputFuncaoHepatica.value="0";
                                                        InputSorologicoFIVFELV.value="0";
                                                    }

                                                    if(ButtonOutros === "Sim") {
                                                        if(ExameTumoral.checked === false && ExameGinecologico.checked === false && GlicemiaJejum.checked === false && Biopsia.checked === false && SexagemAves.checked === false){
                                                            erro.innerHTML = "Escolha pelo menos uma opção de exame Imagem";
                                                            OpcaoOutros= "Pendente";
                                                        }else{
                                                            if(ExameTumoral.checked === true){
                                                                OpcaoOutros= "Pendente";
                                                                 if(InputExameTumoral.value === "" || InputExameTumoral.value === null || InputExameTumoral.value === undefined){
                                                                    }else{
                                                                    OpcaoOutros= "Sim";
                                                                }
                                                            }else{
                                                                InputExameTumoral.value="0";                                                                
                                                            }

                                                            if(ExameGinecologico.checked === true){
                                                                OpcaoOutros= "Pendente";
                                                               if(InputExameGinecologico.value === "" || InputExameGinecologico.value === null || InputExameGinecologico.value === undefined){
                                                                }else{
                                                                    OpcaoOutros= "Sim";
                                                                }
                                                            }else{
                                                                InputExameGinecologico.value="0";                                                                
                                                            }

                                                            if(GlicemiaJejum.checked === true){
                                                                OpcaoOutros= "Pendente";
                                                                 if(InputGlicemiaJejum.value === "" || InputGlicemiaJejum.value === null || InputGlicemiaJejum.value === undefined){
                                                                   }else{
                                                                    OpcaoOutros= "Sim";
                                                                }
                                                            }else{
                                                                InputGlicemiaJejum.value="0";                                                                
                                                            }

                                                            if(Biopsia.checked === true){
                                                                OpcaoOutros= "Pendente";
                                                                if(InputBiopsia.value === "" || InputBiopsia.value === null || InputBiopsia.value === undefined){
                                                                }else{
                                                                    OpcaoOutros= "Sim";
                                                                }
                                                            }else{
                                                                InputBiopsia.value="0";
                                                            }

                                                            if(SexagemAves.checked === true){
                                                                OpcaoOutros= "Pendente";
                                                                if(InputSexagemAves.value === "" || InputSexagemAves.value === null || InputSexagemAves.value === undefined){
                                                                }else{
                                                                    OpcaoOutros= "Sim";
                                                                }
                                                            }else{
                                                                InputSexagemAves.value="0";
                                                            }
                                                        }
                                                    }else{
                                                        OpcaoOutros= "Não";
                                                        InputExameTumoral.value="0";
                                                        InputExameGinecologico.value="0";
                                                        InputGlicemiaJejum.value="0";
                                                        InputBiopsia.value="0";
                                                        InputSexagemAves.value="0";
                                                    }

                                                    

                                                    if(ButtonBioquimico === "Sim") {
                                                        if(Urina.checked === false && 
                                                            AcidoUrico.checked === false && 
                                                            Albumina.checked === false &&
                                                            ALT.checked === false && 
                                                            Amilase.checked === false && 
                                                            AST.checked === false && 
                                                            Bilirrubina.checked === false  && 
                                                            CalcioSerico.checked === false && 
                                                            Colesterol.checked === false && 
                                                            Colinesterase.checked === false  && 
                                                            CreatinaQuinase.checked === false &&  
                                                            Creatinina.checked === false && 
                                                            FerroSerico.checked === false && 
                                                            FosfataseAlcalina.checked === false && 
                                                            Fosforo.checked === false &&  
                                                            Gama.checked === false && 
                                                            Glicose.checked === false  && 
                                                            Magnesio.checked === false  && 
                                                            ProteinasTotais.checked === false  && 
                                                            NAKCL.checked === false && 
                                                            Triglicerideos.checked === false && 
                                                            Ureia.checked === false){
                                                            erro.innerHTML = "Escolha pelo menos uma opção de exame Imagem";
                                                            OpcaoBioquimico= "Pendente";
                                                        }else{
                                                            if(Urina.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputUrina.value === "" || InputUrina.value === null || InputUrina.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputUrina.value="0";
                                                            }
                                                            if(AcidoUrico.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputAcidoUrico.value === "" || InputAcidoUrico.value === null || InputAcidoUrico.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputAcidoUrico.value="0";
                                                            }
                                                            if(Albumina.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputAlbumina.value === "" || InputAlbumina.value === null || InputAlbumina.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputAlbumina.value="0";
                                                            }
                                                            if(ALT.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                               if(InputALT.value === "" || InputALT.value === null || InputALT.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputALT.value="0";
                                                            }

                                                            if(Amilase.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputAmilase.value === "" || InputAmilase.value === null || InputAmilase.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputAmilase.value="0";
                                                            }

                                                            if(AST.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputAST.value === "" || InputAST.value === null || InputAST.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputAST.value="0";
                                                            }

                                                            if(Bilirrubina.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputBilirrubina.value === "" || InputBilirrubina.value === null || InputBilirrubina.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputBilirrubina.value="0";
                                                            }

                                                            if(CalcioSerico.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputCalcioSerico.value === "" || InputCalcioSerico.value === null || InputCalcioSerico.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputCalcioSerico.value="0";
                                                            }

                                                            if(Colesterol.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputColesterol.value === "" || InputColesterol.value === null || InputColesterol.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputColesterol.value="0";
                                                            }

                                                            if(Colinesterase.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputColinesterase.value === "" || InputColinesterase.value === null || InputColinesterase.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputColinesterase.value="0";
                                                            }

                                                            if(CreatinaQuinase.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputCreatinaQuinase.value === "" || InputCreatinaQuinase.value === null || InputCreatinaQuinase.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputCreatinaQuinase.value="0";
                                                            }

                                                            if(Creatinina.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                 if(InputCreatinina.value === "" || InputCreatinina.value === null || InputCreatinina.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputCreatinina.value="0";
                                                            }
                                                            
                                                            if(FerroSerico.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputFerroSerico.value === "" || InputFerroSerico.value === null || InputFerroSerico.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputFerroSerico.value="0";
                                                            }

                                                            if(FosfataseAlcalina.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputFosfataseAlcalina.value === "" || InputFosfataseAlcalina.value === null || InputFosfataseAlcalina.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputFosfataseAlcalina.value="0";
                                                            }

                                                            if(Fosforo.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputFosforo.value === "" || InputFosforo.value === null || InputFosforo.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputFosforo.value="0";
                                                            }

                                                            if(Gama.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputGama.value === "" || InputGama.value === null || InputGama.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputGama.value="0";
                                                            }

                                                            if(Glicose.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputGlicose.value === "" || InputGlicose.value === null || InputGlicose.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }else{
                                                                InputGlicose.value="0";
                                                            }

                                                            if(Magnesio.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputMagnesio.value === "" || InputMagnesio.value === null || InputMagnesio.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }
                                                            else{
                                                                InputMagnesio.value="0";
                                                            }

                                                            if(ProteinasTotais.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputProteinasTotais.value === "" || InputProteinasTotais.value === null || InputProteinasTotais.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }
                                                            else{
                                                                InputProteinasTotais.value="0";
                                                            }

                                                            if(NAKCL.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                                if(InputNAKCL.value === "" || InputNAKCL.value === null || InputNAKCL.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }
                                                            else{
                                                                InputNAKCL.value="0";
                                                            }

                                                            if(Triglicerideos.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                               if(InputTriglicerideos.value === "" || InputTriglicerideos.value === null || InputTriglicerideos.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }
                                                            else{
                                                                InputTriglicerideos.value="0";
                                                            }

                                                            if(Ureia.checked === true){
                                                                OpcaoBioquimico= "Pendente";
                                                               if(InputUreia.value === "" || InputUreia.value === null || InputUreia.value === undefined){
                                                                }else{
                                                                    OpcaoBioquimico= "Sim";
                                                                }
                                                            }
                                                            else{
                                                                InputUreia.value="0";
                                                            }
                                                    
                                                        }
                                                    }
                                                    else{
                                                        OpcaoBioquimico = "Não";
                                                        InputUrina.value="0";
                                                        InputAcidoUrico.value="0";
                                                        InputAlbumina.value="0";
                                                        InputALT.value="0";
                                                        InputAmilase.value="0";
                                                        InputAST.value="0";
                                                        InputBilirrubina.value="0";
                                                        InputCalcioSerico.value="0";
                                                        InputColesterol.value="0";
                                                        InputColinesterase.value="0";
                                                        InputCreatinaQuinase.value="0";
                                                        InputCreatinina.value="0";
                                                        InputFerroSerico.value="0";
                                                        InputFosfataseAlcalina.value="0";
                                                        InputFosforo.value="0";
                                                        InputGama.value="0";
                                                        InputGlicose.value="0";
                                                        InputMagnesio.value="0";
                                                        InputProteinasTotais.value="0";
                                                        InputNAKCL.value="0";
                                                        InputTriglicerideos.value="0";
                                                        InputUreia.value="0";
                                                    }
                    
                                                    if(OpcaoParasitologico === "Pendente" ||  OpcaoImagem === "Pendente" || OpcaoHematologico === "Pendente" || OpcaoOutros === "Pendente" || OpcaoBioquimico === "Pendente"  ){
                                                        erro.innerHTML = "Verifique se nenhum exame esta vazio";
                                                    }
                                                    
                                                    else if( OpcaoParasitologico === "Sim" ||  OpcaoImagem === "Sim" ||OpcaoHematologico === "Sim" || OpcaoOutros === "Sim" || OpcaoBioquimico === "Sim" ){                                                     
                                                       
                                                        let response="";
                                                        try {
                                                            response = await api2.post('https://agendaanimal-backend.herokuapp.com/Exame/CadExame', {rgPet:rg,Fezes:InputFezes.value,Urina:InputUrina.value,AcidoUrico:InputAcidoUrico.value,Albumina:InputAlbumina.value,ALT:InputALT.value,Amilase:InputAmilase.value,AST:InputAST.value,Bilirrubina:InputBilirrubina.value,CalcioSerico:InputCalcioSerico.value,Colesterol:InputColesterol.value,Colinesterase:InputColinesterase.value,CreatinaQuinase:InputCreatinaQuinase.value,Creatinina:InputCreatinina.value,FerroSerico:InputFerroSerico.value,FosfataseAlcalina:InputFosfataseAlcalina.value,Fosforo:InputFosforo.value,Gama:InputGama.value,Glicose:InputGlicose.value,Magnesio:InputMagnesio.value,ProteinasTotais:InputProteinasTotais.value,NAKCL:InputNAKCL.value,Triglicerideos:InputTriglicerideos.value,Ureia:InputUreia.value,ExameTumoral:InputExameTumoral.value,ExameGinecologico:InputExameGinecologico.value,GlicemiaJejum:InputGlicemiaJejum.value,Biopsia:InputBiopsia.value,SexagemAves:InputSexagemAves.value,HemogramaCompleto:InputHemogramaCompleto.value,Fribrinogenio:InputFribrinogenio.value,PesquisaHemoparasitas:InputPesquisaHemoparasitas.value,FuncaoHepatica:InputFuncaoHepatica.value,SorologicoFIVFELV:InputSorologicoFIVFELV.value,RadiologiaSimples:InputRadiologiaSimples.value,RadiologiaContrastada:InputRadiologiaContrastada.value,Eletrocardiograma:InputEletrocardiograma.value,UltrassonografiAbdominal:InputUltrassonografiAbdominal.value});
                                                        } catch (error) {
                                                            console.log(error);               
                                                        }

                                                        if(response){
                                                            if(response.data.message){
                                                                if(response.data.message === "Vet nao encontrado")
                                                                {
                                                                    erro.innerHTML= "Veterinário não encontrado";
                                                                }
                                                                else{
                                                                    if(response.data.message === "Pet nao encontrado")
                                                                    {
                    
                                                                        erro.innerHTML= "Pet não encontrado";
                                                                    }
                                                                    else{
                                                                        if(response.data.message === "Cadastrado")
                                                                        {
                                                                            idExames = response.data.id;
                                                                            let response2="";
                                                                            try {
                                                                                response2 = await api2.post('https://agendaanimal-backend.herokuapp.com/Prontuario/CadProtuario', {rgPet:rg,dataConst:date,idVacina:idVac,idMed:idMed,idExames: idExames});
                                                                            } catch (error) {
                                                                                console.log(error);               
                                                                            }

                                                                            if(response2){
                                                                                if(response2.data.message){
                                                                                    if(response2.data.message === "Vet nao encontrado"){
                                                                                        erro.innerHTML= "Veterinário não encontrado";
                                                                                    }
                                                                                    else{
                                                                                        if(response2.data.message === "Pet nao encontrado"){
                                                                                            erro.innerHTML= "Pet não encontrado";
                                                                                        }
                                                                                        else{
                                                                                            if(response2.data.message === "Cadastrado"){
                                                                                                erro.style.fontWeight= "700"; 
                                                                                                erro.style.color = "#09ff00";  
                                                                                                erro.innerHTML= "Cadastrado com Sucesso";
                                                                                                  
                                                                                                setTimeout(() => {window.location.href="/CadastroProntuario"}, 1000);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                    
                                                                                if(response2.data.error){
                                                                                    if(response2.data.error === "error sql"){
                                                                                        erro.innerHTML= "Tente Novamente";
                                                                                    }if(response2.data.error === "falha na autenticação do token"){
                                                                                        erro.innerText = "Tente Novamente";
                                                                                        setTimeout(() => {window.location.href="/"}, 2000);
                                                                                    }
                                                                                    else{
                                                                                        erro.innerHTML= "Tente Novamente";
                                                                                    }
                                                                                }
                                                                            } 
                                                                        }
                                                                        else{
                                                                            erro.innerHTML= "Tente Novamente";
                                                                        }
                                                                    }
                                                                }
                                                            }
                    
                                                            if(response.data.error){
                                                                if(response.data.error === 'error sql'){
                                                                    erro.innerHTML= "Tente Novamente";
                                                                }
                                                                if(response.data.error === "falha na autenticação do token"){
                                                                        erro.innerText = "Tente Novamente";
                                                                        setTimeout(() => {window.location.href="/"}, 2000);
                                                                }
                                                                else{
                                                                    erro.innerHTML= "Tente Novamente";
                                                                }
                                                            }
                                                        } 
                                                    }
                                                }
                    
                    
                                            }                                         
                                        }
                                        else{

                                            let response="";
                                            try {
                                                response = await api2.post('https://agendaanimal-backend.herokuapp.com/Prontuario/CadProtuario', {rgPet:rg,dataConst:date,idVacina:idVac,idMed:idMed,idExames: idExames});
                                            } catch (error) {
                                                console.log(error);               
                                            }  

                                            if(response){
                                                if(response.data.message){
                                                    if(response.data.message === "Vet nao encontrado"){
                                                        erro.innerHTML= "Veterinário não encontrado";
                                                    }
                                                    else{
                                                        if(response.data.message === "Pet nao encontrado")
                                                        {
    
                                                            erro.innerHTML= "Pet não encontrado";
                                                        }
                                                        else{
                                                            if(response.data.message === "Cadastrado")
                                                            {erro.style.fontWeight= "700";
                                                                erro.style.color = "#09ff00";      
                                                                erro.innerHTML= "Cadastrado com Sucesso";
                                                                setTimeout(() => {window.location.href="/CadastroProntuario"}, 1000);
                                                            }
                                                        }
                                                    }
                                                }
    
                                                if(response.data.error){
                                                    if(response.data.error === 'error sql'){
                                                        erro.innerHTML= "Tente Novamente";
                                                    }if(response.data.error === "falha na autenticação do token"){
                                                        erro.innerText = "Tente Novamente";
                                                        setTimeout(() => {window.location.href="/"}, 2000);
                                                    }
                                                    else{
                                                        erro.innerHTML= "Tente Novamente";
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
            }
        }
    } 

/////////////////////////////////////////////////////////////////////  VACINA /////////////////////////////////////////////////////////////////////
    function VacinaSim(){
        var button = document.getElementById("VacSim");
        button.style.display = "none";      
        VacSim="Sim";
        VacInfo = "Não";

        var div = document.getElementById("DivVacinaSim");
        div.style.display="block";  

        var buttonNao = document.getElementById("VacNao")
        buttonNao.style.display = "none";

        VacInfo = "Pendente";
    }

    function VacinaNao(){
        var button = document.getElementById("VacNao");
        button.style.backgroundColor="#009fe3";
        button.style.color="#fff";
        VacNao="Sim";
        VacInfo = "Não";
    }

    async function SalvarVacina(){
        VacInfo = "Pendente";
        var nome = document.getElementById("nome");
        var valor = document.getElementById("valor");
        var lote = document.getElementById("lote");
        var dose = document.getElementById("dose");
        var rg = document.getElementById("rgVacina");
        var dataIni = document.getElementById("dataIni");
        var dataProx = document.getElementById("dataProx");
        var erro = document.getElementById("validaVacina");
        var observacao = document.getElementById("observacao");
        
        if (nome.value === "" || nome.value === null || nome.value === undefined) {
    
            erro.innerHTML = "Preencha o campo Nome";
            return false;   
        }
        else{
            if (valor.value === "" || valor.value === null || valor.value === undefined) {
    
                erro.innerHTML = "Preencha o campo de Valor";
                return false;   
            }
            else{
                if (lote.value === "" || lote.value === null || lote.value === undefined) {
    
                    erro.innerHTML = "Preencha o campo Lote";
                    return false;   
                }
                else{
                    if (dose.value === "" || dose.value === null || dose.value === undefined) {
        
                        erro.innerHTML = "Preencha o campo da Dose";
                        return false;   
                    }
                    else{
                        if (rg.value === "" || rg.value === null || rg.value === undefined) {
            
                            erro.innerHTML = "Preencha o campo do Rg Animal";
                            return false;   
                        }
                        else{
                            if (dataIni.value === "" || dataIni.value === null || dataIni.value === undefined) {
                
                                erro.innerHTML = "Preencha o campo Data Aplicada";
                                return false;   
                            }
                            else{
                                if (dataProx.value === "" || dataProx === null || dataProx.value === undefined) {
                    
                                    erro.innerHTML = "Preencha o campo Proxima data";
                                    return false;   
                                }
                                else{
                                    if (dataProx.value < dataIni.value)
                                    {
                                        erro.innerHTML = "A data de proxima dose deve ser mais do que a de inicio";
                                        return false;   
                                    }else{
                                        if (observacao === "" || observacao === null || observacao === undefined) {
                    
                                            erro.innerHTML = "Preencha o campo observação";
                                        }
                                        else{
                                            let response="";
                                            try {
                                                response = await api2.post('https://agendaanimal-backend.herokuapp.com/Vacina/inserirVac', {dataApliVacina: dataIni.value,dataProxVacina: dataProx.value,nomeVacina: nome.value ,qntDoseVacina: dose.value,loteVacina: lote.value,valorVacina:  valor.value ,idFunc: 1,rgPet: rg.value,observacaoVacina: observacao.value});
                                            } catch (error) {
                                                console.log(error);               
                                            }  
    
                                            if(response){
                                                if(response.data.message){
                                                    if(response.data.message === "Vet nao encontrado")
                                                    {
                                                        erro.innerHTML= "Veterinário não encontrado";
                                                    }
                                                    else{
                                                        if(response.data.message === "Pet nao encontrado")
                                                        {
        
                                                            erro.innerHTML= "Pet não encontrado";
                                                        }
                                                        else{
                                                            if(response.data.message === "Cadastrado")
                                                            {erro.style.fontWeight= "700";
                                                                erro.style.color = "#09ff00";      
                                                                idVac = response.data.id;
                                                                erro.innerHTML ="Vacina Cadastrada com Sucesso";
                                                                nome.setAttribute("disabled", "disabled");
                                                                valor.setAttribute("disabled", "disabled");
                                                                lote.setAttribute("disabled", "disabled");
                                                                dose.setAttribute("disabled", "disabled");
                                                                rg.setAttribute("disabled", "disabled");
                                                                dataIni.setAttribute("disabled", "disabled");
                                                                dataProx.setAttribute("disabled", "disabled");
                                                                VacInfo = "Sim";
                                                                var ButtonVacina = document.getElementById("ButtonVacina");
                                                                ButtonVacina.style.display="none";
                                                                return true;
                                                            }
                                                            else{
                                                                erro.innerHTML= "Tente Novamente";
                                                            }
                                                        }
                                                    }
                                                }
        
                                                if(response.data.error){
                                                    if(response.data.error === 'error sql'){
                                                        erro.innerHTML= "Tente Novamente";
                                                    }
                                                    if(response.data.error === "falha na autenticação do token"){
                                                            erro.innerText = "Tente Novamente";
                                                            setTimeout(() => {window.location.href="/"}, 2000);
                                                    }
                                                    else{
                                                        erro.innerHTML= "Tente Novamente";
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
            }
        }        
    }

    /////////////////////////////////////////////////////////////////////  MEDICAÇÃO /////////////////////////////////////////////////////////////////////

    function MedicaSim(){
        var button = document.getElementById("MedSim");
        button.style.display = "none";        
        MedSim="Sim";       

        var div = document.getElementById("DivMedicacaoSim");
        div.style.display="block"; 

        var buttonNao = document.getElementById("MedNao");
        buttonNao.style.display = "none"; 
        MedInfo = "Pendente";   
 
    }

    function MedicaNao(){
        var button = document.getElementById("MedNao");
        button.style.backgroundColor="#009fe3";
        button.style.color="#fff";
        MedNao="Sim";
    }

    async function SalvarMed(){
        MedInfo = "Pendente";
        var nome = document.getElementById("nomeMed");
        var observ = document.getElementById("observMed");
        var lote = document.getElementById("loteMed");
        var dose = document.getElementById("doseMed");
        var rotina = document.getElementById("rotinaMed");
        var rg = document.getElementById("rgMed");
        var dataIni = document.getElementById("dataAtual");
        var dataProx = document.getElementById("dataDoseProx");
        var erro = document.getElementById("validaMed");
        
        if (nome.value === "" || nome.value === null || nome.value === undefined) {
    
            erro.innerHTML = "Preencha o campo Nome";
            return false;  
        }
        else{
            if (observ.value === "" || observ.value === null || observ.value === undefined) {
    
                erro.innerHTML = "Preencha o campo de Observação";
                return false;  
            }
            else{
                if (lote.value === "" || lote.value === null || lote.value === undefined) {
    
                    erro.innerHTML = "Preencha o campo Lote";
                    return false;  
                }
                else{
                    if (dose.value === "" || dose.value === null || dose.value === undefined) {
        
                        erro.innerHTML = "Preencha o campo da Dose";
                        return false;  
                    }
                    else{
                        if (rg.value === "" || rg.value === null || rg.value === undefined) {
            
                            erro.innerHTML = "Preencha o campo do Rg Animal";
                            return false;  
                        }
                        else{
                            if (dataIni.value === "" || dataIni.value === null || dataIni.value === undefined) {
                
                                erro.innerHTML = "Preencha o campo Data de Inicio";
                                return false;  
                            }
                            else{
                                if (dataProx.value === "" || dataProx.value === null || dataProx.value === undefined) {
                    
                                    erro.innerHTML = "Preencha o campo Proxima data";
                                    return false;  
                                }
                                else{
                                    if (dataProx.value < dataIni.value)
                                    {
                                        erro.innerHTML = "A data de proxima dose deve ser mais do que a de inicio";
                                        return false;  
                                    }
                                    else{
                                        if (rotina.value === "" || rotina.value === null || rotina.value === undefined) {
                
                                            erro.innerHTML = "Preencha o campo rotina";
                                            return false;  
                                        }
                                        else{

                                            let response="";
                                            try {
                                                response = await api2.post('https://agendaanimal-backend.herokuapp.com/Medicamento/CadastroMed', {idFunc: 1,rgPet: rg.value,statusMed: "Vigente" ,doseMed: dose.value,rotinaMed: rotina.value,dataIniMed: dataIni.value,dataFinMed: dataProx.value,nomeMed: nome.value,loteMed: lote.value,observacaoMed:observ.value });
                                            } catch (error) {
                                                console.log(error);               
                                            }  

                                            if(response){
                                                if(response.data.message){
                                                    if(response.data.message === "Vet nao encontrado")
                                                    {
                                                        erro.innerHTML= "Veterinário não encontrado";
                                                    }
                                                    else{
                                                        if(response.data.message === "Pet nao encontrado")
                                                        {
    
                                                            erro.innerHTML= "Pet não encontrado";
                                                        }
                                                        else{
                                                            if(response.data.message === "Cadastrado")
                                                            {erro.style.fontWeight= "700";
                                                                erro.style.color = "#09ff00";      
                                                                idMed = response.data.id;
                                                                erro.innerHTML ="Medicação cadastrada com sucesso";
                                                                nome.setAttribute("disabled", "disabled");
                                                                observ.setAttribute("disabled", "disabled");
                                                                lote.setAttribute("disabled", "disabled");
                                                                dose.setAttribute("disabled", "disabled");
                                                                rg.setAttribute("disabled", "disabled");
                                                                dataIni.setAttribute("disabled", "disabled");
                                                                dataProx.setAttribute("disabled", "disabled");
                                                                erro.setAttribute("disabled", "disabled");
                                                                rotina.setAttribute("disabled", "disabled");
                                                                MedInfo="Sim";
                                                                var ButtonMed = document.getElementById("ButtonMed");
                                                                ButtonMed.style.display="none";
                                                                return true; 
                                                            }
                                                            else{
                                                                erro.innerHTML= "Tente Novamente";
                                                            }
                                                        }
                                                    }
                                                }
    
                                                if(response.data.error){
                                                    if(response.data.error === 'error sql'){
                                                        erro.innerHTML= "Tente Novamente";
                                                    }if(response.data.error === "falha na autenticação do token"){
                                                        erro.innerText = "Tente Novamente";
                                                        setTimeout(() => {window.location.href="/"}, 2000);
                                                    }
                                                    else{
                                                        erro.innerHTML= "Tente Novamente";
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
                
            }
        }
    }


     /////////////////////////////////////////////////////////////////////  EXAME  /////////////////////////////////////////////////////////////////////////////
     function ExameSim(){
        var button = document.getElementById("ExSim");
        button.style.backgroundColor="#009fe3";
        button.style.color="#fff";        
        ExSim="Sim";  
        
        var div = document.getElementById("Div");
        div.style.display="block";
    }

    function ExameNao(){
        var button = document.getElementById("ExNao");
        button.style.backgroundColor="#009fe3";
        button.style.color="#fff";
        ExNao="Sim";
    }

    function Hematologico(){
        var button = document.getElementById("DivHematologico");
        button.style.display="block";
        ButtonHematologico = "Sim";

        var button2 = document.getElementById("Hematologico");
        button2.style.backgroundColor="#009fe3";        
        button2.style.color="#fff";        
    }

    function Imagem(){
        var button = document.getElementById("DivImagem");
        button.style.display="block";
        ButtonImagem = "Sim";
        
        var button2 = document.getElementById("Imagem");
        button2.style.backgroundColor="#009fe3";        
        button2.style.color="#fff";        
    }

    function Bioquimico(){
        var button = document.getElementById("DivBioquimico");
        button.style.display="block";
        ButtonBioquimico = "Sim";

        var button2 = document.getElementById("Bioquimico");
        button2.style.backgroundColor="#009fe3";        
        button2.style.color="#fff";        
    }

    function Parasitologico(){
        var button = document.getElementById("DivParasitologico");
        button.style.display="block";
        ButtonParasitologico = "Sim";
        
        var button2 = document.getElementById("Parasitologico");
        button2.style.backgroundColor="#009fe3";        
        button2.style.color="#fff";        
    }

    function Outros(){
        var button = document.getElementById("DivOutros");
        button.style.display="block";
        ButtonOutros = "Sim";

        var button2 = document.getElementById("Outros");
        button2.style.backgroundColor="#009fe3";        
        button2.style.color="#fff";        
    }

    
    /////////////////////////////////////////////////////////////////////  PARASITOLOGICO /////////////////////////////////////////////////////////////////////
    function Fezes(){
        var Fezes = document.getElementById("Fezes");
        var InputFezes = document.getElementById("InputFezes");

        if(Fezes.checked === true){
            InputFezes.style.display="block";
        }
        else{
            InputFezes.style.display="none";
        }
    }

    
    /////////////////////////////////////////////////////////////////////  IMAGEM  ///////////////////////////////////////////////////////////////////////////

    function RadiologiaSimples(){
        var RadiologiaSimples = document.getElementById("RadiologiaSimples");
        var InputRadiologiaSimples = document.getElementById("InputRadiologiaSimples");

        if(RadiologiaSimples.checked === true){
            InputRadiologiaSimples.style.display="block";
        }
        else{
            InputRadiologiaSimples.style.display="none";
        }
    }

    function RadiologiaContrastada(){
        var RadiologiaContrastada = document.getElementById("RadiologiaContrastada");
        var InputRadiologiaContrastada = document.getElementById("InputRadiologiaContrastada");

        if(RadiologiaContrastada.checked === true){
            InputRadiologiaContrastada.style.display="block";
        }
        else{
            InputRadiologiaContrastada.style.display="none";
        }
    }

    function Eletrocardiograma(){
        var Eletrocardiograma = document.getElementById("Eletrocardiograma");
        var InputEletrocardiograma = document.getElementById("InputEletrocardiograma");

        if(Eletrocardiograma.checked === true){
            InputEletrocardiograma.style.display="block";
        }
        else{
            InputEletrocardiograma.style.display="none";
        }
    }

    function UltrassonografiAbdominal(){
        var UltrassonografiAbdominal = document.getElementById("UltrassonografiAbdominal");
        var InputUltrassonografiAbdominal = document.getElementById("InputUltrassonografiAbdominal");

        if(UltrassonografiAbdominal.checked === true){
            InputUltrassonografiAbdominal.style.display="block";
        }
        else{
            InputUltrassonografiAbdominal.style.display="none";
        }
    }

    
    /////////////////////////////////////////////////////////////////////  HEMOGRAFICOS  /////////////////////////////////////////////////////////////////////

    function HemogramaCompleto(){
        var HemogramaCompleto = document.getElementById("HemogramaCompleto");
        var InputHemogramaCompleto = document.getElementById("InputHemogramaCompleto");

        if(HemogramaCompleto.checked === true){
            InputHemogramaCompleto.style.display="block";
        }
        else{
            InputHemogramaCompleto.style.display="none";
        }
    }

    function Fribrinogenio(){
        var Fribrinogenio = document.getElementById("Fribrinogenio");
        var InputFribrinogenio = document.getElementById("InputFribrinogenio");

        if(Fribrinogenio.checked === true){
            InputFribrinogenio.style.display="block";
        }
        else{
            InputFribrinogenio.style.display="none";
        }
    }

    function PesquisaHemoparasitas(){
        var PesquisaHemoparasitas = document.getElementById("PesquisaHemoparasitas");
        var InputPesquisaHemoparasitas = document.getElementById("InputPesquisaHemoparasitas");

        if(PesquisaHemoparasitas.checked === true){
            InputPesquisaHemoparasitas.style.display="block";
        }
        else{
            InputPesquisaHemoparasitas.style.display="none";
        }
    }

    function FuncaoHepatica(){
        var FuncaoHepatica = document.getElementById("FuncaoHepatica");
        var InputFuncaoHepatica = document.getElementById("InputFuncaoHepatica");

        if(FuncaoHepatica.checked === true){
            InputFuncaoHepatica.style.display="block";
        }
        else{
            InputFuncaoHepatica.style.display="none";
        }
    }

    function SorologicoFIVFELV(){
        var SorologicoFIVFELV = document.getElementById("SorologicoFIVFELV");
        var InputSorologicoFIVFELV = document.getElementById("InputSorologicoFIVFELV");

        if(SorologicoFIVFELV.checked === true){
            InputSorologicoFIVFELV.style.display="block";
        }
        else{
            InputSorologicoFIVFELV.style.display="none";
        }
    }

    /////////////////////////////////////////////////////////////////////  OUTROS  /////////////////////////////////////////////////////////////////////

    function ExameTumoral(){
        var ExameTumoral = document.getElementById("ExameTumoral");
        var InputExameTumoral = document.getElementById("InputExameTumoral");

        if(ExameTumoral.checked === true){
            InputExameTumoral.style.display="block";
        }
        else{
            InputExameTumoral.style.display="none";
        }
    }
    function ExameGinecologico(){
        var ExameGinecologico = document.getElementById("ExameGinecologico");
        var InputExameGinecologico = document.getElementById("InputExameGinecologico");

        if(ExameGinecologico.checked === true){
            InputExameGinecologico.style.display="block";
        }
        else{
            InputExameGinecologico.style.display="none";
        }
    }
    function GlicemiaJejum(){
        var GlicemiaJejum = document.getElementById("GlicemiaJejum");
        var InputGlicemiaJejum = document.getElementById("InputGlicemiaJejum");

        if(GlicemiaJejum.checked === true){
            InputGlicemiaJejum.style.display="block";
        }
        else{
            InputGlicemiaJejum.style.display="none";
        }
    }
    function Biopsia(){
        var Biopsia = document.getElementById("Biopsia");
        var InputBiopsia = document.getElementById("InputBiopsia");

        if(Biopsia.checked === true){
            InputBiopsia.style.display="block";
        }
        else{
            InputBiopsia.style.display="none";
        }
    }
    function SexagemAves(){
        var SexagemAves = document.getElementById("SexagemAves");
        var InputSexagemAves = document.getElementById("InputSexagemAves");

        if(SexagemAves.checked === true){
            InputSexagemAves.style.display="block";
        }
        else{
            InputSexagemAves.style.display="none";
        }
    }

    /////////////////////////////////////////////////////////////////////  BIOQUIMICO /////////////////////////////////////////////////////////////////////

    function Urina(){
        var Urina = document.getElementById("Urina");
        var InputUrina = document.getElementById("InputUrina");

        if(Urina.checked === true){
            InputUrina.style.display="block";
        }
        else{
            InputUrina.style.display="none";
        }
    }
    function AcidoUrico(){
        var AcidoUrico = document.getElementById("AcidoUrico");
        var InputAcidoUrico = document.getElementById("InputAcidoUrico");

        if(AcidoUrico.checked === true){
            InputAcidoUrico.style.display="block";
        }
        else{
            InputAcidoUrico.style.display="none";
        }
    }
    function Albumina(){
        var Albumina = document.getElementById("Albumina");
        var InputAlbumina = document.getElementById("InputAlbumina");

        if(Albumina.checked === true){
            InputAlbumina.style.display="block";
        }
        else{
            InputAlbumina.style.display="none";
        }
    }

    function ALT(){
        var ALT = document.getElementById("ALT");
        var InputALT = document.getElementById("InputALT");

        if(ALT.checked === true){
            InputALT.style.display="block";
        }
        else{
            InputALT.style.display="none";
        }
    }
    function Amilase(){
        var Amilase = document.getElementById("Amilase");
        var InputAmilase = document.getElementById("InputAmilase");

        if(Amilase.checked === true){
            InputAmilase.style.display="block";
        }
        else{
            InputAmilase.style.display="none";
        }
    }
    function AST(){
        var AST = document.getElementById("AST");
        var InputAST = document.getElementById("InputAST");

        if(AST.checked === true){
            InputAST.style.display="block";
        }
        else{
            InputAST.style.display="none";
        }
    }
    function Bilirrubina(){
        var Bilirrubina = document.getElementById("Bilirrubina");
        var InputBilirrubina = document.getElementById("InputBilirrubina");

        if(Bilirrubina.checked === true){
            InputBilirrubina.style.display="block";
        }
        else{
            InputBilirrubina.style.display="none";
        }
    }

    function CalcioSerico(){
        var CalcioSerico = document.getElementById("CalcioSerico");
        var InputCalcioSerico = document.getElementById("InputCalcioSerico");

        if(CalcioSerico.checked === true){
            InputCalcioSerico.style.display="block";
        }
        else{
            InputCalcioSerico.style.display="none";
        }
    }
    function Colesterol(){
        var Colesterol = document.getElementById("Colesterol");
        var InputColesterol = document.getElementById("InputColesterol");

        if(Colesterol.checked === true){
            InputColesterol.style.display="block";
        }
        else{
            InputColesterol.style.display="none";
        }
    }
    function Colinesterase(){
        var Colinesterase = document.getElementById("Colinesterase");
        var InputColinesterase = document.getElementById("InputColinesterase");

        if(Colinesterase.checked === true){
            InputColinesterase.style.display="block";
        }
        else{
            InputColinesterase.style.display="none";
        }
    }
    function CreatinaQuinase(){
        var CreatinaQuinase = document.getElementById("CreatinaQuinase");
        var InputCreatinaQuinase = document.getElementById("InputCreatinaQuinase");

        if(CreatinaQuinase.checked === true){
            InputCreatinaQuinase.style.display="block";
        }
        else{
            InputCreatinaQuinase.style.display="none";
        }
    }
    function Creatinina(){
        var Creatinina = document.getElementById("Creatinina");
        var InputCreatinina = document.getElementById("InputCreatinina");

        if(Creatinina.checked === true){
            InputCreatinina.style.display="block";
        }
        else{
            InputCreatinina.style.display="none";
        }
    }

    function FerroSerico(){
        var FerroSerico = document.getElementById("FerroSerico");
        var InputFerroSerico = document.getElementById("InputFerroSerico");

        if(FerroSerico.checked === true){
            InputFerroSerico.style.display="block";
        }
        else{
            InputFerroSerico.style.display="none";
        }
    }
    function FosfataseAlcalina(){
        var FosfataseAlcalina = document.getElementById("FosfataseAlcalina");
        var InputFosfataseAlcalina = document.getElementById("InputFosfataseAlcalina");

        if(FosfataseAlcalina.checked === true){
            InputFosfataseAlcalina.style.display="block";
        }
        else{
            InputFosfataseAlcalina.style.display="none";
        }
    }
    function Fosforo(){
        var Fosforo = document.getElementById("Fosforo");
        var InputFosforo = document.getElementById("InputFosforo");

        if(Fosforo.checked === true){
            InputFosforo.style.display="block";
        }
        else{
            InputFosforo.style.display="none";
        }
    }
    function Gama(){
        var Gama = document.getElementById("Gama");
        var InputGama = document.getElementById("InputGama");

        if(Gama.checked === true){
            InputGama.style.display="block";
        }
        else{
            InputGama.style.display="none";
        }
    }

    function Glicose(){
        var Glicose = document.getElementById("Glicose");
        var InputGlicose = document.getElementById("InputGlicose");

        if(Glicose.checked === true){
            InputGlicose.style.display="block";
        }
        else{
            InputGlicose.style.display="none";
        }
    }
    function Magnesio(){
        var Magnesio = document.getElementById("Magnesio");
        var InputMagnesio = document.getElementById("InputMagnesio");

        if(Magnesio.checked === true){
            InputMagnesio.style.display="block";
        }
        else{
            InputMagnesio.style.display="none";
        }
    }

    function ProteinasTotais(){
        var ProteinasTotais = document.getElementById("Fosforo");
        var InputProteinasTotais = document.getElementById("InputProteinasTotais");

        if(ProteinasTotais.checked === true){
            InputProteinasTotais.style.display="block";
        }
        else{
            InputProteinasTotais.style.display="none";
        }
    }
    function NAKCL(){
        var NAKCL = document.getElementById("NAKCL");
        var InputNAKCL = document.getElementById("InputNAKCL");

        if(NAKCL.checked === true){
            InputNAKCL.style.display="block";
        }
        else{
            InputNAKCL.style.display="none";
        }
    }

    function Triglicerideos(){
        var Triglicerideos = document.getElementById("Triglicerideos");
        var InputTriglicerideos = document.getElementById("InputTriglicerideos");

        if(Triglicerideos.checked === true){
            InputTriglicerideos.style.display="block";
        }
        else{
            InputTriglicerideos.style.display="none";
        }
    }
    function Ureia(){
        var Ureia = document.getElementById("Ureia");
        var InputUreia = document.getElementById("InputUreia");

        if(Ureia.checked === true){
            InputUreia.style.display="block";
        }
        else{
            InputUreia.style.display="none";
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
                                            <img  alt="" src={rodape2} className="material-icons"/>
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
                            <a className="navbar-brand" href="#pablo" >Cadastro Prontuário</a>
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
                                        <p className="card-category">Complete os Dados!</p>
                                    </div>
                                    <div className="card-body">
                                            {/* <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="tutor" placeholder="Nome do Tutor"  />
                                                    </div>
                                                </div>  
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="pet" placeholder="Nome do Pet"/>
                                                    </div>
                                                </div>
                                                                                           
                                            </div> */}
                                            <div className="row">                                              
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="rg" placeholder="RG do Animal"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"  placeholder="Data" disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="date" id="date" className="form-control" />
                                                    </div>
                                                </div> 
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="clinica"  placeholder="Clinica Veterinaria" style={{color:'#009fe3',fontWeight:'500'}} disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="veterinario"  style={{color:'#009fe3',fontWeight:'500'}} placeholder="Veterinario Responsavel" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-6"> 
                                                    <label className="bmd-label-floating">Vacinas</label>  
                                                        {/* <div id="DivVacina" style={{display:'block'}}>        */}
                                                        <button type="submit" className="btnCadFunc"  id="VacSim" onClick={VacinaSim} style={{width:'100px',marginLeft:'5%'}}>Adicionar</button>
                                                        <button type="submit" className="btnCadFunc" id="VacNao" onClick={VacinaNao} style={{width:'100px',marginLeft:'2%'}}>Sem Vacina</button>
                                                        {/* </div>      */}
                                                        <div id="DivVacinaSim" style={{display:'none'}}>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="nome" placeholder="Nome"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="dose" placeholder="Dose"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="lote"placeholder="Lote"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="valor" placeholder="Valor"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="rgVacina" placeholder="RG Animal"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/>   
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" placeholder="Data Aplicada" disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date" id="dataIni" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control"  placeholder="Proxima data" disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date" id="dataProx" min="2020-01-01" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                <div className="row">                                                
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <textarea className="form-control" rows="3" id="observacao" placeholder="Observação"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/>   
                                                                <div className="row" style={{textAlign: '-webkit-center'}}>
                                                                    <div className="col-md-12">
                                                                        <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="validaVacina"></p>
                                                                        <button type="submit" className="btn btn-primary" style={{borderRadius: '30px',padding: '1% 5%',background:'#fff',border:'1px solid #009fe3',color:"#009fe3"}} onClick={SalvarVacina}id="ButtonVacina">Salvar</button>
                                                                        <div className="clearfix"></div>
                                                                    </div>
                                                                </div>   
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="col-md-6">
                                                        <label className="bmd-label-floating">Medicações</label>                                                
                                                            <button type="submit" className="btnCadFunc" id="MedSim" onClick={MedicaSim} style={{width:'100px',marginLeft:'5%'}}>Adicionar</button>
                                                            <button type="submit" className="btnCadFunc" id="MedNao" onClick={MedicaNao} style={{width:'150px',marginLeft:'2%'}}>Sem Medicação</button>

                                                        <div id="DivMedicacaoSim" style={{display:'none'}}>
                                                            <div className="card-body">
                                                                        {/* <form> */}
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="nomeMed" placeholder="Nome"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="observMed" placeholder="Observações"/>
                                                                        </div>
                                                                    </div>
                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control" id="rotinaMed" placeholder="Rotina"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="loteMed" placeholder="Lote"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" id="doseMed" placeholder="Dose"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control"  id="rgMed" placeholder="RG Animal"/>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                <br/>   
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" placeholder="Data de Inicio" disabled/>
                                                                        </div>
                                                                    </div>
                                                                     <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date"  min="2020-04-01" id="dataAtual" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control"  placeholder="Data Final" disabled/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <input type="date" min="2020-04-01" id="dataDoseProx" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                <br/>   
                                                            <div className="row" style={{textAlign: '-webkit-center'}}>
                                                                <div className="col-md-12">
                                                                    <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="validaMed"></p>
                                                                    <button type="submit" className="btn btn-primary" style={{borderRadius: '30px',padding: '1% 5%',background:'#fff',border:'1px solid #009fe3',color:"#009fe3"}}id="ButtonMed" onClick={SalvarMed}>Salvar</button>
                                                                    <div className="clearfix"></div>
                                                                </div>                                                                       
                                                            </div>   
                                                                {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                            <br/>   
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="bmd-label-floating">Exame</label>  
                                                    <button type="submit" className="btnCadFunc" id="ExSim" onClick={ExameSim} style={{width:'20%',marginLeft:'5%'}}>Sim</button>
                                                    <button type="submit" className="btnCadFunc" id="ExNao" onClick={ExameNao} style={{width:'20%',marginLeft:'2%'}}>Não</button>
                                                </div>
                                                <div className="col-md-6" style={{display:"none"}} id="Div">
                                                <label className="bmd-label-floating">Selecione Tipo de Exame</label>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <button type="submit" className="btnCadFunc" id="Imagem" onClick={Imagem} style={{marginLeft:'2%'}}>Imagem</button>
                                                        </div> 
                                                        <div className="col-md-3">
                                                            <button type="submit" className="btnCadFunc" id="Hematologico" onClick={Hematologico} style={{marginLeft:'2%'}}>Hematologico</button>
                                                        </div> 
                                                        <div className="col-md-3">
                                                            <button type="submit" className="btnCadFunc" id="Bioquimico" onClick={Bioquimico} style={{marginLeft:'2%'}}>Bioquimico</button>
                                                        </div>                                                         
                                                    </div>
                                                    <div className="row" style={{marginTop:'2%'}}>
                                                        <div className="col-md-5">
                                                            <button type="submit" className="btnCadFunc" id="Parasitologico" onClick={Parasitologico} style={{marginLeft:'2%'}}>Parasitologico</button> 
                                                        </div> 
                                                        <div className="col-md-3">
                                                            <button type="submit" className="btnCadFunc" id="Outros" onClick={Outros} style={{marginLeft:'2%'}}>Outros</button> 
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div> 
                                            <br/>

                                            <div id="DivParasitologico" style={{display:'none'}}>  
                                                <div className="col-md-12">
                                                    <p  style={{color:'black',marginBottom:'0px'}}> Exames Parasitologico:</p>
                                                    <div className="row">
                                                        <div className="col-md-4">                                                                
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Parasitologico de fezes
                                                                    <input type="checkbox" id="Fezes" onClick={Fezes} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputFezes" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                    </div>
                                                </div>                                               
                                            </div>

                                            <div id="DivImagem" style={{display:'none'}}>    
                                                <div className="col-md-12"> 
                                                    <p  style={{color:'black',marginBottom:'0px'}}> Exames Imagem:</p>
                                                    <div className="row">
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Radiologia simples
                                                                    <input type="checkbox" id="RadiologiaSimples" onClick={RadiologiaSimples} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputRadiologiaSimples" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                          {/*////////////////////////////////////////////////////// EXAME 2 /////////////////////////////*/}
                                                        <div className="col-md-4">                                                           
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Radiologia contrastada
                                                                    <input type="checkbox" id="RadiologiaContrastada" onClick={RadiologiaContrastada}/>
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputRadiologiaContrastada" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>

                                                         {/*////////////////////////////////////////////////////// EXAME 3 /////////////////////////////*/}
                                                         <div className="col-md-4">                                                           
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Eletrocardiograma
                                                                    <input type="checkbox" id="Eletrocardiograma" onClick={Eletrocardiograma}/>
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputEletrocardiograma" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>

                                                        {/*////////////////////////////////////////////////////// EXAME 4 /////////////////////////////*/}
                                                        <div className="col-md-4">                                                           
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Ultrassonografia Abdominal 
                                                                    <input type="checkbox" id="UltrassonografiAbdominal" onClick={UltrassonografiAbdominal}/>
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputUltrassonografiAbdominal" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="DivHematologico" style={{display:'none'}}>    
                                                <div className="col-md-12"> 
                                                    <p  style={{color:'black',marginBottom:'0px'}}> Exames Hematologico:</p>
                                                    <div className="row">
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Hemograma Completo
                                                                    <input type="checkbox" id="HemogramaCompleto" onClick={HemogramaCompleto} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputHemogramaCompleto" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                        {/*////////////////////////////////////////////////////// EXAME 2 /////////////////////////////*/}
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Fribrinogenio
                                                                    <input type="checkbox" id="Fribrinogenio" onClick={Fribrinogenio} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputFribrinogenio" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                        {/*////////////////////////////////////////////////////// EXAME 3 /////////////////////////////*/}
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Pesquisa de Hemoparasita
                                                                    <input type="checkbox" id="PesquisaHemoparasitas" onClick={PesquisaHemoparasitas} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputPesquisaHemoparasitas" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                         {/*////////////////////////////////////////////////////// EXAME 4 /////////////////////////////*/}
                                                         <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Função Hepatica
                                                                    <input type="checkbox" id="FuncaoHepatica" onClick={FuncaoHepatica} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputFuncaoHepatica" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                         {/*////////////////////////////////////////////////////// EXAME 5 /////////////////////////////*/}
                                                         <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Sorologico para FIV e FELV
                                                                    <input type="checkbox" id="SorologicoFIVFELV" onClick={SorologicoFIVFELV} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputSorologicoFIVFELV" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                            </div>

                                            <div id="DivBioquimico" style={{display:'none'}}>    
                                                <div className="col-md-12"> 
                                                    <p  style={{color:'black',marginBottom:'0px'}}> Exames Bioquimico:</p>
                                                    <div className="row">
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Urina
                                                                    <input type="checkbox" id="Urina" onClick={Urina} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputUrina" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                         {/*////////////////////////////////////////////////////// EXAME 2 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Acido Úrico
                                                                        <input type="checkbox" id="AcidoUrico" onClick={AcidoUrico} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputAcidoUrico" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>    
                                                            {/*////////////////////////////////////////////////////// EXAME 3 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Albumina
                                                                        <input type="checkbox" id="Albumina" onClick={Albumina} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputAlbumina" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>    
                                                             {/*////////////////////////////////////////////////////// EXAME 4 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">ALT (TGP)
                                                                        <input type="checkbox" id="ALT" onClick={ALT} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputALT" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>
                                                            {/*////////////////////////////////////////////////////// EXAME 5 /////////////////////////////*/}
                                                                <div className="col-md-4">                                                            
                                                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                        <label className="dias">Amilase
                                                                            <input type="checkbox" id="Amilase" onClick={Amilase} />
                                                                            <span className="checkmark"></span>
                                                                        </label>                                                                
                                                                    </div>
                                                                </div> 
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control"  id="InputAmilase" placeholder="Observação" style={{display:'none'}}/>
                                                                </div>   
                                                            {/*////////////////////////////////////////////////////// EXAME 6 /////////////////////////////*/}
                                                                <div className="col-md-4">                                                            
                                                                    <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                        <label className="dias">AST (TGO)
                                                                            <input type="checkbox" id="AST" onClick={AST} />
                                                                            <span className="checkmark"></span>
                                                                        </label>                                                                
                                                                    </div>
                                                                </div> 
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control"  id="InputAST" placeholder="Observação" style={{display:'none'}}/>
                                                                </div> 
                                                        {/*////////////////////////////////////////////////////// EXAME 7 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Bilirrubina
                                                                        <input type="checkbox" id="Bilirrubina" onClick={Bilirrubina} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputBilirrubina" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>   
                                                        {/*////////////////////////////////////////////////////// EXAME 8 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Calcio sérico
                                                                        <input type="checkbox" id="CalcioSerico" onClick={CalcioSerico} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputCalcioSerico" placeholder="Observação" style={{display:'none'}}/>
                                                            </div> 
                                                        {/*////////////////////////////////////////////////////// EXAME 9 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Colesterol
                                                                        <input type="checkbox" id="Colesterol" onClick={Colesterol} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control"  id="InputColesterol" placeholder="Observação" style={{display:'none'}}/>
                                                                </div> 
                                                        {/*////////////////////////////////////////////////////// EXAME 10 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Colinesterase
                                                                        <input type="checkbox" id="Colinesterase" onClick={Colinesterase} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputColinesterase" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>   
                                                        {/*////////////////////////////////////////////////////// EXAME 11 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Creatina quinase (CK)
                                                                        <input type="checkbox" id="CreatinaQuinase" onClick={CreatinaQuinase} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputCreatinaQuinase" placeholder="Observação" style={{display:'none'}}/>
                                                            </div> 
                                                         {/*////////////////////////////////////////////////////// EXAME 12 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Creatinina
                                                                        <input type="checkbox" id="Creatinina" onClick={Creatinina} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputCreatinina" placeholder="Observação" style={{display:'none'}}/>
                                                            </div> 
                                                        {/*////////////////////////////////////////////////////// EXAME 13 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Ferro sérico
                                                                        <input type="checkbox" id="FerroSerico" onClick={FerroSerico} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputFerroSerico" placeholder="Observação" style={{display:'none'}}/>
                                                            </div> 
                                                         {/*////////////////////////////////////////////////////// EXAME 14 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Fosfatase alcalina
                                                                        <input type="checkbox" id="FosfataseAlcalina" onClick={FosfataseAlcalina} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputFosfataseAlcalina" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>  
                                                        {/*////////////////////////////////////////////////////// EXAME 15 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Fósforo
                                                                        <input type="checkbox" id="Fosforo" onClick={Fosforo} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputFosforo" placeholder="Observação" style={{display:'none'}}/>
                                                            </div> 
                                                         {/*////////////////////////////////////////////////////// EXAME 16 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Gama GT
                                                                        <input type="checkbox" id="Gama" onClick={Gama} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputGama" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>
                                                        {/*////////////////////////////////////////////////////// EXAME 17 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Glicose
                                                                        <input type="checkbox" id="Glicose" onClick={Glicose} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputGlicose" placeholder="Observação" style={{display:'none'}}/>
                                                            </div> 
                                                         {/*////////////////////////////////////////////////////// EXAME 18 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Magnésio
                                                                        <input type="checkbox" id="Magnesio" onClick={Magnesio} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputMagnesio" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>  
                                                        {/*////////////////////////////////////////////////////// EXAME 19 /////////////////////////////*/}
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Proteínas totais
                                                                    <input type="checkbox" id="ProteinasTotais" onClick={ProteinasTotais} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputProteinasTotais" placeholder="Observação" style={{display:'none'}}/>
                                                        </div> 
                                                         {/*////////////////////////////////////////////////////// EXAME 20 /////////////////////////////*/}
                                                         <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Sódio (Na+), Potássio (K+) e Cloro (Cl-)
                                                                    <input type="checkbox" id="NAKCL" onClick={NAKCL} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputNAKCL" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>  
                                                         {/*////////////////////////////////////////////////////// EXAME 21 /////////////////////////////*/}
                                                         <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Triglicerídeos
                                                                    <input type="checkbox" id="Triglicerideos" onClick={Triglicerideos} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputTriglicerideos" placeholder="Observação" style={{display:'none'}}/>
                                                        </div> 
                                                         {/*////////////////////////////////////////////////////// EXAME 22 /////////////////////////////*/}
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Uréia
                                                                    <input type="checkbox" id="Ureia" onClick={Ureia} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputUreia" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>                                                       
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="DivOutros" style={{display:'none'}}>    
                                                <div className="col-md-12"> 
                                                    <p  style={{color:'black',marginBottom:'0px'}}> Exames Outros:</p>
                                                    <div className="row">
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Exame tumoral
                                                                    <input type="checkbox" id="ExameTumoral" onClick={ExameTumoral} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputExameTumoral" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>
                                                          {/*////////////////////////////////////////////////////// EXAME 2 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Exame ginecologico 
                                                                        <input type="checkbox" id="ExameGinecologico" onClick={ExameGinecologico} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputExameGinecologico" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>
                                                             {/*////////////////////////////////////////////////////// EXAME 2 /////////////////////////////*/}
                                                             <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Glicemia de jejum
                                                                        <input type="checkbox" id="GlicemiaJejum" onClick={GlicemiaJejum} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputGlicemiaJejum" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>
                                                             {/*////////////////////////////////////////////////////// EXAME 2 /////////////////////////////*/}
                                                            <div className="col-md-4">                                                            
                                                                <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                    <label className="dias">Biopsia
                                                                        <input type="checkbox" id="Biopsia" onClick={Biopsia} />
                                                                        <span className="checkmark"></span>
                                                                    </label>                                                                
                                                                </div>
                                                            </div> 
                                                            <div className="col-md-8">
                                                                <input type="text" className="form-control"  id="InputBiopsia" placeholder="Observação" style={{display:'none'}}/>
                                                            </div>
                                                        {/*////////////////////////////////////////////////////// EXAME 2 /////////////////////////////*/}
                                                        <div className="col-md-4">                                                            
                                                            <div className="col-md-12" style={{verticalAlign: 'middle',display: 'inline-grid'}}>
                                                                <label className="dias">Sexagem de Aves
                                                                    <input type="checkbox" id="SexagemAves" onClick={SexagemAves} />
                                                                    <span className="checkmark"></span>
                                                                </label>                                                                
                                                            </div>
                                                        </div> 
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control"  id="InputSexagemAves" placeholder="Observação" style={{display:'none'}}/>
                                                        </div>                                                          
                                                    </div>
                                                </div>
                                            </div> 
                                        
                                        
                                            <br/>
                                        <div className="row" style={{textAlign: '-webkit-center'}}>
                                            <div className="col-md-12">
                                                <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                                <button type="submit" className="btn btn-primary" onClick={Salvar} style={{borderRadius: '30px',padding: '1% 5%'}}>Salvar</button>
                                                <div className="clearfix"></div>
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
