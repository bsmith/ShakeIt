import {
  View,
  Text,
  Input,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
// import { createUserWithEmailAndPassword } from "firebase/auth";
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
  const [imageUrl, setImageUrl] = useState("");
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
        // navigation.navigate("Welcome", {user: userCredential.user})
        console.log("Account created!");
        // const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          //   photoURL:
          //     imageUrl ||
          //     "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
        });
        // Signed in
        // ...
      })
      .catch(error => {
        console.log(error);
        const errorCode = error.code;
        setValidationMessage(error.message);
        // ..
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={150}
      className="flex-column justify-center px-3 bg-beach-200 flex-1"
    >
      <Text className=" mt-6 mb-3 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900  md:text-5xl lg:text-6xl dark:text-cerise-300 ">
        Create a ShakeIt account
      </Text>

      <View className="space-y-5">
        {/* <View className="flex-row ">
          <View className="flex-row flex-1  bg-gray-200 p-3 rounded">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Full Name"
              autofocus
              type="text"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
        </View> */}
        <View className="flex-row ">
          <View className="flex-row flex-1  bg-gray-200 p-3 rounded">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Name"
              // type="email"
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>
        <View className="flex-row ">
          <View className="flex-row flex-1  bg-gray-200 p-3 rounded">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Email"
              // type="email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View className="flex-row ">
          <View className="flex-row flex-1   bg-gray-200 p-3 rounded">
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
        </View>
        <View className="flex-row ">
          <View className="flex-row flex-1   bg-gray-200 p-3 rounded">
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
        {/* <View className="flex-row ">
          <View className="flex-row flex-1 bg-gray-200 p-3 rounded">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Profile Picture URL (optional)"
              type="text"
              value={imageUrl}
              onChangeText={text => setImageUrl(text)}
              onSubmitEditing={register}
            />
          </View>
        </View> */}
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
    </KeyboardAvoidingView>
  );
};

export default Register;
