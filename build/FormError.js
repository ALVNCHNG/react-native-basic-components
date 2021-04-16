import * as React from "react";
import { Text } from "react-native";
import { ThemeFormError } from "./themes";
import { compileTextStyles, DisplayNamePrefix } from "./utils";
export const FormErrorDefaultProps = {
    children: "",
    allowDefaultStyle: true,
};
const FormError = ({ children, allowDefaultStyle, style, }) => {
    const compiledStyles = React.useMemo(() => compileTextStyles(ThemeFormError.style, style, allowDefaultStyle), [allowDefaultStyle, style, ThemeFormError.style]);
    return <Text style={compiledStyles}>{children}</Text>;
};
FormError.defaultProps = FormErrorDefaultProps;
FormError.displayName = `${DisplayNamePrefix}FormError`;
export default FormError;
