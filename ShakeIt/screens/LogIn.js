import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LargeButton from "../components/Basic/LargeButton";
import { auth } from "../firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const LogIn = ({ navigation }) => {
  // const navigation = useNavigation();

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(authUser => {
  //     if (authUser) {
  //       navigation.replace("Welcome");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);
  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Welcome");
    });
  };
  const signIn = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          navigation.navigate("Welcome");
          // navigation.navigate("Welcome", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch(error => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  };

  return (
    <View className="bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <ScrollView>
        <View className="flex-column justify-start px-3">
          <Text className=" mt-6 mb-3 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900  md:text-5xl lg:text-6xl dark:text-gray-200 ">
            Login
          </Text>

          <Text className="my-4 text-xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white-50 ">
            Username
          </Text>

          <View className="flex-row flex-1 items-center mx-8 bg-gray-200 p-3 rounded">
            <TextInput
              className="grow text-lg text-center"
              autofocus
              placeholder="email@gmail.com"
              type="name"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text className="my-4 text-xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white-50 ">
            Password
          </Text>

          <View className="flex-row flex-1 items-center mx-8 bg-gray-200 p-3 rounded">
            <TextInput
              className="grow text-lg text-center"
              placeholder="***********"
              secureTextEntry
              type="password"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <LargeButton onPress={signIn}>Login</LargeButton>

          <LargeButton onPress={() => navigation.navigate("Register")}>
            Register
          </LargeButton>
          <Text className="text-cerise-700">{errorMessage}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LogIn;
