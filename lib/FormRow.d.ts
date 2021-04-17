import * as React from "react";
import { ViewProps, ViewStyle } from "react-native";
import { FormGroupPropsWithChildren } from "./FormGroup";
import { GenericStyle } from "./types";
export declare type FormRowStyle = GenericStyle<ViewStyle, "style">;
export declare type FormRowChildren = React.ReactElement<FormGroupPropsWithChildren> | Array<React.ReactElement<FormGroupPropsWithChildren>>;
export declare type FormRowProps = ViewProps & {
    allowDefaultStyle?: boolean;
    gap?: number;
};
export interface FormRowPropsWithChildren extends FormRowProps {
    children: FormRowChildren;
}
export declare const FormRowDefaultProps: FormRowProps;
declare const FormRow: React.FC<FormRowPropsWithChildren>;
export declare const FormRowStyles: {
    formGroupStyle: {
        flex: number;
        marginBottom: number;
    };
};
export default FormRow;
