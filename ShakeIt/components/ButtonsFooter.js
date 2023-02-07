import { View, Text } from "react-native";
import React from "react";
import {HomeIcon, ArrowUturnLeftIcon} from "react-native-heroicons/outline";

const ButtonsFooter = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
      <View><ArrowUturnLeftIcon size={20} color="#000080" /></View>
      <View><HomeIcon size={20} color="#000080"/></View>
    </View>
  );
};

export default ButtonsFooter;
