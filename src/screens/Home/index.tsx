import React, { useState, useRef } from "react";
import { View, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import { Header, SubHeader } from "../../components/Header";
import SympleSupportedBeams from "../../components/SymplySupportedBeams";

const Home = ({}) => {
  const [beamsType, setBeamsType] = useState("aaaaaaa");

  const ScreenDisplay = () => {
    if (beamsType === "Symple Supported Beams") {
    }
    return <SympleSupportedBeams />;
  };

  return (
    <View style={globalStyles.container}>
      <Header text="Beam Design Formulas" />
      
      <ScrollView style={globalStyles.content}>
        <View>{ScreenDisplay()}</View>
      </ScrollView>
    </View>
  );
};

export default Home;
