import * as React from "react";
import { ViewProps, ViewStyle } from "react-native";
import { GenericStyle, FocusableInputStyles } from "./types";
declare type OmittedInputContainerViewProps = Omit<ViewProps, "style">;
export declare type FormInputContainerStyle = GenericStyle<ViewStyle, FocusableInputStyles>;
export interface FormInputContainerProps extends OmittedInputContainerViewProps, Partial<FormInputContainerStyle> {
    allowDefaultStyle?: boolean;
    filled?: boolean;
    focused?: boolean;
    invalid?: boolean;
}
export interface FormInputContainerPropsWithChildren extends React.PropsWithChildren<FormInputContainerProps> {
}
export declare const InputContainerDefaultProps: FormInputContainerProps;
declare const FormInputContainer: React.FC<FormInputContainerPropsWithChildren>;
export default FormInputContainer;
