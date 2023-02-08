import { View, TextInput } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";



const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput
          placeholder="Cocktail name"
          keyboard="default"
        />
      </View>

  </View>
  );
};

export default SearchBar;
