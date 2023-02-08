import { View, Text, Image } from "react-native";
import React from "react";

const CocktailDescription = ({recipe}) => {
  const img = !recipe.imgUrl.startsWith('http') ? null :
    <Image
      className="mx-auto my-4"
      source={{
        uri: recipe.imgUrl,
        width: 256,
        height: 128+64,
      }}
      resizeMode={'cover' /* 'cover' zooms into to fill, 'contain' shows whole image */}
      />

  return (
    <View className="my-6 mx-6">
      <Text className="text-2xl text-center">{recipe.name}</Text>
      {img}
      <Text className="text-lg text-center mb-8">{recipe.shortDescription}</Text>
      <Text className="text-base">{recipe.description}</Text>
    </View>
  );
};

export default CocktailDescription;
