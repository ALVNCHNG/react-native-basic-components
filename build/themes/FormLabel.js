import { DefaultColor, DefaultFontSize } from "./default";
export const DefaultFormLabelTheme = {
    style: {
        backgroundColor: "transparent",
        color: "#5d646c",
        // fontFamily: "Gilroy_Medium",
        fontSize: DefaultFontSize.INPUT,
        marginBottom: 4,
    },
    filledStyle: {},
    focusedStyle: {},
    invalidStyle: {
        color: DefaultColor.DANGER,
    },
};
const ThemeFormLabel = {
    style: DefaultFormLabelTheme.style,
    filledStyle: DefaultFormLabelTheme.filledStyle,
    focusedStyle: DefaultFormLabelTheme.focusedStyle,
    invalidStyle: DefaultFormLabelTheme.invalidStyle,
};
export default ThemeFormLabel;
