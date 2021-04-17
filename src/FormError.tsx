import * as React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { ThemeFormError } from "./themes";
import { GenericStyle } from "./types";
import { compileTextStyles, DisplayNamePrefix } from "./utils";

export type FormErrorStyle = GenericStyle<TextStyle, "style">;

export type FormErrorProps = TextProps & {
  children: string;
  allowDefaultStyle?: boolean;
};

export const FormErrorDefaultProps: FormErrorProps = {
  children: "",
  allowDefaultStyle: true,
};

const FormError: React.FC<FormErrorProps> = ({
  children,
  allowDefaultStyle,
  style,
}) => (
  <Text
    style={compileTextStyles(ThemeFormError.style, style, allowDefaultStyle)}
  >
    {children}
  </Text>
);

FormError.defaultProps = FormErrorDefaultProps;
FormError.displayName = `${DisplayNamePrefix}FormError`;

export default FormError;
