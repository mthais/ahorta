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
      <View style={styles.materialButtonHamburger1Row}>
        <BntBack style={styles.materialButtonHamburger1}></BntBack>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66886.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.materialMessageTextbox1Stack}>
        <InputName style={styles.materialMessageTextbox1}></InputName>
        <InputEmail style={styles.materialMessageTextbox2}></InputEmail>
        <InputPassword style={styles.materialMessageTextbox3}></InputPassword>
      </View>
      <ButtonSignup style={styles.materialButtonDark1}></ButtonSignup>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Do you have an account?</Text>
        <Text style={styles.login}>LOGIN</Text>
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
    marginTop: 25
  },
  image: {
    width: 132,
    height: 122,
    marginLeft: 62
  },
  materialButtonHamburger1Row: {
    height: 122,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 16,
    marginRight: 114
  },
  materialMessageTextbox1: {
    top: 0,
    left: 2,
    width: 237,
    height: 90,
    position: "absolute"
  },
  materialMessageTextbox2: {
    top: 76,
    left: 0,
    width: 237,
    height: 90,
    position: "absolute"
  },
  materialMessageTextbox3: {
    top: 153,
    left: 0,
    width: 237,
    height: 90,
    position: "absolute"
  },
  materialMessageTextbox1Stack: {
    width: 239,
    height: 243,
    marginTop: 71,
    marginLeft: 32
  },
  materialButtonDark1: {
    width: 212,
    height: 48,
    borderRadius: 20,
    marginTop: 43,
    alignSelf: "center"
  },
  loremIpsum: {
    color: "rgba(58,58,59,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16
  },
  login: {
    color: "rgba(35,55,160,1)",
    fontSize: 16,
    fontFamily: "arial-regular",
    lineHeight: 16
  },
  loremIpsumRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 54,
    marginRight: 76
  }
});

export default Signup;
