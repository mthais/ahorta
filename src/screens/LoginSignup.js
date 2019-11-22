import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import ButtonCadastrar from "../components/ButtonCadastrar";
import ButtonLogin from "../components/ButtonLogin";

function LoginSignup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          source={require("../assets/images/undraw_environment_iaus.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66884.png")}
          resizeMode="contain"
          style={styles.Logo}
        ></Image>
      </View>
      <ButtonCadastrar style={styles.ButtonSignup}></ButtonCadastrar>
      <ButtonLogin style={styles.ButtonLogin}></ButtonLogin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  image: {
    top: 102,
    left: 0,
    width: 255,
    height: 263,
    position: "absolute"
  },
  Logo: {
    top: 0,
    width: 125,
    height: 106,
    position: "absolute",
    left: 65
  },
  ImageView: {
    width: 255,
    height: 365,
    marginTop: 69,
    marginLeft: 52
  },
  ButtonSignup: {
    width: 212,
    height: 48,
    borderRadius: 20,
    marginTop: 67,
    alignSelf: "center"
  },
  ButtonLogin: {
    width: 212,
    height: 48,
    borderRadius: 20,
    marginTop: 19,
    alignSelf: "center"
  }
});

export default LoginSignup;
