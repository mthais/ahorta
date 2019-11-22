import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/ahorta-logo.c6bd66881.png")}
        resizeMode="contain"
        style={styles.LogoHome}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(56,211,159,1)"
  },
  LogoHome: {
    width: 200,
    height: 200,
    marginTop: 251,
    alignSelf: "center"
  }
});

export default Home;
