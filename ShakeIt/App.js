import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./screens/Explore";
import Welcome from "./screens/Welcome";
import SpecificCategory from "./screens/SpecificCategory";
import SpecificCocktail from "./screens/SpecificCocktail";
import SearchInput from "./screens/SearchInput";
import SearchResults from "./screens/SearchResults";
import LeaveComment from "./screens/LeaveComment";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();

const App = () => {
  return <AppNavigator />;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}>
        <Stack.Screen
          options={{ headerShown: true }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{ headerTitle: (props) => <Header {...props} /> }}
        />
        <Stack.Screen
          name="SpecificCategory"
          component={SpecificCategory}
          getId={({ params }) => params.categoryId}
          options={{ headerTitle: (props) => <Header {...props} /> }}
        />
        <Stack.Screen
          name="SpecificCocktail"
          component={SpecificCocktail}
          getId={({ params }) => params.recipeId}
          options={{ headerTitle: (props) => <Header {...props} /> }}
        />
        <Stack.Screen name="SearchInput" component={SearchInput} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="LeaveComment" component={LeaveComment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
