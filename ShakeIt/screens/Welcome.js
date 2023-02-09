import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const Welcome = () => {
  const navigation = useNavigation();

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
    <ScrollView className="flex space-y-4 h-full">
      <View className="flex-1">
        <Text className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
          Welcome to Shake it
        </Text>
        <Image source={require("./ShakeIt.png")} className="max-w-md h-auto " />

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>

      <Pressable onPress={() => navigation.navigate("Explore")}>
        <Text className="bg-beach-400 hover:bg-beach-700 text-center text-white font-bold py-2 rounded w-20">
          Explore
        </Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("LogIn")}>
        <Text className="bg-beach-400 hover:bg-beach-700 text-center text-white font-bold py-2 rounded w-20">
          Log in
        </Text>
      </Pressable>
    </ScrollView>
  );
};
export default Welcome;
