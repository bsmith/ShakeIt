import { View, TextInput } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HomeIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className="flex-row space-x-2 p-3 mx-3 bg-gray-500">
      {/* <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded"> */}
      <ArrowLeftIcon size={20} color="#000080" />
      <MagnifyingGlassIcon size={20} color="#000080" />

      <UserIcon size={20} color="#000080" />
      <HomeIcon size={20} color="#000080" />
    </View>
  );
};

export default Header;
