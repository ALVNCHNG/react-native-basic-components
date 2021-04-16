import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { GenericCompileStylesFn } from "./types";

export const DisplayNamePrefix = "AC";

export const compileStyles = <type>(
  defaultStyle: StyleProp<type>,
  customStyle: StyleProp<type>,
  allowDefaultStyle?: boolean
) => {
  const outputStyles: typeof defaultStyle = [];

  if (!!allowDefaultStyle) outputStyles.push(defaultStyle);
  if (customStyle) outputStyles.push(customStyle);

  return StyleSheet.flatten(outputStyles);
};

export const compileTextStyles: GenericCompileStylesFn<TextStyle> = compileStyles;
export const compileViewStyles: GenericCompileStylesFn<ViewStyle> = compileStyles;
