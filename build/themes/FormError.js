import { DefaultColor } from "./default";
export const DefaultFormErrorTheme = {
    style: {
        backgroundColor: "transparent",
        color: DefaultColor.DANGER,
        // fontFamily: "Avenir_Medium",
        fontSize: 12,
        marginTop: 2,
    },
};
const ThemeFormError = {
    style: DefaultFormErrorTheme.style,
};
export default ThemeFormError;
