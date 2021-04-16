import * as React from "react";
import { TextProps, TextStyle } from "react-native";
import { GenericStyle } from "./types";
export declare type FormErrorStyle = GenericStyle<TextStyle, "style">;
export declare type FormErrorProps = TextProps & {
    children: string;
    allowDefaultStyle?: boolean;
};
export declare const FormErrorDefaultProps: FormErrorProps;
declare const FormError: React.FC<FormErrorProps>;
export default FormError;
