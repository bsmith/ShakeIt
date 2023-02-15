import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async value => {
  try {
    await AsyncStorage.setItem("@ShoppingList", JSON.stringify(value));
  } catch (e) {
    console.log(e);
    // saving error
  }
  console.log("Stored", value);
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@ShoppingList");
    console.log("Returned", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    // error reading value
  }
};

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("@ShoppingList");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

export const addIngredient = async ingredient => {
  const data = await getData();
  if (data == null) {
    return storeData([ingredient]);
  }
  let foundIngredient = false;
  data.forEach(element => {
    if (ingredient.name === element.name) {
      element.quantity += ingredient.quantity;
      foundIngredient = true;
    }
  });
  if (!foundIngredient) {
    data.push(ingredient);
  }
  return storeData(data);
};
