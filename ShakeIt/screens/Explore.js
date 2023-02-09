import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import CategorySlider from "../components/Explore/CategorySlider";
import { getAllCategories } from "../services/CategoriesService";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from "../tailwind.config";

// import { Colors, Header } from "react-native/Libraries/NewAppScreen";

const Explore = () => {
  const [categoriesData, setCategoriesData] = useState({});

  useEffect(() => {
    getAllCategories().then((categoriesData) => {
      setCategoriesData(categoriesData);
    });
  }, []);

  const categoryItems = Object.keys(categoriesData).map((index) => {
    const category = categoriesData[index];

    
    return (
      <View key={index}>
        <View className="bg-gray-200 mt-2 flex-row justify-between px-4">
          <View className=" flex items-center justify-between ">
            <Text className="font-bold text-lg">{index}</Text>
            <Text className="text-xs mb-1 text-gray-700 dark:text-white-50 px-4">
              {category.name}
            </Text>
          </View>
          <ArrowRightIcon color="#00CCBB" size={30} />
        </View>
        <CategorySlider category={category}></CategorySlider>
      </View>
      
      );
    });
    const fullConfig = resolveConfig(tailwindConfig);
    const colors = fullConfig.theme.colors;

  return (
    <View>
      {/* <Header /> */}
        <View>
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
        </View>
    </View>
  );
};

export default Explore;
