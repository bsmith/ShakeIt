import { View, Text, TextInput, Button, Pressable, Keyboard, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, useRef, useEffect } from "react";

import { useAsyncSearch } from "./AsyncSearch.js";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

/* NB. no caching of data or remote searching */
const performSearchAsync = async (asyncSearch, searchTerm) => {
  const searchService = await asyncSearch.getSearchService();
  const results = searchService.searchByName(searchTerm);
  return results;
}

const SearchForm = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchStarted, setSearchStarted] = useState(false);
  const [message, setMessage] = useState("");

  const asyncSearch = useAsyncSearch();

  useEffect(() => {
    console.log(`Triggering index fetch on component mount`);
    asyncSearch.fetchIndex();
  }, []);

  const handleSearchPress = useCallback(() => {
    /* Trim/reformat search terms */
    const trimmedSearch = searchTerm.trim();
    setSearchTerm(trimmedSearch);

    /* Skip if searchTerm is blank */
    if (trimmedSearch.length === 0)
      return;

    Keyboard.dismiss();
    console.log(`Searching search for '${trimmedSearch}'`)
    setSearchStarted(true);
    setMessage('');

    // setTimeout(() => {
    //   console.log(`Got search results back`)
    //   setSearchStarted(false);
    // }, 5000)

    performSearchAsync(asyncSearch, trimmedSearch)
      .then((results) => {
        setSearchStarted(false);
        console.log(`Got results:`, results);

        if (results.length === 0) {
          setMessage('Nothing found');
          return;
        }

        navigation.navigate('SearchResults', { results });
      })
  });

  return (
    <View className="flex-column justify-start px-3">
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
          className="bg-cerise-700 h-12 w-24 flex items-center justify-center"
          onPress={handleSearchPress}
        >
          <Text className="text-white text-lg">Search</Text>
        </Pressable>
      </View>

      {/* <View className="flex-column justify-start">
        <Text>Search by</Text>
        <Text>Name</Text>
        <Text>Ingredient</Text>
      </View> */}

      { searchStarted &&
        <Text className="text-3xl text-center mb-4">Searching...</Text>
      }

      <ActivityIndicator
        size="large"
        color={colors.beach[300]}
        animating={searchStarted}
        />
    </View>
  );
};

export default SearchForm;
