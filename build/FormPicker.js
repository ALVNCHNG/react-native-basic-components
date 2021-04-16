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
import { StyleSheet } from "react-native";
import { Picker as RNPicker } from "@react-native-picker/picker";
import { v4 as uuid } from "uuid";
import FormInputContainer from "./FormInputContainer";
import { ThemeFormPicker } from "./themes";
import { compileTextStyles, DisplayNamePrefix } from "./utils";
export const FormPickerDefaultProps = {
    allowDefaultStyle: true,
    placeholder: "No Options",
};
export const FormPickerItem = RNPicker.Item;
export const BaseFormPicker = (_a) => {
    var { options, children, value, selectedValue, invalid, allowDefaultStyle, placeholder, style, filledStyle, invalidStyle } = _a, otherProps = __rest(_a, ["options", "children", "value", "selectedValue", "invalid", "allowDefaultStyle", "placeholder", "style", "filledStyle", "invalidStyle"]);
    const compiledStyle = React.useMemo(() => {
        return compileTextStyles(ThemeFormPicker.style, style, allowDefaultStyle);
    }, [allowDefaultStyle, style, ThemeFormPicker.style]);
    const compiledFilledStyle = React.useMemo(() => {
        if (!value && !selectedValue) {
            return null;
        }
        return compileTextStyles(ThemeFormPicker.filledStyle, filledStyle, allowDefaultStyle);
    }, [
        allowDefaultStyle,
        value,
        selectedValue,
        filledStyle,
        ThemeFormPicker.filledStyle,
    ]);
    const compiledInvalidStyle = React.useMemo(() => {
        if (!invalid) {
            return null;
        }
        return compileTextStyles(ThemeFormPicker.invalidStyle, invalidStyle, allowDefaultStyle);
    }, [allowDefaultStyle, invalid, invalidStyle, ThemeFormPicker.invalidStyle]);
    const generateOptions = (options) => {
        if (!options || options.length === 0) {
            return <RNPicker.Item label={placeholder} value="" key={uuid()}/>;
        }
        return options.map((item) => (<RNPicker.Item label={item.label} value={item.value} key={uuid()}/>));
    };
    const compiledStyles = StyleSheet.flatten([
        compiledStyle,
        compiledFilledStyle,
        compiledInvalidStyle,
    ]);
    return (<RNPicker {...otherProps} selectedValue={selectedValue} style={compiledStyles}>
      {children ? children : generateOptions(options)}
    </RNPicker>);
};
BaseFormPicker.defaultProps = FormPickerDefaultProps;
BaseFormPicker.displayName = `${DisplayNamePrefix}BaseFormPicker`;
const FormPicker = (_a) => {
    var { leftComponent, rightComponent, containerStyle, filledContainerStyle, focusedContainerStyle, invalidContainerStyle } = _a, inputProps = __rest(_a, ["leftComponent", "rightComponent", "containerStyle", "filledContainerStyle", "focusedContainerStyle", "invalidContainerStyle"]);
    return (<FormInputContainer filled={!!inputProps.value} invalid={!!inputProps.invalid} allowDefaultStyle={inputProps.allowDefaultStyle} style={containerStyle} filledStyle={filledContainerStyle} focusedStyle={focusedContainerStyle} invalidStyle={invalidContainerStyle}>
      {leftComponent && leftComponent()}
      <BaseFormPicker {...inputProps}/>
      {rightComponent && rightComponent()}
    </FormInputContainer>);
};
export default Object.assign(FormPicker, { Item: FormPickerItem });
