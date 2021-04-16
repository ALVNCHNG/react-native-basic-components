var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeFormInputContainer } from "./themes";
import { compileViewStyles, DisplayNamePrefix } from "./utils";
export const InputContainerDefaultProps = {
    allowDefaultStyle: false,
};
const FormInputContainer = (_a) => {
    var { children, allowDefaultStyle, filled, focused, invalid, style, filledStyle, focusedStyle, invalidStyle } = _a, otherProps = __rest(_a, ["children", "allowDefaultStyle", "filled", "focused", "invalid", "style", "filledStyle", "focusedStyle", "invalidStyle"]);
    const compiledStyle = React.useMemo(() => {
        return compileViewStyles(ThemeFormInputContainer.style, style, allowDefaultStyle);
    }, [allowDefaultStyle, style, ThemeFormInputContainer.style]);
    const compiledFilledStyle = React.useMemo(() => {
        if (!filled) {
            return null;
        }
        return compileViewStyles(ThemeFormInputContainer.filledStyle, filledStyle, allowDefaultStyle);
    }, [
        allowDefaultStyle,
        filled,
        filledStyle,
        ThemeFormInputContainer.filledStyle,
    ]);
    const compiledFocusedStyle = React.useMemo(() => {
        if (!focused) {
            return null;
        }
        return compileViewStyles(ThemeFormInputContainer.focusedStyle, focusedStyle, allowDefaultStyle);
    }, [
        allowDefaultStyle,
        focused,
        focusedStyle,
        ThemeFormInputContainer.focusedStyle,
    ]);
    const compiledInvalidStyle = React.useMemo(() => {
        if (!invalid) {
            return null;
        }
        return compileViewStyles(ThemeFormInputContainer.invalidStyle, invalidStyle, allowDefaultStyle);
    }, [
        allowDefaultStyle,
        invalid,
        invalidStyle,
        ThemeFormInputContainer.invalidStyle,
    ]);
    const compiledStyles = StyleSheet.flatten([
        compiledStyle,
        compiledFilledStyle,
        compiledFocusedStyle,
        compiledInvalidStyle,
    ]);
    if (!!invalid)
        console.log("compiledInvalidStyle: ", compiledStyles);
    return (<View {...otherProps} style={compiledStyles}>
      {children}
    </View>);
};
FormInputContainer.defaultProps = InputContainerDefaultProps;
FormInputContainer.displayName = `${DisplayNamePrefix}FormInputContainer`;
export default FormInputContainer;
