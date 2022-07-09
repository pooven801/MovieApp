import { DarkTheme } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";

export const { height, width } = Dimensions.get("window");

export const BORDER_RADIUS = 8;
export const HEIGHT = 40;
export const SPACE = 16;

export const BACKGROUND = DarkTheme.colors.surface;
export const TitleStyle = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: "600",
  },
});

export default {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#50B857",
    error: "#EF4839",
    placeholder: "#8D8F94",
  },
};
