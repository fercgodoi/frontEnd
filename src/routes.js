import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import AlterarSenha from "./pages/AlterarSenha";
import CadastroCinco from "./pages/CadastroCinco";
import CadastroConcluido from "./pages/CadastroConcluido";
import CadastroFuncionario from "./pages/CadastroFuncionario";
import CadastroMedicacao from "./pages/CadastroMedicacao";
import CadastroPrimeiro from "./pages/CadastroPrimeiro";
import CadastroProntuario from "./pages/CadastroProntuario";
import CadastroQuatro from "./pages/CadastroQuatro";
import CadastroSegundo from "./pages/CadastroSegundo";
import CadastroSeis from "./pages/CadastroSeis";
import CadastroSete from "./pages/CadastroSete";
import CadastroShopping from "./pages/CadastroShopping";
import CadastroTerceiro from "./pages/CadastroTerceiro";
import CadastroVacina from "./pages/CadastroVacina";
import Calendario from "./pages/Calendario";
import Codigo from "./pages/Codigo";
import DetalhesPet from "./pages/DetalhesPet";
import EditarFuncionario from "./pages/EditarFuncionario";
import EditarProduto from "./pages/EditarProduto";
import EsqueciSenha from "./pages/EsqueciSenha";
import Funcionarios from "./pages/Funcionario";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Medicacao from "./pages/Medicação";
import Prontuarios from "./pages/Prontuarios";
import Shopping from "./pages/Shopping";
import Vacina from "./pages/Vacina";
import VisualizarMedicacao from "./pages/VisualizarMedicacao";
import VisualizarProduto from "./pages/VisualizarProduto";
import VisualizarProntuario from "./pages/VisualizarProntuario";
import VisualizarVacina from "./pages/VisualizarVacina";
import EditarPerfil from "./pages/EditarPerfil";


import Termo from "./pages/Termo";

const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/"  component={Login} />

          <Route exact path="/AlterarSenha"  component={AlterarSenha} />

          <Route exact path="/CadastroCinco"  component={CadastroCinco} />

          <Route exact path="/CadastroConcluido"  component={CadastroConcluido} />

          <Route exact path="/CadastroFuncionario"  component={CadastroFuncionario} />

          <Route exact path="/CadastroMedicacao"  component={CadastroMedicacao} />  

          <Route exact path="/CadastroPrimeiro"  component={CadastroPrimeiro} />

          <Route exact path="/CadastroProntuario"  component={CadastroProntuario} />

          <Route exact path="/CadastroQuatro"  component={CadastroQuatro} />

          <Route exact path="/CadastroSegundo"  component={CadastroSegundo} />

          <Route exact path="/CadastroSeis"  component={CadastroSeis} />

          <Route exact path="/CadastroSete"  component={CadastroSete} />

          <Route exact path="/CadastroShopping"  component={CadastroShopping} />

          <Route exact path="/CadastroTerceiro"  component={CadastroTerceiro} />

          <Route exact path="/CadastroVacina"  component={CadastroVacina} />

          <Route exact path="/Calendario"  component={Calendario} />

          <Route exact path="/Codigo"  component={Codigo} />

          <Route exact path="/DetalhesPet"  component={DetalhesPet} />

          <Route exact path="/DetalhesPet"  component={DetalhesPet} />

          <Route exact path="/EditarFuncionario"  component={EditarFuncionario} />

          <Route exact path="/EditarProduto"  component={EditarProduto} />

          <Route exact path="/EsqueciSenha"  component={EsqueciSenha} />

          <Route exact path="/Funcionarios"  component={Funcionarios} />

          <Route exact path="/Home"  component={Home} />
          
          <Route exact path="/Medicacao"  component={Medicacao} />

          <Route exact path="/Prontuarios"  component={Prontuarios} />

          <Route exact path="/Shopping"  component={Shopping} />

          <Route exact path="/Vacina"  component={Vacina} />

          <Route exact path="/VisualizarMedicacao"  component={VisualizarMedicacao} /> 

          <Route exact path="/VisualizarProduto"  component={VisualizarProduto} />

          <Route exact path="/VisualizarProntuario"  component={VisualizarProntuario} />
          
          <Route exact path="/VisualizarVacina"  component={VisualizarVacina} />

          <Route exact path="/Termo"  component={Termo} />

          <Route exact path="/EditarPerfil"  component={EditarPerfil} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;