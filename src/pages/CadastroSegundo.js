import React from 'react';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import gatinho from "../img/Icon/gatinho.png";

import api from "../services/api2";

export default function CadastroSegundo(){    
    function Validar(){
        localStorage.setItem('Codigo', "");
        var validar  = localStorage.getItem('token');
        if (validar === "" || validar === null || validar === undefined) {    
            setTimeout(() => {window.location.href="/"});
        }
    }
    Validar();

    async function Proximo() {   
        var cod = document.getElementById("cod").value;
        var erro = document.getElementById("valida");
        var button = document.getElementById("buttonProximo");

        button.innerText="Aguardando";
        button.setAttribute("disabled","disabled");

        if (cod === "" || cod === null || cod === undefined) {
            erro.innerHTML = "Preencha o campo obrigatório";
            button.innerText="Próximo";
            button.removeAttribute("disabled");
        }
        else {    
            erro.innerHTML ="";              
            let response="";
            try {
                response = await api.post('https://agendaback.herokuapp.com/Prestador/CadSegPrest',{CodPrest : cod});
            } catch (error) {
                console.log(error);               
            }

            if(response){
                if(response.data.message){
                    if(response.data.message === "Codigo incorreto"){
                        erro.innerHTML = "O código esta incorreto";
                        button.innerText="Próximo";
                        button.removeAttribute("disabled");
                    }else if(response.data.message === "Alterado"){
                        erro.style.color = "#09ff00"; 
                        erro.style.fontWeight= "700";     
                        erro.innerHTML = "Verificação correta, vamos para a próxima etapa agora!!";
                        setTimeout(() => {window.location.href="/CadastroTerceiro"}, 2000); 
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
    return(
    <div>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" style={{padding:'0px',margin:'0px'}}>
                        <div className="card-header card-header-blue" style={{background:'#009fe3'}}>
                            <h4 className="card-title" style={{fontWeight:'300',color:'#fff',textAlign: '-webkit-center'}}>Passo 2</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">                 
                                        <img alt="" src={gatinho} style={{width:'30px'}}></img>                    
                                        <a style={{marginLeft:'5px',color:'#000000'}}>Miau! Você vai receber um código SMS no seu celular e no seu e-mail!</a>
                                        <input type="text" className="form-control" placeholder="Código"id="cod" style={{color:'#009fe3',marginTop:'1%'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{textAlign: '-webkit-center', marginTop:'25%'}}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p style={{color:'red',fontWeight:'200',marginBottom:'0px'}} id="valida"></p>
                                        <button type="submit" className=" btn btn-primary btnEditShop" onClick={Proximo} style={{marginRight:'0px'}} id="buttonProximo">Proximo</button>
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