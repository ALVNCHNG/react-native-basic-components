import { DefaultColor } from "./default";
import { FormErrorStyle } from "../FormError";

export const DefaultFormErrorTheme: Partial<FormErrorStyle> = {
  style: {
    backgroundColor: "transparent",
    color: DefaultColor.DANGER,
    // fontFamily: "Avenir_Medium",
    fontSize: 12,
    marginTop: 2,
  },
};

const ThemeFormError: FormErrorStyle = {
  style: DefaultFormErrorTheme.style,
};

export default ThemeFormError;
