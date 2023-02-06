import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
