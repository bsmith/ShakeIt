import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import CocktailList from "../components/SpecificCategory/CocktailList";
import ButtonsFooter from "../components/ButtonsFooter";

const SpecificCategory = ({ route, navigation }) => {
  const { categoryId, categoryData } = route.params;
  const cocktails = Object.values(categoryData.members);
  return (
    <View className="flex-1">
      <ScrollView className="bg-beach-200 dark:bg-beach-900 ">
        <View>
          <Text className="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200 ">
            {categoryData.name}
          </Text>
          <CocktailList cocktails={cocktails} />
        </View>
      </ScrollView>
      <View>
        <ButtonsFooter />
      </View>
    </View>
  );
};

export default SpecificCategory;
