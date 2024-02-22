import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Alert.alert("Credentials", `${username} + ${password}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/HomeBackground.png")}
        style={{ flex: 1, width: "100%" }}
      >
        <Text style={styles.Text}>Login</Text>

        <View style={styles.formcontainer}>
          <Text style={styles.FormText}>Username:</Text>
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
            placeholderTextColor="white"
            style={styles.input}
          />

          <Text style={styles.FormText}>Password:</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.Submit} onPress={handleSubmit}>
            <Text style={styles.SubmitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  formcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    color: "#fff",
  },
  Text: {
    color: "#fff",
    fontSize: 50,
    marginTop: 150,
    marginLeft: 140,
    marginBottom: 100,
  },
  FormText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 90,
  },
  Submit: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 250,
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 85,
    marginBottom: 180,
  },
  SubmitText: {
    fontSize: 20,
  },
  Back: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 200,
    height: 40,
    justifyContent: "center",
    marginTop: 200,
    borderRadius: 10,
    marginLeft: 40,
  },
  BackText: {
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginLeft: 90,
  },
});

export default RegisterScreen;
