import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import {
  SimpleBeamWithUDL,
  SimpleBeamWithUIL,
  SimpleBeamWithCentralUIL,
  SimpleBeamWithPDUL,
  SimpleBeamWithPDULAtOneEnd,
  SimpleBeamWithPLAtAnyPoint,
  SimpleBeamWithPLAtCentre,
  SimpleBeamWithPLSEquallySpaced,
  BeamWithPLSUnequallySpaced,
  BeamWithUPLSUnequallySpaced,
} from "../components/SymplySupportedBeams";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Beam Design Formulas"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#303030",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <HomeStack.Screen
        name="SimpleBeamWithUDL"
        component={SimpleBeamWithUDL}
      />
      <HomeStack.Screen
        name="SimpleBeamWithUIL"
        component={SimpleBeamWithUIL}
      />
      <HomeStack.Screen
        name="SimpleBeamWithCentralUIL"
        component={SimpleBeamWithCentralUIL}
      />
      <HomeStack.Screen
        name="SimpleBeamWithPDUL"
        component={SimpleBeamWithPDUL}
      />
      <HomeStack.Screen
        name="SimpleBeamWithPDULAtOneEnd"
        component={SimpleBeamWithPDULAtOneEnd}
      />
      <HomeStack.Screen
        name="SimpleBeamWithPLAtAnyPoint"
        component={SimpleBeamWithPLAtAnyPoint}
      />
      <HomeStack.Screen
        name="SimpleBeamWithPLAtCentre"
        component={SimpleBeamWithPLAtCentre}
      />
      <HomeStack.Screen
        name="SimpleBeamWithPLSEquallySpaced"
        component={SimpleBeamWithPLSEquallySpaced}
      />
      <HomeStack.Screen
        name="BeamWithPLSUnequallySpaced"
        component={BeamWithPLSUnequallySpaced}
      />
      <HomeStack.Screen
        name="BeamWithUPLSUnequallySpaced"
        component={BeamWithUPLSUnequallySpaced}
      />
    </HomeStack.Navigator>
  );
}
