import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonHamburger from "../components/MaterialButtonHamburger";
import Avatar from "../components/Avatar";
import CardAlerts from "../components/CardAlerts";
import CardPlantView01 from "../components/CardPlantView01";
import ButtonAdd from "../components/ButtonAdd";

function PlantDash(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonHamburgerRow}>
        <MaterialButtonHamburger
          style={styles.materialButtonHamburger}></MaterialButtonHamburger>
        <Image
          source={require("../assets/images/ahorta-logo.c6bd66883.png")}
          resizeMode="contain"
          style={styles.image}></Image>
        <Avatar style={styles.avatar}></Avatar>
      </View>
      <Text style={styles.mangericao}>My Plants</Text>
      <Text style={styles.text}>Alerts</Text>
      <CardAlerts style={styles.materialCardWithoutImage1}></CardAlerts>
      <View style={styles.materialCardWithoutImageRow}>
        <CardPlantView01 style={styles.materialCardWithoutImage}></CardPlantView01>
        <CardPlantView01 style={styles.materialCardWithoutImage2}></CardPlantView01>
      </View>
      <ButtonAdd style={styles.materialButtonShare}></ButtonAdd>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    borderColor: "rgba(98,98,98,1)",
    borderWidth: 0
  },
  materialButtonHamburger: {
    width: 36,
    height: 36,
    backgroundColor: "rgba(4,4,4,1)",
    borderRadius: 10,
    marginTop: 22
  },
  image: {
    width: 91,
    height: 45,
    marginLeft: 83
  },
  avatar: {
    width: 49,
    height: 47,
    borderRadius: 17,
    marginLeft: 70,
    marginTop: 16
  },
  materialButtonHamburgerRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 16,
    marginRight: 15
  },
  mangericao: {
    color: "#121212",
    fontSize: 30,
    fontFamily: "arial-regular",
    marginTop: 36,
    marginLeft: 16
  },
  text: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "arial-regular",
    marginTop: 50,
    marginLeft: 16
  },
  materialCardWithoutImage1: {
    width: 329,
    height: 86,
    backgroundColor: "rgba(251,241,241,1)",
    elevation: 6,
    borderRadius: 20,
    borderColor: "#fbf1f1",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.06,
    shadowRadius: 2,
    marginTop: 10,
    marginLeft: 15
  },
  materialCardWithoutImage: {
    width: 177,
    height: 238,
    elevation: 6,
    borderRadius: 20,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.06,
    shadowRadius: 2
  },
  materialCardWithoutImage2: {
    width: 177,
    height: 238,
    elevation: 6,
    borderRadius: 20,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.06,
    shadowRadius: 2,
    marginLeft: 16
  },
  materialCardWithoutImageRow: {
    height: 238,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 15,
    marginRight: -25
  },
  materialButtonShare: {
    width: 56,
    height: 56,
    marginTop: 22,
    marginLeft: 164
  }
});

export default PlantDash;
