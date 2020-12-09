import { StyleSheet } from "react-native";
import { ScreenStackHeaderRightView } from "react-native-screens";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: "#FFF159",
  },

  card: {
    width: "90%",
    margin: 25,
    alignSelf: "center",
  },

  resumo: {
    width: "90%",
    marginTop: 25,
    alignSelf: "center",
  },

  titleSize: {
    fontSize: 15,
    color: "#1D2C7C",
    fontWeight: "bold",
  },
  titlePara: {
    fontSize: 15,
    color: "#e01f09",
  },
  titlePara1: {
    fontSize: 15,
    color: "#09e054",
  },

  space: {
    marginTop: 20,
  },

  viewRow: {
    flexDirection: "row",
  },

  itensImagem: {
    alignItems: "center",
  },
  imgSad: {
    width: 65,
    height: 65,
    margin: 1,
    marginTop: 27,
    marginRight: 10,
  },
  imgRange: {
    width: 115,
    height: 130,
    margin: 1,
    marginRight: 10,
  },
});
