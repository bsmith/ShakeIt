import { View, Text, Pressable } from "react-native";
import React from "react";
import { MagnifyingGlassIcon, UserIcon, HomeIcon, ListBulletIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const ButtonsFooter = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row justify-around bg-cerise-400 dark:bg-cerise-800 pt-2">
      <Pressable
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("Welcome")}
      >
        <HomeIcon size={20} color="#000000" />
        <Text>Home</Text>
      </Pressable>

      <Pressable
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("SearchInput")}
      >
        <MagnifyingGlassIcon size={20} color="#000000" />
        <Text>Search</Text>
      </Pressable>

      <Pressable
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("LogIn")}
      >
        <UserIcon size={20} color="#000000" />
        <Text>Login</Text>
      </Pressable>

      <Pressable
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("ShoppingList")}
      >
        <ListBulletIcon size={20} color="#000000" />
        <Text>List</Text>
      </Pressable>
    </View>
  );
};

export default ButtonsFooter;
