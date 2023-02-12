import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";


const ShoppingList = () => {
  const navigation = useNavigation();

  // const [value, setValue] = useState(null);
  // useEffect(() => {
  //   const starCountRef = ref(db, "recipe");
  //   // const starCountRef = ref(db, "recipe" + postId + "/starCount");
  //   onValue(starCountRef, snapshot => {
  //     const data = snapshot.val();

  //     setValue(data);
  //   });
  // }, []);

    return (
      <View className="mx-0 bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
  
        <Text className="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300 ">Shopping List</Text>
      </View>
    );
  };

export default ShoppingList;