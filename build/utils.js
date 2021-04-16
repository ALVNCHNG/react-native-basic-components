import { StyleSheet } from "react-native";
export const DisplayNamePrefix = "AC";
export const compileStyles = (defaultStyle, customStyle, allowDefaultStyle) => {
    const outputStyles = [];
    if (!!allowDefaultStyle)
        outputStyles.push(defaultStyle);
    if (customStyle)
        outputStyles.push(customStyle);
    return StyleSheet.flatten(outputStyles);
};
export const compileTextStyles = compileStyles;
export const compileViewStyles = compileStyles;
