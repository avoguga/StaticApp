import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Splash } from "../screens/Splash";

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
        name="Splash"
        component={Splash}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
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
        name="Carga Distribuída"
        component={SimpleBeamWithUDL}
      />
      <HomeStack.Screen
        name="Carga Triangular Distribuída"
        component={SimpleBeamWithUIL}
      />
      <HomeStack.Screen
        name="Carga Triangular até o Centro"
        component={SimpleBeamWithCentralUIL}
      />
      <HomeStack.Screen
        name="Carga Distribuída em qualquer Ponto"
        component={SimpleBeamWithPDUL}
      />
      <HomeStack.Screen
        name="Carga Distribuída em uma extremidade"
        component={SimpleBeamWithPDULAtOneEnd}
      />
      <HomeStack.Screen
        name="Carga Concentrada em qualquer Ponto"
        component={SimpleBeamWithPLAtAnyPoint}
      />
      <HomeStack.Screen
        name="Carga Concentrada no Centro"
        component={SimpleBeamWithPLAtCentre}
      />
      <HomeStack.Screen
        name="Cargas Iguais em Pontos Igualmente Espaçados"
        component={SimpleBeamWithPLSEquallySpaced}
      />
      <HomeStack.Screen
        name="Cargas Iguais em Pontos Dinstintos"
        component={BeamWithPLSUnequallySpaced}
      />
      <HomeStack.Screen
        name="Cargas Desiguais em Pontos Dinstintos"
        component={BeamWithUPLSUnequallySpaced}
      />
    </HomeStack.Navigator>
  );
}
