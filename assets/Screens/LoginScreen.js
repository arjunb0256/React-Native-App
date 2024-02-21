import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/HomeBackground.png")}
        style={{ flex: 1, width: "100%" }}
      >
        <Text style={styles.Text}>Login</Text>

        <TouchableOpacity
          style={styles.Back}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.BackText}>Back</Text>
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
    marginLeft: 130,
  },
  Back: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    height: 60,
    justifyContent: "center",
    marginTop: 500,
    borderRadius: 10,
    marginLeft: 40,
  },
  BackText: {
    fontSize: 20,
  },
});

export default LoginScreen;
