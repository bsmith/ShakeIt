import { View, Text, Pressable } from "react-native";
import React from "react";

const SCIngredients = ({ recipe }) => {
  const ingredientItems = recipe.ingredients.map((ingredient, index) => {
    const colour1 = "green-500";
    const colour2 = "green-300";
    const colour = index % 2 == 0 ? colour1 : colour2;
    /* add/remove 'mb-1' to control to the gap */
    return (
      <View className={`flex-row mb-1 px-4 w-full bg-${colour}`} key={index}>
        <Text className="w-4 text-lg h-4">•</Text>
        <Text className="text-base grow">{ingredient.name}</Text>
        <Text className="text-base">
          {ingredient.quantity} {ingredient.quantityUnit}
        </Text>
      </View>
    );
  });

  return (
    <View className="py-6 px-10 mx-auto max-w-md">
      <View className="flex flex-row">
       <Pressable
          className=" rounded mt-6 mx-7 px-3 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
          // onPress={() => navigation.navigate("Explore")}
        >
          <Text className="text-center text-white font-bold py-2 rounded text-lg">
            -
          </Text>
        </Pressable>
      <Text className="text-xl font-bold mb-4">{}{"servings"}:</Text>
      <Pressable
          className="mt-6 mx-7 px-3 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
          // onPress={() => navigation.navigate("Explore")}
        >
          <Text className="text-center text-white font-bold py-2 rounded-full text-lg">
            +
          </Text>
        </Pressable>
        </View>
      <Text className="text-base mb-4 text-left">{recipe.garnishes}</Text>
      {ingredientItems}
    </View>
  );
};

export default SCIngredients;
