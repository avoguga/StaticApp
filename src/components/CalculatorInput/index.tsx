import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface IProps {
  text?: string;
  value?: any;
  setValue?: any;
  unit?: string;
  valorTexto?: any;
}

const CalculatorInput: React.FC<IProps> = ({
  text,
  value,
  setValue,
  unit,
  valorTexto,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.containerDisplay}>
          <TextInput
            style={styles.display}
            value={value}
            onChangeText={(valorTexto) => {
              setValue(valorTexto);
            }}
            keyboardType="numeric"
          />
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    </View>
  );
};

export const CalculatorInputResult: React.FC<IProps> = ({
  text,
  value,
  unit,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.containerDisplay}>
          <View style={styles.resultDisplay}>
            <Text style={styles.resultDisplayText}>{value}</Text>
          </View>

          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 420,
  },
  containerDisplay: {
    flexDirection: "row",
  },
  display: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#fff",
    width: 120,
    height: "auto",
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  resultDisplay: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#fff",
    width: 150,
    height: "auto",
    marginTop: 5,
    textAlign: "auto",
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  resultDisplayText: {
    marginLeft: 10,
    marginTop: 5,
    textAlign: "auto",
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  unit: {
    width: 40,
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    margin: 10,
  },
});

export default CalculatorInput;
