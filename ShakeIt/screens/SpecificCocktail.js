import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";

import { getRecipeById } from "../services/RecipesService";
import SCIngredients from "../components/SpecificCocktail/SCIngredients";
import SCRecipe from "../components/SpecificCocktail/SCRecipe";
import SCComments from "../components/SpecificCocktail/SCComments";
import CocktailDescription from "../components/SpecificCocktail/CocktailDescription";
import ButtonsFooter from "../components/ButtonsFooter";

const SpecificCocktail = ({ route, navigation }) => {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeById(recipeId).then(recipe => {
      setRecipe(recipe);
    });
  }, [recipeId]);

  const Header = () => {
    return (
      <View className=" bg-beach-200">
        <CocktailDescription recipe={recipe} />
      </View>
    );
  };

  if (!recipe) {
    return <Text>Loading...</Text>;
  }

  /* Look into changing the style of the font in the tabs */
  return (<>
    <Tabs.Container
      renderHeader={Header}
      renderTabBar={(props) => <MaterialTabBar className="bg-beach-400" {...props}/>}
    >
      <Tabs.Tab name="Recipe" key="recipe">
        <Tabs.ScrollView className="bg-beach-200">
          <SCIngredients recipe={recipe} />
          <SCRecipe recipe={recipe} />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Comments" key="comments">
        <Tabs.ScrollView className="bg-beach-200">
          <SCComments recipe={recipe} />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
            <View className="bg-white">
            <ButtonsFooter />
          </View>
          </>
  );
};

export default SpecificCocktail;
