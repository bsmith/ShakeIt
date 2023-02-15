import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signOut,
  updatePassword,
  signInWithEmailAndPassword,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import {
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import LargeButton from "../components/Basic/LargeButton";

export default function ManageAccount({ navigation }) {
  let [newPassword, setNewPassword] = useState("");
  let [currentPassword, setCurrentPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  const [newName, setNewName] = useState(auth.currentUser.displayName);
  const displayName = auth.currentUser.displayName;
  const displayEmail = auth.currentUser.email;
  let logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Welcome");
    });
  };

  let updateUserName = () => {
    setErrorMessage("");
    updateProfile(auth.currentUser, {
      displayName: newName,
    }).catch((error) => {
      setErrorMessage(error.message);
    });
  };

  let updateUserPassword = () => {
    signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updatePassword(user, newPassword)
          .then(() => {
            setNewPassword("");
            setErrorMessage("");
            setCurrentPassword("");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  let deleteUserAndToDos = () => {
    if (currentPassword === "") {
      setErrorMessage("Must enter current password to delete account");
    } else {
      signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
        .then((userCredential) => {
          const user = userCredential.user;

          deleteUser(user)
            .then(() => {
              navigation.popToTop();
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };
  return (
    <View className=" bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <ScrollView>
        <View className="items-center">
          <Text>{errorMessage}</Text>
          <Text className="my-4 text-xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white-50 ">
            {displayEmail}
          </Text>
          <Text className="my-4 text-xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white-50 ">
            {displayName}
          </Text>
          <View className="flex-row flex-1 items-center mx-8 bg-gray-200 p-3 rounded ">
            <TextInput
              className="grow text-lg text-center"
              placeholder="Name"
              value={newName}
              onChangeText={setNewName}
            />
          </View>
        </View>
        <LargeButton onPress={updateUserName}>Update Name</LargeButton>

        <View className="flex-row flex-1 items-center mx-8 bg-gray-200 p-3 my-5 rounded  ">
          <TextInput
            className="grow text-lg text-center"
            placeholder="Current Password"
            value={currentPassword}
            secureTextEntry={true}
            onChangeText={setCurrentPassword}
          />
        </View>
        <View className="flex-row flex-1 items-center mx-8 bg-gray-200 p-3 rounded ">
          <TextInput
            className="grow text-lg text-center"
            placeholder="New Password"
            value={newPassword}
            secureTextEntry={true}
            onChangeText={setNewPassword}
          />
        </View>
        <LargeButton onPress={updateUserPassword}>Update Password</LargeButton>

        <LargeButton onPress={deleteUserAndToDos}>Delete User</LargeButton>
        <LargeButton onPress={logout}>Logout</LargeButton>
        <LargeButton onPress={() => navigation.navigate("Welcome")}>
          Back to main page
        </LargeButton>
      </ScrollView>
    </View>
  );
}
