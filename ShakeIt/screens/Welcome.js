import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import LargeButton from "../components/Basic/LargeButton";
import ButtonsFooter from "../components/ButtonsFooter";

const Welcome = ({ navigation }) => {
  return (
    <View className="bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <ScrollView>
        <View className="flex-1 mb-4">
          <Image
            source={require("../assets/ShakeIt.png")}
            className=" w-auto h-38  mx-auto "
            resizeMode={
              "contain" /* 'cover' zooms into to fill, 'contain' shows whole image */
            }
          />

          <Text className=" text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300 ">
            Welcome
          </Text>

          <Text className="text-xl mx-7 dark:text-cerise-200 ">
            If you're looking for some cocktail ideas you're in the right place,
            so 🍸 sip back and relax!
          </Text>

          <LargeButton onPress={() => navigation.navigate("Explore")}>
            Explore
          </LargeButton>
        </View>
      </ScrollView>
      <View>
        <ButtonsFooter />
      </View>
    </View>
  );
};
export default Welcome;
