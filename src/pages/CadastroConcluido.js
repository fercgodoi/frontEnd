import React from 'react';
import "../css/Login/main.css";
import "../css/Login/util.css";
import "../css/material-dashboard.css";
import rodape from  "../img/login.png";
import Blabala from "../img/cover.jpg";


export default function CadastroConcluido(){
    
    localStorage.setItem('token','');
    localStorage.setItem('Acesso','');
    localStorage.setItem('Codigo','');

    function Login(){
        window.location.href="/";
    }
    return(
    <div>   
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form validate-form" style={{marginBottom:'0px'}}>				
                        <div style={{
                            height: '100%',
                            width: '100%',
                            textAlign: 'center'
                        }}>
                            <div>
                                <img alt="" src={rodape} style={{width: '40%', height: '20%'}}/>
                            </div>
                            <div className="DivTexto">
                                <p style={{color:'#009fe3',
                                fontFamily:'Arial',
                                fontSize: '30px',
                                marginTop: '5%'}}> Cadastro Concluido!</p>
                                <p style={{color:'#69696D',fontFamily:'Arial',fontSize: 'smaller'}}> Seja bem-vindo ao Agenda Animal, aqui você e sua empresa terão otimas experiencias e crescerão no mercado!</p>
                            </div>
                            <button type="submit" className=" btn-primary" align="center"  style={{
                                backgroundColor:' #009fe3',
                                borderRadius: '32px',
                                padding:'3% 20%'
                            }} onClick={Login}>Login</button>
                            <div className="clearfix"></div>
                        </div>                              
                    </div>
                    <div className="login100-more" >
                        <img alt=""  src={Blabala} style={{width: '100%',height: '50%',position: 'absolute',top:'50%'}}/>
                        <img alt=""  src={Blabala} style={{width: '100%',height: '50%',position: 'absolute'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}