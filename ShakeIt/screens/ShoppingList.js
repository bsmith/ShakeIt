import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import ButtonsFooter from "../components/ButtonsFooter";
import { CheckCircleIcon } from "react-native-heroicons/outline";
import { getData, removeValue } from "../services/ListService";
import LargeButton from "../components/Basic/LargeButton";

const ShoppingList = () => {
  // const { Checkbox } = useColorScheme();
  const navigation = useNavigation();

  const [value, setValue] = useState(null);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    // readItemFromStorage();
    getData().then(data => {
      setValue(data == null ? [] : data);
      console.log(data);
    });
  }, [refresh]);
  if (value == null) {
    return <Text>Wait...</Text>;
  }

  const handleClearList = () => {
    removeValue().then(() => {
      setRefresh(refresh + 1);
    });
  };

  const ingredients = value;
  const ingredientItems = ingredients.map((ingredient, index) => {
    return (
      <View className={`flex-row mb-1 px-4 w-full`} key={index}>
        <Text className="w-4 text-lg h-4">•</Text>
        <Text className="text-base grow">{ingredient.name}</Text>
        <Text className="text-base">
          {ingredient.quantity} {ingredient.quantityUnit}
        </Text>
      </View>
    );
  });

  return (
    <ScrollView>
      <LargeButton onPress={handleClearList}>clear list</LargeButton>
      {ingredientItems}
    </ScrollView>
  );
};

export default ShoppingList;
