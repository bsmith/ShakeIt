
import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategorySlider from "../components/CategorySlider";

const CategoriesContainer = () => {
  /* Should probably be a SectionList */
  return (
    <ScrollView className="bg-grey-100">
    {/* contentContainerStyle={{ paddingBottom: 100 }} */}
    {/*Categories*/}
    {/* <CategoryContainer /> */}

    {/*Featured rows*/}
    <CategorySlider
      id="1"
      title="Fruity"
      description="Sweet and fruity range"
    />

    {/*Tasty Discounts*/}
    <CategorySlider
      id="2"
      title="Strong"
      description="Double the strength"
    />

    {/*Offers near you*/}
    <CategorySlider
      id="3"
      title="Mocktails"
      description="Because you can enjoy a nice cocktails without %"
    />
  </ScrollView>
  );
};

export default CategoriesContainer;
