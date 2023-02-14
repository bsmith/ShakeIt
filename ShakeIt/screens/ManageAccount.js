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
  updateProfile,
} from "firebase/auth";
import { Text, TextInput, View, Button, Pressable } from "react-native";
import LargeButton from "../components/Basic/LargeButton";

export default function ManageAccount({ navigation }) {
  let [newPassword, setNewPassword] = useState("");
  let [currentPassword, setCurrentPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  const [newName, setNewName] = useState(auth.currentUser.displayName);
  // const user = userCredential.user;
  const displayName = auth.currentUser.displayName;
  const displayEmail = auth.currentUser.email;
  let logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Welcome");
    });
  };

  let updateUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: newName,
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
      <Text>{displayEmail}</Text>
      <Text>{displayName}</Text>
      <TextInput placeholder="Name" value={newName} onChangeText={setNewName} />
      <LargeButton onPress={updateUserName}>Update Name</LargeButton>

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
      <LargeButton onPress={updateUserPassword}>Update Password</LargeButton>

      <LargeButton onPress={deleteUserAndToDos}>Delete User</LargeButton>
      <LargeButton onPress={logout}>Logout</LargeButton>
      <LargeButton onPress={() => navigation.navigate("Welcome")}>
        Back to main page
      </LargeButton>
    </View>
  );
}
