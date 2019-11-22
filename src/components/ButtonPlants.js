import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

function ButtonPlants(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>PLANTS</Text>
      <Image
        source={require("../assets/images/plantIcon.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  caption: {
    color: "rgba(56,211,159,1)",
    fontSize: 14,
    fontFamily: "arial-regular",
    textAlign: "right"
  },
  image: {
    top: 1,
    left: -21,
    width: 68,
    height: 32,
    position: "absolute"
  }
});

export default ButtonPlants;
