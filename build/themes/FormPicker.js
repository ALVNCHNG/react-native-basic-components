import { DefaultColor, DefaultFontSize } from "./default";
export const DefaultFormPickerTheme = {
    style: {
        marginLeft: -6,
        marginRight: -10,
        flex: 1,
        backgroundColor: "transparent",
        width: "100%",
        color: DefaultColor.TEXT,
        fontSize: DefaultFontSize.INPUT,
    },
    filledStyle: {
        color: DefaultColor.PRIMARY,
    },
    invalidStyle: {},
};
const ThemeFormPicker = {
    style: DefaultFormPickerTheme.style,
    filledStyle: DefaultFormPickerTheme.filledStyle,
    invalidStyle: DefaultFormPickerTheme.invalidStyle,
};
export default ThemeFormPicker;
