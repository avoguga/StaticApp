import React from "react";
import { View, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import { Button } from "../../components/Button";
const SympleSupportedBeams = ({}) => {
  return (
    <View style={globalStyles.buttonList}>
      <Button text="Simple Beam with UDL" />
      <Button text="Simple Beam with UIL" />
      <Button text="Simple Beam with Central UIL" />
      <Button text="Simple Beam with PDUL" />
      <Button text="Simple Beam with PDUL at One End" />
      <Button text="Simple Beam with PL at Centre" />
      <Button text="Simple Beam with PL at Any Point" />
      <Button text="Simple Beam with PLs Equally Spaced" />
      <Button text="Beam with PLs Unequally Spaced" />
      <Button text="Beam with UPLs Unequally Spaced" />
    </View>
  );
};

export default SympleSupportedBeams;
