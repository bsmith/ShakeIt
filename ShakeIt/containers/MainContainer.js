import SearchBar from "../components/SearchBar";
import { View, Text, StyleSheet } from "react-native";
import ButtonsFooter from "../components/ButtonsFooter";

const MainContainer = () => {



    return (
        <View className="flex-col space-y-10" >
            {/* <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}><SearchBar /></View> */}
            <View className="flex-1 h-30"><SearchBar /></View>
            <View className="flex-4 h-80">
                <Text className="mx-4">place holder</Text>
            </View>
            <View className="flex-1"><ButtonsFooter /></View>
        </View>
    );
};


export default MainContainer;