import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import BntBack from "../components/BntBack";
import InputName from "../components/InputName";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import ButtonSignup from "../components/ButtonSignup";

function Signup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonBackRow}>
        <BntBack style={styles.ButtonBack}></BntBack>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66886.png")}
          resizeMode="contain"
          style={styles.Logo}>
        </Image>
      </View>
      <View style={styles.InputView}>
        <InputName style={styles.InputName}></InputName>
        <InputEmail style={styles.InputEmail}></InputEmail>
        <InputPassword style={styles.InputPassword}></InputPassword>
      </View>
      <ButtonSignup style={styles.ButtonSignup}></ButtonSignup>
      <View style={styles.LblRow}>
        <Text style={styles.LblAccount}>Do you have an account?</Text>
        <Text style={styles.LblLogin}>LOGIN</Text>
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
    marginTop: 25
  },
  Logo: {
    width: 132,
    height: 122,
    marginLeft: 62
  },
  ButtonBackRow: {
    height: 122,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 16,
    marginRight: 114
  },
  InputName: {
    top: 0,
    left: 2,
    width: 237,
    height: 90,
    position: "absolute"
  },
  InputEmail: {
    top: 76,
    left: 0,
    width: 237,
    height: 90,
    position: "absolute"
  },
  InputPassword: {
    top: 153,
    left: 0,
    width: 237,
    height: 90,
    position: "absolute"
  },
  InputView: {
    width: 239,
    height: 243,
    marginTop: 71,
    marginLeft: 32
  },
  ButtonSignup: {
    width: 212,
    height: 48,
    borderRadius: 20,
    marginTop: 43,
    alignSelf: "center"
  },
  LblAccount: {
    color: "rgba(58,58,59,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16
  },
  LblLogin: {
    color: "rgba(35,55,160,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16
  },
  LblRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 54,
    marginRight: 76
  }
});

export default Signup;
