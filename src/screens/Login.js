import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import BntBack from "../components/BntBack";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import ButtonLogin from "../components/ButtonLogin";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonBackRow}>
        <BntBack style={styles.ButtonBack}></BntBack>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66887.png")}
          resizeMode="contain"
          style={styles.Logo}>
        </Image>
      </View>
      <InputEmail style={styles.InputEmail}></InputEmail>
      <InputPassword style={styles.InputPassword}></InputPassword>
      <ButtonLogin style={styles.ButtonLogin}></ButtonLogin>
      <View style={styles.LblRow}>
        <Text style={styles.LblnewUser}>New user?</Text>
        <Text style={styles.LblSignup}>SIGNUP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  ButtonBack: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginTop: 17
  },
  Logo: {
    width: 132,
    height: 122,
    marginLeft: 58
  },
  ButtonBackRow: {
    height: 122,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 16,
    marginRight: 118
  },
  InputEmail: {
    width: 247,
    height: 90,
    marginTop: 80,
    marginLeft: 33
  },
  InputPassword: {
    width: 245,
    height: 90,
    marginLeft: 35
  },
  ButtonLogin: {
    width: 212,
    height: 48,
    borderRadius: 20,
    marginTop: 90,
    alignSelf: "center"
  },
  LblnewUser: {
    color: "rgba(18,17,17,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16
  },
  LblSignup: {
    color: "rgba(26,36,203,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16,
    marginLeft: 3,
    marginTop: 2
  },
  LblRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 110,
    marginRight: 112
  }
});

export default Login;
