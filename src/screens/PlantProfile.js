import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import BntBack from "../components/BntBack";
import CardFertilizer from "../components/CardFertilizer";
import CardHumidity from "../components/CardHumidity";
import CardLight from "../components/CardLight";
import CardTemp from "../components/CardTemp";

function PlantProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonHamburgerRow}>
        <BntBack style={styles.materialButtonHamburger}></BntBack>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66882.png")}
          resizeMode="contain"
          style={styles.logo}>
        </Image>
      </View>
      <Text style={styles.TexInputNamePlant}>Basil</Text>
      <Text style={styles.TexInputNameWeeks}>22 Weeks</Text>
      <View style={styles.plant01StackStackRow}>
        <View style={styles.plant01StackStack}>
          <View style={styles.plant01Stack}>
            <Image
              source={require("../assets/images/plant01.fw.png")}
              resizeMode="contain"
              style={styles.plant01}>
            </Image>
            <ImageBackground
              source={require("../assets/images/fertilizer2.png")}
              resizeMode="contain"
              style={styles.image}
              imageStyle={styles.image_imageStyle}>
            </ImageBackground>
          </View>
          <CardTemp style={styles.materialCardWithoutImageTemp}></CardTemp>
          <CardLight style={styles.materialCardWithoutImageLight}></CardLight>
          <CardHumidity style={styles.materialCardWithoutImageHumidity}></CardHumidity>
          <CardFertilizer style={styles.materialCardWithoutImageFertilizer}></CardFertilizer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  materialButtonHamburger: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginTop: 12
  },
  logo: {
    width: 91,
    height: 45,
    marginLeft: 83
  },
  materialButtonHamburgerRow: {
    height: 48,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 16,
    marginRight: 134
  },
  TexInputNamePlant: {
    color: "#121212",
    fontSize: 30,
    fontFamily: "arial-regular",
    marginTop: 33,
    marginLeft: 17
  },
  TexInputNameWeeks: {
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    marginTop: 13,
    marginLeft: 17
  },
  plant01: {
    top: 0,
    left: 233,
    width: 244,
    height: 385,
    position: "absolute"
  },
  image: {
    top: 184,
    left: 0,
    width: 671,
    height: 455,
    position: "absolute"
  },
  image_imageStyle: {},
  materialCardWithoutImageTemp:{
     marginLeft:140,
     marginTop:15,
     width: 83,
     height: 85,
     backgroundColor: "rgba(254,239,239,1)",
     elevation: 6,
     borderRadius: 20,
     borderColor: "#feefef",
     borderWidth: 0,
     shadowOffset: {
       height: 5,
       width: 5
     },
     shadowColor: "rgba(0,0,0,1)",
     shadowOpacity: 0.06,
     shadowRadius: 2,
     overflow: "visible"
  },
  materialCardWithoutImageLight:{
    marginLeft:140,
    marginTop:15,
    width: 84,
    height: 85,
    backgroundColor: "rgba(254,251,199,1)",
    elevation: 6,
    borderRadius: 20,
    borderColor: "rgba(254,251,199,1)",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.06,
    shadowRadius: 2
  },
  materialCardWithoutImageHumidity:{
    marginLeft:140,
    marginTop:15,
    width: 83,
    height: 85,
    backgroundColor: "rgba(224,238,249,1)",
    elevation: 6,
    borderRadius: 20,
    borderColor: "rgba(224,238,249,1)",
    borderWidth: 0,
    shadowOffset: {
    height: 5,
    width: 5
        },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.06,
    shadowRadius: 2
  },
  materialCardWithoutImageFertilizer:{
    marginLeft:140,
    marginTop:15,
    width: 83,
    height: 85,
    backgroundColor: "rgba(227,216,212,1)",
    elevation: 6,
    borderRadius: 20,
    borderColor: "rgba(227,216,212,1)",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.06,
    shadowRadius: 2
  },
  plant01Stack: {
    top: 21,
    left: 0,
    width: 671,
    height: 639,
    position: "absolute"
  },
  plant01StackStack: {
    width: 671,
    height: 660
  },
  mangericao2: {
    color: "#121212",
    fontSize: 35,
    marginLeft: 31,
    marginTop: 30
  },
  plant01StackStackRow: {
    height: 660,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: -121,
    marginRight: -222
  }
});

export default PlantProfile;
