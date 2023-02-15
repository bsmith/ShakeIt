import { View, TextInput, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HomeIcon,
  MoonIcon as MoonIconSolid,
} from "react-native-heroicons/solid";
import { MoonIcon as MoonIconOutline } from "react-native-heroicons/outline";

import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  console.log(`colorScheme: `, colorScheme);

  return (
    <TouchableOpacity
      className="items-center justify-center w-12 h-12"
      onPress={toggleColorScheme}
    >
      {colorScheme === "dark" ? (
        <MoonIconOutline size={20} color="white" />
      ) : (
        <MoonIconSolid size={20} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default Header;
