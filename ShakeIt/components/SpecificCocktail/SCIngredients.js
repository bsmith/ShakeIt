import { View, Text } from "react-native";
import React from "react";

const SCIngredients = ({recipe}) => {
  const ingredientItems = recipe.ingredients.map((ingredient, index) => {
    const colour1 = "green-500";
    const colour2 = "green-300";
    const colour = index % 2 == 0 ? colour1 : colour2;
    /* add/remove 'mb-1' to control to the gap */
    return (
      <View className={`flex-row mb-1 px-4 bg-${colour}`} key={index}>
        <Text className="w-4 text-lg h-4">•</Text>
        <Text className="text-base grow">{ingredient.name}</Text>
        <Text className="text-base">{ingredient.quantity} {ingredient.quantityUnit}</Text>
      </View>
    )
  })

  return (
    <View className="my-6 mx-14">
      <Text className="text-base mb-4 text-left">{recipe.garnishes}</Text>
      {ingredientItems}
    </View>
  );
};

export default SCIngredients;
