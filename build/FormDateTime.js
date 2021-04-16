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
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, TouchableOpacity, } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import FormInputContainer from "./FormInputContainer";
import { ThemeFormDateTime } from "./themes";
import { compileTextStyles, DisplayNamePrefix } from "./utils";
const DefaultDateFormat = "MMM DD, YYYY";
const DefaultDateTimeFormat = "MMM DD, YYYY hh:mm A";
export const DateTimeBaseInputDefaultProps = {
    allowDefaultStyle: true,
    placeholder: "Select date",
};
export const propTypes = {
    /**
     * Format of the date to be displayed (uses a MomentJS Format)
     * @link https://momentjs.com/docs/#/displaying/
     */
    displayFormat: PropTypes.string,
    /**
     * Value
     */
    value: PropTypes.instanceOf(Date),
    /**
     * Callback that is called when selected a new date
     */
    onChange: PropTypes.func,
    /**
     * Callback that is called when input is pressed
     */
    onInputPress: PropTypes.func,
};
export const BaseFormDateTime = (_a) => {
    var { placeholder, value, invalid, allowDefaultStyle, displayFormat, mode, style, filledStyle, invalidStyle, onChange, onInputPress } = _a, otherProps = __rest(_a, ["placeholder", "value", "invalid", "allowDefaultStyle", "displayFormat", "mode", "style", "filledStyle", "invalidStyle", "onChange", "onInputPress"]);
    const [visible, setVisible] = React.useState(false);
    const valueFormat = React.useMemo(() => {
        if (!!displayFormat) {
            return displayFormat;
        }
        return mode === "date" ? DefaultDateFormat : DefaultDateTimeFormat;
    }, [displayFormat, mode]);
    const compileStyle = React.useMemo(() => compileTextStyles(ThemeFormDateTime.style, style, allowDefaultStyle), [allowDefaultStyle, style, ThemeFormDateTime.style]);
    const compiledFilledStyle = React.useMemo(() => {
        if (!value) {
            return null;
        }
        return compileTextStyles(ThemeFormDateTime.filledStyle, filledStyle, allowDefaultStyle);
    }, [allowDefaultStyle, value, filledStyle, ThemeFormDateTime.filledStyle]);
    const compiledInvalidStyle = React.useMemo(() => {
        if (!invalid) {
            return null;
        }
        return compileTextStyles(ThemeFormDateTime.invalidStyle, invalidStyle, allowDefaultStyle);
    }, [
        allowDefaultStyle,
        invalid,
        invalidStyle,
        ThemeFormDateTime.invalidStyle,
    ]);
    const handleChange = (_, selectedDate) => {
        const currentDate = selectedDate || value;
        setVisible(Platform.OS === "ios");
        return onChange && onChange(currentDate);
    };
    const handlePress = (event) => {
        setVisible(true);
        return onInputPress && onInputPress(event);
    };
    const compiledStyles = StyleSheet.flatten([
        compileStyle,
        compiledFilledStyle,
        compiledInvalidStyle,
    ]);
    return (<>
      <TouchableOpacity onPress={handlePress}>
        <Text style={compiledStyles}>
          {!!value ? moment(value).format(valueFormat) : placeholder}
        </Text>
      </TouchableOpacity>
      {visible && (<RNDateTimePicker {...otherProps} value={value || new Date()} onChange={handleChange}/>)}
    </>);
};
BaseFormDateTime.displayName = `${DisplayNamePrefix}BaseFormDateTime`;
BaseFormDateTime.propTypes = propTypes;
const FormDateTime = (_a) => {
    var { leftComponent, rightComponent, containerStyle, filledContainerStyle, focusedContainerStyle, invalidContainerStyle } = _a, inputProps = __rest(_a, ["leftComponent", "rightComponent", "containerStyle", "filledContainerStyle", "focusedContainerStyle", "invalidContainerStyle"]);
    return (<FormInputContainer filled={!!inputProps.value} invalid={!!inputProps.invalid} allowDefaultStyle={inputProps.allowDefaultStyle} style={containerStyle} filledStyle={filledContainerStyle} focusedStyle={focusedContainerStyle} invalidStyle={invalidContainerStyle}>
      <BaseFormDateTime {...inputProps}/>
    </FormInputContainer>);
};
export default FormDateTime;
