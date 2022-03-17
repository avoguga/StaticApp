import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
  header: {
    paddingTop: 38,
    alignSelf: "flex-start",
    marginLeft: 25,
    marginBottom: 10,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  subHeader: {
    alignSelf: "flex-start",
    marginLeft: 25,
  },
  subHeaderTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: "#0082C6",
    alignItems: "center",
    justifyContent: "center",
  },
  simpleContainer: {
    flex: 1,
    backgroundColor: "#0082C6",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },
  contentTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    marginRight: 100,
  },
  calculatorContent: {
    padding: 15,
    backgroundColor: "#0082C6",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#fff",
    width: 400,
    height: 500
  },
  buttonList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
  }
});
