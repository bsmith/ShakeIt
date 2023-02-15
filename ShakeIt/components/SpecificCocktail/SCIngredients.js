import { View, Text, Pressable, ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { storeData, getData, addIngredient } from "../../services/ListService";
import {
  AsyncStorage,
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

const SCIngredients = ({ recipe }) => {
  const [ingredient, setIngredient] = useState([]);
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const [value, setValue] = useState();
  const { getItem, setItem } = useAsyncStorage("@storage_key");

  const handleAddToList = async () => {
    for (const ingredient of recipe.ingredients) {
      await addIngredient({
        ...ingredient,
        quantity: ingredient.quantity * count,
      });
    }
    ToastAndroid.show("Added to list", ToastAndroid.SHORT);
  };

  const ingredientItems = recipe.ingredients.map((ingredient, index) => {
    return (
      <View className={`flex-row mb-1 px-4 w-full`} key={index}>
        <Text className="w-4 text-lg h-4 dark:text-white-50">•</Text>
        <Text className="text-base grow dark:text-white-50">
          {ingredient.name}
        </Text>
        <Text className="text-base dark:text-white-50">
          {count * ingredient.quantity} {ingredient.quantityUnit}
        </Text>
      </View>
    );
  });

  return (
    // <View className="py-6 px-10 mx-auto max-w-md">
    <View className="px-5 items-center">
      <View className="flex-row justify-around items-center">
        <View>
          <Text className="text-xl font-bold mt-2 text-center dark:text-white-50">
            servings:
          </Text>

          <View className="flex-row mt-2 align-middle">
            <Pressable
              className=" rounded mx-7 px-3 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
              onPress={() => (count > 0 ? setCount(count - 1) : setCount(0))}
            >
              <Text className="text-center text-white font-bold py-2 rounded text-lg">
                -
              </Text>
            </Pressable>
            <Text className="py-3 dark:text-white-50"> {count} </Text>
            <Pressable
              className="mx-7 px-3 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
              onPress={() => setCount(count + 1)}
            >
              <Text className="text-center text-white font-bold py-2 rounded-full text-lg">
                +
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="mx-12 mt-10 px-2 h-12 justify-center bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded">
          <Pressable onPress={handleAddToList}>
            <Text className="font-bold">Add to list</Text>
          </Pressable>
        </View>
      </View>
      <Text className="text-base mb-4 text-left mt-2 dark:text-white-50">
        {recipe.garnishes}
      </Text>
      {ingredientItems}
    </View>
  );
};

export default SCIngredients;

{
  /* <Pressable onPress={() => navigation.navigate("ShoppingList", {ingredients: recipe.ingredients.map(ingredient => {
  return {
    ...ingredient,
    quantity: ingredient.quantity * count
  } */
}
