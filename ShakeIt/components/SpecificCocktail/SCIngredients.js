import { View, Text } from "react-native";
import React from "react";

const SCIngredients = ({ recipe }) => {
  const ingredientItems = recipe.ingredients.map((ingredient, index) => {
    return (
      <View className="flex-row mx-8 mb-1" key={index}>
        <Text className="w-4 text-lg h-4">•</Text>
        <Text className="text-base grow">
          {index} {ingredient.name}
        </Text>
        <Text className="text-base">
          {ingredient.quantity} {ingredient.quantityUnit}
        </Text>
      </View>
    );
  });

  return (
    <View className="my-6 mx-6">
      <Text className="text-base mb-4 text-center">{recipe.garnishes}</Text>
      {ingredientItems}
    </View>
  );
};

export default SCIngredients;
