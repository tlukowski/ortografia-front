import * as Yup from "yup";

const ValidationPassword = Yup.object({
  password: Yup.string().required("Hasło jest wymagane"),
  passwordConfirm: Yup.string().test(
    "Hasła muszą być takie same",
    function (value) {
      return (
        this.parent.password === value ||
        this.createError({
          path: "passwordConfirm",
          message: "Hasła nie są identyczne",
        })
      );
    }
  ),
});

export { ValidationPassword };
