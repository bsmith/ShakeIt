import { View, Text } from "react-native";
import React from "react";

const SCRecipe = ({recipe}) => {
  return (
    <View className="my-6 mx-6">
      <Text className="text-base">{recipe.instructions}</Text>
    </View>
  );
};

export default SCRecipe;
