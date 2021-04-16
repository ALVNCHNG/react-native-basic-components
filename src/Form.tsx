import FormDateTime from "./FormDateTime";
import FormError from "./FormError";
import FormGroup from "./FormGroup";
import FormInputContainer from "./FormInputContainer";
import FormLabel from "./FormLabel";
import BaseFormPicker from "./FormPicker";
import FormRow from "./FormRow";
import FormText from "./FormText";

export type Form = {
  DateTime: typeof FormDateTime;
  Error: typeof FormError;
  Group: typeof FormGroup;
  InputContainer: typeof FormInputContainer;
  Label: typeof FormLabel;
  Picker: typeof BaseFormPicker;
  Row: typeof FormRow;
  Text: typeof FormText;
};

const Form = {
  DateTime: FormDateTime,
  Error: FormError,
  Group: FormGroup,
  InputContainer: FormInputContainer,
  Label: FormLabel,
  Picker: BaseFormPicker,
  Row: FormRow,
  Text: FormText,
};

export default Form;
