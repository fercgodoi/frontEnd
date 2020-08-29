import React from 'react';
import "../css/material-dashboard.css";
import rodape from  "../img/cover.jpg";
import rodape2 from  "../img/Icon/versao.png";

import api from '../services/api2.js';

import inicio from "../img/Icon/inicioAzul.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacina_branco.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

import "../js/menu.js";


export default function Vacina(){
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
              imgImg.setAttribute("src", "data:image/png;base64,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");
              img.setAttribute("src", "data:image/png;base64,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");
            }
           
        }
    }
    
    setTimeout(() => {Dados()}, 1);

    async function Aparecer(){
        var Nome = document.getElementById("rg");
        let response="";
        try {
            response = await api.post('https://agendaback.herokuapp.com/Vacina/buscarVacina');
        } catch (error) {
            console.log(error);               
        }

        if(response){
            if(response.data.response){
                var produto = response.data.response.Vacina;
                if(produto.length === 0){
                    Nome.value = "Não tem Vacina";
                    Nome.style.color="red";
                }else{
                    for(let i=0; i< produto.length;i++){
    
                        var dateInicio= produto[0].dataApliVacina.split('', 10);
                        var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;
                        ////////////////////////////////////////////////////
                        var tbody = document.getElementById("tobdy");
                        var tr = document.createElement("tr");
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
                        var img = document.createElement("img");
                        var div3 = document.createElement("div");
                        var aTutor = document.createElement("a");
                        var br = document.createElement("BR");
                        var aNome = document.createElement("a");
                        var aPet = document.createElement("a");
                        var aPetNome = document.createElement("a");
                        var div4 = document.createElement("div");
                        var pVacina = document.createElement("p");
                        var div5 = document.createElement("div");
                        var pData = document.createElement("p");
                        var div6 = document.createElement("div");
                        var pRg = document.createElement("p");
                        var div7 = document.createElement("div");
                        var div8 = document.createElement("div");
                        var button = document.createElement("button");           
        
                        tr.style.width="100%";
                        tr.style.borderBottom = "1px solid #c1e0fc";
                        div1.className="row";
                        div2.className="col-md-0.5";
                        div2.style.paddingRight="0";
                        div2.style.marginLeft= "15px";
                        img.className="ImagemProd";
                        img.setAttribute("align","right");
                        div3.className="col-md-2";
                        div3.style.paddingLeft="0";
                        aTutor.className="TextPront";
                        aTutor.innerHTML="Tutor: ";
                        aTutor.style.padding= "5% 5%";
                        aNome.className = "NomeFunc";
                        aNome.style.padding="0";
                        aNome.innerHTML = produto[i].nomeCli;
                        aPet.className="PetPront";
                        aPet.innerHTML="Pet: ";
                        aPetNome.style.color="#676767";
                        aPetNome.innerHTML = produto[i].NomePet;
                        div4.className="col-md-2";
                        pVacina.className="FuncaoPront";
                        pVacina.innerHTML= produto[i].nomeVacina;
                        div5.className="col-md-2";
                        pData.className="FuncaoPront";
                        pData.innerHTML= dateCorreto;
                        div6.className="col-md-2";
                        pRg.className="FuncaoPront";
                        pRg.innerHTML= produto[i].rgPet;
                        div7.className="col-md-3";
                        div8.style.width="100%";
                        div8.style.textAlign="right";


                        if(produto[i].fotoPet !== "" || produto[i].fotoPet !== null || produto[i].fotoPet !== undefined){
                            img.setAttribute("src",produto[i].fotoPet);
                        }else{
                            img.setAttribute("src", "data:image/png;base64,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");
                        }
        
                        button.setAttribute("id", i.toString() );
                        button.onclick = function() { Visualizar(produto[i].idVacina) };
                        button.className="btn btn-primary btnEditVacina";
                        button.innerHTML="Visualizar";
                        button.setAttribute("type","submit");
        
                        div8.appendChild(button);
                        div7.appendChild(div8);
                        div6.appendChild(pRg);
                        div5.appendChild(pData);
                        div4.appendChild(pVacina);
                        div3.appendChild(aTutor);
                        div3.appendChild(aNome);
                        div3.appendChild(br);
                        div3.appendChild(aPet);
                        div3.appendChild(aPetNome);
                        div2.appendChild(img);
                        div1.appendChild(div2);
                        div1.appendChild(div3);
                        div1.appendChild(div4);
                        div1.appendChild(div5);
                        div1.appendChild(div6);
                        div1.appendChild(div7);
                        tr.appendChild(div1);
                        tbody.appendChild(tr);   
        
                   }
                } 
            }
            if(response.data.error){
                if(response.data.error === "error"){
                    Nome.value = "Tente Novamente";
                }if(response.data.error === "falha na autenticação do token"){
                    Nome.value = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 2000);
                }else{
                    Nome.value = "Tente Novamente";
                }
            }
        }
    }

    function Visualizar(c){   
        localStorage.setItem('Codigo', c);
        window.location.href = "/VisualizarVacina";
    }

    setTimeout(() => {Aparecer()}, 100);

    async function Filtro(){
        var Nome = document.getElementById("rg");
        // var ButtonFiltro = document.getElementById("ButtonFiltro");
        

        if (Nome.value === "" || Nome.value === null || Nome.value === undefined) {

            Nome.value = "Preencha o campo Nome";
            Nome.style.color="red";
        }
        else{
            Nome.style.color="#009fe3";
            let response="";
            
            var tbody = document.getElementById("tobdy");
            tbody.innerText="";
            
            try {
                response = await api.post('https://agendaback.herokuapp.com/Vacina/FiltroVac', {rgPet:Nome.value});
            } catch (error) {
                console.log(error);               
            } 

            if(response){
                if(response.data.error){
                    if(response.data.error === "Falhou"){
                        Nome.value = "Tente Novamente";
                    }if(response.data.error === "falha na autenticação do token"){
                        Nome.value = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        Nome.value = "Tente Novamente";
                    }    
                }                      

                if(response.data.response){
                    var produto = response.data.response.Vacina;

                    if(produto.length === 0){
                        Nome.value = "Não tem Vacina";
                        Nome.style.color="red";
                    }else{
                        for(let i=0; i< produto.length;i++){

                            var dateInicio= produto[0].dataApliVacina.split('', 10);
                            var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;
                            ////////////////////////////////////////////////////
                            var tr = document.createElement("tr");
                            var div1 = document.createElement("div");
                            var div2 = document.createElement("div");
                            var img = document.createElement("img");
                            var div3 = document.createElement("div");
                            var aTutor = document.createElement("a");
                            var br = document.createElement("BR");
                            var aNome = document.createElement("a");
                            var aPet = document.createElement("a");
                            var aPetNome = document.createElement("a");
                            var div4 = document.createElement("div");
                            var pVacina = document.createElement("p");
                            var div5 = document.createElement("div");
                            var pData = document.createElement("p");
                            var div6 = document.createElement("div");
                            var pRg = document.createElement("p");
                            var div7 = document.createElement("div");
                            var div8 = document.createElement("div");
                            var button = document.createElement("button");           
    
                            tr.style.width="100%";
                            tr.style.borderBottom = "1px solid #c1e0fc";
                            div1.className="row";
                            div2.className="col-md-0.5";
                            div2.style.paddingRight="0";
                            div2.style.marginLeft= "15px";
                            img.className="ImagemProd";
                            img.setAttribute("align","right");
                            img.setAttribute("alt","");
                            div3.className="col-md-2";
                            div3.style.paddingLeft="0";
                            aTutor.className="TextPront";
                            aTutor.innerHTML="Tutor: ";
                            aTutor.style.padding= "5% 5%";
                            aNome.className = "NomeFunc";
                            aNome.style.padding="0";
                            aNome.innerHTML = produto[i].nomeCli;
                            aPet.className="PetPront";
                            aPet.innerHTML="Pet: ";
                            aPetNome.style.color="#676767";
                            aPetNome.innerHTML = produto[i].NomePet;
                            div4.className="col-md-2";
                            pVacina.className="FuncaoPront";
                            pVacina.innerHTML= produto[i].nomeVacina;
                            div5.className="col-md-2";
                            pData.className="FuncaoPront";
                            pData.innerHTML= dateCorreto;
                            div6.className="col-md-2";
                            pRg.className="FuncaoPront";
                            pRg.innerHTML= produto[i].rgPet;
                            div7.className="col-md-3";
                            div8.style.width="100%";
                            div8.style.textAlign="right";
    
                            button.setAttribute("id", i.toString() );
                            button.onclick = function() { Visualizar(produto[i].idVacina) };
                            button.className="btn btn-primary btnEditVacina";
                            button.innerHTML="Visualizar";
                            button.setAttribute("type","submit");

                            if(produto[i].fotoPet !== "" && produto[i].fotoPet !== null && produto[i].fotoPet !== undefined){
                                img.setAttribute("src",produto[i].fotoPet);
                            }else{
                                img.setAttribute("src", "data:image/png;base64,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");
                            }
    
                            div8.appendChild(button);
                            div7.appendChild(div8);
                            div6.appendChild(pRg);
                            div5.appendChild(pData);
                            div4.appendChild(pVacina);
                            div3.appendChild(aTutor);
                            div3.appendChild(aNome);
                            div3.appendChild(br);
                            div3.appendChild(aPet);
                            div3.appendChild(aPetNome);
                            div2.appendChild(img);
                            div1.appendChild(div2);
                            div1.appendChild(div3);
                            div1.appendChild(div4);
                            div1.appendChild(div5);
                            div1.appendChild(div6);
                            div1.appendChild(div7);
                            tr.appendChild(div1);
    
                            tbody.appendChild(tr);
                        }
                    }                   
                }else{
                    Nome.value = "Tente Novamente";
                } 
            }
        }     
    }

    function Nova(){
        window.location.href="/CadastroVacina";
    }

    function Edit(){
        window.location.href="/EditarPerfil";
    }
    function Login(){
        window.location.href="/";
    }


    async function AparecerSolicitadas(){
        var Nome = document.getElementById("rg");
        let response="";
        try {
            response = await api.post('https://agendaback.herokuapp.com/Vacina/buscarVacinasSolicitadas');
        } catch (error) {
            console.log(error);               
        }

        if(response){
            if(response.data.response){
                var produto = response.data.response.Vacina;
                if(produto.length === 0){
                    Nome.value = "Não tem Vacina Solicitadas";
                    Nome.style.color="red";
                }else{
                    for(let i=0; i< produto.length;i++){
    
                        var dateInicio= produto[0].dataApliVacina.split('', 10);
                        var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;
                        ////////////////////////////////////////////////////
                        var tbody = document.getElementById("tobdySolicitadas");
                        var tr = document.createElement("tr");
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div"); 
                        var div3 = document.createElement("div");
                        var div4 = document.createElement("div");         
                        var div5 = document.createElement("div");
                        var div6 = document.createElement("div");    
                        var ANegar = document.createElement("a");   
                        var AAceitar = document.createElement("a"); 
                        var ImgNegar = document.createElement("img");   
                        var ImgAceitar = document.createElement("img"); 
                        var Img = document.createElement("img");   
                        var Nome1 = document.createElement("a");  
                        var Nome2 = document.createElement("a");   
                        var NomeVacina = document.createElement("p");  
                        var Data = document.createElement("p"); 
                        var Rg = document.createElement("p"); 
                        var br = document.createElement("BR");
                        var NomePet1= document.createElement("a");  
                        var NomePet2= document.createElement("a"); 
        
                        tr.style.width="100%";
                        tr.style.borderBottom = "1px solid #c1e0fc";
                        div1.className="row";
                        div2.className="col-md-0.5";
                        div2.style.paddingRight="0";
                        div2.style.marginLeft="15px";

                        Img.className="ImagemProd";
                        Img.setAttribute("align","right");
                        
                        ImgAceitar.className="ButtonTabVacina";
                        ImgNegar.className="ButtonTabVacina";

                        AAceitar.onclick = function() { Confirmar(produto[i].idVacina) };
                        ANegar.onclick = function() { Negar(produto[i].idVacina) };

                        ImgAceitar.src='data:image/png;base64,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';
                        ImgNegar.src="data:image/png;base64,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";

                        if(produto[i].fotoPet !== "" && produto[i].fotoPet !== null && produto[i].fotoPet !== undefined){
                            Img.src =produto[i].fotoPet;
                        }else{

                            Img.setAttribute("src",'data:image/png;base64,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');
                            // Img.src =';
                        }
                      
                        div3.className="col-md-2";
                        div3.style.paddingLeft='0';
                        Nome1.className="NomeFunc";
                        Nome1.innerHTML = "Tutor: ";
                        Nome2.className="TextPront";
                        Nome2.innerHTML =   produto[i].nomeCli; 
                        NomePet1.className="PetPront";
                        NomePet1.innerHTML="Pet: ";
                        NomePet2.style.color="#676767";
                        NomePet2.innerHTML=produto[i].NomePet;


                        div4.className="col-md-2";
                        NomeVacina.className="TextVacina";
                        NomeVacina.innerHTML=produto[i].nomeVacina;
                        div5.className="col-md-2";
                        Data.className="TextVacina";
                        Data.innerHTML=dateCorreto;
                        div6.className="col-md-2";
                        Rg.className="TextVacina";
                        Rg.innerHTML=produto[i].rgPet;

                        
                        div6.appendChild(Rg);
                        div5.appendChild(Data);
                        div4.appendChild(NomeVacina);

                        Nome1.appendChild(Nome2);
                        NomePet1.appendChild(NomePet2);
                        div3.appendChild(Nome1);
                        div3.appendChild(br);
                        div3.appendChild(NomePet1);

                        AAceitar.appendChild(ImgAceitar);
                        ANegar.appendChild(ImgNegar);

                        div2.appendChild(AAceitar);
                        div2.appendChild(ANegar);
                        div2.appendChild(Img);


                        div1.appendChild(div2);
                        div1.appendChild(div3);
                        div1.appendChild(div4);
                        div1.appendChild(div5);
                        div1.appendChild(div6);
                        tr.appendChild(div1);
                        tbody.appendChild(tr);
        
                   }
                } 
            }
            if(response.data.error){
                if(response.data.error === "error sql"){
                    Nome.value = "Tente Novamente";
                }if(response.data.error === "falha na autenticação do token"){
                    Nome.value = "Tente Novamente";
                    setTimeout(() => {window.location.href="/"}, 2000);
                }else{
                    Nome.value = "Tente Novamente";
                }
            }
        }
    }

    setTimeout(() => {AparecerSolicitadas()}, 100);


    async function Confirmar(id){
        var Nome = document.getElementById("rg");

        if(id === "" || id === null || id === undefined){
            Nome.value = "Tente Novamente";
        }else{
            let response="";
            try {
                response = await api.post('https://agendaback.herokuapp.com/Vacina/AprovarVacinasSolicitadas', {idVacina:id});
            } catch (error) {
                console.log(error);               
            }

            if(response){
                if(response.data.error){
                    if(response.data.error === "error sql"){
                        Nome.value = "Tente Novamente";
                    }if(response.data.error === "falha na autenticação do token"){
                        Nome.value = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        Nome.value = "Tente Novamente";
                    }
                }

                if(response.data.message){
                    if(response.data.message === "Alterado"){
                        Nome.style.color="#009fe3";
                        Nome.value = "Confirmada";
                        setTimeout(() => {window.location.href="/Vacina"}, 100);
                    }
                }
            }

        }       
    }


    
    async function Negar(id){
        var Nome = document.getElementById("rg");

        if(id === "" || id === null || id === undefined){
            Nome.value = "Tente Novamente";
        }else{
            let response="";
            try {
                response = await api.post('https://agendaback.herokuapp.com/Vacina/NegarVacinasSolicitadas', {idVacina:id});
            } catch (error) {
                console.log(error);               
            }

            if(response){
                if(response.data.error){
                    if(response.data.error === "error sql"){
                        Nome.value = "Tente Novamente";
                    }if(response.data.error === "falha na autenticação do token"){
                        Nome.value = "Tente Novamente";
                        setTimeout(() => {window.location.href="/"}, 2000);
                    }else{
                        Nome.value = "Tente Novamente";
                    }
                }

                if(response.data.message){
                    if(response.data.message === "Alterado"){
                        Nome.style.color="#009fe3";
                        Nome.value = "Recusada";
                        setTimeout(() => {window.location.href="/Vacina"}, 100);
                    }
                }
            }

        }       
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
                        <li className="nav-item " id="Func" style={{display:'none'}}>
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
                        <li className="nav-item active" id="Vac" style={{display:'none'}}>
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
                                            <img src={rodape2} className="material-icons" alt=""/>
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
                            <a className="navbar-brand" href="#pablo" >Vacina</a>
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
                                <div className="card" style={{borderLeft:'4px solid #009fe3'}}>
                                    <div className="card-body" style={{padding:'0 0 0 0'}}>
                                        <div className="row" >
                                             <div className="col-md-4">
                                                <div className="navbar-form" style={{textAlign: '-webkit-center'}}>
                                                    <div className="input-group no-border searchFunc" >
                                                        <span className="material-icons" style={{color:'#009fe3'}}>
                                                        search
                                                        </span>
                                                        <input type="text"  id="rg" placeholder="Digite o Rg"/>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="col-md-4" style={{paddingLeft: '0'}}>
                                                <div style={{width: '100%',textAlign: 'left',paddingRight:'5%'}}> 
                                                    <button type="submit" id="ButtonFiltro" onClick={Filtro} className="btn btn-primary btnPrimeiroVacina" style={{width:'40%'}} >Filtrar</button>
                                                    <button type="submit" className="btn btn-primary btnSegundoVacina" style={{width:'40%'}}  onClick={Nova}>Nova Vacina</button>
                                                </div> 
                                            </div>                                             
                                            <div className="col-md-4"></div>
                                            <br/>
                                        </div>

                                        <div className="row" style={{paddingTop:'1%'}}>                                          
                                            <div className="col-md-3" style={{paddingLeft: '5%'}}>
                                                <p className="TituloPront" align="left">Solicitações Vacinas</p>
                                            </div>
                                            <div className="col-md-2" style={{paddingLeft: '7%'}}> 
                                                <p className="TituloPront" align="left">Vacina</p></div>
                                            <div className="col-md-2" style={{paddingLeft: '7%'}}> 
                                                <p className="TituloPront" align="left">Data</p></div>
                                             <div className="col-md-2" style={{paddingLeft: '7%'}}> 
                                                <p className="TituloPront" align="left">RG Animal</p></div>
                                            <div className="col-md-3">
                                                <div style={{width: '100%',textAlign: 'right'}}>
                                                </div> 
                                            </div>
                                        </div>
                                        <br/>

                                        <div className="tab-content">
                                            <div className="tab-pane active" id="profile">
                                                <table className="table" style={{marginBottom:'0px'}}>
                                                    <tbody id="tobdySolicitadas">                                                    
                                                                                                         
                                                        {/* <tr style={{width: '100%',borderBottom:'1px solid #c1e0fc'}}>
                                                            <div class="row">
                                                                <div class="col-md-0.5" style={{paddingRight: '0',marginLeft: '15px'}}>
                                                                <a><img src={rodape} class="ButtonTabVacina" />  </a>
                                                                <a><img src={rodape} class="ButtonTabVacina" />  </a>
                                                                    <img src={rodape} class="ImagemProd" align="right" />            
                                                                </div>
                                                                <div class="col-md-2" style={{paddingLeft: '0'}}>
                                                                    <a className="NomeFunc"><a class="TextPront">Tutor:</a>José da Silva </a> <br/> <a className="PetPront">Pet: <a style={{color:'#676767'}}>Auau</a> </a>
                                                                </div>
                                                                <div class="col-md-2"> 
                                                                <p class="TextVacina">2011900</p></div>
                                                                <div class="col-md-2"> 
                                                                <p class="TextVacina">2011900</p></div>
                                                                <div class="col-md-2"> 
                                                                <p class="TextVacina">2011900</p></div>
                                                           </div>
                                                        </tr>                                                */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="row" style={{paddingTop:'2%'}}>                                          
                                            <div className="col-md-3" style={{paddingLeft: '5%'}}>
                                                <p className="TituloPront" align="left">Ultimas Vacinas!</p>
                                            </div>
                                            <div className="col-md-2" style={{paddingLeft: '7%'}}> 
                                                < p className="TituloPront" align="left">Vacina</p></div>
                                            <div className="col-md-2" style={{paddingLeft: '7%'}}> 
                                                <p className="TituloPront" align="left">Data</p></div>
                                             <div className="col-md-2" style={{paddingLeft: '7%'}}> 
                                                <p className="TituloPront" align="left">RG Animal</p></div>
                                            <div className="col-md-3">
                                                <div style={{width: '100%',textAlign: 'right'}}></div> 
                                            </div>
                                        </div>
                                        <br/>

                                        <div className="tab-content">
                                            <div className="tab-pane active" id="profile">
                                                <table className="table" style={{marginBottom:'0px'}} id="table">
                                                    <tbody id="tobdy">                                                    
                                                        {/* <tr style={{width: '100%',borderBottom:'1px solid #c1e0fc'}}>
                                                            <div class="row">
                                                                <div class="col-md-0.5" style={{paddingRight: '0',marginLeft: '15px'}}>
                                                                    <img src={rodape} class="ImagemProd" align="right" />            
                                                                </div>
                                                                <div class="col-md-2" style={{paddingLeft: '0'}}>
                                                                    <a className="NomeFunc"><a class="TextPront">Tutor:</a>José da Silva </a> <br/> <a className="PetPront">Pet: <a style={{color:'#676767'}}>Auau</a> </a>
                                                                </div>
                                                                <div class="col-md-2"> 
                                                                <p class="FuncaoPront">2011900</p></div>
                                                                <div class="col-md-2"> 
                                                                <p class="FuncaoPront">2011900</p></div>
                                                                <div class="col-md-2"> 
                                                                <p class="FuncaoPront">2011900</p></div>
                                                                <div class="col-md-3">
                                                                    <div style={{width: '100%',textAlign: 'right'}}>
                                                                        <button type="submit" className=" btn btn-primary btnEditVacina" >Visualizar</button>
                                                                    </div> 
                                                                </div>
                                                           </div>
                                                        </tr>  */}                                               
                                                    </tbody>
                                                </table>
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