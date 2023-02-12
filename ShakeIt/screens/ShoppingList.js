import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import ButtonsFooter from "../components/ButtonsFooter";



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
    
    <View className="flex-1 bg-beach-200">
      <Text className="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300">Shopping List</Text>
      <View className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row justify-between px-4 mx-4 rounded-2xl">
        <View className=" flex items-center justify-between ">
          <Text className="font-bold text-lg dark:text-white-50 ">shopping list items</Text>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("SpecificCategory", {
              categoryId: index,
              categoryData: category,
            })
          }
          className="pb-2"
        >
          <Text className="bg-cerise-400 dark:bg-cerise-600 text-center font-bold py-1 rounded-full w-20">
            See all
          </Text>
        </Pressable>
      </View> 
      <View className="bg-white">
        <ButtonsFooter />
      </View> 
    </View>
  );
};

export default ShoppingList;