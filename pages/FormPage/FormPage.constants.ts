import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email Address is Required"),
  numeric: yup
    .number()
    .typeError("This field should be a zero or positive number")
    .min(0, "This number should be greater than 0")
    .required("Number is Required"),
  text: yup.string().required("Text is Required"),
});
