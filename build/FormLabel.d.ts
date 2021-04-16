import * as React from "react";
import { TextProps, TextStyle } from "react-native";
import { FocusableInputStyles, GenericStyle } from "./types";
export declare type FormLabelStyle = GenericStyle<TextStyle, FocusableInputStyles>;
export declare type FormLabelProps = TextProps & Partial<FormLabelStyle> & {
    children: string;
    allowDefaultStyle?: boolean;
    filled?: boolean;
    focused?: boolean;
    invalid?: boolean;
};
export declare const LabelDefaultProps: FormLabelProps;
declare const Label: React.FC<FormLabelProps>;
export default Label;
