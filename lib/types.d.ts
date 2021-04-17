import * as React from "react";
import { TextInputProps as RNTextInputProps, StyleProp, ViewStyle } from "react-native";
export declare type GenericStyle<T, K extends string> = Record<K, StyleProp<T>>;
/**
 * Generic function for compileStyles
 *
 * @typeParam ElementStyleType - Used for {@link: react-native#StyleProp | StyleProp }
 * @param defaultStyle - The default Style
 * @param customStyle - The custom Style
 * @param allowedDefaultStyle - The flag for adding default style or not
 * @returns The compiled styles with/without defaultStyle
 */
export declare type GenericCompileStylesFn<ElementStyleType> = (defaultStyle: StyleProp<ElementStyleType>, customStyle: StyleProp<ElementStyleType>, allowedDefaultStyle?: boolean) => ElementStyleType;
export declare type DefaultInputStyles = "style" | "filledStyle" | "invalidStyle";
export declare type FocusableInputStyles = "style" | "filledStyle" | "invalidStyle" | "focusedStyle";
export declare type DefaultInputContainerStyles = "containerStyle" | "filledContainerStyle" | "focusedContainerStyle" | "invalidContainerStyle";
export interface BaseInputProps extends Pick<RNTextInputProps, "placeholder" | "placeholderTextColor"> {
    invalid?: string;
    touched?: boolean;
    allowDefaultStyle?: boolean;
}
export interface BaseInputChangeableProps extends Pick<RNTextInputProps, "value"> {
    onChange?: (value: string) => any;
}
export interface BaseInputWIthContainerProps extends Partial<GenericStyle<ViewStyle, DefaultInputContainerStyles>> {
    leftComponent?: () => React.ReactNode;
    rightComponent?: () => React.ReactNode;
}
