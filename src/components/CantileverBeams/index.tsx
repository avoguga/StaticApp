import React from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles/global";
import { Button } from "../Button";
const CantileverBeams = ({}) => {
  return (
    <View style={globalStyles.buttonList}>
      <Button text="Cantilever Beam with UIL" />
      <Button text="Cantilever Beam with UDL" />
      <Button text="Cantilever Beam with UDL and EM" />
      <Button text="Cantilever Beam with PL at Free End" />
    </View>
  );
};

export default CantileverBeams;
