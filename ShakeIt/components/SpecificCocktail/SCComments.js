import { View, Text, ScrollView } from "react-native";
import React from "react";

const Comment = () => {
  return (
    <View className="mt-6 mx-14 bg-green-300 px-4 py-4">
      <Text className="text-base mb-4 text-left font-bold">Cocktail Enjoyer</Text>
      <Text className="text-base text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna ut eros congue convallis. Donec vestibulum eleifend est, in lacinia ex varius sed. Nam nisl neque, luctus non dapibus.</Text>
      <Text className="text-base text-right italic">8 Feb '23</Text>
    </View>
  )
}

const SCComments = ({recipe}) => {
  return (
    <View>
      <Comment />
      <Comment />
      <Comment />
    </View>
  );
};

export default SCComments;
