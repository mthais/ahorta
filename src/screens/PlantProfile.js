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
      <View style={styles.ButtonBackRow}>
        <BntBack style={styles.ButtonBack}></BntBack>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66882.png")}
          resizeMode="contain"
          style={styles.Logo}>
        </Image>
      </View>
      <Text style={styles.LblNamePlant}>Basil</Text>
      <Text style={styles.LblNameWeeks}>22 Weeks</Text>
      <View style={styles.plant01StackStackRow}>
        <View style={styles.plant01StackStack}>
          <View style={styles.plant01Stack}>
            <Image
              source={require("../assets/images/plant01.fw.png")}
              resizeMode="contain"
              style={styles.ImagePlant}>
            </Image>
          </View>
          <CardTemp style={styles.CardTemp}></CardTemp>
          <CardLight style={styles.CardLight}></CardLight>
          <CardHumidity style={styles.CardHumidity}></CardHumidity>
          <CardFertilizer style={styles.CardFertilizer}></CardFertilizer>
          <Text style={styles.LblInformations}>Informations</Text>
          <Text style={styles.LblDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
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
  ButtonBack: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginTop: 12
  },
  Logo: {
    width: 91,
    height: 45,
    marginLeft: 83
  },
  ButtonBackRow: {
    height: 48,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 16,
    marginRight: 134
  },
  LblNamePlant: {
    color: "#121212",
    fontSize: 30,
    fontFamily: "arial-regular",
    marginTop: 33,
    marginLeft: 17
  },
  LblNameWeeks: {
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    marginTop: 13,
    marginLeft: 17
  },
  ImagePlant: {
    top: 0,
    left: 233,
    width: 244,
    height: 385,
    position: "absolute"
  },
  CardTemp:{
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
  CardLight:{
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
  CardHumidity:{
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
  CardFertilizer:{
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
  LblInformations:{
    marginLeft:145,
    marginTop:40,
    color: "#121212",
    fontSize: 20,
    fontFamily: "arial-regular",
  },
  LblDescription:{
    marginLeft:145,
    marginTop:15,
    width: 350,
    color: "#121212",
    fontSize: 12,
    fontFamily: "arial-regular",
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
  plant01StackStackRow: {
    height: 660,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: -121,
    marginRight: -222
  }
});

export default PlantProfile;
