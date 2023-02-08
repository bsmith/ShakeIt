import { View, Text, SafeAreaView , Pressable} from "react-native";
import React from "react";
import { SearchBar } from "react-native-screens";
import CategoriesContainer from "../containers/CategoriesContainer";
import { useNavigation } from "@react-navigation/native";



const Explore = () => {
  return (
    <SafeAreaView className="bg-white pt-5">

      <CategoriesContainer />
      <Pressable onPress={() =>
        navigation.navigate("SpecificCategory")
      }><Text className="mx-4">Fruity Category</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default Explore;
