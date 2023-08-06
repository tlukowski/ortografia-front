import * as Yup from "yup";

const ValidationEmail = Yup.object({
  email: Yup.string().email("Nieprawidłowy email").required("wymagane"),
});

export {ValidationEmail};
