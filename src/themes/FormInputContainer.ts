import { FormInputContainerStyle } from "../FormInputContainer";
import { DefaultColor } from "./default";

export const DefaultFormInputContainerTheme: Partial<FormInputContainerStyle> = {
  style: {
    flexDirection: "row",
    borderColor: "#e1e1e5",
    borderBottomWidth: 1,
    minHeight: 30,
  },
  filledStyle: {
    borderBottomWidth: 0,
  },
  focusedStyle: {
    borderBottomColor: DefaultColor.PRIMARY,
    borderBottomWidth: 1,
  },
  invalidStyle: {
    borderBottomWidth: 1,
    borderColor: DefaultColor.DANGER,
  },
};

const ThemeFormInputContainer: FormInputContainerStyle = {
  style: DefaultFormInputContainerTheme.style,
  filledStyle: DefaultFormInputContainerTheme.filledStyle,
  focusedStyle: DefaultFormInputContainerTheme.focusedStyle,
  invalidStyle: DefaultFormInputContainerTheme.invalidStyle,
};

export default ThemeFormInputContainer;
