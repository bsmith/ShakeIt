import { View, Text } from "react-native";
import React from "react";

const SCRecipe = ({ recipe }) => {
  return (
    <View className="py-6 px-10 mx-auto max-w-md ">
      <Text className="text-xl font-bold mb-4 dark:text-white-50">Recipe:</Text>
      <Text className="text-base dark:text-white-50">
        {recipe.instructions}
      </Text>
    </View>
  );
};

export default SCRecipe;
