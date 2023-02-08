import { View, Text } from "react-native";
import React from "react";

const SCRecipe = ({recipe}) => {
  return (
    <View className="my-6 mx-10">
      <Text className="text-xl font-bold mb-4">Recipe:</Text>
      <Text className="text-base">{recipe.instructions}</Text>
    </View>
  );
};

export default SCRecipe;
