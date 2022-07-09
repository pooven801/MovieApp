import { Platform, StyleSheet } from "react-native";
import theme, { BACKGROUND, BORDER_RADIUS } from "./theme";

export const androidPickerStyle =
  Platform.OS === "android" ? { height: 225 } : {};

export default StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  full: {
    flex: 1,
  },
  "justify-between": {
    justifyContent: "space-between",
  },
  "justify-start": {
    justifyContent: "flex-start",
  },
  "justify-center": {
    justifyContent: "center",
  },
  "ai-center": {
    alignItems: "center",
  },
  "ai-flexend": {
    alignItems: "flex-end",
  },
  "as-center": {
    alignSelf: "center",
  },
  "justify-flex-end": {
    justifyContent: "flex-end",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(10, 10, 10, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  appbar: {
    backgroundColor: "#060809",
  },
  primaryFontColor: {
    color: theme.colors.primary,
  },
  svgIcon: {
    marginLeft: 5,
  },
  icon: {
    marginLeft: 5,
    height: 25,
    width: 25,
  },
  sectionSeparator: {
    borderBottomColor: "rgba(255, 255, 255, 0.65)",
    borderBottomWidth: 0.8,
    borderTopColor: "rgba(255, 255, 255, 0.65)",
    borderTopWidth: 0.3,
  },
  inactive: {
    color: theme.colors.placeholder,
    fontWeight: "400",
  },
  link: {
    color: "#4274B9",
  },
  header: {
    backgroundColor: theme.colors.surface,
    height: 50,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#fff",
  },
  sectionItem: {
    backgroundColor: BACKGROUND,
    height: 50,
    marginBottom: 1,
    justifyContent: "center",
    borderRadius: BORDER_RADIUS,
  },
  noMargin: {
    margin: 0,
  },
  fontSize14: {
    fontSize: 14,
  },
  noPadding: {
    padding: 0,
  },
  background: {
    backgroundColor: BACKGROUND,
  },
  overlayBackground: {
    backgroundColor: "rgba(10, 10, 10, 0.4)",
  },
});

export const ButtonStyles = StyleSheet.create({
  contentStyle: {
    height: 50,
  },
  labelStyle: {
    textTransform: "none",
    fontWeight: "700",
    fontSize: 15.5,
  },
  negativeLabelStyle: {
    color: theme.colors.error,
    fontWeight: "700",
    fontSize: 12,
  },
  negativeContentStyle: {
    backgroundColor: BACKGROUND,
  },
  deteleButtonLabel: {
    color: theme.colors.error,
    fontWeight: "700",
    fontSize: 15.5,
  },
  deleteButtonContent: {
    backgroundColor: BACKGROUND,
    height: 49,
  },
});

export const TextStyles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: "rgba(175, 175, 175, 0.8)",
  },
  center: {
    textAlign: "center",
  },
  end: {
    textAlign: "right",
  },
  start: {
    textAlign: "left",
  },
  caption: {
    fontSize: 11,
    lineHeight: 12,
  },
  lightCaption: {
    color: "rgba(175, 175, 175, 0.8)",
  },
  pickerItem: {
    color: "#fff",
  },
  labelWrapper: {
    paddingBottom: 4,
  },
  greenText: {
    color: "#54B65B",
  },
  whiteText: {
    color: "#fff",
  },
  lightGreyText: {
    color: "#8D8F93",
  },
  bold: {
    fontWeight: "700",
  },
  capitalise: {
    textTransform: "capitalize",
  },
});
