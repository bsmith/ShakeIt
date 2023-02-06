import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const Welcome = () => {
  //   const navigation = useNavigation();

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerShown: false,
  //     });
  //   }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="bg-red-400">
        <Text>Open up App.js to start working on your app!skdfskj</Text>
        <ChevronDownIcon size={20} color="#00CCBB" />

        <MagnifyingGlassIcon size={50} color="#00CCBB" />
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
