import React from 'react';

import "../css/material-dashboard.css";
import "../css/material-dashboard.css";
import rodape from  "../img/Icon/versao.png";
import rodape2 from  "../img/Icon/versao.png";

import pendentes from  "../img/pendentes.png";
import aprovadas from  "../img/aprovadas.png";
import canceladas from  "../img/canceladas.png";
import recebimentos from  "../img/recebimentos.png";
import recebimentosMensais from  "../img/rebebimentos_mensais.png";
import pata from  "../img/pata.png";

import "../js/menu.js";

import inicio from "../img/Icon/inicio.png";
import calendario from "../img/Icon/calendarioAzul.png";
import funcionario from "../img/Icon/funcionarioAzul.png";
// import shop from "../img/Icon/shopAzul.png";
import vacinas from "../img/Icon/vacinasAzul.png";
import prontuarios from "../img/Icon/prontuarioAzul.png";
import medicacao from "../img/Icon/medicacaoAzul.png";

import api from '../services/api2.js';
export default function Home(){

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
    setTimeout(() => {Validar()}, 1);

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

          if(produto.fotoPrest !== "" && produto.fotoPrest !== null && produto.fotoPrest !== undefined){
            imgImg.setAttribute("src", produto.fotoPrest);
            img.setAttribute("src", produto.fotoPrest);
          }else{
            imgImg.setAttribute("src", "data:image/png;base64,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");
            img.setAttribute("src", "data:image/png;base64,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");
          }
         
      }
  }
  
  setTimeout(() => {Dados()}, 1);

    var cancelado = "false";
    var aprovado = "false";
    var pendente = "false";

    async function Aparecer(){
        let response="";
        try {
            response = await api.post('https://agendaback.herokuapp.com/Agendamento/BuscarAgendamento');
        } catch (error) {
            console.log(error);               
        }          
        console.log(response);
        var tbody = document.getElementById("tbody");
        if(response){
          if(response.data.response){
            var produto = response.data.response.Agendamento;
            if(produto.length > 0){
              for(let i=0; i< produto.length;i++){ 
                document.getElementById("imgCentro").style.display="none";  
                var tr = document.createElement("tr");
                var tdImg = document.createElement("td");
                var imgPet = document.createElement("img");
                var tdNomePet = document.createElement("td");
                var PNomePet = document.createElement("p");
                var aRaca = document.createElement("p");
                var aTipo = document.createElement("p");
                var aData = document.createElement("p");
                var tdPagamento = document.createElement("td");
                var PNomeDono = document.createElement("p");
                var PFormaPagamento = document.createElement("p");
                var divButton = document.createElement("div");
                var aConfirmar = document.createElement("a");
                var imgConfirmar = document.createElement("img");
                var aNegar = document.createElement("a");
                var imgNegar = document.createElement("img");
                var br = document.createElement("BR");
        
                tr.style.width="100%";
                // tr.style.borderBottom="1px solid #009fe3";
                tr.style.marginTop="2%";
                // 

                tdImg.onclick = function() { Detalhes(produto[i].idAgend) };
                tdNomePet.onclick = function() { Detalhes(produto[i].idAgend) };
                tdImg.style.width="20%";
                tdNomePet.style.width="55%";
                imgPet.className="ImagemTabGrand";
                imgPet.setAttribute("alt","");
                PNomePet.className="TituloTabGrand";
                PNomePet.innerHTML=produto[i].nomePet;
                PNomePet.onclick = function() { Detalhes(produto[i].idAgend) };
                aRaca.className="ParagTabGrand";
                aRaca.style.marginBottom="0";
                aRaca.innerHTML=produto[i].racaPet + "&nbsp;&nbsp;";
                aTipo.className="ParagTabGrand" + "&nbsp;&nbsp;";
                aTipo.innerHTML=produto[i].tipoServicoAgen;
                aTipo.style.marginBottom="0";
                aData.className="ParagTabGrand";
                
                var dateInicio= produto[i].DataAgen.split('', 10);
                var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;

                aData.innerHTML=dateCorreto+ "  -  " + produto[i].HoraAgen;
                aData.style.marginBottom="0";
                tdPagamento.style.width="25%";
                tdPagamento.style.textAlignLast="right";
                PNomeDono.className="DonoTabGrand";
                PNomeDono.innerHTML=produto[i].nomeCli;
                PFormaPagamento.className="TituloTabGrand";
                PFormaPagamento.innerHTML=produto[i].formaPagtAgen;
                divButton.style.width="100%";
                divButton.style.textAlignLast="right";
                imgConfirmar.className="ButtonTabGrand";
                imgConfirmar.setAttribute("alt","");
                imgConfirmar.src='data:image/png;base64,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';
                imgNegar.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAABHNCSVQICAgIfAhkiAAACdxJREFUaEPVm3lUU1cex+9LgIRskAQSYiABZFyKWOrxuNJW3KgKVetMndHaqVOtOtoRR6vgqIgLzmjpeA4zdWxr7am1x2ltK+CCVdxO0dFCC4OKSiEJQbYkhCyE7G/ODQ2NLHnJey+Ref/kwLv39/t+7vLu/f3efQgI8CUzoDMQFEykqFTPAKczFqVQRCiNFo3S6FzoGrGYtYjFokKczlZAoSht0dH3KAioSmAj1wMpDSHbuBJFw+1ax0KqumOlg8efQautsdErrjOpnRpAVXUAakcbCOlod/3CyyGIAXaB0PXrgL9cHjCnzei2Jo8PoWg11xx8wXHAoxYnIIiZTK2kgTca0BfCfqrfYY+VpodfvmhnXCimMy6XAYqpG5deJ5MFTLNfAqb5C3t6ZmWEUpsU5c6kpL1SDlKBy2C/SoTBlUY0BW3v+DDkcfMz3PxcNr3qDhm6BtgwT5gEtHsPGRwC4T1njHCVlI3cI+IIN7jShIrRlo6PKN3GNG7eNhbj2mUiOnyua0qfCzr3HDQCGu0GKo5ZLWEiLT5X9iiIC1xZWZcP2JxN3H07WczSr3HZwCPWs45x0W/Qrtw8PejS/j1uckq+v/b8Fv341t3LtO9vzuDv2kr111kgymsK3nNYnpt4RTx1/Fx/7PsF3lTf1hBZuD+BfeqEX/X8EYSnrGHZG6gue1tD3CjRr3yt7xNAsx7l22z2VtGSl0Jp1VW+2g5qOfjwa/virIUSEiqSRiJaLOeY4BAaPKirEWXNFFMspC6lWNr8vu9kMEFrSXmTI2l0KhY8Jris026RjI0NG+7Q7laC639TTaM5ISos3FvLeQVXKHV3hSteGU2rrgrxu/mfYgXzxMl21fFT9yVx3GeHkjEkeFNT58mIQ/uzOCeOsZ8iA27X+pVvGXTZOd9IpLzfD2ZkUHBZi3ET63xxbtSW9dG4PQ+DiurDR1WmOfP3SsXsov5yBoC7dmRtqpq4CaP4w0A7YQnK6gatPYo3NpGFtHsaGwCuUOrO8Hdsns8sPh1K2OswMNC95LfWzt1/PSuJi1wyJDgMOIBccSM2LTVyGGgmTYLyP7U6pzh2ajwbqXMbfaLHlXJNBS97zbRgBRykkWEYMs3KAJqDRd9JRgqeHwAO42l69Y+loqyZnGAJCqaf1gs39NbklHnxHOQm9NvX48137l/l52bPIBRPp6QAUFAAwGuvAaDTkcMVEQHAZ58BsH07ALW1uG32TJoKtAXvXRJPHOsKZlzgrnSRxqaLTxLgf6BB6NJSAKBQKDArizg8tAVtQtuwIaFNAvDyRrUjnksNRxDE5gKXdaFLGZfOfyBYvRz/MD97FoDp03/pEaLwntBuqxUVAGRm4u719uOnDObZGSvj2chXLnBFo+Ysb/fWBaySr3AbdfU0hB83jjj8YNB37/ZCE5hCxsWvAu2ugmJJQtQiF7hcbTXHjU+g4U0M9pGSAR8gaKjRyeEAZeWjnngBnYHAvDfth6pi0cLZ+Ie55zghAh9AaLfE1nPX9LaUZxcgjXp0S2RR4QHuoX3kRWB44IMADeG1ubvturUb30EULYYjke/uX8v5+F/45/dgNf2BDxI0lKlfvR5os3P+iTQ1dpTx8nIymKVfkwsOrfkCH0RoKKn75SVAs+fgOUTRqP6vYN3rKfTbrg0N+Zc3eOjNvU67PZPw9PYGYZ4yHaiOfFqDyJt1beKsmcIQWQP50G6LQ8HD+3BzEiRo6MaWmARaSq60IjKVxSJNTQxDuvG94/K5tQaD96wc4J52u0KZTKCollkQmcpqlqYm0AIOPtSch/8PEjR01Qcuf6xvFWemxwR0qHsO+f5zGt4jur31edh5DHW5TFMjXLtifMAebljQ7vtBgu97uDXJNed5O9+ZF5DlzBs0HN7wImNv70eP9y1n8hbD+9zCgnWcY0f8qO5HUW/rNDRDVmDjoyT9WxuAduO2fyANevTPvKLCv0WSuWXF6mnPKMuXTY6PUL4U02zfY+5e83YODFJepP34Q4no5VnkBCn+QGOt82QkM/q1Rsu56wZ7yvh5vYkIlcUsSR1Jo3QbfWk07DJ4tqFB6HkHJwI0f/+gJ14Yzvg5EaEu5eXnZLKKT2NDYZXAAx2knje+shR07thXLE2M7k1ENHahrzIvX/hQsGoZseFOBDoI8O2f/NtgnjX3jXg20nt+RYaidERjM0iTBPhjcjKgAwyvkGkc0kgKHUEQe196WVldXxa1eX0G7vRy/2Qj0W3oYHOeQLKxZ/I0oC48UiwZJ10E27cPXKFHp4feqz0nmvdCBNY0HvQ+jLIgPIdD3t7bE16v70024kwvt5R9Z7COTZ6TEIHcfgIc/tFU33aLv/VPUxhXv8XF7goxDxwAYPlyQtnQJ5xD+JMnAcjNxQ1tmjMPqPcVVkhHj0hz237i3ZnCgCZTFYpb4rTU/8vDAEP1VvOtWqNNHDsxkYM8HBQc/lPR0FHK2/uXTNaZL/H1+jCrZfz1Mqc2J69EkiRc7CltwPvxpm50BFC21MVNSSa2tA2TBlBWPtSFCQWjYthIh1dw11x/1Lol/Fp5XtTWDaxhoh+XDPXhozrTlOd3S8eMONzfwJCHf5QPmr+IeP9wJvvTj7wem8KlKAiVDH9Y26P746bTcUnC1wdz5/24l1xzT/jm78bQqu5QgqCVNBfmSdPsqqMn7ksS+P4f93KrkKmtZgkZ79VIw/JuyPV+rKreFB9NY3oriXmyUdGFcqmP6mpFi+eKSYveAtQIELr1m0tKy4RRKSMRxOvJBExw1xLXhXJRh/1xzNLMEFrlbfyHBwIEDM2aJ02ztX9+xurgh4qxoAfs3LB0yZXaGm7hgUTOJx8Mq6e9ftX6Lu3bm+XxUt5zWAxDbmCwKioa1ScYN8ozorLXDItTj6qiY2rzizNLJBLum1jaMddxLAPyVtMGxG7N4+3ZzmR9+flTWe6MS1f0aLfndwM6badEyPT7Va9Pc3ywhmg3osIevbGIYtDN4edujmBcuYjbFlZDe943zZnv1Ox/V+9ks8voLNbG/jsyX20RFis3oGMpKvVRaltLKm93Dpt+55avvv0qB+Npbf5Bgz0mptLB46/zDDj8MvRzYcLgbqdyPTqNWv9wlyMhaXZ4+UUb43wxnVFeBigwjsZxwcRgD/zgbsHCHlP6XFqY7KdvrUmjd7vjaRwmn6hCGrjbKoqiobJO66IQlWqlk8tPD3tY56DdvM4M0agBtb3N9WkltaMdhLS3uqrYhaLeTyvhJ5YxImDn8oAlLb3bNmoMhaLVXLXGxHycGEEthukiorCEH27+CFDo0TRn70e1yQjqiAMU6ghnGC0apdN5rvXUbO6kWC0q4HS0oAilyRktgB/VVpL1KeVQWv8HqcxyHLDZBmwAAAAASUVORK5CYII=";
                imgNegar.className="ButtonTabGrand";
                imgNegar.setAttribute("alt","");
                aConfirmar.onclick = function() { Confrimar(produto[i].idAgend) };
                aNegar.onclick = function() { Negar(produto[i].idAgend) };

                if(produto[i].fotoPet !== "" || produto[i].fotoPet !== null || produto[i].fotoPet !== undefined){
                  imgPet.setAttribute("src",produto[i].fotoPet);
                }else{
                  imgPet.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAyCAYAAADMb4LpAAAABHNCSVQICAgIfAhkiAAABlFJREFUaEPtmWtMk1cYx//nfVtaWi6WW8tFkA2cTtniDBoRvGzOTWZEwN2dCe7Cki27mGUzJkv2Ydn2Zfs2MzVhkmi2ibcBSpYF4xQFL5PBFC+T4QC5lEs7Lr28bd+znLeUtlwKNKHIwvnWnnN6fud/nvM8z3lKMIsbmcXsmIOfqdObU35OeT8U+B+azRHKo695HTh+d0o4r2nI1dGYH9p4oyBOvFlKKDjqkISkIKDgwA3JSiFK33g2NgbgATaHnIEBXz2fAHOJIcGOQmLzdSCjYQ71hEEwNYAgnk1MDeVxPVcL7Y/tMAre6/px0hNOYUCfL5Gj2UTp/ib7aQr7NhQkW8aa6A1PKUFRy2lw5FnX4EDDs3V5AlSvD8bfgyJeqrEYYSRx2DXfPHID3vDFbYlwOJpAhg864MoPmRvWRhGUZAQj64wZtwfEL7EzcY9v+IP/LAflrnoOmgnl2foJSqB2oxrFTQI+qrd1YMCyAO+lWj3ZvJXf35wOObn8IMFf6LJja7XVBF4egx26wVkBH6cE6jaqweBzq60mOpvgY5VA/Rx8AP28y6bnlJ+Kq1wSziMvSYWbRhuONnsGRYoXkoKRGibDyWYzbhjtAPGdaUxd+e+b0wE/XCWleCZeidKnohDEE1BKcbjRhNfO90pWcGiNBq88pAYhBFYHRW5lNyravFz2qOg/dfiilpUgqJmqn1fxQF2OFilh8uGpDpEi5VgHOEJxMzdW2pSr3TIKeKJMD7MzfRuzBQw+bZ5MgmfKuhpT/4v6PgRzBB8uDfXqEynFsp87Uc/MZ6bhs2KCcC47ZhRGSdMg1DxBdqJqVN+6Cj1+6xRmHn5puAx1W7XgRij/WW0flDyw+7EwL+WZSS0r7cSfM6G8Vsnh7YVqKHig6K4J9wcduLZFi0Xz3DZvFymSS9rBEeBOfiwUHjbfYBCwvEyPeBWPN1JVsDiAvbcH0GV1vxemxeYJpTi7KRprdErpyLvMDqSX65EcwqP86SioZRyYTRffHcTOC0ant8nU4OWHVdLJDNhE5FR2496AA5c2xyCKHQ2Aqg4rsiq64KokTQu8Tsnhbr4OarnrbQccbhzE9nO90AVzKEhR43KXgDqDDRqF8wVoFESkaeRYEa2QNnXf5EBRpgYFqSHDNt8viFhQ0o5em1P9aYGPDCJo3BaL8CA3/HWDDWknO6TAszCMR1GGBquHTsZFd0lvxY6qXtzpcwCUoj5Hi7SIoGF4tsGkI+3os08jPFv4fHY0MrVOs3EeuQVrKrqQnxSMI+sjvS6npzth5vTi2R4cu2fGuU0xyNQphrtr9FasOqUfjrzTojxbbVEYj4vPxWBeEAcHBXZW9aLXKqJsQ9S44J7+P6+yB2o5wcGsCOm9ahBErCrX406/O2pNGzwDYUbzuEaGpn67tImbeTooZW5TGteBAzDZRCw52SHdhQUhMul+OCsg7uYFXyMMUk6m9f2S8ic9oBT7MzR48xH35fMF7uo7cHsAb100jJugTavyLgjmff7K1yHEw/tMBr5PEJF6vB16y9i1oIDA58xX4MSTE9v6yA2x3Cf/TA9OtIxZT5oeVzkSYtdiNb5eqZmM2KPGfHLFgG8aBpEdr0Bpq3eKHBDlCxeq8F1GhF/w71QbsPfWgHRn9vz+L7o9yokBgZ+v4lC7RYvIoTDv6RLFIXNm+Y1nuszGtJvsWF7aieRQGY6uj8SKMj1azeKwCAGBZ0ErVsWDpcWRCh4dZjtaTaKUAnRZROm1xxI5loQlqHhEB3PQm0VU6QV88GgIPk4LRXmLGVsre0A9stLAwPtlMM44cWVztPSa2vBLFyxu0aVffKDhGWCYnICZ1sBQPjNukJpUxcyfIOWn8hNNm7ry/lYPJiLxoz9eCfyxUY3jrTYUXhP06Lck+q4SH+hIhszWiOEnQeD/GXHtc3UEwYlMFbacN6HGQL9Fwfx3R2rgnQ3tuyqHPOZXELLWNXAqRSc/BB5zCg+KU5lK6XmYV2PtFq38YhTGdfuGZ70HWhMgoxcAJLKPgYbnQPFqopymR3D292uFKkrpdrye2DbWLseuue1rUyHI8SkoyUwJ5YNv5GpF7U/tHEthfTaWsBDizrQo5UBYiJpMo2xeCw++mIf1liAomlEYZ/I1c5I/PJnFAz9mDj7wmjtX/A/ifE5vFJ5ABQAAAABJRU5ErkJggg==");
                }

                aNegar.appendChild(imgNegar);
                aConfirmar.appendChild(imgConfirmar);             
                divButton.appendChild(aConfirmar);
                divButton.appendChild(aNegar);
                tdPagamento.appendChild(PNomeDono);
                tdPagamento.appendChild(PFormaPagamento);              
                tdPagamento.appendChild(divButton);              
                tdNomePet.appendChild(PNomePet);
                tdNomePet.appendChild(aRaca);
                tdNomePet.appendChild(aTipo);
                tdNomePet.appendChild(aData);  
                tdImg.appendChild(imgPet);
                tr.appendChild(tdImg);
                tr.appendChild(tdNomePet);              
                tr.appendChild(tdPagamento);             
                tbody.appendChild(tr);
                tbody.appendChild(br);
              }
            }
          }
          if(response.data.error){
            var a = document.createElement("p");
            a.innerHTML="Tente Novamente";
            tbody.appendChild(a);
          }
        }
    }

   setTimeout(() => {Aparecer()}, 100);

    async function Confrimar(id){
      let response="";
      try {
          response = await api.post('https://agendaback.herokuapp.com/Agendamento/ConfAgendamento', {idAgend:id});
      } catch (error) {
          console.log(error);               
      }
      if(response){
        if(response.data.message){
          if(response.data.message === "alterado"){
            window.location.reload();
          }
        }
        if(response.data.error){
          if(response.data.error === "Error server"){
            window.location.reload();
          }
        }
      }
    }

    async function Negar(id){
      let response="";
      try {
          response = await api.post('https://agendaback.herokuapp.com/Agendamento/NegarAgendamento', {idAgend:id});
      } catch (error) {
          console.log(error);               
      }
      if(response){
        if(response.data.message){
          if(response.data.message === "alterado"){
            window.location.reload();
          }
        }
        if(response.data.error){
          if(response.data.error === "erro sql"){
            window.location.reload();
          }
        }
      }
    }
    
    async function Detalhes(id){
      localStorage.setItem('Codigo',id)
      window.location.href="/DetalhesPet";
    }

    async function Pendente(){
      var buttonAprovado = document.getElementById("AAprovado");
      var divAprovado = document.getElementById("DivAprovado");
      buttonAprovado.className="nav-link";
      divAprovado.style.display="none";
      aprovado= "false";

      var buttonCancelado = document.getElementById("ACancelado");
      var divCancelado = document.getElementById("DivCancelado");
      buttonCancelado.className="nav-link";
      divCancelado.style.display="none";
      cancelado= "false";


      var button = document.getElementById("APendente");
      var div = document.getElementById("DivPendente");
      var tbody = document.getElementById("TbodyPendente");
      if(pendente === "true"){
        button.className="nav-link";
        div.style.display="none";
        pendente= "false";
        tbody.innerText="";
      }else{        
        button.className="nav-link active";
        div.style.display="block";
        pendente= "true";
        tbody.innerText=""; 

        let response="";
        try {
            response = await api.post('https://agendaback.herokuapp.com/Agendamento/BuscarPendente');
        } catch (error) {
            console.log(error);               
        }

        if(response){
          if(response.data.response){
            var produto = response.data.response.Agendamento;        
            if(produto.length > 0){
              document.getElementById("imgPendente").style.display="none"; 
              for(let i=0; i< produto.length;i++){            
                var tr = document.createElement("tr");
                // var tdImg = document.createElement("td");
                // var imgPet = document.createElement("img");
                var tdNomePet = document.createElement("td");
                var PNomePet = document.createElement("p");
                var aRaca = document.createElement("p");
                var aTipo = document.createElement("p");
                var aData = document.createElement("p");
                var tdPagamento = document.createElement("td");
                var PNomeDono = document.createElement("p");
                var PFormaPagamento = document.createElement("p");
                var br = document.createElement("BR");
        
                tr.style.width="100%";
                // tr.style.borderBottom="1px solid #009fe3";
                tr.style.marginTop="2%";
                // tdImg.style.width="20%";
                tdNomePet.style.width="55%";
                tdNomePet.onclick = function() { Detalhes(produto[i].idAgend) };
                // imgPet.className="ImagemTabGrand";
                // imgPet.setAttribute("alt","");
                // imgPet.src="data:image/png;base64,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";
                PNomePet.className="TituloTabGrand";
                PNomePet.innerHTML=produto[i].nomePet;
                aRaca.className="ParagTabGrand";
                aRaca.style.marginBottom="0";
                aRaca.innerHTML=produto[i].racaPet + "&nbsp;&nbsp;";
                aTipo.className="ParagTabGrand" + "&nbsp;&nbsp;";
                aTipo.innerHTML=produto[i].tipoServicoAgen;
                aTipo.style.marginBottom="0";
                aData.className="ParagTabGrand";
                
                var dateInicio= produto[i].DataAgen.split('', 10);
                var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;

                aData.innerHTML=dateCorreto+ "  -  " + produto[i].HoraAgen;
                aData.style.marginBottom="0";
                tdPagamento.onclick = function() { Detalhes(produto[i].idAgend) };
                tdPagamento.style.width="25%";
                tdPagamento.style.textAlignLast="right";
                PNomeDono.className="DonoTabGrand";
                PNomeDono.innerHTML=produto[i].nomeCli;
                PFormaPagamento.className="TituloTabGrand";
                PFormaPagamento.innerHTML=produto[i].formaPagtAgen;

                tdPagamento.appendChild(PNomeDono);
                tdPagamento.appendChild(PFormaPagamento);            
                tdNomePet.appendChild(PNomePet);
                tdNomePet.appendChild(aRaca);
                tdNomePet.appendChild(aTipo);
                tdNomePet.appendChild(aData);  
                // tdImg.appendChild(imgPet);
                // tr.appendChild(tdImg);
                tr.appendChild(tdNomePet);              
                tr.appendChild(tdPagamento);             
                tbody.appendChild(tr);
                tbody.appendChild(br);
              }
            }
          }

          if(response.data.error){
            var a = document.createElement("p");
            a.innerHTML="Tente Novamente";
            tbody.appendChild(a);
          }
        }
      }
    }

    async function Aprovado(){
      var buttonCancelado = document.getElementById("ACancelado");
      var divCancelado = document.getElementById("DivCancelado");
      buttonCancelado.className="nav-link";
      divCancelado.style.display="none";
      cancelado= "false";

      var buttonPendente = document.getElementById("APendente");
      var divPendente = document.getElementById("DivPendente");
      buttonPendente.className="nav-link";
      divPendente.style.display="none";
      pendente= "false";

      var button = document.getElementById("AAprovado");
      var div = document.getElementById("DivAprovado");
      var tbody = document.getElementById("TbodyAprovados");      
      if(aprovado === "true"){
        button.className="nav-link";
        div.style.display="none";
        aprovado= "false";
        tbody.innerText="";
      }else{        
        button.className="nav-link active";
        div.style.display="block";
        aprovado= "true";
        tbody.innerText=""; 
        
        let response="";
        try {
            response = await api.post('https://agendaback.herokuapp.com/Agendamento/BuscarAprovados');
        } catch (error) {
            console.log(error);               
        }

        console.log(response);
        
        if(response){
          if(response.data.response){
            var produto = response.data.response.Agendamento;        
            if(produto.length > 0){
              document.getElementById("imgAprovado").style.display="none"; 
              for(let i=0; i< produto.length;i++){                            
                var tr = document.createElement("tr");
                // var tdImg = document.createElement("td");
                // var imgPet = document.createElement("img");
                var tdNomePet = document.createElement("td");
                var PNomePet = document.createElement("p");
                var aRaca = document.createElement("p");
                var aTipo = document.createElement("p");
                var aData = document.createElement("p");
                var tdPagamento = document.createElement("td");
                var PNomeDono = document.createElement("p");
                var PFormaPagamento = document.createElement("p");
                var br = document.createElement("BR");
        
                tr.style.width="100%";
                // tr.style.borderBottom="1px solid #009fe3";
                tr.style.marginTop="2%";
                // tdImg.style.width="20%";
                tdNomePet.style.width="55%";
                tdNomePet.onclick = function() { Detalhes(produto[i].idAgend) };
                // imgPet.className="ImagemTabGrand";
                // imgPet.setAttribute("alt","");
                // imgPet.src="data:image/png;base64,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";
                PNomePet.className="TituloTabGrand";
                PNomePet.innerHTML=produto[i].nomePet;
                aRaca.className="ParagTabGrand";
                aRaca.style.marginBottom="0";
                aRaca.innerHTML=produto[i].racaPet + "&nbsp;&nbsp;";
                aTipo.className="ParagTabGrand" + "&nbsp;&nbsp;";
                aTipo.innerHTML=produto[i].tipoServicoAgen;
                aTipo.style.marginBottom="0";
                aData.className="ParagTabGrand";
                
                var dateInicio= produto[i].DataAgen.split('', 10);
                var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;

                aData.innerHTML=dateCorreto+ "  -  " + produto[i].HoraAgen;
                aData.style.marginBottom="0";
                tdPagamento.style.width="25%";
                tdPagamento.onclick = function() { Detalhes(produto[i].idAgend) };
                tdPagamento.style.textAlignLast="right";
                PNomeDono.className="DonoTabGrand";
                PNomeDono.innerHTML= produto[i].nomeCli;
                PFormaPagamento.className="TituloTabGrand";
                PFormaPagamento.innerHTML=produto[i].formaPagtAgen;

                tdPagamento.appendChild(PNomeDono);
                tdPagamento.appendChild(PFormaPagamento);              
                tdNomePet.appendChild(PNomePet);
                tdNomePet.appendChild(aRaca);
                tdNomePet.appendChild(aTipo);
                tdNomePet.appendChild(aData);  
                // tdImg.appendChild(imgPet);
                // tr.appendChild(tdImg);
                tr.appendChild(tdNomePet);              
                tr.appendChild(tdPagamento);             
                tbody.appendChild(tr);
                tbody.appendChild(br);
              }
            }
          }

          if(response.data.error){
            var a = document.createElement("p");
            a.innerHTML="Tente Novamente";
            tbody.appendChild(a);
          }
        }
      }
    }

    async function Cancelado(){
      var buttonPendente = document.getElementById("APendente");
      var divPendente = document.getElementById("DivPendente");
      buttonPendente.className="nav-link";
      divPendente.style.display="none";
      pendente= "false";

      var buttonAprovado = document.getElementById("AAprovado");
      var divAprovado = document.getElementById("DivAprovado");
      buttonAprovado.className="nav-link";
      divAprovado.style.display="none";
      aprovado= "false";
      
      var button = document.getElementById("ACancelado");
      var div = document.getElementById("DivCancelado");
      var tbody = document.getElementById("TbodyCancelado");    
      if(cancelado === "true"){
        button.className="nav-link";
        div.style.display="none";
        cancelado= "false";
        tbody.innerText="";        
      }else{        
        button.className="nav-link active";
        div.style.display="block";
        cancelado= "true";
        tbody.innerText=""; 

        let response="";
        try {
            response = await api.post('https://agendaback.herokuapp.com/Agendamento/BuscarNegado');
        } catch (error) {
            console.log(error);               
        }
        
        if(response){
          if(response.data.response){
            var produto = response.data.response.Agendamento;    
            if(produto.length > 0){
              for(let i=0; i< produto.length;i++){ 
                document.getElementById("imgCancelado").style.display="none";             
                var tr = document.createElement("tr");
                // var tdImg = document.createElement("td");
                // var imgPet = document.createElement("img");
                var tdNomePet = document.createElement("td");
                var PNomePet = document.createElement("p");
                var aRaca = document.createElement("p");
                var aTipo = document.createElement("p");
                var aData = document.createElement("p");
                var tdPagamento = document.createElement("td");
                var PNomeDono = document.createElement("p");
                var PFormaPagamento = document.createElement("p");
                var br = document.createElement("BR");
        
                tr.style.width="100%";
                // tr.style.borderBottom="1px solid #009fe3";
                tr.style.marginTop="2%";
                // tdImg.style.width="20%";
                tdNomePet.style.width="55%";
                tdNomePet.onclick = function() { Detalhes(produto[i].idAgend) };
                // imgPet.className="ImagemTabGrand";
                // imgPet.setAttribute("alt","");
                // imgPet.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAyCAYAAADMb4LpAAAABHNCSVQICAgIfAhkiAAABlFJREFUaEPtmWtMk1cYx//nfVtaWi6WW8tFkA2cTtniDBoRvGzOTWZEwN2dCe7Cki27mGUzJkv2Ydn2Zfs2MzVhkmi2ibcBSpYF4xQFL5PBFC+T4QC5lEs7Lr28bd+znLeUtlwKNKHIwvnWnnN6fud/nvM8z3lKMIsbmcXsmIOfqdObU35OeT8U+B+azRHKo695HTh+d0o4r2nI1dGYH9p4oyBOvFlKKDjqkISkIKDgwA3JSiFK33g2NgbgATaHnIEBXz2fAHOJIcGOQmLzdSCjYQ71hEEwNYAgnk1MDeVxPVcL7Y/tMAre6/px0hNOYUCfL5Gj2UTp/ib7aQr7NhQkW8aa6A1PKUFRy2lw5FnX4EDDs3V5AlSvD8bfgyJeqrEYYSRx2DXfPHID3vDFbYlwOJpAhg864MoPmRvWRhGUZAQj64wZtwfEL7EzcY9v+IP/LAflrnoOmgnl2foJSqB2oxrFTQI+qrd1YMCyAO+lWj3ZvJXf35wOObn8IMFf6LJja7XVBF4egx26wVkBH6cE6jaqweBzq60mOpvgY5VA/Rx8AP28y6bnlJ+Kq1wSziMvSYWbRhuONnsGRYoXkoKRGibDyWYzbhjtAPGdaUxd+e+b0wE/XCWleCZeidKnohDEE1BKcbjRhNfO90pWcGiNBq88pAYhBFYHRW5lNyravFz2qOg/dfiilpUgqJmqn1fxQF2OFilh8uGpDpEi5VgHOEJxMzdW2pSr3TIKeKJMD7MzfRuzBQw+bZ5MgmfKuhpT/4v6PgRzBB8uDfXqEynFsp87Uc/MZ6bhs2KCcC47ZhRGSdMg1DxBdqJqVN+6Cj1+6xRmHn5puAx1W7XgRij/WW0flDyw+7EwL+WZSS0r7cSfM6G8Vsnh7YVqKHig6K4J9wcduLZFi0Xz3DZvFymSS9rBEeBOfiwUHjbfYBCwvEyPeBWPN1JVsDiAvbcH0GV1vxemxeYJpTi7KRprdErpyLvMDqSX65EcwqP86SioZRyYTRffHcTOC0ant8nU4OWHVdLJDNhE5FR2496AA5c2xyCKHQ2Aqg4rsiq64KokTQu8Tsnhbr4OarnrbQccbhzE9nO90AVzKEhR43KXgDqDDRqF8wVoFESkaeRYEa2QNnXf5EBRpgYFqSHDNt8viFhQ0o5em1P9aYGPDCJo3BaL8CA3/HWDDWknO6TAszCMR1GGBquHTsZFd0lvxY6qXtzpcwCUoj5Hi7SIoGF4tsGkI+3os08jPFv4fHY0MrVOs3EeuQVrKrqQnxSMI+sjvS6npzth5vTi2R4cu2fGuU0xyNQphrtr9FasOqUfjrzTojxbbVEYj4vPxWBeEAcHBXZW9aLXKqJsQ9S44J7+P6+yB2o5wcGsCOm9ahBErCrX406/O2pNGzwDYUbzuEaGpn67tImbeTooZW5TGteBAzDZRCw52SHdhQUhMul+OCsg7uYFXyMMUk6m9f2S8ic9oBT7MzR48xH35fMF7uo7cHsAb100jJugTavyLgjmff7K1yHEw/tMBr5PEJF6vB16y9i1oIDA58xX4MSTE9v6yA2x3Cf/TA9OtIxZT5oeVzkSYtdiNb5eqZmM2KPGfHLFgG8aBpEdr0Bpq3eKHBDlCxeq8F1GhF/w71QbsPfWgHRn9vz+L7o9yokBgZ+v4lC7RYvIoTDv6RLFIXNm+Y1nuszGtJvsWF7aieRQGY6uj8SKMj1azeKwCAGBZ0ErVsWDpcWRCh4dZjtaTaKUAnRZROm1xxI5loQlqHhEB3PQm0VU6QV88GgIPk4LRXmLGVsre0A9stLAwPtlMM44cWVztPSa2vBLFyxu0aVffKDhGWCYnICZ1sBQPjNukJpUxcyfIOWn8hNNm7ry/lYPJiLxoz9eCfyxUY3jrTYUXhP06Lck+q4SH+hIhszWiOEnQeD/GXHtc3UEwYlMFbacN6HGQL9Fwfx3R2rgnQ3tuyqHPOZXELLWNXAqRSc/BB5zCg+KU5lK6XmYV2PtFq38YhTGdfuGZ70HWhMgoxcAJLKPgYbnQPFqopymR3D292uFKkrpdrye2DbWLseuue1rUyHI8SkoyUwJ5YNv5GpF7U/tHEthfTaWsBDizrQo5UBYiJpMo2xeCw++mIf1liAomlEYZ/I1c5I/PJnFAz9mDj7wmjtX/A/ifE5vFJ5ABQAAAABJRU5ErkJggg==";
                PNomePet.className="TituloTabGrand";
                PNomePet.innerHTML=produto[i].nomePet;
                aRaca.className="ParagTabGrand";
                aRaca.style.marginBottom="0";
                aRaca.innerHTML=produto[i].racaPet + "&nbsp;&nbsp;";
                aTipo.className="ParagTabGrand" + "&nbsp;&nbsp;";
                aTipo.innerHTML=produto[i].tipoServicoAgen;
                aTipo.style.marginBottom="0";
                aData.className="ParagTabGrand";
                
                var dateInicio= produto[i].DataAgen.split('', 10);
                var dateCorreto = dateInicio[8] + dateInicio[9] +  dateInicio[7] + dateInicio[5] + dateInicio[6] +  dateInicio[4] +  dateInicio[2] + dateInicio[3] + dateInicio[0]  + dateInicio[1]  ;
  
                aData.innerHTML=dateCorreto+ "  -  " + produto[i].HoraAgen;
                aData.style.marginBottom="0";
                tdPagamento.onclick = function() { Detalhes(produto[i].idAgend) };
                tdPagamento.style.width="25%";
                tdPagamento.style.textAlignLast="right";
                PNomeDono.className="DonoTabGrand";
                PNomeDono.innerHTML= produto[i].nomeCli;
                PFormaPagamento.className="TituloTabGrand";
                PFormaPagamento.innerHTML=produto[i].formaPagtAgen;
  
                tdPagamento.appendChild(PNomeDono);
                tdPagamento.appendChild(PFormaPagamento);              
                tdNomePet.appendChild(PNomePet);
                tdNomePet.appendChild(aRaca);
                tdNomePet.appendChild(aTipo);
                tdNomePet.appendChild(aData);  
                // tdImg.appendChild(imgPet);
                // tr.appendChild(tdImg);
                tr.appendChild(tdNomePet);              
                tr.appendChild(tdPagamento);             
                tbody.appendChild(tr);
                tbody.appendChild(br);
              }
            }    
          }

          if(response.data.error){
            var a = document.createElement("p");
            a.innerHTML="Tente Novamente";
            tbody.appendChild(a);
          }
        }
      }
    }

  async function Contagem(){
     
      let response="";
       try {
           response = await api.post('https://agendaback.herokuapp.com/Agendamento/ContAgendamentoDia');
       } catch (error) {
           console.log(error);               
       } 
       console.log(response) 
 
       var ContaDia = document.getElementById("Dia");
       if(response){
         if(response.data.response){          
           ContaDia.innerHTML = response.data.response.Agendamento[0].contador ;
         }
         if(response.data.error){
           ContaDia.innerHTML = "";
         }
       }
   }
    setTimeout(() => {Contagem()}, 100);

    function Edit(){
      window.location.href="/EditarPerfil";
    }
    function Login(){
      window.location.href="/";
    }

    return(        
    <div>
  <div class="wrapper ">
    <div class="sidebar" data-color="blue" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
          <div class="logo">
        <a  class="simple-text logo-normal">
          <picture>
          <img src={rodape} class="ImagemLogo" id="LogoImg" align="left"  alt=""/>       
          </picture>     
        </a>
        <a  class="simple-text logo-normal">
          <p class="NomePrest" id="NomeLogo"></p>
          <p class="TipoPrest" id="TipoLogo"></p>
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
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
          <li class="nav-item active-pro ">
            <a class="nav-link" style={{background:'none'}}>
                <table>
                    <tr>
                        <td style={{width: '20%'}}>
                            <img src={rodape2} class="material-icons" alt=""/>
                        </td>
                        <td style={{width: '80%'}}>
                            <p style={{color:'#009fe3'}}>Versão 1.0</p>
                        </td>
                    </tr>
                </table>
              
              {/* <i class="material-icons">unarchive</i> */}
            
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#pablo" >Home</a>
                        </div>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button> */}
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
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
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon" style={{width:'50%'}}>
                     <img src={recebimentos} style={{width:'100%'}} class="material-icons" alt=""/>
                  </div>
                  <p class="card-category">Recebimento Diário</p>
                  <h3 class="card-title" >     </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">history</i> EM BREVE
                  </div>
                </div>               
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon" style={{width:'50%'}}>
                     <img src={recebimentosMensais} style={{width:'100%'}} class="material-icons" alt=""/>
                  </div>
                  <p class="card-category">Recebimento Mensal</p>
                  <h3 class="card-title" >     </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">history</i> EM BREVE
                  </div>
                </div>               
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header  card-header-icon">
                  <div class="card-icon" style={{width:'50%',backgroundColor:'#fc1d30'}}>
                  <img src={pata} style={{width:'100%'}} class="material-icons" alt=""/>
                  </div>
                  <p class="card-category">Notas</p>
                  <h3 class="card-title" >     </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">history</i> EM BREVE
                  </div>
                </div>               
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
              <div class="card-header card-header-success card-header-icon">
                        <div class="card-icon">
                            <i class="material-icons">sticky_note_2</i>
                        </div>
                        <p class="card-category">Agendamentos do Dia</p>
                        <h3 class="card-title" id="Dia">     </h3>
                         
                        </div> 
                        <div class="card-footer">
                       
                        </div>
              </div>
            </div>
          </div>
        
          <div class="row">
            <div class="col-lg-7 col-md-12">
              <div class="card">
                
                <div class="card-body table-responsive">
                  <div class="tab-content">
                    <div class="tab-pane active">
                      <table class="table ">
                        <thead> <img src={pendentes} style={{width:'100%'}} id="imgCentro" class="material-icons" alt=""/></thead>

                        <tbody id="tbody" style={{width:'100%'}}>
                        </tbody>
                      </table>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12">
              <div class="card">
                <div class="card-header card-header-blue">
                <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                      <ul class="nav nav-tabs">
                        <li class="nav-item" id="Pendente" onClick={Pendente}>
                          <button class="nav-link " id="APendente">
                              Pendentes
                            <div class="ripple-container"></div>
                          </button>
                        </li>
                        <li class="nav-item" id="Aprovado" onClick={Aprovado}>
                          <button class="nav-link" id="AAprovado">
                              Aprovados
                            <div class="ripple-container"></div>
                          </button>
                        </li>
                        <li class="nav-item" id="Cancelado" onClick={Cancelado}>
                          <button class="nav-link" id="ACancelado">
                              Cancelados
                            <div class="ripple-container"></div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body table-responsive" id="DivPendente" style={{display:"block"}}>
                  <table class="table ">
                    <thead>  <img src={pendentes} style={{width:'100%'}} id="imgPendente" class="material-icons" alt=""/></thead>
                    <tbody id="TbodyPendente">                   
                    </tbody>
                  </table>
                </div>
                <div class="card-body table-responsive" id="DivCancelado" style={{display:"none"}}>
                <table class="table ">
                  <thead>  <img src={canceladas} style={{width:'100%'}} id="imgCancelado" class="material-icons" alt=""/></thead>
                    <tbody id="TbodyCancelado">                   
                    </tbody>
                  </table>
                </div>
                <div class="card-body table-responsive" id="DivAprovado" style={{display:"none"}}>
                <table class="table">
                  <thead> <img src={aprovadas} style={{width:'100%'}} id="imgAprovado"  class="material-icons" alt=""/></thead>
                    <tbody id="TbodyAprovados"> 
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
      
  )
}