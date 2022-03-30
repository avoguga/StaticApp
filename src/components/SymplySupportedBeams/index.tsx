import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import { Button } from "../BeamButton";
import { CalculateButton } from "../CalculateButton";
import CalculatorInput, { CalculatorInputResult } from "../CalculatorInput";

interface IProps {}

const SympleSupportedBeams: React.FC<IProps> = ({}) => {
  const navigation: any = useNavigation();

  return (
    <View style={globalStyles.buttonList}>
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithUDL")}
        text="Simple Beam with UDL"
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithUIL")}
        text="Simple Beam with UIL"
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithCentralUIL")}
        text="Simple Beam with Central UIL"
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPDUL")}
        text="Simple Beam with PDUL"
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPDULAtOneEnd")}
        text="Simple Beam with PDUL at One End"
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPLAtCentre")}
        text="Simple Beam with PL at Centre"
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPLAtAnyPoint")}
        text="Simple Beam with PL at Any Point"
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPLSEquallySpaced")}
        text="Simple Beam with PLs Equally Spaced"
      />
      <Button
        onPress={() => navigation.navigate("BeamWithPLSUnequallySpaced")}
        text="Beam with PLs Unequally Spaced"
      />
      <Button
        onPress={() => navigation.navigate("BeamWithUPLSUnequallySpaced")}
        text="Beam with UPLs Unequally Spaced"
      />
    </View>
  );
};

export const SimpleBeamWithUDL = ({}) => {
  const [comprimentoViga, setComprimentoViga] = useState(1);
  const [cargaViga, setCargaViga] = useState(1);
  const [pontoInteresse, setPontoInteresse] = useState(0.5);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const forca = (cargaViga * comprimentoViga) / 2;

  const tensaoMax = (cargaViga * comprimentoViga) / 2;

  const tensaoX = cargaViga * (comprimentoViga / 2 - pontoInteresse);

  const momentoMax = (cargaViga * (comprimentoViga * comprimentoViga)) / 8;

  const momentoX =
    ((cargaViga * pontoInteresse) / 2) * (comprimentoViga - pontoInteresse);

  const deflexaoMax =
    ((5 * cargaViga * comprimentoViga ** 4) /
      (384 * youngsModulus * momentoInercia)) *
    1000000000;

  const deflexaoX =
    ((cargaViga * pontoInteresse) / (24 * youngsModulus * momentoInercia)) *
    (comprimentoViga ** 3 -
      2 * comprimentoViga * pontoInteresse ** 2 +
      pontoInteresse ** 3) *
    1000000000;

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult text="Força Resultante, R:" value={forca} />
        <CalculatorInputResult text="Max Shear, Vmax:" value={tensaoMax} />
        <CalculatorInputResult text="Shear at x, Vx:" value={tensaoX} />
        <CalculatorInputResult text="Max. Moment, Mmax:" value={momentoMax} />
        <CalculatorInputResult text="Moment at x, Mx:" value={momentoX} />
        <CalculatorInputResult
          text="Max Deflection, ∆max:"
          value={deflexaoMax.toFixed(6)}
        />
        <CalculatorInputResult
          text="Deflection at x, ∆x:"
          value={deflexaoX.toFixed(6)}
        />
        <CalculateButton
          text="Retornar"
          onPress={() => setIsClicked((isClicked) => !isClicked)}
        />
      </View>
    );
  };

  const Calculation = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInput
          text="Comprimento da Viga, L:"
          value={String(comprimentoViga)}
          unit={"m"}
          setValue={setComprimentoViga}
        />
        <CalculatorInput
          text="Carga da Viga, W:"
          value={String(cargaViga)}
          unit={"kN/m"}
          setValue={setCargaViga}
        />
        <CalculatorInput
          text="Ponto de interesse, x:"
          value={String(pontoInteresse)}
          unit={"m"}
          setValue={setPontoInteresse}
        />
        <CalculatorInput
          text="Young Modulus, E:"
          value={String(youngsModulus)}
          unit={"MPa"}
          setValue={setYoungModulus}
        />
        <CalculatorInput
          text="Momento de Inercia, I:"
          value={String(momentoInercia)}
          unit={"mm4"}
          setValue={setMomentoInercia}
        />

        <CalculateButton
          text="Calcular"
          onPress={() => setIsClicked((isClicked) => !isClicked)}
        />
      </View>
    );
  };

  const myReturn = () => {
    if (isClicked === false) {
      return Calculation();
    } else {
      return Result();
    }
  };

  return myReturn();
};

export const SimpleBeamWithUIL = ({}) => {
  const [comprimentoViga, setComprimentoViga] = useState(1);
  const [cargaViga, setCargaViga] = useState(1);
  const [pontoInteresse, setPontoInteresse] = useState(0.5);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const resultante = (cargaViga / 3) * 1000;

  const resultante2 = 2 * (cargaViga / 3) * 1000;

  const tensaoX =
    (cargaViga / 3 - (cargaViga * pontoInteresse ** 2) / comprimentoViga ** 2) *
    1000;

  const momentoMax = (cargaViga * (comprimentoViga * comprimentoViga)) / 8;

  const momentoX =
    ((cargaViga * pontoInteresse) / 2) * (comprimentoViga - pontoInteresse);

  const deflexaoMax =
    ((5 * cargaViga * comprimentoViga ** 4) /
      (384 * youngsModulus * momentoInercia)) *
    1000000000;

  const deflexaoX =
    ((cargaViga * pontoInteresse) / (24 * youngsModulus * momentoInercia)) *
    (comprimentoViga ** 3 -
      2 * comprimentoViga * pontoInteresse ** 2 +
      pontoInteresse ** 3) *
    1000000000;

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult text="Resultante, R1=V1:" value={resultante.toFixed(6)} />
        <CalculatorInputResult text="Resultante, R2=V2(max)" value={resultante2.toFixed(6)} />
        <CalculatorInputResult text="Shear at x, Vx:" value={tensaoX.toFixed(6)} />
        <CalculatorInputResult text="Max. Moment, Mmax:" value={momentoMax} />
        <CalculatorInputResult text="Moment at x, Mx:" value={momentoX} />
        <CalculatorInputResult
          text="Max Deflection, ∆max:"
          value={deflexaoMax.toFixed(6)}
        />
        <CalculatorInputResult
          text="Deflection at x, ∆x:"
          value={deflexaoX.toFixed(6)}
        />
        <CalculateButton
          text="Retornar"
          onPress={() => setIsClicked((isClicked) => !isClicked)}
        />
      </View>
    );
  };
  const Calculation = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInput
          text="Comprimento da Viga, L:"
          value={String(comprimentoViga)}
          unit={"m"}
          setValue={setComprimentoViga}
        />
        <CalculatorInput
          text="Carga da Viga, W:"
          value={String(cargaViga)}
          unit={"kN/m"}
          setValue={setCargaViga}
        />
        <CalculatorInput
          text="Ponto de interesse, x:"
          value={String(pontoInteresse)}
          unit={"m"}
          setValue={setPontoInteresse}
        />
        <CalculatorInput
          text="Young Modulus, E:"
          value={String(youngsModulus)}
          unit={"MPa"}
          setValue={setYoungModulus}
        />
        <CalculatorInput
          text="Momento de Inercia, I:"
          value={String(momentoInercia)}
          unit={"mm4"}
          setValue={setMomentoInercia}
        />

        <CalculateButton
          text="Calcular"
          onPress={() => setIsClicked((isClicked) => !isClicked)}
        />
      </View>
    );
  };

  const myReturn = () => {
    if (isClicked === false) {
      return Calculation();
    } else {
      return Result();
    }
  };

  return myReturn();
};

export const SimpleBeamWithCentralUIL = ({}) => {
  return (
    <View style={globalStyles.calculatorContent}>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export const SimpleBeamWithPDUL = ({}) => {
  return (
    <View style={globalStyles.calculatorContent}>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export const SimpleBeamWithPDULAtOneEnd = ({}) => {
  return (
    <View style={globalStyles.calculatorContent}>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export const SimpleBeamWithPLAtCentre = ({}) => {
  return (
    <View style={globalStyles.calculatorContent}>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export const SimpleBeamWithPLAtAnyPoint = ({}) => {
  return (
    <View style={globalStyles.calculatorContent}>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export const SimpleBeamWithPLSEquallySpaced = ({}) => {
  return (
    <View style={globalStyles.calculatorContent}>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export const BeamWithPLSUnequallySpaced = ({}) => {
  return (
    <View style={globalStyles.calculatorContent}>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export const BeamWithUPLSUnequallySpaced = ({}) => {
  return (
    <View>
      <CalculatorInput text="Comprimento da Viga, L" />
      <CalculatorInput text="Carga da Viga, W" />
      <CalculatorInput text="Ponto de interesse, x" />
      <CalculatorInput text="Young Modulus, E" />
      <CalculatorInput text="Momento de Inercia, I" />
    </View>
  );
};

export default SympleSupportedBeams;
