import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  titleContaner: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  overViewContainer: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  boxContainer:{
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  boxText: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'orange',
    padding: 5,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  bottomButton:{
    width: '80%',
    height: 50,
    backgroundColor: 'green',
    marginVertical: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
