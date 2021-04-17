import * as React from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes, ViewProps, ViewStyle } from "react-native";
import { ThemeFormGroup } from "./themes";
import { GenericStyle } from "./types";
import { compileViewStyles, DisplayNamePrefix } from "./utils";

export type FormGroupTypes = "row" | "stack";

export type FormGroupStyle = GenericStyle<ViewStyle, "rowStyle" | "stackStyle">;

export type FormGroupProps = ViewProps &
  Partial<FormGroupStyle> & {
    allowDefaultStyle?: boolean;
    row?: boolean;
  };

export interface FormGroupPropsWithChildren
  extends React.PropsWithChildren<FormGroupProps> {}

export const FormGroupDefaultProps: FormGroupProps = {
  allowDefaultStyle: true,
  row: false,
};

const FormGroup: React.FC<FormGroupPropsWithChildren> = ({
  allowDefaultStyle,
  row,
  style,
  children,
  ...props
}) => (
  <View
    {...props}
    style={compileViewStyles(
      row ? ThemeFormGroup.rowStyle : ThemeFormGroup.stackStyle,
      style,
      allowDefaultStyle
    )}
  >
    {children}
  </View>
);

export const FormGroupPropTypes = {
  ...ViewPropTypes,
  type: PropTypes.oneOf(["row", "stack"]),
  allowDefaultStyle: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

FormGroup.propTypes = FormGroupPropTypes;
FormGroup.defaultProps = FormGroupDefaultProps;
FormGroup.displayName = `${DisplayNamePrefix}FormGroup`;

export default FormGroup;
