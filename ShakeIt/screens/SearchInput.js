import { View, Text } from "react-native";
import React from "react";

import SearchForm from "../components/Search/SearchForm";

const SearchInput = () => {
  return (
    <View className="bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <SearchForm />
    </View>
  );
};

export default SearchInput;
