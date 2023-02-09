import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CocktailListItem = ({ cocktail }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() =>
        navigation.navigate("SpecificCocktail", {
          recipeId: cocktail.id,
        })
      }
    >
      <View className="flex-row my-2 h-40 bg-white">
        <Image
          source={{
            uri: cocktail.imgUrl,
          }}
          className="h-auto w-2/5 rounded-sm mx-4"
        />
        <View>
          <Text className="text-xl bg-gray-200 mt-2 flex-row justify-between ">
            {cocktail.name}
          </Text>
          <Text className="text-lg">{cocktail.shortDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CocktailListItem;
