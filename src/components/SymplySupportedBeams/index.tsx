import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { globalStyles } from "../../styles/global";
import { Button } from "../BeamButton";
import { CalculateButton } from "../CalculateButton";
import CalculatorInput, { CalculatorInputResult } from "../CalculatorInput";

interface IProps {
  buttonFunction?: any;
}

const SympleSupportedBeams: React.FC<IProps> = ({ buttonFunction }) => {
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
      <View>
        <CalculatorInputResult text="Força Resultante, R" value={forca} />
        <CalculatorInputResult text="Max Shear, Vmax" value={tensaoMax} />
        <CalculatorInputResult text="Shear at x, Vx" value={tensaoX} />
        <CalculatorInputResult text="Max. Moment, Mmax" value={momentoMax} />
        <CalculatorInputResult text="Moment at x, Mx" value={momentoX} />
        <CalculatorInputResult
          text="Max Deflection, ∆max"
          value={deflexaoMax.toFixed(7)}
        />
        <CalculatorInputResult
          text="Deflection at x, ∆x"
          value={deflexaoX.toFixed(7)}
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
      <View>
        <CalculatorInput
          text="Comprimento da Viga, L"
          value={String(comprimentoViga)}
          unit={"m"}
          setValue={setComprimentoViga}
        />
        <CalculatorInput
          text="Carga da Viga, W"
          value={String(cargaViga)}
          unit={"kN/m"}
          setValue={setCargaViga}
        />
        <CalculatorInput
          text="Ponto de interesse, x"
          value={String(pontoInteresse)}
          unit={"m"}
          setValue={setPontoInteresse}
        />
        <CalculatorInput
          text="Young Modulus, E"
          value={String(youngsModulus)}
          unit={"MPa"}
          setValue={setYoungModulus}
        />
        <CalculatorInput
          text="Momento de Inercia, I"
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

export const SimpleBeamWithCentralUIL = ({}) => {
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

export const SimpleBeamWithPDUL = ({}) => {
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
