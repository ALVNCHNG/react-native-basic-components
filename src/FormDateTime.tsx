import * as React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import RNDateTimePicker, {
  Event,
} from "@react-native-community/datetimepicker";
import moment from "moment";

import FormInputContainer from "./FormInputContainer";
import { ThemeFormDateTime } from "./themes";
import {
  BaseInputProps,
  BaseInputWIthContainerProps,
  DefaultInputStyles,
  GenericStyle,
} from "./types";
import { compileTextStyles, DisplayNamePrefix } from "./utils";

const DefaultDateFormat = "MMM DD, YYYY";
const DefaultDateTimeFormat = "MMM DD, YYYY hh:mm A";

type OmittedFormDateTimePicker = Omit<
  React.ComponentProps<typeof RNDateTimePicker>,
  "style" | "value" | "onChange"
>;

type OmittedFormDateTimeProps = Omit<
  BaseInputWIthContainerProps,
  "FocusableInputContainerStyles" | "FocusableInputStyles"
>;

export type FormDateTimeStyles = GenericStyle<TextStyle, DefaultInputStyles>;

export interface BaseFormDateTimeProps
  extends OmittedFormDateTimePicker,
    BaseInputProps,
    Partial<FormDateTimeStyles> {
  displayFormat?: string;
  value?: Date | null;
  onChange?: (value: Date) => any;
  onInputPress?: TouchableOpacityProps["onPress"];
}

export interface FormDateTimeProps
  extends OmittedFormDateTimeProps,
    BaseFormDateTimeProps {}

export const DateTimeBaseInputDefaultProps: FormDateTimeProps = {
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

export const BaseFormDateTime: React.FC<FormDateTimeProps> = ({
  placeholder,
  value,
  invalid,
  allowDefaultStyle,
  displayFormat,
  mode,
  style,
  filledStyle,
  invalidStyle,
  onChange,
  onInputPress,
  ...otherProps
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const valueFormat = React.useMemo(() => {
    if (!!displayFormat) {
      return displayFormat;
    }

    return mode === "date" ? DefaultDateFormat : DefaultDateTimeFormat;
  }, [displayFormat, mode]);

  const compileStyle = React.useMemo(
    () => compileTextStyles(ThemeFormDateTime.style, style, allowDefaultStyle),
    [allowDefaultStyle, style, ThemeFormDateTime.style]
  );

  const compiledFilledStyle = React.useMemo(() => {
    if (!value) {
      return null;
    }

    return compileTextStyles(
      ThemeFormDateTime.filledStyle,
      filledStyle,
      allowDefaultStyle
    );
  }, [allowDefaultStyle, value, filledStyle, ThemeFormDateTime.filledStyle]);

  const compiledInvalidStyle = React.useMemo(() => {
    if (!invalid) {
      return null;
    }

    return compileTextStyles(
      ThemeFormDateTime.invalidStyle,
      invalidStyle,
      allowDefaultStyle
    );
  }, [
    allowDefaultStyle,
    invalid,
    invalidStyle,
    ThemeFormDateTime.invalidStyle,
  ]);

  const handleChange = (_: Event, selectedDate: Date) => {
    const currentDate = selectedDate || value;
    setVisible(Platform.OS === "ios");
    return onChange && onChange(currentDate);
  };

  const handlePress: TouchableOpacityProps["onPress"] = (event) => {
    setVisible(true);
    return onInputPress && onInputPress(event);
  };

  const compiledStyles = StyleSheet.flatten([
    compileStyle,
    compiledFilledStyle,
    compiledInvalidStyle,
  ]);

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <Text style={compiledStyles}>
          {!!value ? moment(value).format(valueFormat) : placeholder}
        </Text>
      </TouchableOpacity>
      {visible && (
        <RNDateTimePicker
          {...otherProps}
          value={value || new Date()}
          onChange={handleChange}
        />
      )}
    </>
  );
};

BaseFormDateTime.displayName = `${DisplayNamePrefix}BaseFormDateTime`;
BaseFormDateTime.propTypes = propTypes;

const FormDateTime: React.FC<
  FormDateTimeProps & BaseInputWIthContainerProps
> = ({
  leftComponent,
  rightComponent,
  containerStyle,
  filledContainerStyle,
  focusedContainerStyle,
  invalidContainerStyle,
  ...inputProps
}) => {
  return (
    <FormInputContainer
      filled={!!inputProps.value}
      invalid={!!inputProps.invalid}
      allowDefaultStyle={inputProps.allowDefaultStyle}
      style={containerStyle}
      filledStyle={filledContainerStyle}
      focusedStyle={focusedContainerStyle}
      invalidStyle={invalidContainerStyle}
    >
      <BaseFormDateTime {...inputProps} />
    </FormInputContainer>
  );
};

export default FormDateTime;
