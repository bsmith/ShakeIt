import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";


const ShoppingList = () => {
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
      <View>
        <Text>Shopping List</Text>
      </View>
    );
  };

export default ShoppingList;