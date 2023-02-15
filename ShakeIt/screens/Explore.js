import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CategorySlider from "../components/Explore/CategorySlider";
import { getAllCategories } from "../services/CategoriesService";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import ButtonsFooter from "../components/ButtonsFooter";

const Explore = () => {
  const [categoriesData, setCategoriesData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    getAllCategories().then(categoriesData => {
      setCategoriesData(categoriesData);
    });
  }, []);

  const categoryItems = Object.keys(categoriesData).map(index => {
    const category = categoriesData[index];

    return (
      <View key={index} className="mb-8">
        <View className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row justify-between px-4 rounded-2xl">
          <View className=" flex items-center justify-between ">
            <Text className="font-bold text-lg dark:text-white-50 ">
              {category.name}
            </Text>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate("SpecificCategory", {
                categoryId: index,
                categoryData: category,
              })
            }
            className="pb-2"
          >
            <Text className="bg-cerise-400 dark:bg-cerise-600 text-center font-bold py-1 rounded-full w-20">
              See all
            </Text>
          </Pressable>
        </View>
        <CategorySlider categoryId={index} category={category}></CategorySlider>
      </View>
    );
  });
  const fullConfig = resolveConfig(tailwindConfig);
  const colors = fullConfig.theme.colors;

  return (
    <>
      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
            // backgroundColor: colors.beach[300]
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-4  bg-beach-200 dark:bg-beach-900 dark:text-white-50"
        >
          {categoryItems}
        </ScrollView>
        <View>
          <ButtonsFooter />
        </View>
      </View>
    </>
  );
};

export default Explore;
