import { View, Text, Pressable } from "react-native";
import React from "react";
import { MagnifyingGlassIcon, UserIcon, HomeIcon, ListBulletIcon } from "react-native-heroicons/solid";

const ButtonsFooter = () => {
  return (
    <View className="flex flex-row justify-around bg-cerise-400 dark:bg-cerise-800">
      <Pressable
        className="items-center justify-center w-12 h-12"
        onPress={() => navigation.navigate("Welcome")}
      >
        <HomeIcon size={20} color="#000000" />
      </Pressable>

      <Pressable
        className="items-center justify-center w-12 h-12"
        onPress={() => navigation.navigate("SearchInput")}
      >
        <MagnifyingGlassIcon size={20} color="#000000" />
      </Pressable>

      <Pressable
        className="items-center justify-center w-12 h-12"
        onPress={() => navigation.navigate("LogIn")}
      >
        <UserIcon size={20} color="#000000" />
      </Pressable>

      <Pressable
        className="items-center justify-center w-12 h-12"
        onPress={() => navigation.navigate("ShoppingList")}
      >
        <ListBulletIcon size={20} color="#000000" />
      </Pressable>
    </View>
  );
};

export default ButtonsFooter;
