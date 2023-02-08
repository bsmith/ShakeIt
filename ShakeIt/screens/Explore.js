import { View, Text, Pressable } from "react-native";
import React from "react";
import { SearchBar } from "react-native-screens";
import CategoriesContainer from "../containers/CategoriesContainer";
import { useNavigation } from "@react-navigation/native";
import MainContainer from "../containers/MainContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import CategorySlider from "../components/CategorySlider";

const Explore = () => {
  return (
    <SafeAreaView>
      <MainContainer>
        {
          <ScrollView className="bg-grey-100">
            {/*Featured rows*/}
            <CategorySlider id="1" title="Mocktail" description="no alcohol" />

            {/*Tasty Discounts*/}
            <CategorySlider
              id="2"
              title="Low alcohol"
              description="below 5% vol."
            />

            {/*Offers near you*/}
            <CategorySlider id="3" title="Shot" description="Shot drinks" />
          </ScrollView>
        }
      </MainContainer>
    </SafeAreaView>
  );
};

export default Explore;
