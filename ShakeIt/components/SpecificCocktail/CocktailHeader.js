import { View, Text, Image } from "react-native";
import React from "react";

const CocktailHeader = ({ recipe }) => {
  const img = !recipe.imgUrl.startsWith("http") ? null : (
    <Image
      className="mx-auto my-4 rounded-xl"
      source={{
        uri: recipe.imgUrl,
        width: 256,
        height: 128 + 64,
      }}
      resizeMode={
        "cover" /* 'cover' zooms into to fill, 'contain' shows whole image */
      }
    />
  );

  return (
    <View className="py-4 px-6 mx-auto max-w-md ">
      <Text className="my-2 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200 ">
        {recipe.name}
      </Text>
      {img}
      <Text className="text-lg text-center dark:text-white-50">
        {recipe.shortDescription}
      </Text>
    </View>
  );
};

export default CocktailHeader;
