import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./screens/Explore";
import Welcome from "./screens/Welcome";
import Explore from "./screens/Explore";
import SpecificCategory from "./screens/SpecificCategory";
import SpecificCocktail from "./screens/SpecificCocktail";
import SearchInput from "./screens/SearchInput";
import SearchResults from "./screens/SearchResults";
import LeaveComment from "./screens/LeaveComment";

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
        <Stack.Screen
          name="SpecificCategory"
          component={SpecificCategory}
        />
        <Stack.Screen
          name="SpecificCocktail"
          component={SpecificCocktail}
        />
        <Stack.Screen
          name="SearchInput"
          component={SearchInput}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
        />
        <Stack.Screen
          name="LeaveComment"
          component={LeaveComment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
