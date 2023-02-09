import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../services/CategoriesService";
import { ArrowRightIcon, StarIcon } from "react-native-heroicons/solid";
import MainContainer from "../MainContainer";
import { SearchBar } from "react-native-screens";
import ButtonsFooter from "../ButtonsFooter";

/* inside your component */

const CategorySlider = ({ category }) => {
  // const [categoriesData, setCategoriesData] = useState({});

  // useEffect(() => {
  //   // console.log(`Fetching all categories`);
  //   getAllCategories().then(categoriesData => {
  //     setCategoriesData(categoriesData);
  //     console.log(categoriesData);
  //     // console.log(`Got all categories!`);
  //   });
  // }, []);

  const cocktails = Object.values(category.members);
  console.log(cocktails);
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
        className="pt-4"
      >
        {cocktailItems}
        <View className="items-center content-center">
          <View className="w-auto h-10 bg-white items-center content-center rounded-full">
            <ArrowRightIcon color="#00CCBB" size={30} />
          </View>
          <Text className="text-xs mb-1 text-gray-500 px-4">View all</Text>
        </View>
      </ScrollView>
    </View>

    // <View>
    //   <Pressable onPress={() => navigation.navigate("SpecificCategory")}>

    //     <Text className="mx-4">Fruity Category</Text>
    //   </Pressable>
    // </View>
  );
};

export default CategorySlider;
