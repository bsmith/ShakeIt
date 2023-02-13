import { View, Text, ScrollView } from "react-native";
import React from "react";

const SCDescription = ({recipe}) => {
    return (
        <View className="px-5 py-4 items-center">
            <Text className="text-base">{recipe.description}</Text>
        </View>
    )
};

export default SCDescription;