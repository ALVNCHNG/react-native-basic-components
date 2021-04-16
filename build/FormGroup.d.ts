import * as React from "react";
import PropTypes from "prop-types";
import { ViewProps, ViewStyle } from "react-native";
import { GenericStyle } from "./types";
export declare type FormGroupTypes = "row" | "stack";
export declare type FormGroupStyle = GenericStyle<ViewStyle, "rowStyle" | "stackStyle">;
export declare type FormGroupProps = ViewProps & Partial<FormGroupStyle> & {
    allowDefaultStyle?: boolean;
    row?: boolean;
};
export interface FormGroupPropsWithChildren extends React.PropsWithChildren<FormGroupProps> {
}
export declare const FormGroupDefaultProps: FormGroupProps;
declare const FormGroup: React.FC<FormGroupPropsWithChildren>;
export declare const FormGroupPropTypes: {
    type: PropTypes.Requireable<string>;
    allowDefaultStyle: PropTypes.Requireable<boolean>;
    children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    hitSlop?: PropTypes.Validator<import("react-native").Insets>;
    onLayout?: PropTypes.Validator<(event: import("react-native").LayoutChangeEvent) => void>;
    pointerEvents?: PropTypes.Validator<"none" | "auto" | "box-none" | "box-only">;
    removeClippedSubviews?: PropTypes.Validator<boolean>;
    style?: PropTypes.Validator<import("react-native").StyleProp<ViewStyle>>;
    testID?: PropTypes.Validator<string>;
    nativeID?: PropTypes.Validator<string>;
    collapsable?: PropTypes.Validator<boolean>;
    needsOffscreenAlphaCompositing?: PropTypes.Validator<boolean>;
    renderToHardwareTextureAndroid?: PropTypes.Validator<boolean>;
    focusable?: PropTypes.Validator<boolean>;
    shouldRasterizeIOS?: PropTypes.Validator<boolean>;
    isTVSelectable?: PropTypes.Validator<boolean>;
    hasTVPreferredFocus?: PropTypes.Validator<boolean>;
    tvParallaxProperties?: PropTypes.Validator<import("react-native").TVParallaxProperties>;
    tvParallaxShiftDistanceX?: PropTypes.Validator<number>;
    tvParallaxShiftDistanceY?: PropTypes.Validator<number>;
    tvParallaxTiltAngle?: PropTypes.Validator<number>;
    tvParallaxMagnification?: PropTypes.Validator<number>;
    onStartShouldSetResponder?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
    onMoveShouldSetResponder?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
    onResponderEnd?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onResponderGrant?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onResponderReject?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onResponderMove?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onResponderRelease?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onResponderStart?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onResponderTerminationRequest?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
    onResponderTerminate?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onStartShouldSetResponderCapture?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
    onMoveShouldSetResponderCapture?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => boolean>;
    onTouchStart?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onTouchMove?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onTouchEnd?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onTouchCancel?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    onTouchEndCapture?: PropTypes.Validator<(event: import("react-native").GestureResponderEvent) => void>;
    accessible?: PropTypes.Validator<boolean>;
    accessibilityActions?: PropTypes.Validator<readonly Readonly<{
        name: string;
        label?: string;
    }>[]>;
    accessibilityLabel?: PropTypes.Validator<string>;
    accessibilityRole?: PropTypes.Validator<import("react-native").AccessibilityRole>;
    accessibilityState?: PropTypes.Validator<import("react-native").AccessibilityState>;
    accessibilityHint?: PropTypes.Validator<string>;
    accessibilityValue?: PropTypes.Validator<import("react-native").AccessibilityValue>;
    onAccessibilityAction?: PropTypes.Validator<(event: import("react-native").AccessibilityActionEvent) => void>;
    accessibilityLiveRegion?: PropTypes.Validator<"none" | "polite" | "assertive">;
    importantForAccessibility?: PropTypes.Validator<"auto" | "yes" | "no" | "no-hide-descendants">;
    accessibilityElementsHidden?: PropTypes.Validator<boolean>;
    accessibilityViewIsModal?: PropTypes.Validator<boolean>;
    onAccessibilityEscape?: PropTypes.Validator<() => void>;
    onAccessibilityTap?: PropTypes.Validator<() => void>;
    onMagicTap?: PropTypes.Validator<() => void>;
    accessibilityIgnoresInvertColors?: PropTypes.Validator<boolean>;
};
export default FormGroup;
