import {
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, useRef, useEffect } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { getSearchResults } from "../../services/SearchService.js";
import ButtonsFooter from "../ButtonsFooter.js";

const CheckboxWithLabel = ({ className, value, onValueChange, children }) => {
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
      <Text className="text-lg ml-4 self-center dark:text-white-50">
        {children}
      </Text>
    </Pressable>
  );
};

const SearchForm = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchStarted, setSearchStarted] = useState(false);
  const [message, setMessage] = useState("");

  const [searchByName, setSearchByName] = useState(true);
  const [searchByIngredient, setSearchByIngredient] = useState(true);
  const [searchByTag, setSearchByTag] = useState(true);

  const handleSearchPress = useCallback(() => {
    /* Trim/reformat search terms */
    const trimmedSearch = searchTerm.trim();
    setSearchTerm(trimmedSearch);

    /* Skip if searchTerm is blank */
    if (trimmedSearch.length === 0) return;

    Keyboard.dismiss();
    console.log(`Searching search for '${trimmedSearch}'`);
    setSearchStarted(true);
    setMessage("");

    getSearchResults(trimmedSearch, {
      searchByName,
      searchByIngredient,
      searchByTag,
    })
      .then(results => {
        const { recipes } = results;
        setSearchStarted(false);
        console.log(`Got results:`, recipes);

        if (recipes.length === 0) {
          setMessage("Nothing found");
          return;
        }
        navigation.navigate("SearchResults", { results: recipes });
      })
      .catch(e => {
        console.log("fetch error", e);
      });
  });

  return (
    <View className="flex-1">
      <ScrollView className="flex-column px-3">
        {/* Input box for search */}
        <View className="flex-row items-center space-x-2 p-3">
          <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded">
            <MagnifyingGlassIcon color="gray" size={20} />
            {/* was 'Search on ShakeIt' */}
            <TextInput
              className="grow text-lg"
              placeholder="Type your search here"
              keyboard="default"
              onChangeText={setSearchTerm}
            />
          </View>
        </View>

        {/* 'Search' button */}
        <View className="flex-row justify-between items-center space-x-2 p-3">
          <Text className="text-lg">{message}</Text>

          <Pressable
            className="bg-cerise-400 h-12 w-24 flex items-center justify-center rounded-full active:bg-cerise-600 hover:bg-cerise-600 dark:bg-cerise-600 "
            onPress={handleSearchPress}
          >
            <Text className="font-bold text-lg">Search</Text>
          </Pressable>
        </View>

        <CheckboxWithLabel value={searchByName} onValueChange={setSearchByName}>
          Search by Name
        </CheckboxWithLabel>

        <CheckboxWithLabel
          value={searchByIngredient}
          onValueChange={setSearchByIngredient}
        >
          Search by Ingredient
        </CheckboxWithLabel>

        <CheckboxWithLabel value={searchByTag} onValueChange={setSearchByTag}>
          Search by Tag
        </CheckboxWithLabel>

        {searchStarted && (
          <Text className="text-3xl text-center mb-4">Searching...</Text>
        )}

        <ActivityIndicator
          size="large"
          color={colors.beach[300]}
          animating={searchStarted}
        />
      </ScrollView>
      <View>
        <ButtonsFooter />
      </View>
    </View>
  );
};

export default SearchForm;
