import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

function ButtonPlant(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/plantIcon1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.plants}>PLANTS</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderColor: "rgba(251,251,251,1)",
    borderWidth: 0,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  image: {
    top: 0,
    left: 0,
    width: 56,
    height: 51,
    position: "absolute"
  },
  plants: {
    top: 47,
    left: 3,
    color: "rgba(56,211,159,1)",
    position: "absolute",
    fontFamily: "arial-regular"
  },
  imageStack: {
    width: 56,
    height: 61,
    marginTop: 7,
    marginLeft: 9
  }
});

export default ButtonPlant;
