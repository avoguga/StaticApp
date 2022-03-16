import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
  header: {
    height: 80,
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
    flex: 2,
    padding: 15,
    backgroundColor: "white",
    width: 400,
  },
  buttonList: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",
    marginTop: 10,
  },
  picker: {
    width: 360,
    color: "#fff",
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
  }
});
