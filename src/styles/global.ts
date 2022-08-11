import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({

  container: {
    backgroundColor: "#303030",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  simpleContainer: {
    backgroundColor: "#303030",
  },
  content: {
    padding: 15,
  },
  contentTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    marginRight: 100,
  },
  calculatorContent: {
    padding: 5,
    backgroundColor: "#303030",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttonList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 100,
  },
  picker: {
    width: 360,
    margin: 10,
    color: "#000",
    backgroundColor: "#fff",
  },
  pickerItem: {
    fontSize: 18,
  },
  image: {
    flex: 1,
    marginLeft: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
  },
  calculatorButton: {
    width: 200,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10
  },
  calculatorButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold", 
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  }
});
