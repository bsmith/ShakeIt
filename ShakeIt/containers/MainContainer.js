import SearchBar from "../components/SearchBar";
import { View, Text, StyleSheet } from "react-native";
import ButtonsFooter from "../components/ButtonsFooter";
import {UserIcon,} from "react-native-heroicons/outline";

const MainContainer = () => {



    return (
        <View className="flex-col space-y-10" >
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                {/* <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                /> */}

                <View className="flex-1">
                    <Text className="font-bold text-xl">
                        Header placeholder
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>


            <View className="flex-1 h-30"><SearchBar /></View>
            <View className="flex-4 h-80">
                <Text className="mx-4">place holder</Text>
            </View>
            <View className="flex-1"><ButtonsFooter /></View>
        </View>
    );
};


export default MainContainer;