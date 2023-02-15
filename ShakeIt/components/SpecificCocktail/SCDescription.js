import { View, Text, ScrollView } from "react-native";
import React from "react";
import { formatTags } from "./formatTags";

const SCDescription = ({recipe}) => {
    return (
        <View className="px-5 py-4 items-center">
            <Text className="text-base mr-2 mb-2 dark:text-cerise-200">{formatTags(recipe)}</Text>
            <Text className="text-base">{recipe.description}</Text>
        </View>
    )
};

export default SCDescription;