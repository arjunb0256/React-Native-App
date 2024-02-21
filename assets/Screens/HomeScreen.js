import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/HomeBackground.png")}
        style={{ flex: 1, width: "100%" }}
      >
        <Text style={styles.Text}>Placeholder</Text>

        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
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
  Text: {
    color: "#fff",
    fontSize: 50,
    marginTop: 150,
    marginLeft: 65,
  },
  login: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    height: 60,
    justifyContent: "center",
    marginTop: 400,
    borderRadius: 10,
    marginLeft: 40,
  },
  loginText: {
    fontSize: 20,
  },
  register: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    height: 60,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 40,
  },
  registerText: {
    fontSize: 20,
  },
});

export default HomeScreen;
