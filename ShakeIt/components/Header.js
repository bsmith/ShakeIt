import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { MagnifyingGlassIcon, UserIcon, HomeIcon, MoonIcon} from "react-native-heroicons/solid";
import { useColorScheme, styled} from "nativewind";


  
const Header = () => {

  const { colorScheme, toggleColorScheme} = useColorScheme();
  
  return (
    // <View className="flex flex-row space-x-5 ">
    <View className="flex flex-row justify-between space-x-10">
      <View className=""><HomeIcon size={20} color="#000000" /></View>
      <View className=""><MagnifyingGlassIcon size={20} color="#000000" /></View>
      <View className=""><UserIcon size={20} color="#000000" /></View>
      <View>
        <Pressable
          onPress={toggleColorScheme}
          className="items-center justify-center dark:bg-beach-800">
            <MoonIcon size={20} color="#000000" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
