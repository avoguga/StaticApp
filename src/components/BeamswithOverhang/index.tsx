import React from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles/global";
import { Button } from "../BeamButton";
import CalculatorInput from "../CalculatorInput";
const BeamsWithOverhang = ({}) => {
  return (
    <View style={globalStyles.buttonList}>
      <Button text="Overhanging Beam with UDL" />
      <Button text="Overhanging Beam with UDL" />
      <Button text="Overhanging Beam with PL on End" />
      <Button text="Overhanging Beam with Part UDL" />
      <Button text="Overhanging Beam PL at Any Point" />
      <Button text="Two Overhang Beam with UDL" />
    </View>
  );
};

export const SimpleBeamWithPlsEquallySpaced = ({}) => {
  return(
    <View>
      <CalculatorInput text="Comprimento da Viga, L" />
        <CalculatorInput text="Carga da Viga, W" />
        <CalculatorInput text="Ponto de interesse, x" />
        <CalculatorInput text="Young Modulus, E" />
        <CalculatorInput text="Momento de Inercia, I" />

    </View>
  );
}



export default BeamsWithOverhang;
