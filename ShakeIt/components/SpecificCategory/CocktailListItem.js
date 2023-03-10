import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { formatTags } from "../SpecificCocktail/formatTags";

const CocktailListItem = ({ cocktail }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mx-3 shadow"
      onPress={() =>
        navigation.navigate("SpecificCocktail", {
          recipeId: cocktail.id,
        })
      }
    >
      <View className="flex-row my-2 h-40 bg-white-50 dark:bg-gray-600 rounded-2xl">
        <Image
          source={{
            uri: cocktail.imgUrl,
          }}
          className="h-auto w-2/5 rounded-sm mr-4 rounded-l-2xl"
        />
        <View className="flex-column w-3/5 pr-2">
          <Text className="text-xl mt-2 mb-2 justify-between font-bold dark:text-white-50">
            {cocktail.name}
          </Text>
          <Text className="text-base mr-2 mb-2 dark:text-white-50">
            {cocktail.shortDescription}
          </Text>
          <Text className="text-base mr-2 dark:text-white-50">
            {formatTags(cocktail)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CocktailListItem;
