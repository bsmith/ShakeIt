import SearchBar from "./SearchBar";
import { View, Text, StyleSheet } from "react-native";
import ButtonsFooter from "./ButtonsFooter";
import { UserIcon } from "react-native-heroicons/outline";

const MainContainer = props => {
  return (
    <View className="flex-col space-y-10">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <View className="flex-1">
          <Text className="font-bold text-xl">Header placeholder</Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-1 h-30">
        <SearchBar />
      </View>
      <View className="flex-4 h-80">
        <Text className="flex-1 mx-4">{props.children}</Text>
      </View>
      <View className="flex-1">
        <ButtonsFooter />
      </View>
    </View>
  );
};

export default MainContainer;