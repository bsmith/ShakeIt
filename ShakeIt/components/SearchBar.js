import { View, TextInput } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 p-3 mx-3">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput placeholder="Search on ShakeIt" keyboard="default" />
      </View>
    </View>
  );
};

export default SearchBar;
