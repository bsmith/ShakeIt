import React, { useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import {
  signOut,
  updatePassword,
  signInWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import { Text, TextInput, View, Button, Pressable } from "react-native";

export default function ManageAccount({ navigation }) {
  let [newPassword, setNewPassword] = useState("");
  let [currentPassword, setCurrentPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Welcome");
    });
  };

  let updateUserPassword = () => {
    signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
      .then(userCredential => {
        const user = userCredential.user;
        updatePassword(user, newPassword)
          .then(() => {
            setNewPassword("");
            setErrorMessage("");
            setCurrentPassword("");
          })
          .catch(error => {
            setErrorMessage(error.message);
          });
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  let deleteUserAndToDos = () => {
    if (currentPassword === "") {
      setErrorMessage("Must enter current password to delete account");
    } else {
      signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
        .then(userCredential => {
          const user = userCredential.user;

          // Get all todos for user and delete
          let batch = writeBatch(db);
          const q = query(
            collection(db, "todos"),
            where("userId", "==", user.uid)
          );
          getDocs(q).then(querySnapshot => {
            querySnapshot.forEach(doc => {
              batch.delete(doc.ref);
            });
            batch.commit();

            deleteUser(user)
              .then(() => {
                navigation.popToTop();
              })
              .catch(error => {
                setErrorMessage(error.message);
              });
          });
        })
        .catch(error => {
          setErrorMessage(error.message);
        });
    }
  };
  return (
    <View>
      <Text>{errorMessage}</Text>
      <TextInput
        placeholder="Current Password"
        value={currentPassword}
        secureTextEntry={true}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        placeholder="New Password"
        value={newPassword}
        secureTextEntry={true}
        onChangeText={setNewPassword}
      />
      <Pressable
        className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
        onPress={updateUserPassword}
      >
        <Text className="text-center text-white font-bold py-2 rounded text-lg">
          Update Password
        </Text>
      </Pressable>

      <Pressable
        className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
        onPress={deleteUserAndToDos}
      >
        <Text className="text-center text-white font-bold py-2 rounded text-lg">
          Delete User
        </Text>
      </Pressable>
      <Pressable
        className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
        onPress={logout}
      >
        <Text className="text-center text-white font-bold py-2 rounded text-lg">
          Logout
        </Text>
      </Pressable>
      <Pressable
        className="mx-auto mt-7 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text className="text-center text-white font-bold py-2 rounded text-lg">
          Back to main page
        </Text>
      </Pressable>
    </View>
  );
}
