import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Avatar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 48.51 47.24" style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(230, 230, 230,1)"
            stroke="rgba(230, 230, 230,1)"
            cx={24}
            cy={24}
            rx={24}
            ry={23}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/avatar.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    top: 0,
    left: 1,
    width: 49,
    height: 47,
    position: "absolute"
  },
  image: {
    top: 2,
    left: 0,
    width: 49,
    height: 44,
    position: "absolute",
    borderRadius: 40
  },
  ellipseStack: {
    width: 50,
    height: 47,
    marginLeft: -1
  }
});

export default Avatar;
