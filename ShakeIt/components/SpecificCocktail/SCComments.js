import { View, Text } from "react-native";
import React from "react";

const SCComments = ({recipe}) => {
  return (
    <View>
      <Text>SCComments {recipe.name}</Text>
    </View>
  );
};

export default SCComments;
