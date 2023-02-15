import { TouchableOpacity } from "react-native";
import React from "react";
import {
  MoonIcon as MoonIconSolid,
} from "react-native-heroicons/solid";
import { MoonIcon as MoonIconOutline } from "react-native-heroicons/outline";

import { useColorScheme } from "nativewind";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

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
