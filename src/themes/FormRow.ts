import { FormRowStyle } from "../FormRow";

export const DefaultFormRowTheme: Partial<FormRowStyle> = {
  style: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 10,
  },
};

const ThemeFormRow: FormRowStyle = {
  style: DefaultFormRowTheme.style,
};

export default ThemeFormRow;
