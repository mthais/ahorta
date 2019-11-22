import React, { useState } from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import LoginSignup from "./src/screens/LoginSignup";
import PlantDash from "./src/screens/PlantDash";
import PlantProfile from "./src/screens/PlantProfile";
import Signup from "./src/screens/Signup";

const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  LoginSignup: {
    screen: LoginSignup
  },
  PlantDash: {
    screen: PlantDash
  },
  PlantProfile: {
    screen: PlantProfile
  },
  Signup: {
    screen: Signup
  }
});

const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    },
    LoginSignup: {
      screen: LoginSignup
    },
    PlantDash: {
      screen: PlantDash
    },
    PlantProfile: {
      screen: PlantProfile
    },
    Signup: {
      screen: Signup
    }
  },
  {
    headerMode: "none"
  }
);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <StackNavigation /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "arial-regular": require("./src/assets/fonts/arial-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
