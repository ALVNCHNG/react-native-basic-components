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
  "style" | "selectedValue"
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
  invalid,
  allowDefaultStyle,
  placeholder,
  style,
  filledStyle,
  invalidStyle,
  ...otherProps
}) => {
  const compiledStyle = compileTextStyles(
    ThemeFormPicker.style,
    style,
    allowDefaultStyle
  );

  const compiledFilledStyle = value
    ? compileTextStyles(
        ThemeFormPicker.filledStyle,
        filledStyle,
        allowDefaultStyle
      )
    : null;

  const compiledInvalidStyle = invalid
    ? compileTextStyles(
        ThemeFormPicker.invalidStyle,
        invalidStyle,
        allowDefaultStyle
      )
    : null;

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

  return (
    <RNPicker
      {...otherProps}
      selectedValue={value}
      style={StyleSheet.flatten([
        compiledStyle,
        compiledFilledStyle,
        compiledInvalidStyle,
      ])}
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
