import { View, Text, ScrollView } from "react-native";
import React from "react";

import CategoriesData from "../examples/CategoriesData";

const CategoriesContainer = () => {
  /* Should probably be a SectionList */
  return (
    <ScrollView className="flex flex-column">
      <Text>CategoriesContainer</Text>
      {/* Font support is a complex issue */}
      {/*<Text className="font-mono">*/}
      <Text>
        { JSON.stringify(CategoriesData) }
      </Text>
    </ScrollView>
  );
};

export default CategoriesContainer;
