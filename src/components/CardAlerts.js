import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CardAlerts(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <View style={styles.rect}>
          <Text style={styles.titleStyle}>Basil</Text>
          <Text style={styles.subtitleStyle}>This plant need water (10ml)</Text>
        </View>
      </View>
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
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  rect: {
    width: 178,
    height: 46,
    justifyContent: "flex-end"
  },
  titleStyle: {
    width: 106,
    height: 30,
    color: "#000",
    justifyContent: "center",
    paddingBottom: 12,
    fontSize: 18,
    fontFamily: "arial-regular"
  },
  subtitleStyle: {
    width: 188,
    height: 16,
    color: "#000",
    opacity: 0.5,
    fontSize: 12,
    fontFamily: "arial-regular",
    lineHeight: 16
  }
});

export default CardAlerts;
