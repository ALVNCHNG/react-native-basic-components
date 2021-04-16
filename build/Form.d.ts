/// <reference types="react" />
import FormDateTime from "./FormDateTime";
import FormError from "./FormError";
import FormGroup from "./FormGroup";
import FormInputContainer from "./FormInputContainer";
import FormLabel from "./FormLabel";
import BaseFormPicker from "./FormPicker";
import FormRow from "./FormRow";
import FormText from "./FormText";
export declare type Form = {
    DateTime: typeof FormDateTime;
    Error: typeof FormError;
    Group: typeof FormGroup;
    InputContainer: typeof FormInputContainer;
    Label: typeof FormLabel;
    Picker: typeof BaseFormPicker;
    Row: typeof FormRow;
    Text: typeof FormText;
};
declare const Form: {
    DateTime: import("react").FC<import("./FormDateTime").FormDateTimeProps & import("./types").BaseInputWIthContainerProps>;
    Error: import("react").FC<import("./FormError").FormErrorProps>;
    Group: import("react").FC<import("./FormGroup").FormGroupPropsWithChildren>;
    InputContainer: import("react").FC<import("./FormInputContainer").FormInputContainerPropsWithChildren>;
    Label: import("react").FC<import("./FormLabel").FormLabelProps>;
    Picker: import("react").FC<import("./FormPicker").FormPickerProps & import("./types").BaseInputWIthContainerProps> & {
        Item: import("react").ComponentType<import("@react-native-picker/picker/typings/Picker").PickerItemProps<import("@react-native-picker/picker/typings/Picker").ItemValue>>;
    };
    Row: import("react").FC<import("./FormRow").FormRowPropsWithChildren>;
    Text: import("react").ForwardRefExoticComponent<import("./FormText").FormInputProps & import("./types").BaseInputWIthContainerProps & import("react").RefAttributes<import("react-native").TextInput>>;
};
export default Form;
