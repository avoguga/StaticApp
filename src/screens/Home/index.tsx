import React, { useState, useRef } from "react";
import { View, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import { Header, SubHeader } from "../../components/Header";
import SympleSupportedBeams from "../../components/SymplySupportedBeams";
import { Picker } from "@react-native-picker/picker";

const Home = ({}) => {
  const [beamsType, setBeamsType] = useState([
    "Vigas Biapoiadas",
    "Vigas Engasgadas em Balanço",
    "Vigas Biapoiadas com balanço",
  ]);

  const [selectedBeamsType, setSelectedBeamsType] = useState([]);

  const ScreenDisplay = () => {
    return <SympleSupportedBeams />;
  };

  return (
    <View style={globalStyles.container}>
      <Header text="Beam Design Formulas" />
      <Picker
        style={globalStyles.picker}
        selectedValue={selectedBeamsType}
        onValueChange={(itemValue, itemIndex) => setSelectedBeamsType(itemValue)}
      >
        {beamsType.map((beams) => {
          return <Picker.Item style={globalStyles.pickerItem} label={beams} value={beams} />;
        })}
      </Picker>
      <ScrollView style={globalStyles.content}>
        <View>{ScreenDisplay()}</View>
      </ScrollView>
    </View>
  );
};

export default Home;
