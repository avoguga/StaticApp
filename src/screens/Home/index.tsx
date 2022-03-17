import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { globalStyles } from "../../styles/global";
import { Header } from "../../components/Header";
import SympleSupportedBeams, {
  SimpleBeamWithUDL,
} from "../../components/SymplySupportedBeams";
import CantileverBeams from "../../components/CantileverBeams";
import { Picker } from "@react-native-picker/picker";
import BeamsWithOverhang, {
  SimpleBeamWithPlsEquallySpaced,
} from "../../components/BeamswithOverhang";
import CalculatorInput from "../../components/CalculatorInput";

const Home = ({}) => {
  const [beamsType, setBeamsType] = useState([
    "Vigas Biapoiadas",
    "Vigas Engasgadas em Balanço",
    "Vigas Biapoiadas com balanço",
  ]);

  const [selectedBeamsType, setSelectedBeamsType] = useState(beamsType[0]);

  const ScreenDisplay = () => {
    if (selectedBeamsType === "Vigas Biapoiadas") {
      return <SympleSupportedBeams />;
    } else if (selectedBeamsType === "Vigas Engasgadas em Balanço") {
      return <CantileverBeams />;
    } else if (selectedBeamsType === "Vigas Biapoiadas com balanço") {
      return <BeamsWithOverhang />;
    }
  };

  const Calculate = () => {
    if (selectedBeamsType === "Vigas Biapoiadas") {
      return <SympleSupportedBeams />;
    } else if (selectedBeamsType === "Vigas Engasgadas em Balanço") {
      return <CantileverBeams />;
    } else if (selectedBeamsType === "Vigas Biapoiadas com balanço") {
      return <BeamsWithOverhang />;
    }
  };

  const windowHeight = useWindowDimensions().height;

  return (
    <View style={[{ minHeight: Math.round(windowHeight) }]}>
      <View style={globalStyles.container}>
        <Header text="Beam Design Formulas" />
        <View style={globalStyles.calculatorContent}>
          <SimpleBeamWithUDL />
        </View>
        
        <Picker
          style={globalStyles.picker}
          selectedValue={selectedBeamsType}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedBeamsType(itemValue)
          }
        >
          {beamsType.map((beams) => {
            return (
              <Picker.Item
                style={globalStyles.pickerItem}
                label={beams}
                value={beams}
              />
            );
          })}
        </Picker>
        <View style={globalStyles.content}>
          <ScrollView horizontal>
            <View>{ScreenDisplay()}</View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
