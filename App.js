import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/views/home";
import PerfilAfiliado from "./src/views/perfilAfiliado";
import PerfilVendedor from "./src/views/perfilVendedor";
import Login from "./src/views/login";
import Cadastro from "./src/views/cadastro";
import Afiliacoes from "./src/views/afiliacoes";
import Produtos from "./src/views/Produtos";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import Dashboard from "./src/views/dashboard";
import Estatisticas from "./src/views/estatisitica";
import Ranking from "./src/views/ranking";
import MeusAfiliados from "./src/views/meusAfiliados";
import SolicitacaoAfiliacao from "./src/views/meusAfiliados/solicitacaoAfiliacao";
import PerfilAfiliadoRanking from "./src/views/perfilAfiliadoRanking";

const headerOptions = {
  headerStyle: {
    backgroundColor: "#1D2C7C",
  },
  headerTitleStyle: {
    color: "#FFF",
  },
  headerTintColor: "#FFF",
};

const Stack = createStackNavigator();

/* Tema do Material */
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1D2C7C",
    accent: "#0864EE",
  },
};

export default function App() {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: (props) => <AwesomeIcon {...props} />,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Ranking"
            options={{ ...headerOptions, title: "Ranking de Afiliados" }}
            component={Ranking}
          />
          <Stack.Screen
            name="PerfilVendedor"
            options={{ ...headerOptions, title: "Perfil do Vendedor" }}
            component={PerfilVendedor}
          />
          <Stack.Screen
            name="Produtos"
            options={{ ...headerOptions, title: "Produtos Afiliados" }}
            component={Produtos}
          />
          <Stack.Screen
            name="PerfilAfiliado"
            options={{ ...headerOptions, title: "Perfil do Afiliado" }}
            component={PerfilAfiliado}
          />
          <Stack.Screen
            name="Home"
            options={{ ...headerOptions, title: "Painel do Afiliado" }}
            component={Home}
          />
          <Stack.Screen
            name="Login"
            options={{ ...headerOptions, title: "Mercado+" }}
            component={Login}
          />
          <Stack.Screen
            name="Cadastro"
            options={{ ...headerOptions, title: "Cadastre-se" }}
            component={Cadastro}
          />
          <Stack.Screen
            name="DashBoard"
            options={{ ...headerOptions, title: "Dashboard de Afiliados" }}
            component={Dashboard}
          />
          <Stack.Screen
            name="Estatisticas"
            options={{ ...headerOptions, title: "Estatisticas" }}
            component={Estatisticas}
          />
          <Stack.Screen
            name="Afiliacoes"
            options={{ ...headerOptions, title: "Afiliações" }}
            component={Afiliacoes}
          />
          <Stack.Screen
            name="MeusAfiliados"
            options={{ ...headerOptions, title: "Meus Afiliados" }}
            component={MeusAfiliados}
          />
          <Stack.Screen
            name="SolicitacaoAfiliacao"
            options={{ ...headerOptions, title: "Solicitações de afiliação" }}
            component={SolicitacaoAfiliacao}
          />
          <Stack.Screen
            name="PerfilAfiliadoRanking"
            options={{ ...headerOptions, title: "Perfil do Afiliado" }}
            component={PerfilAfiliadoRanking}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
