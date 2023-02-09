import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { MagnifyingGlassIcon, UserIcon, HomeIcon, MoonIcon} from "react-native-heroicons/solid";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  console.log(`colorScheme: `, colorScheme);
  
  return (
    // <View className="flex flex-row space-x-5 ">
    <View className="flex flex-row justify-between bg-white-50">

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
        onPress={toggleColorScheme}
      >
          <MoonIcon size={20} color="#000000" />
      </Pressable>
    </View>
  );
};

export default Header;
