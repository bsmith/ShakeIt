import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
 HEAD
import CategorySlider from "../components/CategorySlider";

import { getAllRecipes } from "../services/RecipesService";
import { getAllCategories } from "../services/CategoriesService";

const CategoriesContainer = () => {
  const navigation = useNavigation();

  const [categoriesData, setCategoriesData] = useState({});

  useEffect(() => {
    console.log(`Fetching all categories`)
    getAllCategories()
      .then((categoriesData) => {
        setCategoriesData(categoriesData);
        console.log(`Got all categories!`)
      })
  }, []);

  const pressRecipe = useCallback((recipeId) => {
    console.log(`pressRecipe: ${recipeId}`);
    navigation.navigate('SpecificCocktail', { recipeKey: recipeId })
  }, []);

  /* Should probably be a SectionList */
  return (
    <ScrollView className="flex flex-column bg-grey-100">
      {/* contentContainerStyle={{ paddingBottom: 100 }} */}
      {/*Categories*/}
      {/* <CategoryContainer /> */}

      {/*Featured rows*/}
      <CategorySlider
        id="1"
        title="Fruity"
        description="Sweet and fruity range"
      />

      {/*Tasty Discounts*/}
      <CategorySlider
        id="2"
        title="Strong"
        description="Double the strength"
      />

      {/*Offers near you*/}
      <CategorySlider
        id="3"
        title="Mocktails"
        description="Because you can enjoy a nice cocktails without %"
      />

      <Text>CategoriesContainer</Text>

      { Object.keys(categoriesData).map(catId => {
        const category = categoriesData[catId];
        const recipes = Object.values(category.members);
        const recipeItems = recipes.map(recipe => {
          return <Pressable
              key={recipe.id}
              className="h-12 flex-row"
              onPress={() => pressRecipe(recipe.id)}
            >
            <Image
              source={{
                uri: recipe.imgUrl,
                width: 32,
                height: 32,
              }}
            />
            <Text className="text-base">{recipe.name}</Text>
          </Pressable>
        });
        return <>
          <Text className="font-bold text-xl text-center">
            {category.name}
          </Text>
          {recipeItems}
        </>
      }) }
    </ScrollView>
  );
};

export default CategoriesContainer;
