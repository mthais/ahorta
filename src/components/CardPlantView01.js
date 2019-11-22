import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function CardPlantView01(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/plant01.fw1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.basil}>Basil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  image: {
    width: 129,
    height: 146,
    marginTop: 47,
    alignSelf: "center"
  },
  basil: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "arial-regular",
    lineHeight: 16,
    textAlign: "right",
    marginTop: 9,
    alignSelf: "center"
  }
});

export default CardPlantView01;
