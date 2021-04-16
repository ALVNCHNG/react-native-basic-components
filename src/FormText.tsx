import * as React from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from "react-native";
import FormInputContainer from "./FormInputContainer";
import { ThemeFormText } from "./themes";
import {
  BaseInputProps,
  BaseInputChangeableProps,
  BaseInputWIthContainerProps,
  FocusableInputStyles,
  GenericStyle,
} from "./types";
import { compileTextStyles, DisplayNamePrefix } from "./utils";

export type OmittedTextInputProps = Omit<
  RNTextInputProps,
  "onChange" | "style" | "value"
>;

export type FormInputStyle = GenericStyle<TextStyle, FocusableInputStyles>;
export interface FormInputProps
  extends OmittedTextInputProps,
    Partial<FormInputStyle>,
    BaseInputProps,
    BaseInputChangeableProps {}

export const TextInputDefaultProps: FormInputProps = {
  allowDefaultStyle: true,
};

export const BaseFormText = React.forwardRef<RNTextInput, FormInputProps>(
  (
    {
      allowDefaultStyle,
      invalid,
      value,
      style,
      filledStyle,
      focusedStyle,
      invalidStyle,
      onBlur,
      onChange,
      onFocus,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState<boolean>(false);

    const compiledStyle = React.useMemo(() => {
      return compileTextStyles(ThemeFormText.style, style, allowDefaultStyle);
    }, [allowDefaultStyle, style, ThemeFormText.style]);

    const compiledFilledStyle = React.useMemo(() => {
      if (!value) {
        return null;
      }

      return compileTextStyles(
        ThemeFormText.filledStyle,
        filledStyle,
        allowDefaultStyle
      );
    }, [allowDefaultStyle, value, filledStyle, ThemeFormText.filledStyle]);

    const compiledFocusedStyle = React.useMemo(() => {
      if (!focused) {
        return null;
      }

      return compileTextStyles(
        ThemeFormText.focusedStyle,
        focusedStyle,
        allowDefaultStyle
      );
    }, [allowDefaultStyle, focused, focusedStyle, ThemeFormText.focusedStyle]);

    const compiledInvalidStyle = React.useMemo(() => {
      if (!invalid) {
        return null;
      }

      return compileTextStyles(
        ThemeFormText.invalidStyle,
        invalidStyle,
        allowDefaultStyle
      );
    }, [allowDefaultStyle, invalid, invalidStyle, ThemeFormText.invalidStyle]);

    const handleBlur = (
      event: NativeSyntheticEvent<TextInputChangeEventData>
    ) => {
      setFocused(false);
      onBlur && onBlur(event);
    };

    const handleFocus = (
      event: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      setFocused(true);
      onFocus && onFocus(event);
    };

    const compiledStyles = StyleSheet.flatten([
      compiledStyle,
      compiledFilledStyle,
      compiledFocusedStyle,
      compiledInvalidStyle,
    ]);

    return (
      <RNTextInput
        {...props}
        onChangeText={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={compiledStyles}
        value={value}
        ref={ref}
      />
    );
  }
);

BaseFormText.defaultProps = TextInputDefaultProps;
BaseFormText.displayName = `${DisplayNamePrefix}FormText`;

const FormText = React.forwardRef<
  RNTextInput,
  FormInputProps & BaseInputWIthContainerProps
>(
  (
    {
      leftComponent,
      rightComponent,
      containerStyle,
      filledContainerStyle,
      focusedContainerStyle,
      invalidContainerStyle,
      ...inputProps
    },
    ref
  ) => {
    console.log("Ref: ", ref);

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
        <BaseFormText {...inputProps} ref={ref} />
      </FormInputContainer>
    );
  }
);

export type TextInputRef = React.ElementRef<typeof BaseFormText>;

export default FormText;
