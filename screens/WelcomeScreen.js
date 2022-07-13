import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { FIREBASE_URL } from "../config";
import axios from "axios";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchMessage, setFetchMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios.get(`${FIREBASE_URL}/message.json?auth=${token}`).then((res) => {
      setFetchMessage(res.data);
    });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
