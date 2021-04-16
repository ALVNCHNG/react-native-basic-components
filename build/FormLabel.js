import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { ThemeFormLabel } from "./themes";
import { compileTextStyles, DisplayNamePrefix } from "./utils";
export const LabelDefaultProps = {
    children: "",
    allowDefaultStyle: true,
};
const Label = ({ children, allowDefaultStyle, filled, focused, invalid, style, filledStyle, focusedStyle, invalidStyle, }) => {
    const compiledStyle = React.useMemo(() => compileTextStyles(ThemeFormLabel.style, style, allowDefaultStyle), [allowDefaultStyle, style, ThemeFormLabel.style]);
    const compiledFilledStyle = React.useMemo(() => filled
        ? compileTextStyles(ThemeFormLabel.filledStyle, filledStyle, allowDefaultStyle)
        : null, [allowDefaultStyle, filled, filledStyle, ThemeFormLabel.filledStyle]);
    const compiledFocusedStyle = React.useMemo(() => focused
        ? compileTextStyles(ThemeFormLabel.focusedStyle, focusedStyle, allowDefaultStyle)
        : null, [allowDefaultStyle, focused, focusedStyle, ThemeFormLabel.focusedStyle]);
    const compiledInvalidStyle = React.useMemo(() => invalid
        ? compileTextStyles(ThemeFormLabel.invalidStyle, invalidStyle, allowDefaultStyle)
        : null, [allowDefaultStyle, invalid, invalidStyle, ThemeFormLabel.invalidStyle]);
    const compiledStyles = StyleSheet.flatten([
        compiledStyle,
        compiledFilledStyle,
        compiledFocusedStyle,
        compiledInvalidStyle,
    ]);
    return <Text style={compiledStyles}>{children}</Text>;
};
Label.defaultProps = LabelDefaultProps;
Label.displayName = `${DisplayNamePrefix}FormLabel`;
export default Label;
