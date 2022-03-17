import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../styles/global";
import { Header, SubHeader } from "../../components/Header";
import SympleSupportedBeams from "../../components/SymplySupportedBeams";
import CantileverBeams from "../../components/CantileverBeams";
import { Picker } from "@react-native-picker/picker";
import BeamsWithOverhang from "../../components/BeamswithOverhang";
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
  console.log(typeof selectedBeamsType);

  return (
    <View style={globalStyles.container}>
      <Header text="Beam Design Formulas" />
      <View style={globalStyles.calculatorContent}>
        <CalculatorInput text="Comprimento da Viga, L" />
        <CalculatorInput text="Carga da Viga, W" />
        <CalculatorInput text="Ponto de interesse, x" />
        <CalculatorInput text="Young Modulus, E" />
        <CalculatorInput text="Momento de Inercia, I" />

        <TouchableOpacity
          onPress={() => console.log("aaa")}
          accessibilityLabel="Learn more about this purple button"
        >
          <View style={globalStyles.calculatorButton}>
            <Text style={globalStyles.calculatorButtonText}>Calcular</Text>
          </View>
        </TouchableOpacity>
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
      <KeyboardAvoidingView style={globalStyles.content} behavior="height">
        <ScrollView horizontal>
          <View>{ScreenDisplay()}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;
