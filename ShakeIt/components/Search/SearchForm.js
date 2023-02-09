import { View, Text, TextInput, Button, Pressable, Keyboard, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";

import SearchService from '../../services/SearchService';
import { getAllCategories } from '../../services/CategoriesService';

// import colors from "tailwindcss/colors";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

/* NB. no caching of data or remote searching */
const performSearchAsync = async (searchTerm) => {
  const categoriesData = await getAllCategories();
  const searchService = new SearchService();
  searchService.setIndexFromCategories(categoriesData);
  const results = searchService.searchByName(searchTerm);
  return results;
}

const SearchForm = ({onSubmit}) => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchStarted, setSearchStarted] = useState(false);

  // console.log(Object.keys(colors))

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

    // setTimeout(() => {
    //   console.log(`Got search results back`)
    //   setSearchStarted(false);
    // }, 5000)

    performSearchAsync(trimmedSearch)
      .then((results) => {
        setSearchStarted(false);
        console.log(`Got results:`, results);

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
      <View className="flex-row justify-end space-x-2 p-3">
        <Pressable
          className="bg-cerise-700 h-12 w-24 flex items-center justify-center"
          onPress={handleSearchPress}
        >
          <Text className="text-white text-lg">Search</Text>
        </Pressable>
        {/* <Button
          color={colors.cerise[500]}
          title="Search"
        /> */}
      </View>

      <ActivityIndicator
        size="large"
        color={colors.beach[300]}
        animating={searchStarted}
        />
    </View>
  );
};

export default SearchForm;
