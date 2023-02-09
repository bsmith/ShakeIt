import { View, Text } from "react-native";
import React from "react";
import CocktailListItem from "./CocktailListItem";

const CocktailList = ({ cocktails }) => {
  const cocktailItems = cocktails.map((cocktail, index) => {
    return (
      <View key={index}>
        <CocktailListItem cocktail={cocktail}></CocktailListItem>
      </View>
    );
  });
  return (
    <>
      <View>{cocktailItems}</View>
    </>
  );
};

export default CocktailList;
