import { ScrollView } from "react-native";
import React from "react";
import CategorySlider from "./CategorySlider";

const CategoriesContainer = () => {
  return (
    <ScrollView className="bg-grey-100">
    {/* contentContainerStyle={{ paddingBottom: 100 }} */}
    {/*Categories*/}
    {/* <CategoryContainer /> */}


    <CategorySlider
      id="1"
      title="Fruity"
      description="Sweet and fruity range"
    />

    <CategorySlider
      id="2"
      title="Strong"
      description="Double the strength"
    />

    <CategorySlider
      id="3"
      title="Mocktails"
      description="Because you can enjoy a nice cocktails without %"
    />
  </ScrollView>
  );
};

export default CategoriesContainer;
