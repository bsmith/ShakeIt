import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import CategorySlider from "../components/Explore/CategorySlider";
import { getAllCategories } from "../services/CategoriesService";
import ButtonsFooter from "../components/ButtonsFooter";
import { useNavigation } from "@react-navigation/native";

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
      <View key={index}>
        <View className="bg-gray-200 mt-2 flex-row justify-between px-4">
          <View className=" flex items-center justify-between ">
            <Text className="font-bold text-lg">{index}</Text>
            <Text className="text-xs mb-1 text-gray-500 px-4">
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
          >
            <Text className="bg-cerise-400 text-center text-white font-bold py-2 rounded-full w-20">
              See all
            </Text>
          </Pressable>
        </View>
        <CategorySlider categoryId={index} category={category}></CategorySlider>
      </View>
    );
  });

  return (
    <>
      <View>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-4"
        >
          {/* <MainContainer> */}
          {categoryItems}
          {/* </MainContainer> */}
          <ButtonsFooter />
        </ScrollView>
      </View>
    </>
  );
};

export default Explore;
