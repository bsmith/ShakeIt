import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon, StarIcon } from "react-native-heroicons/solid";

/* inside your component */

const CategorySlider = ({ category }) => {
  const cocktails = Object.values(category.members);
  const cocktailItems = cocktails.map((cocktail, index) => {
    return (
      <View className="flex" key={index}>
        <TouchableOpacity className="bg-white mr-3 shadow">
          <Image
            source={{
              uri: cocktail.imgUrl,
            }}
            className="h-36 w-64 rounded-sm"
          />
          {/* <Text>{cocktail.name}</Text> */}

          <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{cocktail.name}</Text>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">3</Text> · Tag
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View className="flex">
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        className="p-1"
      >
        {cocktailItems}
        <View className="flex align-middle">
          <View className=" align-middle w-auto h-10 bg-white items-center content-center rounded-full">
            <ArrowRightIcon color="#16bdca" size={30} />
            <Pressable
              onPress={() =>
                navigation.navigate("SpecificCategory", {
                  categoryId: index,
                  categoryData: category,
                })
              }
            >
              <Text className="text-xs mb-1 text-gray-500 px-4">View all</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategorySlider;
