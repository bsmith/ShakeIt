import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./screens/Explore";
import Welcome from "./screens/Welcome";
const Stack = createNativeStackNavigator();

const App = () => {
  return <AppNavigator />;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Explore"
          component={Explore}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
