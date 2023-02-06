import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    // <SafeAreaView>
    <View className="flex-1 items-center justify-center bg-red-600">
      <Text>Open up App.js to start working on your app!skdfskj</Text>
      <StatusBar style="auto" />
    </View>
    // </SafeAreaView>
  );
}
