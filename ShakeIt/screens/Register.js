import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTile: "Back to Login",
    });
  }, [navigation]);

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  const register = () => {
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        sendEmailVerification(auth.currentUser);
        navigation.navigate("Welcome");
        console.log("Account created!");
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch(error => {
        console.log(error);
        const errorCode = error.code;
        setValidationMessage(error.message);
        // ..
      });
  };
  return (
    <View className="bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <ScrollView>
        <Text className=" mt-6 mb-3 mx-2 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900   dark:text-gray-200 ">
          Create a ShakeIt account
        </Text>

        <View className="space-y-5">
          <View className="flex-row flex-1  bg-gray-200 p-3 rounded mx-8">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View className="flex-row flex-1  bg-gray-200 p-3 rounded mx-8">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="flex-row flex-1   bg-gray-200 p-3 rounded mx-8">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Password"
              // type="password"
              secureTextEntry
              value={password}
              onChangeText={value =>
                validateAndSet(value, confirmPassword, setPassword)
              }
            />
          </View>
          <View className="flex-row flex-1   bg-gray-200 p-3 rounded mx-8">
            <TextInput
              className="grow text-lg text-center"
              placeholder="ConfirmPassword"
              // type="password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={value =>
                validateAndSet(value, password, setConfirmPassword)
              }
            />
          </View>
        </View>
        <Pressable
          className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
          onPress={register}
          raised
        >
          <Text className="text-center text-white font-bold py-2 rounded text-lg">
            Register
          </Text>
        </Pressable>

        <Text className="text-cerise-700">{validationMessage}</Text>
      </ScrollView>
    </View>
  );
};

export default Register;
