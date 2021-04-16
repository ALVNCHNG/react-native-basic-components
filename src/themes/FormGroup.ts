import { FormGroupStyle } from "../FormGroup";

export const DefaultFormGroupTheme: Partial<FormGroupStyle> = {
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  stackStyle: {
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    marginBottom: 10,
  },
};

const ThemeInputGroup: FormGroupStyle = {
  rowStyle: DefaultFormGroupTheme.rowStyle,
  stackStyle: DefaultFormGroupTheme.stackStyle,
};

export default ThemeInputGroup;
