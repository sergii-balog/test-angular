import { ValidatorFn } from "@angular/forms";
import { Option } from "./option";

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: Option[];
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
  cssClass?: string;
  description?: string;
}
