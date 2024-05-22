import { React } from "react";
// App Screens
import Login from "./screens/Login";
import Message from "./screens/Message";
import Chat from "./screens/Chat";

// Config React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Stack Navigator permet à votre application de passer d'un écran à l'autre, chaque nouvel écran étant placé au sommet d'une pile.
      Par défaut, le navigateur de pile est configuré pour avoir l'apparence familière d'iOS et d'Android : les nouveaux écrans glissent depuis la droite sur iOS, utilisent l'animation par défaut du système d'exploitation sur Android. Mais les animations peuvent être personnalisées. */}
      <Stack.Navigator>
        {/* Stack.Screen permet de définir un écran */}
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />

        <Stack.Screen name="Chat" component={Chat} options={{ title: "Chats", headerShown: false }} />

        <Stack.Screen name="Messaging" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


