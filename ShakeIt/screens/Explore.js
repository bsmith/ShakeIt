import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { SearchBar } from "react-native-screens";
import CategoriesContainer from "../containers/CategoriesContainer";



const Explore = () => {
  return (
    <SafeAreaView className="bg-white pt-5">

        <CategoriesContainer />

    </SafeAreaView>
  );
};

export default Explore;
