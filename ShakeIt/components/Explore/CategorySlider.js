import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { ArrowRightIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { formatTags } from "../SpecificCocktail/formatTags";

const CategorySlider = ({ categoryId, category }) => {
  const navigation = useNavigation();
  const cocktails = Object.values(category.members);
  const cocktailItems = cocktails.map((cocktail, index) => {
    return (
      <View className="flex" key={index}>
        <TouchableOpacity
          className="bg-white-50 dark:bg-gray-600 mr-3 rounded-2xl"
          onPress={() =>
            navigation.navigate("SpecificCocktail", {
              recipeId: cocktail.id,
            })
          }
        >
          <Image
            source={{
              uri: cocktail.imgUrl,
            }}
            className="h-36 w-64 rounded-t-2xl"
          />
          {/* <Text>{cocktail.name}</Text> */}

          <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2 dark:text-white-50">
              {cocktail.name}
            </Text>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500 dark:text-white-50">
                <Text className="text-green-500">3</Text> ·{" "}
                {formatTags(cocktail)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View className="flex ">
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        className="p-1"
      >
        {cocktailItems}
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SpecificCategory", {
                categoryId: categoryId,
                categoryData: category,
              })
            }
          >
            <View className=" w-auto bg-white-50 dark:bg-gray-900 items-center rounded-full">
              <ArrowRightIcon color="#16bdca" size={30} />

              <Text className="text-xs mb-1 text-gray-500 dark:text-gray-200 px-4">
                View all
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategorySlider;
