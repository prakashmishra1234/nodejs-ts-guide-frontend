import * as yup from "yup";

export const LoginSchema = yup.object({
  CountryCode: yup.string().required("Country code is required").default("+91"),
  Mobile: yup
    .string()
    .matches(/^[0-9+]*$/, "Please enter a valid mobile number.")
    .required("Please enter mobile.")
    .default(""),
  Otp: yup
    .string()
    .default("")
    .when("FormIndex", {
      is: 1,
      then: (schema) => schema.required("Otp is required."),
      otherwise: (schema) => schema.notRequired(),
    }),
  FormIndex: yup.number().default(0),
});

export type LoginModel = yup.InferType<typeof LoginSchema>;
