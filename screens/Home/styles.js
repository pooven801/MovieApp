import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  renderContainer: {
    backgroundColor: "black",
    padding: 0,
    height: 450,
    width: "100%",
  },
  border: {
    borderWidth: 0.5,
    alignSelf: "center",
    width: "80%",
    borderColor: "white",
  },
  headerContainer: {
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 20,
    paddingBottom: 10,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,

    height: Platform.OS === "ios" ? 80 : 75,
    justifyContent: "flex-end",
  },
  headerBorder: {
    borderWidth: 0.5,
    marginTop: 10,
    width: "100%",
    borderColor: "white",
  },
  listContainer: {
    width: '50%',
    backgroundColor: 'gray',
    marginLeft: 20,
    padding: 5,
    borderRadius: 5,
    margin: 5,
  }
});
