import { DefaultColor, DefaultFontSize } from "./default";
import { FormInputStyle } from "../FormText";

export const DefaultFormInputTheme: Partial<FormInputStyle> = {
  style: {
    flex: 1,
    backgroundColor: "transparent",
    width: "100%",
    color: DefaultColor.TEXT,
    fontSize: DefaultFontSize.INPUT,
  },
  filledStyle: {
    color: DefaultColor.PRIMARY,
  },
  focusedStyle: {
    color: DefaultColor.PRIMARY,
  },
  invalidStyle: {},
};

const ThemeFormInput: FormInputStyle = {
  style: DefaultFormInputTheme.style,
  filledStyle: DefaultFormInputTheme.filledStyle,
  focusedStyle: DefaultFormInputTheme.focusedStyle,
  invalidStyle: DefaultFormInputTheme.invalidStyle,
};

export default ThemeFormInput;
