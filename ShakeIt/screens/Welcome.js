import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const Welcome = () => {
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

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="bg-red-400">
        <ChevronDownIcon size={20} color="#00CCBB" />
        <AcademicCapIcon size={30} color="#00CCBB" />
        <MagnifyingGlassIcon size={50} color="#00CCBB" />
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
