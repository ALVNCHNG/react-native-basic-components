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
import { StyleSheet, TextInput as RNTextInput, } from "react-native";
import FormInputContainer from "./FormInputContainer";
import { ThemeFormText } from "./themes";
import { compileTextStyles, DisplayNamePrefix } from "./utils";
export const TextInputDefaultProps = {
    allowDefaultStyle: true,
};
export const BaseFormText = React.forwardRef((_a, ref) => {
    var { allowDefaultStyle, invalid, value, style, filledStyle, focusedStyle, invalidStyle, onBlur, onChange, onFocus } = _a, props = __rest(_a, ["allowDefaultStyle", "invalid", "value", "style", "filledStyle", "focusedStyle", "invalidStyle", "onBlur", "onChange", "onFocus"]);
    const [focused, setFocused] = React.useState(false);
    const compiledStyle = React.useMemo(() => {
        return compileTextStyles(ThemeFormText.style, style, allowDefaultStyle);
    }, [allowDefaultStyle, style, ThemeFormText.style]);
    const compiledFilledStyle = React.useMemo(() => {
        if (!value) {
            return null;
        }
        return compileTextStyles(ThemeFormText.filledStyle, filledStyle, allowDefaultStyle);
    }, [allowDefaultStyle, value, filledStyle, ThemeFormText.filledStyle]);
    const compiledFocusedStyle = React.useMemo(() => {
        if (!focused) {
            return null;
        }
        return compileTextStyles(ThemeFormText.focusedStyle, focusedStyle, allowDefaultStyle);
    }, [allowDefaultStyle, focused, focusedStyle, ThemeFormText.focusedStyle]);
    const compiledInvalidStyle = React.useMemo(() => {
        if (!invalid) {
            return null;
        }
        return compileTextStyles(ThemeFormText.invalidStyle, invalidStyle, allowDefaultStyle);
    }, [allowDefaultStyle, invalid, invalidStyle, ThemeFormText.invalidStyle]);
    const handleBlur = (event) => {
        setFocused(false);
        onBlur && onBlur(event);
    };
    const handleFocus = (event) => {
        setFocused(true);
        onFocus && onFocus(event);
    };
    const compiledStyles = StyleSheet.flatten([
        compiledStyle,
        compiledFilledStyle,
        compiledFocusedStyle,
        compiledInvalidStyle,
    ]);
    return (<RNTextInput {...props} onChangeText={onChange} onFocus={handleFocus} onBlur={handleBlur} style={compiledStyles} value={value} ref={ref}/>);
});
BaseFormText.defaultProps = TextInputDefaultProps;
BaseFormText.displayName = `${DisplayNamePrefix}FormText`;
const FormText = React.forwardRef((_a, ref) => {
    var { leftComponent, rightComponent, containerStyle, filledContainerStyle, focusedContainerStyle, invalidContainerStyle } = _a, inputProps = __rest(_a, ["leftComponent", "rightComponent", "containerStyle", "filledContainerStyle", "focusedContainerStyle", "invalidContainerStyle"]);
    console.log("Ref: ", ref);
    return (<FormInputContainer filled={!!inputProps.value} invalid={!!inputProps.invalid} allowDefaultStyle={inputProps.allowDefaultStyle} style={containerStyle} filledStyle={filledContainerStyle} focusedStyle={focusedContainerStyle} invalidStyle={invalidContainerStyle}>
        <BaseFormText {...inputProps} ref={ref}/>
      </FormInputContainer>);
});
export default FormText;
