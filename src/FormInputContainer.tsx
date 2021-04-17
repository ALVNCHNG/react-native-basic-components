import * as React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { ThemeFormInputContainer } from "./themes";
import { GenericStyle, FocusableInputStyles } from "./types";
import { compileViewStyles, DisplayNamePrefix } from "./utils";

type OmittedInputContainerViewProps = Omit<ViewProps, "style">;

export type FormInputContainerStyle = GenericStyle<
  ViewStyle,
  FocusableInputStyles
>;

export interface FormInputContainerProps
  extends OmittedInputContainerViewProps,
    Partial<FormInputContainerStyle> {
  allowDefaultStyle?: boolean;
  filled?: boolean;
  focused?: boolean;
  invalid?: boolean;
}

export interface FormInputContainerPropsWithChildren
  extends React.PropsWithChildren<FormInputContainerProps> {}

export const InputContainerDefaultProps: FormInputContainerProps = {
  allowDefaultStyle: false,
};

const FormInputContainer: React.FC<FormInputContainerPropsWithChildren> = ({
  children,
  allowDefaultStyle,
  filled,
  focused,
  invalid,
  style,
  filledStyle,
  focusedStyle,
  invalidStyle,
  ...otherProps
}) => {
  const compiledStyle = compileViewStyles(
    ThemeFormInputContainer.style,
    style,
    allowDefaultStyle
  );

  const compiledFilledStyle = filled
    ? compileViewStyles(
        ThemeFormInputContainer.filledStyle,
        filledStyle,
        allowDefaultStyle
      )
    : null;

  const compiledFocusedStyle = focused
    ? compileViewStyles(
        ThemeFormInputContainer.focusedStyle,
        focusedStyle,
        allowDefaultStyle
      )
    : null;

  const compiledInvalidStyle = invalid
    ? compileViewStyles(
        ThemeFormInputContainer.invalidStyle,
        invalidStyle,
        allowDefaultStyle
      )
    : null;

  return (
    <View
      {...otherProps}
      style={StyleSheet.flatten([
        compiledStyle,
        compiledFilledStyle,
        compiledFocusedStyle,
        compiledInvalidStyle,
      ])}
    >
      {children}
    </View>
  );
};

FormInputContainer.defaultProps = InputContainerDefaultProps;
FormInputContainer.displayName = `${DisplayNamePrefix}FormInputContainer`;

export default FormInputContainer;
