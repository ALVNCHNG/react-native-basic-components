import * as React from "react";
import { TextStyle } from "react-native";
import { Picker as RNPicker } from "@react-native-picker/picker";
import { BaseInputChangeableProps, BaseInputProps, BaseInputWIthContainerProps, DefaultInputStyles, GenericStyle } from "./types";
declare type OmittedFormPickerProps = Omit<React.ComponentProps<typeof RNPicker>, "style">;
export declare type FormPickerOptions = Array<React.ComponentProps<typeof RNPicker.Item>>;
export declare type FormPickerStyle = GenericStyle<TextStyle, DefaultInputStyles>;
export declare type FormPickerHelper = {
    FormPickerItem: typeof RNPicker.Item;
};
export interface FormPickerProps extends OmittedFormPickerProps, BaseInputProps, BaseInputChangeableProps, Partial<FormPickerStyle> {
    options?: FormPickerOptions;
}
export declare const FormPickerDefaultProps: FormPickerProps;
export declare const FormPickerItem: React.ComponentType<import("@react-native-picker/picker/typings/Picker").PickerItemProps<import("@react-native-picker/picker/typings/Picker").ItemValue>>;
export declare const BaseFormPicker: React.FC<FormPickerProps>;
declare const _default: React.FC<FormPickerProps & BaseInputWIthContainerProps> & {
    Item: React.ComponentType<import("@react-native-picker/picker/typings/Picker").PickerItemProps<import("@react-native-picker/picker/typings/Picker").ItemValue>>;
};
export default _default;
