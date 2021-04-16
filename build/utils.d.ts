import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { GenericCompileStylesFn } from "./types";
export declare const DisplayNamePrefix = "AC";
export declare const compileStyles: <type>(defaultStyle: StyleProp<type>, customStyle: StyleProp<type>, allowDefaultStyle?: boolean) => type extends (infer U)[] ? U : type;
export declare const compileTextStyles: GenericCompileStylesFn<TextStyle>;
export declare const compileViewStyles: GenericCompileStylesFn<ViewStyle>;
