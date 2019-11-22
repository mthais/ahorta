import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonHamburger(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="currency-eth" style={styles.caption}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(11,11,11,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "arial-regular"
  }
});

export default MaterialButtonHamburger;
