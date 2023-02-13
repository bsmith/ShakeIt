import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const Welcome = ({ navigation }) => {
  // const navigation = useNavigation();

  const [value, setValue] = useState(null);
  useEffect(() => {
    const starCountRef = ref(db, "recipe");
    // const starCountRef = ref(db, "recipe" + postId + "/starCount");
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();

      setValue(data);
    });
  }, []);

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

        <Pressable
          className="mx-auto mt-6 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
          onPress={() => navigation.navigate("Explore")}
        >
          <Text className="text-center text-white font-bold py-2 rounded text-lg">
            Explore
          </Text>
        </Pressable>

        <Pressable
          className="mx-auto mt-6 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
          onPress={() => navigation.navigate("SearchInput")}
        >
          <Text className="text-center text-white font-bold py-2 rounded text-lg">
            Search
          </Text>
        </Pressable>

        <Pressable
          className="mx-auto mt-6 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text className="text-center text-white font-bold py-2 rounded text-lg">
            Log in
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
export default Welcome;
