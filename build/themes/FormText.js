import { DefaultColor, DefaultFontSize } from "./default";
export const DefaultFormInputTheme = {
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
const ThemeFormInput = {
    style: DefaultFormInputTheme.style,
    filledStyle: DefaultFormInputTheme.filledStyle,
    focusedStyle: DefaultFormInputTheme.focusedStyle,
    invalidStyle: DefaultFormInputTheme.invalidStyle,
};
export default ThemeFormInput;
