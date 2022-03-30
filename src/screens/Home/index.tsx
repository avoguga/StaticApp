import React, { useState } from "react";
import {
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { globalStyles } from "../../styles/global";
import SympleSupportedBeams from "../../components/SymplySupportedBeams";
import CantileverBeams from "../../components/CantileverBeams";
import { Picker } from "@react-native-picker/picker";
import BeamsWithOverhang from "../../components/BeamswithOverhang";

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

  const windowHeight = useWindowDimensions().height;
  const img: any = "../../../assets/aaa.png";
  return (
    <View style={[{ minHeight: Math.round(windowHeight) }]}>
      <View style={globalStyles.container}>
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
                key={beams}
              />
            );
          })}
        </Picker>

        <ScrollView>
          <View>{ScreenDisplay()}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
