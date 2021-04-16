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
import { v4 as uuid } from "uuid";
import FormGroup from "./FormGroup";
import { ThemeFormRow } from "./themes";
import { compileViewStyles, DisplayNamePrefix } from "./utils";
export const FormRowDefaultProps = {
    allowDefaultStyle: true,
    gap: 20,
};
const FormRow = (_a) => {
    var { allowDefaultStyle, gap, children, style } = _a, viewProps = __rest(_a, ["allowDefaultStyle", "gap", "children", "style"]);
    const compiledStyle = React.useMemo(() => compileViewStyles(ThemeFormRow.style, style, allowDefaultStyle), [allowDefaultStyle, style, ThemeFormRow.style]);
    /**
     * Renders a ModifiedformGroupComponent inside the FormRow with style passed as props
     * @param formGroupComponent formGroupComponent
     * @param isLastComponent boolean
     * @returns ModifiedformGroupComponent
     */
    const stylizeformGroupChild = (formGroupComponent, isLastComponent) => React.createElement(FormGroup, Object.assign(Object.assign({}, formGroupComponent.props), { style: [
            FormRowStyles.formGroupStyle,
            !isLastComponent && { marginRight: gap },
        ], key: uuid() }), formGroupComponent.props.children);
    /**
     * Handles the rendering and modification of children style
     * @param childComponent formGroup | formGroup[]
     * @returns ModifiedformGroup | ModifiedformGroup[]
     */
    const renderModifiedChildren = (childComponent) => {
        if (!Array.isArray(childComponent)) {
            return stylizeformGroupChild(childComponent, true);
        }
        const lastComponentIndex = childComponent.length - 1;
        return childComponent.map((formGroupComponent, formGroupComponentIndex) => {
            return stylizeformGroupChild(formGroupComponent, formGroupComponentIndex === lastComponentIndex);
        });
    };
    return (<View {...viewProps} style={compiledStyle}>
      {renderModifiedChildren(children)}
    </View>);
};
FormRow.defaultProps = FormRowDefaultProps;
FormRow.displayName = `${DisplayNamePrefix}FormRow`;
export const FormRowStyles = StyleSheet.create({
    formGroupStyle: {
        flex: 1,
        marginBottom: 0,
    },
});
export default FormRow;
