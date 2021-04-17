import * as React from "react";
import PropTypes from "prop-types";
import { TextStyle, TouchableOpacityProps } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { BaseInputProps, BaseInputWIthContainerProps, DefaultInputStyles, GenericStyle } from "./types";
declare type OmittedFormDateTimePicker = Omit<React.ComponentProps<typeof RNDateTimePicker>, "style" | "value" | "onChange" | "display">;
declare type OmittedFormDateTimeProps = Omit<BaseInputWIthContainerProps, "FocusableInputContainerStyles" | "FocusableInputStyles">;
export declare type FormDateTimeStyles = GenericStyle<TextStyle, DefaultInputStyles>;
export interface BaseFormDateTimeProps extends OmittedFormDateTimePicker, BaseInputProps, Partial<FormDateTimeStyles> {
    displayFormat?: string;
    mode?: "date" | "time" | "datetime" | "countdown";
    value?: Date | null;
    onChange?: (value: Date) => any;
    onInputPress?: TouchableOpacityProps["onPress"];
    display?: "default" | "spinner";
}
export interface FormDateTimeProps extends OmittedFormDateTimeProps, BaseFormDateTimeProps {
}
export declare const DateTimeBaseInputDefaultProps: FormDateTimeProps;
export declare const propTypes: {
    /**
     * Format of the date to be displayed (uses a MomentJS Format)
     * @link https://momentjs.com/docs/#/displaying/
     */
    displayFormat: PropTypes.Requireable<string>;
    /**
     * Value
     */
    value: PropTypes.Requireable<Date>;
    /**
     * Callback that is called when selected a new date
     */
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when input is pressed
     */
    onInputPress: PropTypes.Requireable<(...args: any[]) => any>;
};
export declare const BaseFormDateTime: React.FC<FormDateTimeProps>;
declare const FormDateTime: React.FC<FormDateTimeProps & BaseInputWIthContainerProps>;
export default FormDateTime;
