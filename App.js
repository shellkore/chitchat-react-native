//@refresh reset
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  TextInput,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxSaOE7RrI8LP2WLDlNm5ulFqjpZOwzv8",
  authDomain: "chitchat-react-native.firebaseapp.com",
  databaseURL: "https://chitchat-react-native.firebaseio.com",
  projectId: "chitchat-react-native",
  storageBucket: "chitchat-react-native.appspot.com",
  messagingSenderId: "82021011233",
  appId: "1:82021011233:web:92665f58dfbd0af71d3860",
  measurementId: "G-E1JVM8QWZZ",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

LogBox.ignoreLogs(["Setting a timer for long period of time"]);

export default function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState(" ");
  useEffect(() => {
    readUser();
  }, []);

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }
  async function handlePress() {
    const _id = Math.random().toString(36).substring(7);
    const user = { _id, name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }
  if (!user) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Button onPress={handlePress} title="Enter the chat" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>We have a user</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    padding: 15,
    borderColor: "gray",
  },
});
