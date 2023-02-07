import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import MainContainer from "../containers/MainContainer";

const Welcome = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <View className="bg-red-400">
        <Text>WELCOME</Text>

      </View> */}
      
      <MainContainer />
    </SafeAreaView>
  );
};
export default Welcome;
