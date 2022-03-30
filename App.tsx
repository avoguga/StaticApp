import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackScreen from "./src/routes/homeStack";
export default function App() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
}
