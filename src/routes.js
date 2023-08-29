import Home from "./pages/Home/index";
import Perfil from "./pages/Perfil/index";
import Header from "./components/Header/Header";
import Carrinho from "./pages/Carrinho/index";
import Pagamento from "./pages/Pagamento/index";
import Pix from "./pages/Pagamento/pix";
import Dinheiro from "./pages/Pagamento/dinheiro";
import Cartao from "./pages/Pagamento/cartao";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function app() {
  const CustomHeader = () => <Header />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: CustomHeader,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="PIX" component={Pix} />
        <Stack.Screen name="Dinheiro" component={Dinheiro} />
        <Stack.Screen name="Cartao" component={Cartao} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
