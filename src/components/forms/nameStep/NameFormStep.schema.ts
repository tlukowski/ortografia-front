import * as Yup from "yup";

export default Yup.object({
  username: Yup.string()
    .min(3, "Zbyt któtkie!")
    .max(12, "Zbyt długie!")
    .required("Pole wymagane"),
});
