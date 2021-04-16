import * as React from "react";
import { StyleSheet, TextStyle } from "react-native";
import { Picker as RNPicker } from "@react-native-picker/picker";
import { v4 as uuid } from "uuid";
import FormInputContainer from "./FormInputContainer";
import { ThemeFormPicker } from "./themes";
import {
  BaseInputChangeableProps,
  BaseInputProps,
  BaseInputWIthContainerProps,
  DefaultInputStyles,
  GenericStyle,
} from "./types";
import { compileTextStyles, DisplayNamePrefix } from "./utils";

type OmittedFormPickerProps = Omit<
  React.ComponentProps<typeof RNPicker>,
  "style"
>;
export type FormPickerOptions = Array<
  React.ComponentProps<typeof RNPicker.Item>
>;
export type FormPickerStyle = GenericStyle<TextStyle, DefaultInputStyles>;
export type FormPickerHelper = { FormPickerItem: typeof RNPicker.Item };
export interface FormPickerProps
  extends OmittedFormPickerProps,
    BaseInputProps,
    BaseInputChangeableProps,
    Partial<FormPickerStyle> {
  options?: FormPickerOptions;
}

export const FormPickerDefaultProps: FormPickerProps = {
  allowDefaultStyle: true,
  placeholder: "No Options",
};

export const FormPickerItem = RNPicker.Item;

export const BaseFormPicker: React.FC<FormPickerProps> = ({
  options,
  children,
  value,
  selectedValue,
  invalid,
  allowDefaultStyle,
  placeholder,
  style,
  filledStyle,
  invalidStyle,
  ...otherProps
}) => {
  const compiledStyle = React.useMemo(() => {
    return compileTextStyles(ThemeFormPicker.style, style, allowDefaultStyle);
  }, [allowDefaultStyle, style, ThemeFormPicker.style]);

  const compiledFilledStyle = React.useMemo(() => {
    if (!value && !selectedValue) {
      return null;
    }

    return compileTextStyles(
      ThemeFormPicker.filledStyle,
      filledStyle,
      allowDefaultStyle
    );
  }, [
    allowDefaultStyle,
    value,
    selectedValue,
    filledStyle,
    ThemeFormPicker.filledStyle,
  ]);

  const compiledInvalidStyle = React.useMemo(() => {
    if (!invalid) {
      return null;
    }

    return compileTextStyles(
      ThemeFormPicker.invalidStyle,
      invalidStyle,
      allowDefaultStyle
    );
  }, [allowDefaultStyle, invalid, invalidStyle, ThemeFormPicker.invalidStyle]);

  const generateOptions = (
    options?: FormPickerOptions
  ): JSX.Element | Array<JSX.Element> => {
    if (!options || options.length === 0) {
      return <RNPicker.Item label={placeholder} value="" key={uuid()} />;
    }

    return options.map((item) => (
      <RNPicker.Item label={item.label} value={item.value} key={uuid()} />
    ));
  };

  const compiledStyles = StyleSheet.flatten([
    compiledStyle,
    compiledFilledStyle,
    compiledInvalidStyle,
  ]);

  return (
    <RNPicker
      {...otherProps}
      selectedValue={selectedValue}
      style={compiledStyles}
    >
      {children ? children : generateOptions(options)}
    </RNPicker>
  );
};

BaseFormPicker.defaultProps = FormPickerDefaultProps;
BaseFormPicker.displayName = `${DisplayNamePrefix}BaseFormPicker`;

const FormPicker: React.FC<FormPickerProps & BaseInputWIthContainerProps> = ({
  leftComponent,
  rightComponent,
  containerStyle,
  filledContainerStyle,
  focusedContainerStyle,
  invalidContainerStyle,
  ...inputProps
}) => {
  return (
    <FormInputContainer
      filled={!!inputProps.value}
      invalid={!!inputProps.invalid}
      allowDefaultStyle={inputProps.allowDefaultStyle}
      style={containerStyle}
      filledStyle={filledContainerStyle}
      focusedStyle={focusedContainerStyle}
      invalidStyle={invalidContainerStyle}
    >
      {leftComponent && leftComponent()}
      <BaseFormPicker {...inputProps} />
      {rightComponent && rightComponent()}
    </FormInputContainer>
  );
};

export default Object.assign(FormPicker, { Item: FormPickerItem });
