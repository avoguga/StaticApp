import React from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles/global";
import { Button } from "../Button";
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
    <View></View>
  );
}



export default BeamsWithOverhang;
