import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import { ListBulletIcon } from "react-native-heroicons/solid";

import { getRecipeById } from "../services/RecipesService";
import SCIngredients from "../components/SpecificCocktail/SCIngredients";
import SCRecipe from "../components/SpecificCocktail/SCRecipe";
import SCComments from "../components/SpecificCocktail/SCComments";
import SCDescription from "../components/SpecificCocktail/SCDescription";
import CocktailHeader from "../components/SpecificCocktail/CocktailHeader";
import ButtonsFooter from "../components/ButtonsFooter";
import ShoppingList from "./ShoppingList";
import { useColorScheme } from "react-native";

const SpecificCocktail = ({ route, navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeById(recipeId).then(recipe => {
      setRecipe(recipe);
    });
  }, [recipeId]);

  const Header = () => {
    return (
      <View className=" bg-beach-200 dark:bg-beach-900 ">
        <CocktailHeader recipe={recipe} />
      </View>
    );
  };

  if (!recipe) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Tabs.Container
        renderHeader={Header}
        renderTabBar={props => (
          <MaterialTabBar
            activeColor={colorScheme === "dark" ? "white" : "white"}
            inactiveColor={colorScheme === "dark" ? "white" : "black"}
            className="bg-beach-400 dark:bg-beach-600 "
            {...props}
          />
        )}
      >
        <Tabs.Tab name="Description" key="description">
          <Tabs.ScrollView className="bg-beach-200 dark:bg-beach-900">
            <SCDescription recipe={recipe} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Recipe" key="recipe">
          <Tabs.ScrollView className="bg-beach-200 dark:bg-beach-900">
            <SCIngredients recipe={recipe} />
            <SCRecipe recipe={recipe} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Comments" key="comments">
          <Tabs.ScrollView className="bg-beach-200 dark:bg-beach-900  ">
            <SCComments recipe={recipe} />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>

      <ButtonsFooter />
    </>
  );
};

export default SpecificCocktail;
