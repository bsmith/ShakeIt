import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import ButtonsFooter from "../components/ButtonsFooter";
import { CheckCircleIcon } from "react-native-heroicons/outline";
import { getData, storeData, removeValue } from "../services/ListService";
import LargeButton from "../components/Basic/LargeButton";
import Checkbox from "expo-checkbox";

const CheckboxShoppingList = ({
  className,
  value,
  onValueChange,
  children,
}) => {
  return (
    <Pressable
      className={
        "flex-row justify-start items-center mb-2 " + (className ?? "")
      }
      onPress={() => onValueChange(!value)}
    >
      <Checkbox
        className="h-12 w-12"
        value={value}
        onValueChange={onValueChange}
      />
      {children}
    </Pressable>
  );
};

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

  const purchasedItems = value.filter(ingredient => ingredient.purchased);
  const notPurchasedItems = value.filter(ingredient => !ingredient.purchased);

  const handleClearList = () => {
    removeValue().then(() => {
      setRefresh(refresh + 1);
    });
  };

  const handleClearPurchasedList = () => {
    storeData(notPurchasedItems).then(() => {
      setRefresh(refresh + 1);
    });
  };

  const ingredientItems = ingredients =>
    ingredients.map((ingredient, index) => {
      const handlePurchase = () => {
        const newIngredients = value.filter(item => item != ingredient);
        const newIngredient = { ...ingredient };
        newIngredient.purchased = !newIngredient.purchased;
        // newIngredients[index] = newIngredient;
        newIngredients.push(newIngredient);
        storeData(newIngredients).then(() => {
          setRefresh(refresh + 1);
        });
      };
      return (
        <View className={`flex-row mb-1 px-4 w-full`} key={index}>
          <CheckboxShoppingList
            value={ingredient.purchased}
            onValueChange={handlePurchase}
          >
            {/* <Text className="w-4 text-lg h-4">•</Text> */}
            <Text className="text-base grow">{ingredient.name}</Text>
            <Text className="text-base">
              {ingredient.quantity} {ingredient.quantityUnit}
            </Text>
          </CheckboxShoppingList>
        </View>
      );
    });

  return (
    <ScrollView>
      <View className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row justify-between px-4 rounded-2xl">
        <View className=" flex items-center justify-between ">
          <Text className="font-bold text-lg dark:text-white-50 ">To buy</Text>
        </View>
        <Pressable onPress={handleClearList} className="pb-2">
          <Text className="bg-cerise-400 dark:bg-cerise-600 text-center font-bold py-1 rounded-full w-20">
            Clear all
          </Text>
        </Pressable>
      </View>

      {ingredientItems(notPurchasedItems)}

      <View className="bg-gray-200 dark:bg-gray-900 pt-2 flex-row justify-between px-4 rounded-2xl">
        <View className=" flex items-center justify-between ">
          <Text className="font-bold text-lg dark:text-white-50 ">
            Purchased Items
          </Text>
        </View>
        <Pressable onPress={handleClearPurchasedList} className="pb-2">
          <Text className="bg-cerise-400 dark:bg-cerise-600 text-center font-bold py-1 rounded-full w-20">
            clear
          </Text>
        </Pressable>
      </View>
      {ingredientItems(purchasedItems)}
    </ScrollView>
  );
};

export default ShoppingList;
