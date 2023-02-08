import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import MainContainer from "../containers/MainContainer";

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
      console.log(data);
      console.log(data.description);
    });
  }, []);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
  return (
    <SafeAreaView className="bg-white pt-5">
      <MainContainer />

      <Pressable onPress = {() => navigation.navigate("Explore") }>
        <Text className="mx-4">Explore</Text>
      </Pressable>

      <Pressable
        onPress = {() => navigation.navigate("SpecificCocktail", { recipeId: "brandyalexander" }) }
      >
        <Text className="mx-4">Brandy Alexander</Text>
      </Pressable>

    </SafeAreaView>
  );
};
export default Welcome;
