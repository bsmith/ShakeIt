import { View, TextInput } from "react-native";
import React from "react";
import { MagnifyingGlassIcon, UserIcon, HomeIcon} from "react-native-heroicons/solid";

const Header = () => {
  return (
    <View className="flex flex-row space-x-20 ml-6 ">
      <View className="px-3.5"><HomeIcon size={20} color="#000000" /></View>
      <View className="px-3.5"><MagnifyingGlassIcon size={20} color="#000000" /></View>
      <View className=""><UserIcon size={20} color="#000000" /></View>
    </View>
  );
};

export default Header;
