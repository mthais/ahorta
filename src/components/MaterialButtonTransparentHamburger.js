import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function MaterialButtonTransparentHamburger(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/plantIcon2.png")}
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
    borderRadius: 2
  },
  image: {
    width: 36,
    height: 36
  }
});

export default MaterialButtonTransparentHamburger;
