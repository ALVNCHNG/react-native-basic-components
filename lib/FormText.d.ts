import * as React from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from "react-native";
import { BaseInputProps, BaseInputChangeableProps, BaseInputWIthContainerProps, FocusableInputStyles, GenericStyle } from "./types";
export declare type OmittedTextInputProps = Omit<RNTextInputProps, "onChange" | "style" | "value">;
export declare type FormInputStyle = GenericStyle<TextStyle, FocusableInputStyles>;
export interface FormInputProps extends OmittedTextInputProps, Partial<FormInputStyle>, BaseInputProps, BaseInputChangeableProps {
}
export declare const TextInputDefaultProps: FormInputProps;
export declare const BaseFormText: React.ForwardRefExoticComponent<FormInputProps & React.RefAttributes<RNTextInput>>;
declare const FormText: React.ForwardRefExoticComponent<FormInputProps & BaseInputWIthContainerProps & React.RefAttributes<RNTextInput>>;
export declare type TextInputRef = React.ElementRef<typeof BaseFormText>;
export default FormText;
