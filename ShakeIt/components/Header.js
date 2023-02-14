import { View, TextInput, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HomeIcon,
  MoonIcon as MoonIconSolid,
} from "react-native-heroicons/solid";
import {
  MoonIcon as MoonIconOutline,
} from "react-native-heroicons/outline";

import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  console.log(`colorScheme: `, colorScheme);

  return (
    // <View className="flex flex-row space-x-5 ">
    // <View className="flex flex-row justify-end justify-items-end bg-white-50 w-4/5 ml-10">
    <View className="flex-row">
      <TouchableOpacity
        className="items-center justify-center w-12 h-12"
        onPress={() => {
          auth.currentUser
            ? navigation.navigate("ManageAccount")
            : navigation.navigate("LogIn");
        }}
      >
        <UserIcon size={20} color={colorScheme === "dark" ? "white" : "black"} />
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center justify-center w-12 h-12"
        onPress={toggleColorScheme}
      >
        { colorScheme === "dark" ?
          <MoonIconOutline size={20} color="white" /> :
          <MoonIconSolid size={20} color="black" />
        }
      </TouchableOpacity>
    </View>
  );
};

export default Header;
