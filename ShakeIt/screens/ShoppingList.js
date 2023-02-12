import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import ButtonsFooter from "../components/ButtonsFooter";
import { CheckCircleIcon } from "react-native-heroicons/outline";

const ShoppingList = () => {
  
  // const { Checkbox } = useColorScheme();
  const navigation = useNavigation();

  const [value, setValue] = useState(null);
  // useEffect(() => {
  //   const starCountRef = ref(db, "recipe");
  //   // const starCountRef = ref(db, "recipe" + "ingredients"  "/starCount");
  //   onValue(starCountRef, snapshot => {
  //     const data = snapshot.val();
  //     setValue(data);
  //   });
  // }, []);
    return (
    <View className="flex-1 bg-beach-300">
      {/* <ScrollView className=" flex-column px-3 bg-beach-300"> */}
      <Text className="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300">Shopping List</Text>
        <ScrollView className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row px-4 mx-4 rounded-2xl">
          {/* <View className=" flex-row px-5 items-space-evenly justify-between "> */}
           <Text className="font-bold mr-10 ml-0 text-lg dark:text-white-50 ">place holder</Text>
           <Pressable
          className="items-center justify-center w-12 h-12 ml-10 mr-0 flex-column  active:bg-gray-300 hover:bg-gray-300 rounded"
        // onPress={() => navigation.navigate("SearchInput")}
          >
          <CheckCircleIcon size={20} color="#000000" rounded-full/>
          </Pressable>
        </ScrollView>
        <ScrollView className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row  px-4 mx-4 rounded-2xl">
          {/* <View className=" flex-row px-5 items-space-evenly justify-between "> */}
           <Text className="font-bold mr-10 ml-0 text-lg dark:text-white-50 ">place holder</Text>
           <Pressable
          className="items-center justify-center w-12 h-12 ml-10 mr-0 flex-column  active:bg-gray-300 hover:bg-gray-300 rounded"
        // onPress={() => navigation.navigate("SearchInput")}
          >
          <CheckCircleIcon size={20} color="#000000" rounded-full/>
          </Pressable>
        </ScrollView><ScrollView className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row  px-4 mx-4 rounded-2xl">
          {/* <View className=" flex-row px-5 items-space-evenly justify-between "> */}
           <Text className="font-bold mr-10 ml-0 text-lg dark:text-white-50 ">place holder</Text>
           <Pressable
          className="items-center justify-center w-12 h-12 ml-10 mr-0 flex-column  active:bg-gray-300 hover:bg-gray-300 rounded"
        // onPress={() => navigation.navigate("SearchInput")}
          >
          <CheckCircleIcon size={20} color="#000000" rounded-full/>
          </Pressable>
        </ScrollView><ScrollView className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row  px-4 mx-4 rounded-2xl">
          {/* <View className=" flex-row px-5 items-space-evenly justify-between "> */}
           <Text className="font-bold mr-10 ml-0 text-lg dark:text-white-50 ">place holder</Text>
           <Pressable
          className="items-center justify-center w-12 h-12 ml-10 mr-0 flex-column  active:bg-gray-300 hover:bg-gray-300 rounded"
        // onPress={() => navigation.navigate("SearchInput")}
          >
          <CheckCircleIcon size={20} color="#000000" rounded-full/>
          </Pressable>
        </ScrollView><ScrollView className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row  px-4 mx-4 rounded-2xl">
          {/* <View className=" flex-row px-5 items-space-evenly justify-between "> */}
           <Text className="font-bold mr-10 ml-0 text-lg dark:text-white-50 ">place holder</Text>
           <Pressable
          className="items-center justify-center w-12 h-12 ml-10 mr-0 flex-column  active:bg-gray-300 hover:bg-gray-300 rounded"
        // onPress={() => navigation.navigate("SearchInput")}
          >
          <CheckCircleIcon size={20} color="#000000" rounded-full/>
          </Pressable>
        </ScrollView><ScrollView className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row  px-4 mx-4 rounded-2xl">
          {/* <View className=" flex-row px-5 items-space-evenly justify-between "> */}
           <Text className="font-bold mr-10 ml-0 text-lg dark:text-white-50 ">place holder</Text>
           <Pressable
          className="items-center justify-center w-12 h-12 ml-10 mr-0 flex-column  active:bg-gray-300 hover:bg-gray-300 rounded"
        // onPress={() => navigation.navigate("SearchInput")}
          >
          <CheckCircleIcon size={20} color="#000000" rounded-full/>
          </Pressable>
        </ScrollView>

      <View className="flex-1 bg-white my-9">
        <ButtonsFooter />
      </View> 
    </View>
  );
};

export default ShoppingList;