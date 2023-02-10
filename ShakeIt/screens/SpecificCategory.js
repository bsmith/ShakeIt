import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import CocktailList from "../components/SpecificCategory/CocktailList";

const SpecificCategory = ({ route, navigation }) => {
  const { categoryId, categoryData } = route.params;
  const cocktails = Object.values(categoryData.members);
  return (
    <ScrollView className="bg-beach-200 dark:bg-beach-900 dark:text-white-50">
      <View>
        <Text className="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300 ">
          {categoryData.name}
        </Text>
        <CocktailList cocktails={cocktails} />
      </View>
    </ScrollView>
  );
};

export default SpecificCategory;
