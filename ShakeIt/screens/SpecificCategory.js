import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import CocktailList from "../components/SpecificCategory/CocktailList";

const SpecificCategory = ({ route, navigation }) => {
  const { categoryId, categoryData } = route.params;
  const cocktails = Object.values(categoryData.members);
  return (
    <ScrollView>
      <View>
        <Text className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
          {categoryData.name}
        </Text>
        <CocktailList cocktails={cocktails} />
      </View>
    </ScrollView>
  );
};

export default SpecificCategory;
