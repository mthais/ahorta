import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import BntBack from "../components/BntBack";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import ButtonLogin from "../components/ButtonLogin";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonHamburger1Row}>
        <BntBack style={styles.materialButtonHamburger1}></BntBack>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66887.png")}
          resizeMode="contain"
          style={styles.image}>
        </Image>
      </View>
      <InputEmail style={styles.materialMessageTextbox2}></InputEmail>
      <InputPassword style={styles.materialMessageTextbox3}></InputPassword>
      <ButtonLogin style={styles.materialButtonDark1}></ButtonLogin>
      <View style={styles.newUserRow}>
        <Text style={styles.newUser}>New user?</Text>
        <Text style={styles.lblSignup}>SIGNUP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  materialButtonHamburger1: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginTop: 17
  },
  image: {
    width: 132,
    height: 122,
    marginLeft: 58
  },
  materialButtonHamburger1Row: {
    height: 122,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 16,
    marginRight: 118
  },
  materialMessageTextbox2: {
    width: 247,
    height: 90,
    marginTop: 80,
    marginLeft: 33
  },
  materialMessageTextbox3: {
    width: 245,
    height: 90,
    marginLeft: 35
  },
  materialButtonDark1: {
    width: 212,
    height: 48,
    borderRadius: 20,
    marginTop: 90,
    alignSelf: "center"
  },
  newUser: {
    color: "rgba(18,17,17,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16
  },
  lblSignup: {
    color: "rgba(26,36,203,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16,
    marginLeft: 3,
    marginTop: 2
  },
  newUserRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 110,
    marginRight: 112
  }
});

export default Login;
