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
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
          // navigation.navigate("Welcome");
          navigation.navigate("Welcome", { user: userCredential.user });
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
    // <KeyboardAvoidingView
    //   behavior="padding"
    //   // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={-900}
    //   className="flex-1"
    // >
    <View className="bg-beach-200 flex-1">
      <StatusBar style="light" />
      <ScrollView>
        <View className="flex-column justify-start px-3">
          <Text className=" mt-6 mb-3 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900  md:text-5xl lg:text-6xl dark:text-cerise-300 ">
            Login
          </Text>

          <Text className="my-4 text-xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300 ">
            Username
          </Text>
          {/* Input box for search */}
          <View className="flex-row items-center space-x-2 p-1">
            <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded">
              {/* was 'Search on ShakeIt' */}
              <TextInput
                className="grow text-lg text-center"
                autofocus
                placeholder="email@gmail.com"
                type="name"
                value={email}
                // keyboard="default"
                onChangeText={setEmail}
                // onChangeText={setSearchTerm}
              />
            </View>
          </View>
          {/* <Text className="my-4 text-xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300 ">
            Username
          </Text>
          <View className="flex-row items-center space-x-2 p-1">
            <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded">
              <TextInput
                className="grow text-lg text-center"
                autofocus
                placeholder="Misha Brain"
                type="name"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View> */}

          <Text className="my-4 text-xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-cerise-300 ">
            Password
          </Text>

          <View className="flex-row items-center space-x-2 p-1">
            <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded">
              {/* was 'Search on ShakeIt' */}
              <TextInput
                className="grow text-lg text-center"
                placeholder="***********"
                secureTextEntry
                type="password"
                value={password}
                // keyboard="default"
                onChangeText={setPassword}
              />
            </View>
          </View>

          <Pressable
            className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
            onPress={signIn}
          >
            <Text className="text-center text-white font-bold py-2 rounded text-lg">
              Login
            </Text>
          </Pressable>

          <Pressable
            className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
            onPress={() => navigation.navigate("Register")}
          >
            <Text className="text-center text-white font-bold py-2 rounded text-lg">
              Register
            </Text>
          </Pressable>
          <Text className="text-cerise-700">{errorMessage}</Text>

          <View>
            {auth.currentUser ? (
              <Pressable
                className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
                onPress={logout}
              >
                <Text className="text-center text-white font-bold py-2 rounded text-lg">
                  LogOut
                </Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LogIn;
