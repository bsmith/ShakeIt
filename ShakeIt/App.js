import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "nativewind";
import Explore from "./screens/Explore";
import Welcome from "./screens/Welcome";
import SpecificCategory from "./screens/SpecificCategory";
import SpecificCocktail from "./screens/SpecificCocktail";
import SearchInput from "./screens/SearchInput";
import SearchResults from "./screens/SearchResults";
import LeaveComment from "./screens/LeaveComment";
import Header from "./components/Header";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from "./tailwind.config";

const Stack = createNativeStackNavigator();
const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

const App = () => {
  return <AppNavigator />;
};

const AppNavigator = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? colors.cerise[800] : colors.cerise[400],
          },
        // contentContainerStyle: {
        //   backgroundColor: colors.beach[800],
        // },
          headerTitle: (props) => <></>,
          headerRight: (props) => <Header {...props} />
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
        />
        <Stack.Screen
          name="SpecificCategory"
          component={SpecificCategory}
          getId={({ params }) => params.categoryId}
        />
        <Stack.Screen
          name="SpecificCocktail"
          component={SpecificCocktail}
          getId={({ params }) => params.recipeId}
        />
        <Stack.Screen
          name="SearchInput"
          component={SearchInput}
          options={{
            title: "Search on ShakeIt",
          }}
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
