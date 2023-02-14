import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import LargeButton from "../components/Basic/LargeButton"

const Welcome = ({ navigation }) => {
  // const navigation = useNavigation();

  const [value, setValue] = useState(null);

  return (
    <ScrollView className="flex space-y-4 h-full bg-beach-200">
      <View className="flex-1 mb-4">
        <Image
          source={require("../assets/ShakeIt.png")}
          className="max-w-md h-auto mx-auto mt-4"
        />

        <Text className="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300 ">
          Welcome
        </Text>

        <Text className="text-xl mx-7 dark:text-cerise-200 ">
          If you're looking for some cocktail ideas you're in the right place!
          If you're looking for some cocktail ideas you're in the right place!
          If you're looking for some cocktail ideas you're in the right place!
        </Text>

        <LargeButton
          onPress={() => navigation.navigate("Explore")}
        >
          Explore
        </LargeButton>

        <LargeButton
          onPress={() => navigation.navigate("SearchInput")}
        >
          Search
        </LargeButton>

        <LargeButton
          onPress={() => navigation.navigate("LogIn")}
        >
          Log in
        </LargeButton>
      </View>
    </ScrollView>
  );
};
export default Welcome;
