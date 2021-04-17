import * as React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { ThemeFormLabel } from "./themes";
import { FocusableInputStyles, GenericStyle } from "./types";
import { compileTextStyles, DisplayNamePrefix } from "./utils";

export type FormLabelStyle = GenericStyle<TextStyle, FocusableInputStyles>;

export type FormLabelProps = TextProps &
  Partial<FormLabelStyle> & {
    children: string;
    allowDefaultStyle?: boolean;
    filled?: boolean;
    focused?: boolean;
    invalid?: boolean;
  };

export const LabelDefaultProps: FormLabelProps = {
  children: "",
  allowDefaultStyle: true,
};

const Label: React.FC<FormLabelProps> = ({
  children,
  allowDefaultStyle,
  filled,
  focused,
  invalid,
  style,
  filledStyle,
  focusedStyle,
  invalidStyle,
}): JSX.Element => {
  const compiledStyle = compileTextStyles(ThemeFormLabel.style, style, allowDefaultStyle);

  const compiledFilledStyle = filled
    ? compileTextStyles(
        ThemeFormLabel.filledStyle,
        filledStyle,
        allowDefaultStyle
      )
    : null;

  const compiledFocusedStyle = focused
    ? compileTextStyles(
        ThemeFormLabel.focusedStyle,
        focusedStyle,
        allowDefaultStyle
      )
    : null;

  const compiledInvalidStyle = invalid
    ? compileTextStyles(
        ThemeFormLabel.invalidStyle,
        invalidStyle,
        allowDefaultStyle
      )
    : null;

  return (
    <Text
      style={StyleSheet.flatten([
        compiledStyle,
        compiledFilledStyle,
        compiledFocusedStyle,
        compiledInvalidStyle,
      ])}
    >
      {children}
    </Text>
  );
};

Label.defaultProps = LabelDefaultProps;
Label.displayName = `${DisplayNamePrefix}FormLabel`;

export default Label;
