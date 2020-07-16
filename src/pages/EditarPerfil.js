import React from 'react';
import InputMask from 'react-input-mask';
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";

import api from '../services/api2.js';

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
                var Shop= document.getElementById("Shop");
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
    var ButtonClinica="Não";
    var ButtonPetShop="Não";
    var ButtonHotel ="Não";
    var ButtonPasseador = "Não";
    var btnCEP = "Não";
    var Latitude = "";
    var Longitude = "";
    var ButtonEmergenciaSim = "Não";
    var ButtonEmergenciaNao = "Não";
    var ButtonOngSim = "Não";
    var ButtonOngNao = "Não";
    var Ong = "Não";
    var Emergencia = "Não";
    var ButtonConta= "Não";
    var ButtonCielo= "Não";
    var ButtonWibx= "Não";
    var ButtonCorrente= "Não";
    var ButtonPoupanca= "Não";

    var idResp = "";
    var idFunc = "";
    var idHorarioPrest = "";
    var idConta = "";

    async function Aparecer(){
        var erro= document.getElementById("valida2");

        let response="";
        try {
            response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/BuscaPrest');
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


                if(dados[0].EmergenciaPrest === "Sim"){
                    var buttonEmergSim = document.getElementById("EmergenciaSim");
                    buttonEmergSim.style.backgroundColor="#009fe3";
                    buttonEmergSim.style.color="#fff";
                    ButtonEmergenciaSim="Sim";
                    Emergencia = "Sim";
                }else{
                    var buttonEmergNao = document.getElementById("EmergenciaNao");
                    buttonEmergNao.style.backgroundColor="#009fe3";
                    buttonEmergNao.style.color="#fff";
                    ButtonEmergenciaNao="Sim";
                    Emergencia = "Não";
                }

                if(dados[0].OngPrest === "Sim"){
                    var buttonOngSim = document.getElementById("OngSim");
                    buttonOngSim.style.backgroundColor="#009fe3";
                    buttonOngSim.style.color="#fff";
                    ButtonOngSim="Sim";
                    Ong = "Sim";
                }else{
                    var buttonOngNao = document.getElementById("OngNao");
                    buttonOngNao.style.backgroundColor="#009fe3";
                    buttonOngNao.style.color="#fff";
                    ButtonOngNao="Sim";
                    Ong = "Não";
                }

               
                var buttonClinica = document.getElementById("Clinica");
                if(dados[0].ClinicaPrest === "Sim"){
                    buttonClinica.style.backgroundColor="#009fe3";
                    buttonClinica.style.color="#fff";  
                    ButtonClinica="Sim"; 
                }else{          
                    buttonClinica.style.color="#009fe3";
                    buttonClinica.style.border="1px solid #009fe3";
                    buttonClinica.style.background="#fff";                    
                    ButtonClinica ="Não";
                }      

                var buttonPetShop = document.getElementById("PetShop");
                if(dados[0].PetShopPrest === "Sim"){
                    buttonPetShop.style.backgroundColor="#009fe3";
                    buttonPetShop.style.color="#fff";
                    ButtonPetShop="Sim";
                }else{  
                    buttonPetShop.style.color="#009fe3";
                    buttonPetShop.style.border="1px solid #009fe3";
                    buttonPetShop.style.background="#fff";
                    ButtonPetShop="Não";
                }
                
                var buttonHotel = document.getElementById("Hotel");
                if(dados[0].HotelPrest === "Sim"){
                    buttonHotel.style.backgroundColor="#009fe3";
                    buttonHotel.style.color="#fff";
                    ButtonHotel="Sim";
                }else{ 
                    buttonHotel.style.color="#009fe3";
                    buttonHotel.style.border="1px solid #009fe3";
                    buttonHotel.style.background="#fff";
                    ButtonHotel="Não";
                }
                
            
                var buttonPasseador= document.getElementById("Passeador");
                if(dados[0].PasseadorPrest  === "Sim"){
                    buttonPasseador.style.backgroundColor="#009fe3";
                    buttonPasseador.style.color="#fff";
                    ButtonPasseador="Sim";
                    
                }else{
                    buttonPasseador.style.color="#009fe3";
                    buttonPasseador.style.border="1px solid #009fe3";
                    buttonPasseador.style.background="#fff";
                    ButtonPasseador="Não";
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
                    ButtonConta="Sim";
                    divConta.style.display="block";

                    Banco.value = dados[0].BancoCont;
                    Agencia.value = dados[0].AgenciaCont;
                    Conta.value = dados[0].ContaCont ;
                    
                    if(dados[0].innerHTML === "Poupanca"){
                        buttonPoupa.style.backgroundColor="#009fe3";
                        buttonPoupa.style.color="#fff";
                        ButtonPoupanca="Sim";
                    }else{
                        buttonCorrent.style.backgroundColor="#009fe3";
                        buttonCorrent.style.color="#fff";
                        ButtonCorrente="Sim";
                    }

                }else if(dados[0].CartCont !== ""){
                    var CodWibx = document.getElementById("CodWibx");
                    var buttonWibx = document.getElementById("Wibx");
                    var divWibx =document.getElementById("DivWibx");

                    buttonWibx.style.backgroundColor="#009fe3";
                    buttonWibx.style.color="#fff";
                    divWibx.style.display="block"; 
                    ButtonWibx="Sim";
                    CodWibx.value = dados[0].CartCont;

                }else if(dados[0].CieloCont !== ""){
                    var CodCielo = document.getElementById("CodCielo"); 
                    var buttonCielo = document.getElementById("Cielo");
                    var divCielo=document.getElementById("DivCielo");

                    buttonCielo.style.backgroundColor="#009fe3";
                    buttonCielo.style.color="#fff";
                    ButtonCielo="Sim";
                    divCielo.style.display="block"; 
                    CodCielo.value = dados[0].CieloCont;
                }


                if(dados[0].SegundInicio !== "" && dados[0].SegundInicio !== null && dados[0].SegundFinal !== "" && dados[0].SegundFinal !== null){
                    var segundaInicio = document.getElementById("segundaInicio");
                    var segundaFinal = document.getElementById("segundaFinal");
                    var segunda = document.getElementById("segunda");

                    segunda.checked = true;
                    segundaInicio.style.visibility="inherit";
                    segundaInicio.value = dados[0].SegundInicio;
                    segundaFinal.style.visibility="inherit";
                    segundaFinal.value = dados[0].SegundFinal;     
                }

                if(dados[0].TercaInicio !== "" && dados[0].TercaInicio !== null && dados[0].TercaFinal !== "" && dados[0].TercaFinal !== null){
                    var tercaInicio = document.getElementById("tercaInicio");
                    var tercaFinal = document.getElementById("tercaFinal");
                    var terca = document.getElementById("terca");

                    terca.checked = true;
                    tercaInicio.style.visibility="inherit";
                    tercaInicio.value = dados[0].TercaInicio;
                    tercaFinal.style.visibility="inherit";
                    tercaFinal.value = dados[0].TercaFinal;   
                }

                if(dados[0].QuartInicio !== "" && dados[0].QuartInicio !== null && dados[0].QuartFinal !== "" && dados[0].QuartFinal !== null){
                    var quartaInicio = document.getElementById("quartaInicio");
                    var quartaFinal = document.getElementById("quartaFinal");
                    var quarta = document.getElementById("quarta");

                    quarta.checked = true;
                    quartaInicio.style.visibility="inherit";
                    quartaInicio.value = dados[0].QuartInicio;
                    quartaFinal.style.visibility="inherit";
                    quartaFinal.value = dados[0].QuartFinal;   
                }

                if(dados[0].QuintInicio !== "" && dados[0].QuintInicio !== null && dados[0].QuintFinal !== "" && dados[0].QuintFinal !== null){
                    var quintaInicio = document.getElementById("quintaInicio");
                    var quintaFinal = document.getElementById("quintaFinal");
                    var quinta = document.getElementById("quinta");

                    quinta.checked = true;
                    quintaInicio.style.visibility="inherit";
                    quintaInicio.value = dados[0].QuintInicio;
                    quintaFinal.style.visibility="inherit";
                    quintaFinal.value = dados[0].QuintFinal;   
                }

                if(dados[0].SextInicio !== "" && dados[0].SextInicio !== null && dados[0].SextFinal !== "" && dados[0].SextFinal !== null){
                    var sextaInicio = document.getElementById("sextaInicio");
                    var sextaFinal = document.getElementById("sextaFinal");
                    var sexta = document.getElementById("sexta");

                    sexta.checked = true;
                    sextaInicio.style.visibility="inherit";
                    sextaInicio.value = dados[0].SextInicio;
                    sextaFinal.style.visibility="inherit";
                    sextaFinal.value = dados[0].SextFinal;   
                }

                if(dados[0].SabInicio !== "" && dados[0].SabInicio !== null && dados[0].SabFinal !== "" && dados[0].SabFinal !== null){
                    var sabadoInicio = document.getElementById("sabadoInicio");
                    var sabadoFinal = document.getElementById("sabadoFinal");
                    var sabado = document.getElementById("sabado");

                    sabado.checked = true;
                    sabadoInicio.style.visibility="inherit";
                    sabadoInicio.value = dados[0].SabInicio;
                    sabadoFinal.style.visibility="inherit";
                    sabadoFinal.value = dados[0].SabFinal;   
                }

                if(dados[0].DomingInicio !== "" && dados[0].DomingInicio !== null && dados[0].DomingFinal !== "" && dados[0].DomingFinal !== null){
                    var domingoInicio = document.getElementById("domingoInicio");
                    var domingoFinal = document.getElementById("domingoFinal");
                    var domingo = document.getElementById("domingo");

                    domingo.checked = true;
                    domingoInicio.style.visibility="inherit";
                    domingoInicio.value = dados[0].DomingInicio;
                    domingoFinal.style.visibility="inherit";
                    domingoFinal.value = dados[0].DomingFinal;   
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
                    responseServ= await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/BuscaServicoPrest');
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
                            // div1.className="col-md-5";
                            div2.className="col-md-5";
                            div2.style.verticalAlign = "middle";
                            div2.style.display = "inline-grid";

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
        }else if(btnCEP === "Sim"){
            if (numero === "" || numero === null || numero === undefined) {    
                erro.innerHTML = "Preencha o campo Número Empresa";
                button.innerText="Salvar";
                button.removeAttribute("disabled");
            }else if (ButtonClinica === "Não" && ButtonPetShop === "Não" && ButtonHotel=== "Não" && ButtonPasseador=== "Não") {
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
                            ValidaSegunda = "Sim";
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
                            ValidaTerca = "Sim";
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
                            ValidaQuarta = "Sim";
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
                            ValidaQuinta = "Sim";
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
                            ValidaSexta = "Sim";
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
                            ValidaSabado = "Sim";
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
                            ValidaDomingo = "Sim";
                        }
                    }
                }
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
            
                if(ValidaSegunda === "Não" && ValidaTerca ==="Não" && ValidaQuarta ==="Não" && ValidaQuinta === "Não" && ValidaSexta === "Não" && ValidaSabado === "Não" && ValidaDomingo === "Não" ) {
                    erro.innerHTML = "Escolha pelo menos um dia para o horário";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }else if(ValidaSegunda === "Pendente" || ValidaTerca ==="Pendente" || ValidaQuarta ==="Pendente" || ValidaQuinta === "Pendente" || ValidaSexta === "Pendente" || ValidaSabado === "Pendente" || ValidaDomingo === "Pendente" ) {
                    erro.innerHTML = "Verefique os dados dos horarios";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }else if(ButtonEmergenciaSim === "Não" && ButtonEmergenciaNao === "Não"){
                    erro.innerHTML = "Selecione se é 24horas.";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }else if(ButtonOngSim === "Não" && ButtonOngNao === "Não"){
                    erro.innerHTML = "Selecione se é ONG";
                    button.innerText="Salvar";
                    button.removeAttribute("disabled");
                }else if( ButtonConta === "Não" && ButtonCielo === "Não" && ButtonWibx === "Não"){
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

                    if(ButtonConta === "Sim"){                        
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
                        }else if(ButtonCorrente === "Não" && ButtonPoupanca === "Não"){ 
                            erro.innerHTML = "Selecione um tipo de conta";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else{
                            ButtonConta= "Pendente";
                            if(ButtonCorrente === "Sim"){
                                tipo = "Corrente";
                            }else if(ButtonPoupanca === "Sim"){
                                tipo = "Poupança"; 
                            }                                           
                        }
                    }

                    if(ButtonCielo === "Sim"){
                        if (CodCielo === "" || CodCielo === null || CodCielo === undefined) {
                            erro.innerHTML = "Preencha o campo do Codigo da Cielo";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else{
                            ButtonCielo= "Pendente";
                        }
                    }

                    if(ButtonWibx === "Sim"){
                        if (CodWibx === "" || CodWibx === null || CodWibx === undefined) {
                            erro.innerHTML = "Preencha o campo do Codigo da Wibx";
                            button.innerText="Salvar";
                            button.removeAttribute("disabled");
                        }else{                            
                            ButtonConta= "Pendente";
                        }
                    }

                    if(ButtonConta === "Pendente" || ButtonWibx == "Pendente" || ButtonCielo === "Pendente"){                    
                        
                        button.innerText="Aguardando";
                        button.setAttribute("disabled","disabled");

                        console.log("chegou");                       

                        let response="";
                        console.log(idResp);
                        try {
                            response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/EditarPrest',{EmailPrest:email,EmergenciaPrest:Emergencia,CnpjPrest:cnpj,CelularPrest:celular,ContaCont:Conta,BancoCont:Banco,AgenciaCont:Agencia,TipoCont:tipo,CartCont:CodWibx,CieloCont:CodCielo,idCont:idConta,SegundInicio:segundaInicio.value,SegundFinal:segundaFinal.value, TercaInicio:tercaInicio.value, TercaFinal:tercaFinal.value, QuartInicio:quartaInicio.value, QuartFinal:quartaFinal.value, QuintInicio:quintaInicio.value, QuintFinal:quintaFinal.value, SextInicio:sextaInicio.value, SextFinal:sextaFinal.value, SabInicio:sabadoInicio.value, SabFinal:sabadoFinal.value, DomingInicio:domingoInicio.value, DomingFinal:domingoFinal.value,idHorarioPrest:idHorarioPrest,NomeFantsPrest:NomeFantasia,PetShopPrest:ButtonPetShop,ClinicaPrest:ButtonClinica,PasseadorPrest:ButtonPasseador,HotelPrest:ButtonHotel,CepPrest:cep,NumPrest:numero,descricaoPrest:desc,latitude:Latitude,longitude:Longitude,NomeResp:nomeResp,CpfResp:cpfResp,CelResp:numResp,idResp:idResp,EmailFunc:emailResp,idFunc:idFunc});
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
        var erro = document.getElementById("valida2");
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

    function EmergenciaSim(){
        var buttonNao = document.getElementById("EmergenciaNao");
        buttonNao.style.backgroundColor="#fff";
        buttonNao.style.border="1px solid #009fe3"; 
        buttonNao.style.color="#009fe3";
        ButtonEmergenciaNao="Não";

        var button = document.getElementById("EmergenciaSim");
        if(ButtonEmergenciaSim === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonEmergenciaSim="Não";
            Emergencia = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEmergenciaSim="Sim";
            Emergencia = "Sim";
        }
    }
    function EmergenciaNao(){
        var buttonSim = document.getElementById("EmergenciaSim");
        buttonSim.style.backgroundColor="#fff";
        buttonSim.style.border="1px solid #009fe3"; 
        buttonSim.style.color="#009fe3";
        ButtonEmergenciaSim="Não";

        var button = document.getElementById("EmergenciaNao");
        if(ButtonEmergenciaNao === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonEmergenciaNao="Não";
            Emergencia = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonEmergenciaNao="Sim";
            Emergencia = "Não";
        }
    }

    function OngSim(){
        var buttonNao = document.getElementById("OngNao");
        buttonNao.style.backgroundColor="#fff";
        buttonNao.style.border="1px solid #009fe3"; 
        buttonNao.style.color="#009fe3";
        ButtonOngNao="Não";

        var button = document.getElementById("OngSim");
        if(ButtonOngSim === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonOngSim="Não";
            Ong = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonOngSim="Sim";
            Ong = "Sim";
        }
    }
    function OngNao(){
        var buttonSim = document.getElementById("OngSim");
        buttonSim.style.backgroundColor="#fff";
        buttonSim.style.border="1px solid #009fe3"; 
        buttonSim.style.color="#009fe3";
        ButtonOngSim="Não";

        var button = document.getElementById("OngNao");
        if(ButtonOngNao === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonOngNao="Não";
            Ong = "Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonOngNao="Sim";
            Ong = "Não";
        }
    }


    function Conta(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var buttonCielo = document.getElementById("Cielo");
        buttonCielo.style.backgroundColor="#fff";
        buttonCielo.style.border="1px solid #009fe3"; 
        buttonCielo.style.color="#009fe3";
        ButtonCielo="Não";
        var divCielo=document.getElementById("DivCielo");
        divCielo.style.display="none";

        var buttonWibx = document.getElementById("Wibx");
        buttonWibx.style.backgroundColor="#fff";
        buttonWibx.style.border="1px solid #009fe3"; 
        buttonWibx.style.color="#009fe3";
        ButtonWibx="Não";
        var divWibx=document.getElementById("DivWibx");
        divWibx.style.display="none";

        var button = document.getElementById("Conta");
        var div=document.getElementById("DivConta");
        if(ButtonConta === "Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonConta="Não";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonConta="Sim";
            div.style.display="block";
        }
    }

    function Corrente(){ 
        var buttonPoupa = document.getElementById("Poupanca");
        buttonPoupa.style.backgroundColor="#fff";
        buttonPoupa.style.border="1px solid #009fe3"; 
        buttonPoupa.style.color="#009fe3";
        ButtonPoupanca="Não";

        var button = document.getElementById("Corrente");
        if(ButtonCorrente ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonCorrente="Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCorrente="Sim";
        }
    }

    function Poupanca(){
        var buttonCorrent = document.getElementById("Corrente");
        buttonCorrent.style.backgroundColor="#fff";
        buttonCorrent.style.border="1px solid #009fe3"; 
        buttonCorrent.style.color="#009fe3";
        ButtonCorrente="Não";

        var button = document.getElementById("Poupanca");
        if(ButtonPoupanca ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonPoupanca="Não";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonPoupanca="Sim";
        }
    }

    function Cielo(){
        var erro = document.getElementById("valida");
        erro.innerHTML = "";

        var buttonConta = document.getElementById("Conta");
        buttonConta.style.backgroundColor="#fff";
        buttonConta.style.border="1px solid #009fe3"; 
        buttonConta.style.color="#009fe3";
        ButtonConta="Não";
        var divConta=document.getElementById("DivConta");
        divConta.style.display="none";

        var buttonWibx = document.getElementById("Wibx");
        buttonWibx.style.backgroundColor="#fff";
        buttonWibx.style.border="1px solid #009fe3"; 
        buttonWibx.style.color="#009fe3";
        ButtonWibx="Não";
        var divWibx=document.getElementById("DivWibx");
        divWibx.style.display="none";

        var button = document.getElementById("Cielo");
        var div=document.getElementById("DivCielo");
        if(ButtonCielo ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonCielo="Não";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonCielo="Sim";
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
        ButtonCielo="Não";
        var divCielo=document.getElementById("DivCielo");
        divCielo.style.display="none";

        var buttonConta = document.getElementById("Conta");
        buttonConta.style.backgroundColor="#fff";
        buttonConta.style.border="1px solid #009fe3"; 
        buttonConta.style.color="#009fe3";
        ButtonConta="Não";
        var divConta=document.getElementById("DivConta");
        divConta.style.display="none";

        var button = document.getElementById("Wibx");
        var div=document.getElementById("DivWibx");
        if(ButtonWibx ==="Sim"){
            button.style.backgroundColor="#fff";
            button.style.border="1px solid #009fe3"; 
            button.style.color="#009fe3";
            ButtonWibx="Não";
            div.style.display="none";
        }else{
            button.style.backgroundColor="#009fe3";
            button.style.color="#fff";
            ButtonWibx="Sim";
            div.style.display="block";
        }   
    }

    async function Excluir(id){ 
        let response= "";
        var erro= document.getElementById("valida");

        try{
            response= await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/ExcluirServicosPrest',{idServ:id});
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
                response = await api.post('https://agendaanimal-backend.herokuapp.com/Prestador/EditarServicosPrest',{tipoServ: inputNome.value, valorServ:inputValor.value, idServ:id});
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
                        <li class="nav-item active" id="Home" style={{display:'block'}}>
                            <a class="nav-link" href="/Home">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={inicio}/> 
                            <p style={{textAlign: '-webkit-center'}}>Inicio</p>
                            </a>
                        </li>
                        <li class="nav-item" id="Calen" style={{display:'none'}}>
                            <a class="nav-link" href="/Calendario">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={calendario}/>
                            <p style={{textAlign: '-webkit-center'}}>Calendário</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Func" style={{display:'none'}}>
                            <a class="nav-link" href="/Funcionarios">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'11%',height:'06%'}} src={funcionario}/>
                            <p style={{textAlign: '-webkit-center'}}>Funcionários</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Shop" style={{display:'none'}}>
                            <a class="nav-link" href="/Shopping">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={shop}/>
                            <p style={{textAlign: '-webkit-center'}}>Shopping</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Med" style={{display:'none'}}>
                            <a class="nav-link" href="/Medicacao">
                            <i class="material-icons">alarm</i>
                            <p style={{textAlign: '-webkit-center'}}>Medicações</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Vac" style={{display:'none'}}>
                            <a class="nav-link" href="Vacina">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={vacinas}/>
                            <p style={{textAlign: '-webkit-center'}}>Vacinas</p>
                            </a>
                        </li>
                        <li class="nav-item " id="Pront" style={{display:'none'}}>
                            <a class="nav-link" href="/Prontuarios">
                            <img class="material-icons" style={{position:'absolute',color:'#009fe3',width:'12%'}} src={prontuarios}/>
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
                            <a className="navbar-brand" href="#pablo" style={{fontSize:'21px'}}>Editar Perfil</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                      <div className="collapse navbar-collapse justify-content-end">
                            <ul class="navbar-nav">
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">notifications</i>
                        <span class="notification">5</span>
                        <p class="d-lg-none d-md-block">
                            Some Actions
                        </p>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Mike John responded to your email</a>
                        <a class="dropdown-item" href="#">You have 5 new tasks</a>
                        <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                        <a class="dropdown-item" href="#">Another Notification</a>
                        <a class="dropdown-item" href="#">Another One</a>
                        </div>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link" onClick={Edit}>
                        <i class="material-icons">help_outline</i>
                        <p class="d-lg-none d-md-block">
                            Stats
                        </p>
                        </a>
                    </li>
                    
                    <li class="nav-item dropdown" >
                        <a onClick={Login}>
                            <img src={rodape} class="iconLogo" align="right" alt="" />      
                        </a>
                    </li>
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
                                                <div class="col-md-12">
                                                    <p><label style={{fontWeight:'400',color:'black'}}>Exemplo:</label> Supondo que o funcionário na segunda-freira tenha um turno das 21:00 até 06:00 de terça-feira, então o cadastro seria na segunda-feira 21:00 até 00:00 e na terça-feira 00:00 até 06:00.</p>
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