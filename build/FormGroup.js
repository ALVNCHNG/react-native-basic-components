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
import { View, ViewPropTypes } from "react-native";
import { ThemeFormGroup } from "./themes";
import { compileViewStyles, DisplayNamePrefix } from "./utils";
export const FormGroupDefaultProps = {
    allowDefaultStyle: true,
    row: false,
};
const FormGroup = (_a) => {
    var { allowDefaultStyle, row, style, children } = _a, props = __rest(_a, ["allowDefaultStyle", "row", "style", "children"]);
    const compiledStyles = React.useMemo(() => {
        return compileViewStyles(row ? ThemeFormGroup.rowStyle : ThemeFormGroup.stackStyle, style, allowDefaultStyle);
    }, [allowDefaultStyle, row, style, ThemeFormGroup]);
    return (<View {...props} style={compiledStyles}>
      {children}
    </View>);
};
export const FormGroupPropTypes = Object.assign(Object.assign({}, ViewPropTypes), { type: PropTypes.oneOf(["row", "stack"]), allowDefaultStyle: PropTypes.bool, children: PropTypes.node.isRequired });
FormGroup.propTypes = FormGroupPropTypes;
FormGroup.defaultProps = FormGroupDefaultProps;
FormGroup.displayName = `${DisplayNamePrefix}FormGroup`;
export default FormGroup;
