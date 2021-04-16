import { FormDateTimeStyles } from "../FormDateTime";
import { FormErrorStyle } from "../FormError";
import { FormGroupStyle } from "../FormGroup";
import { FormInputContainerStyle } from "../FormInputContainer";
import { FormLabelStyle } from "../FormLabel";
import { FormPickerStyle } from "../FormPicker";
import { FormRowStyle } from "../FormRow";
import { FormInputStyle } from "../FormText";

import ThemeFormDateTime from "./FormDateTime";
import ThemeFormError from "./FormError";
import ThemeFormGroup from "./FormGroup";
import ThemeFormInputContainer from "./FormInputContainer";
import ThemeFormLabel from "./FormLabel";
import ThemeFormPicker from "./FormPicker";
import ThemeFormRow from "./FormRow";
import ThemeFormText from "./FormText";

export * from "./FormDateTime";
export * from "./FormError";
export * from "./FormGroup";
export * from "./FormInputContainer";
export * from "./FormLabel";
export * from "./FormPicker";
export * from "./FormRow";
export * from "./FormText";

export {
  ThemeFormDateTime,
  ThemeFormError,
  ThemeFormGroup,
  ThemeFormInputContainer,
  ThemeFormLabel,
  ThemeFormPicker,
  ThemeFormRow,
  ThemeFormText,
};

export type Theme = {
  FormDateTime: Partial<FormDateTimeStyles>;
  FormError: Partial<FormErrorStyle>;
  FormGroup: Partial<FormGroupStyle>;
  FormInputContainer: Partial<FormInputContainerStyle>;
  FormLabel: Partial<FormLabelStyle>;
  FormPicker: Partial<FormPickerStyle>;
  FormRow: Partial<FormRowStyle>;
  FormText: Partial<FormInputStyle>;
};

const Theme: Theme = {
  FormDateTime: ThemeFormDateTime,
  FormError: ThemeFormError,
  FormGroup: ThemeFormGroup,
  FormInputContainer: ThemeFormInputContainer,
  FormLabel: ThemeFormLabel,
  FormPicker: ThemeFormPicker,
  FormRow: ThemeFormRow,
  FormText: ThemeFormText,
};

export default Theme;
