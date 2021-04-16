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
  const compiledStyle = React.useMemo(() => {
    return compileViewStyles(
      ThemeFormInputContainer.style,
      style,
      allowDefaultStyle
    );
  }, [allowDefaultStyle, style, ThemeFormInputContainer.style]);

  const compiledFilledStyle = React.useMemo(() => {
    if (!filled) {
      return null;
    }

    return compileViewStyles(
      ThemeFormInputContainer.filledStyle,
      filledStyle,
      allowDefaultStyle
    );
  }, [
    allowDefaultStyle,
    filled,
    filledStyle,
    ThemeFormInputContainer.filledStyle,
  ]);

  const compiledFocusedStyle = React.useMemo(() => {
    if (!focused) {
      return null;
    }

    return compileViewStyles(
      ThemeFormInputContainer.focusedStyle,
      focusedStyle,
      allowDefaultStyle
    );
  }, [
    allowDefaultStyle,
    focused,
    focusedStyle,
    ThemeFormInputContainer.focusedStyle,
  ]);

  const compiledInvalidStyle = React.useMemo(() => {
    if (!invalid) {
      return null;
    }

    return compileViewStyles(
      ThemeFormInputContainer.invalidStyle,
      invalidStyle,
      allowDefaultStyle
    );
  }, [
    allowDefaultStyle,
    invalid,
    invalidStyle,
    ThemeFormInputContainer.invalidStyle,
  ]);

  const compiledStyles = StyleSheet.flatten([
    compiledStyle,
    compiledFilledStyle,
    compiledFocusedStyle,
    compiledInvalidStyle,
  ]);

  if (!!invalid) console.log("compiledInvalidStyle: ", compiledStyles);

  return (
    <View {...otherProps} style={compiledStyles}>
      {children}
    </View>
  );
};

FormInputContainer.defaultProps = InputContainerDefaultProps;
FormInputContainer.displayName = `${DisplayNamePrefix}FormInputContainer`;

export default FormInputContainer;
