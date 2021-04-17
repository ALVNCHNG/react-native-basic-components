import * as React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { v4 as uuid } from "uuid";
import FormGroup, { FormGroupPropsWithChildren } from "./FormGroup";
import { ThemeFormRow } from "./themes";
import { GenericStyle } from "./types";
import { compileViewStyles, DisplayNamePrefix } from "./utils";

type stylizeFormGroup = (
  formGroupComponent: React.ReactElement<FormGroupPropsWithChildren>,
  isLastComponent?: boolean
) => JSX.Element;

export type FormRowStyle = GenericStyle<ViewStyle, "style">;

export type FormRowChildren =
  | React.ReactElement<FormGroupPropsWithChildren>
  | Array<React.ReactElement<FormGroupPropsWithChildren>>;

export type FormRowProps = ViewProps & {
  allowDefaultStyle?: boolean;
  gap?: number;
};

export interface FormRowPropsWithChildren extends FormRowProps {
  children: FormRowChildren;
}

export const FormRowDefaultProps: FormRowProps = {
  allowDefaultStyle: true,
  gap: 20,
};

const FormRow: React.FC<FormRowPropsWithChildren> = ({
  allowDefaultStyle,
  gap,
  children,
  style,
  ...viewProps
}) => {
  /**
   * Renders a ModifiedFormGroupComponent inside the FormRow with Gap passed as Style props
   * @param formGroupComponent formGroupComponent
   * @param isLastComponent boolean
   * @returns ModifiedFormGroupComponent
   */
  const stylizeFormGroupChild: stylizeFormGroup = (
    formGroupComponent,
    isLastComponent
  ) =>
    React.createElement(
      FormGroup,
      {
        ...formGroupComponent.props,
        style: StyleSheet.flatten([
          formGroupComponent.props.style,
          FormRowStyles.formGroupStyle,
          !isLastComponent && { marginRight: gap },
        ]),
        key: uuid(),
      },
      formGroupComponent.props.children
    );

  /**
   * Handles the rendering and modification of children style
   * @param childComponent formGroup | formGroup[]
   * @returns ModifiedFormGroup | ModifiedFormGroup[]
   */
  const renderModifiedChildren = (childComponent: FormRowChildren) => {
    if (!Array.isArray(childComponent)) {
      return stylizeFormGroupChild(childComponent, true);
    }

    const lastComponentIndex = childComponent.length - 1;
    return childComponent.map((formGroupComponent, formGroupComponentIndex) => {
      return stylizeFormGroupChild(
        formGroupComponent,
        formGroupComponentIndex === lastComponentIndex
      );
    });
  };

  return (
    <View
      {...viewProps}
      style={compileViewStyles(ThemeFormRow.style, style, allowDefaultStyle)}
    >
      {renderModifiedChildren(children)}
    </View>
  );
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
