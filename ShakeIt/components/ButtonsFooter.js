import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon, UserIcon, HomeIcon, ListBulletIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";

const ButtonsFooter = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  return (
    <View className="flex flex-row justify-around bg-cerise-400 dark:bg-cerise-800 pt-2">
      <TouchableOpacity
        accessibilityLabel="Tap me to go to the home screen."
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("Welcome")}
      >
        <HomeIcon size={20} color={colorScheme === "dark" ? "white" : "black"} />
        <Text className="dark:text-white-50">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("SearchInput")}
      >
        <MagnifyingGlassIcon size={20} color={colorScheme === "dark" ? "white" : "black"} />
        <Text className="dark:text-white-50">Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("LogIn")}
      >
        <UserIcon size={20} color={colorScheme === "dark" ? "white" : "black"} />
        <Text className="dark:text-white-50">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center justify-center w-12 h-12 flex-column"
        onPress={() => navigation.navigate("ShoppingList")}
      >
        <ListBulletIcon size={20} color={colorScheme === "dark" ? "white" : "black"} />
        <Text className="dark:text-white-50">List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsFooter;
