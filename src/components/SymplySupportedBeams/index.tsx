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
        image={require("../../img/simplebeamwithudl.png")}
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithUIL")}
        image={require("../../img/simplebeamwithuil.png")}
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithCentralUIL")}
        image={require("../../img/simplebeamwithcentraluil.png")}
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPDUL")}
        image={require("../../img/simplebeamwithpdul.png")}
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPDULAtOneEnd")}
        image={require("../../img/simplebeamwithudl.png")}
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPLAtCentre")}
        image={require("../../img/simplebeamwithplatcentre.png")}
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPLAtAnyPoint")}
        image={require("../../img/simplebeamwithplatanypoint.png")}
      />
      <Button
        onPress={() => navigation.navigate("SimpleBeamWithPLSEquallySpaced")}
        image={require("../../img/simplebeamwithplsequallyspaced.png")}
      />
      <Button
        onPress={() => navigation.navigate("BeamWithPLSUnequallySpaced")}
        image={require("../../img/simplebeamwithplsunequallyspaced.png")}
      />
      <Button
        onPress={() => navigation.navigate("BeamWithUPLSUnequallySpaced")}
        image={require("../../img/simplebeamwithuplsunequallyspaced.png")}
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
  const [cargaViga, setCargaViga] = useState(1000);
  const [pontoInteresse, setPontoInteresse] = useState(0.5);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const resultante = cargaViga / 3;

  const resultante2 = 2 * (cargaViga / 3);

  const tensaoX =
    cargaViga / 3 - (cargaViga * pontoInteresse ** 2) / comprimentoViga ** 2;

  const momentoMax = (2 * cargaViga * comprimentoViga) / 15.5884573;

  const momentoX =
    ((cargaViga * pontoInteresse) / (3 * comprimentoViga ** 2)) *
    (comprimentoViga ** 2 - pontoInteresse ** 2);

  const deflexaoMax =
    0.01304 *
    ((cargaViga * comprimentoViga ** 3) / (youngsModulus * momentoInercia)) *
    1000000;

  // Constantes para o calculo de deflexao

  const a = cargaViga * pontoInteresse;
  const b = 180 * youngsModulus * momentoInercia * comprimentoViga ** 2;
  const c = 3 * pontoInteresse ** 4;
  const d = 10 * comprimentoViga ** 2 * pontoInteresse ** 2;
  const e = 7 * comprimentoViga ** 4;

  const deflexaoX = (a / b) * (c - d + e) * 1000000;

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult
          text="Resultante, R1=V1:"
          value={resultante.toFixed(6)}
        />
        <CalculatorInputResult
          text="Resultante, R2=V2(max)"
          value={resultante2.toFixed(6)}
        />
        <CalculatorInputResult
          text="Shear at x, Vx:"
          value={tensaoX.toFixed(6)}
        />
        <CalculatorInputResult
          text="Max. Moment, Mmax:"
          value={momentoMax.toFixed(6)}
        />
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
  const [comprimentoViga, setComprimentoViga] = useState(1);
  const [cargaViga, setCargaViga] = useState(1000);
  const [pontoInteresse, setPontoInteresse] = useState(0.5);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const resultante = cargaViga / 2;

  const tensaoX =
    (cargaViga / (2 * comprimentoViga ** 2)) *
    (comprimentoViga ** 2 - 4 * pontoInteresse ** 2);

  const momentoMax = (cargaViga * comprimentoViga) / 6;

  // Constante para o calculo de Mx

  const wx = cargaViga * pontoInteresse;
  const pontoInteresseElevado = 2 * pontoInteresse ** 2;
  const comprimentoVigaELevado = 3 * comprimentoViga ** 2;

  const momentoX = wx * (0.5 - pontoInteresseElevado / comprimentoVigaELevado);

  const deflexaoMax =
    ((cargaViga * comprimentoViga ** 3) /
      (60 * youngsModulus * momentoInercia)) *
    1000000;

  // Constantes para o calculo de deflexao

  const compElevado = comprimentoViga ** 2;
  const pontElevado = pontoInteresse ** 2;

  const a = cargaViga * pontoInteresse;
  const b = 480 * youngsModulus * momentoInercia * compElevado;
  const c = 5 * compElevado;
  const d = 4 * pontElevado;
  const e = a / b;
  const f = (c - d) ** 2;
  const g = e * f;
  const deflexaoX = g * 1000000;

  console.log("dX: ", deflexaoX);
  console.log("dMax: ", deflexaoMax);
  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult
          text="Resultante, R = Vmax:"
          value={resultante.toFixed(6)}
        />
        <CalculatorInputResult
          text="Shear at x, Vx:"
          value={tensaoX.toFixed(6)}
        />
        <CalculatorInputResult
          text="Max. Moment, Mmax:"
          value={momentoMax.toFixed(6)}
        />
        <CalculatorInputResult
          text="Moment at x, Mx:"
          value={momentoX.toFixed(6)}
        />
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

export const SimpleBeamWithPDUL = ({}) => {
  const [meuA, setMeuA] = useState(0.5);
  const [meuB, setMeuB] = useState(0.5);
  const [meuC, setMeuC] = useState(0.5);
  const [loadOnBeam, setLoadOnBeam] = useState(1.0);
  const [pontoInteresse, setPontoInteresse] = useState(0.75);
  const [isClicked, setIsClicked] = useState(false);

  const L = meuA * 1 + meuB * 1 + meuC * 1;

  const wbSobre2L = (loadOnBeam * meuB) / (2 * L);
  const C2MaisB = meuC * 2 + meuB;
  const A2MaisB = meuA * 2 + meuB;

  const resultant = wbSobre2L * C2MaisB;

  const resultant2 = wbSobre2L * A2MaisB;

  const Vx = resultant - loadOnBeam * (pontoInteresse - meuA);

  const R1Sobre2W = (resultant / 2) * loadOnBeam;

  const MMax = resultant * (1 * meuA + R1Sobre2W);

  if (pontoInteresse < meuA) {
    var Mx = resultant * pontoInteresse;
  } else if (meuA < pontoInteresse && pontoInteresse < 1 * meuA + meuB * 1) {
    var Mx =
      resultant * pontoInteresse -
      (loadOnBeam / 2) * (pontoInteresse - meuA * 1) ** 2;
  } else if (pontoInteresse > 1 * meuA + meuB * 1) {
    var Mx = resultant2 * (L - pontoInteresse);
  }

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult text="Lenght of Beam, L:" value={L.toFixed(6)} />
        <CalculatorInputResult
          text="Resultante, R1 = V1:"
          value={resultant.toFixed(6)}
        />
        <CalculatorInputResult
          text="Resultant, R2 = V2:"
          value={resultant2.toFixed(6)}
        />
        <CalculatorInputResult text="Shear at x, Vx:" value={Vx.toFixed(6)} />
        <CalculatorInputResult
          text="Max. Moment, Mmax:"
          value={MMax.toFixed(6)}
        />
        <CalculatorInputResult text="Moment at x, Mx:" value={Mx.toFixed(6)} />

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
          text="Comprimento da Viga, a:"
          value={String(meuA)}
          unit={"m"}
          setValue={setMeuA}
        />
        <CalculatorInput
          text="Largura da carga, b:"
          value={String(meuB)}
          unit={"m"}
          setValue={setMeuB}
        />
        <CalculatorInput
          text="Largura depois da carga, c:"
          value={String(meuC)}
          unit={"kN/m"}
          setValue={setMeuC}
        />
        <CalculatorInput
          text="Carga da viga, w:"
          value={String(loadOnBeam)}
          unit={"MPa"}
          setValue={setLoadOnBeam}
        />
        <CalculatorInput
          text="Ponto de interesse, x:"
          value={String(pontoInteresse)}
          unit={"m"}
          setValue={setPontoInteresse}
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

export const SimpleBeamWithPDULAtOneEnd = ({}) => {
  const [comprimentoViga, setComprimentoViga] = useState(1);
  const [beamWidth, setBeamWidth] = useState(0.5);
  const [cargaViga, setCargaViga] = useState(1);
  const [pontoInteresse, setPontoInteresse] = useState(0.25);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const beamto2 = beamWidth ** 2;
  const wa2L = (cargaViga * beamWidth) / (2 * comprimentoViga);
  const wa2L2 = (cargaViga * beamto2) / (2 * comprimentoViga);

  const resultante = wa2L * (2 * comprimentoViga - beamWidth);

  const tensaoX = resultante - cargaViga * pontoInteresse;

  const momentoMax = resultante ** 2 / (2 * cargaViga);

  const wx2 = cargaViga * pontoInteresse ** 2;

  const momentoX =
    pontoInteresse < beamWidth
      ? resultante * pontoInteresse - wx2 / 2
      : wa2L2 * (comprimentoViga - pontoInteresse);

  // preCalculoDeflexaoMenorQueA - foi chato fazer esse.
  const wx = cargaViga * pontoInteresse;
  const EIL24 = 24 * youngsModulus * momentoInercia * comprimentoViga;
  const wxDivididoEIL24 = wx / EIL24;
  const beamLoadElevado = beamWidth ** 2;
  const L2MenosA = (2 * comprimentoViga - beamWidth) ** 2;
  const doisAXElevado = 2 * beamWidth * pontoInteresse ** 2;
  const doisLMenosA = 2 * comprimentoViga - beamWidth;
  const lxElevadoATerceira = comprimentoViga * pontoInteresse ** 3;

  // preCalculoDeflexaoMaiorQueA - foi chato fazer esse.
  const waElevadoLMenosX =
    cargaViga * beamWidth ** 2 * (comprimentoViga - pontoInteresse);
  const vinteQuatroEIL = 24 * youngsModulus * momentoInercia * comprimentoViga;
  const primeiraParte = waElevadoLMenosX / vinteQuatroEIL;
  const quatroXL = 4 * pontoInteresse * comprimentoViga;
  const doisXElevado = 2 * pontoInteresse ** 2;
  const segundaParte = quatroXL - doisXElevado - beamWidth ** 2;

  const preCalculoDeflexaoMenorQueA =
    beamLoadElevado * L2MenosA -
    doisAXElevado * doisLMenosA +
    lxElevadoATerceira;

  const calculoDeflexaoMenorQueA =
    wxDivididoEIL24 * preCalculoDeflexaoMenorQueA;
  const calculoDeflexaoMaiorQueA = primeiraParte * segundaParte;
  const deflexaoX =
    pontoInteresse < beamWidth
      ? calculoDeflexaoMenorQueA * 1000000000
      : calculoDeflexaoMaiorQueA * 1000000000;

  console.log(deflexaoX * 1000000000);

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult
          text="Resultante, R1 = V1:"
          value={resultante.toFixed(6)}
        />
        <CalculatorInputResult
          text="Resultant, R2 = V2:"
          value={wa2L2.toFixed(6)}
        />
        <CalculatorInputResult
          text="Shear at x, Vx:"
          value={tensaoX.toFixed(6)}
        />
        <CalculatorInputResult
          text="Max. Moment, Mmax:"
          value={momentoMax.toFixed(6)}
        />
        <CalculatorInputResult
          text="Moment at x, Mx:"
          value={momentoX.toFixed(6)}
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
          text="Width of Load, a:"
          value={String(beamWidth)}
          unit={"m"}
          setValue={setBeamWidth}
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

export const SimpleBeamWithPLAtCentre = ({}) => {
  const [comprimentoViga, setComprimentoViga] = useState(1);
  const [cargaViga, setCargaViga] = useState(100);
  const [pontoInteresse, setPontoInteresse] = useState(0.5);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const forca = cargaViga / 2;

  const tensaoMax = cargaViga / 2;

  const momentoMax = (cargaViga * comprimentoViga) / 4;

  const momentoX = (cargaViga * pontoInteresse) / 2;

  const deflexaoMax =
    ((cargaViga * comprimentoViga ** 3) /
      (48 * momentoInercia * youngsModulus)) *
    1000000000;

  const equacaoDeflexao = 3 * comprimentoViga ** 2 - 4 * pontoInteresse ** 2;

  const deflexaoX =
    ((cargaViga * pontoInteresse) / (48 * youngsModulus * momentoInercia)) *
    equacaoDeflexao *
    1000000000;

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult text="Força Resultante, R:" value={forca} />
        <CalculatorInputResult text="Max Shear, V:" value={tensaoMax} />
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
          text="Carga da Viga, P:"
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

export const SimpleBeamWithPLAtAnyPoint = ({}) => {
  const [comprimentoViga, setComprimentoViga] = useState(1);
  const [distanciaDaCarga, setDistanciaDaCarga] = useState(0.5);
  const [cargaViga, setCargaViga] = useState(1000);
  const [pontoInteresse, setPontoInteresse] = useState(0.25);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const b = comprimentoViga - distanciaDaCarga;

  const resultante = (cargaViga * b) / comprimentoViga;

  const resultante2 = (cargaViga * distanciaDaCarga) / comprimentoViga;

  const momentoMax = (cargaViga * distanciaDaCarga * b) / comprimentoViga;

  const momentoX = (cargaViga * b * pontoInteresse) / comprimentoViga;

  // Constantes para o calculo de deflexao maxima

  const pab = cargaViga * distanciaDaCarga * b;

  const a2b = distanciaDaCarga + 2 * b;

  const primeiraParteRaiz = 3 * distanciaDaCarga;

  const segundaParteRaiz = distanciaDaCarga + 2 * b;

  const raiz = Math.sqrt(primeiraParteRaiz * segundaParteRaiz);

  const vinteseteEIL = 27 * youngsModulus * momentoInercia * comprimentoViga;

  const primeiraParteDeflexao = pab * a2b * raiz;

  const deflexaoMax = (primeiraParteDeflexao / vinteseteEIL) * 1000000000;

  const deflexaoNaCarga =
    ((cargaViga * distanciaDaCarga ** 2 * b ** 2) /
      (3 * youngsModulus * momentoInercia * comprimentoViga)) *
    1000000000;

  // Constantes para o calculo de deflexao na carga

  const pbx = cargaViga * b * pontoInteresse;

  const seiseil = 6 * youngsModulus * momentoInercia * comprimentoViga;

  const lbx = comprimentoViga ** 2 - b ** 2 - pontoInteresse ** 2;

  const deflexaoX = (pbx / seiseil) * lbx * 1000000000;

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult
          text="Resultante, R1=V1:"
          value={resultante.toFixed(6)}
        />
        <CalculatorInputResult
          text="Resultante, R2=V2(max)"
          value={resultante2.toFixed(6)}
        />
        <CalculatorInputResult
          text="Max. Moment, Mmax:"
          value={momentoMax.toFixed(6)}
        />
        <CalculatorInputResult text="Moment at x, Mx:" value={momentoX} />
        <CalculatorInputResult
          text="Max Deflection, ∆max:"
          value={deflexaoMax.toFixed(6)}
        />
        <CalculatorInputResult
          text="Deflection at Load, ∆a:"
          value={deflexaoNaCarga.toFixed(6)}
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
          text="Distancia para carga, a:"
          value={String(distanciaDaCarga)}
          unit={"m"}
          setValue={setDistanciaDaCarga}
        />
        <CalculatorInput
          text="Carga da Viga, W:"
          value={String(cargaViga)}
          unit={"kN"}
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

export const SimpleBeamWithPLSEquallySpaced = ({}) => {
  const [comprimentoViga, setComprimentoViga] = useState(1);
  const [distanciaDaCarga, setDistanciaDaCarga] = useState(0.25);
  const [cargaViga, setCargaViga] = useState(1);
  const [pontoInteresse, setPontoInteresse] = useState(0.5);
  const [youngsModulus, setYoungModulus] = useState(200000);
  const [momentoInercia, setMomentoInercia] = useState(8333333);
  const [isClicked, setIsClicked] = useState(false);

  const b = 1;

  const resultante = cargaViga;

  const maxShear = cargaViga;

  // Momento max é igual a Pa
  const momentoMax = cargaViga * distanciaDaCarga;

  // Momento x é igual a Px
  const momentoX = pontoInteresse < distanciaDaCarga ? cargaViga * pontoInteresse : momentoMax;

  const deflexaoMax =
    (momentoMax / (24 * youngsModulus * momentoInercia)) *
    (3 * comprimentoViga ** 2 - 4 * distanciaDaCarga ** 2) * 1000000000;

  // Constantes para o calculo de deflexao na carga


  const seisei = 6 * youngsModulus * momentoInercia;

  const tresla = 3 * comprimentoViga * distanciaDaCarga;

  const tresa2 = 3 * distanciaDaCarga ** 2;

  const x2 = pontoInteresse ** 2;

  const segundaParteDeflexaoUsandoX = tresla - tresa2 - x2;

  const segundaParteDeflexaoUsandoA =
    3 * comprimentoViga * pontoInteresse -
    3 * pontoInteresse ** 2 -
    distanciaDaCarga ** 2;

  const deflexaoX =
    pontoInteresse < distanciaDaCarga
      ? (momentoX / seisei) * segundaParteDeflexaoUsandoX * 1000000000
      : (momentoMax / seisei) * segundaParteDeflexaoUsandoA * 1000000000;

  const Result = () => {
    return (
      <View style={globalStyles.calculatorContent}>
        <CalculatorInputResult
          text="Resultante, R=V:"
          value={resultante}
        />
        <CalculatorInputResult
          text="Max Shear, Vmax"
          value={maxShear}
        />
        <CalculatorInputResult
          text="Max. Moment, Mmax:"
          value={momentoMax.toFixed(6)}
        />
        <CalculatorInputResult text="Moment at x, Mx:" value={momentoX} />
        <CalculatorInputResult
          text="Deflection at x, ∆max:"
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
          text="Distancia para carga, a:"
          value={String(distanciaDaCarga)}
          unit={"m"}
          setValue={setDistanciaDaCarga}
        />
        <CalculatorInput
          text="Carga da Viga, P:"
          value={String(cargaViga)}
          unit={"kN"}
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
