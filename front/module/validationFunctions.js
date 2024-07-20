import ValidateName from "./Vaildate/ValidateName.js";
import ValidateEmail from "./Vaildate/ValidateEmail.js";
import ValidatePassword from "./Vaildate/ValidatePassword.js";
import ValidatePasswordCheck from "./Vaildate/ValidatePasswordCheck.js";
import { greenLight, redLight } from "./lightFunctions.js";

const validationFunctions = [
  { elementId: "name", validator: ValidateName, index: 0 },
  { elementId: "email", validator: ValidateEmail, index: 1 },
  { elementId: "password", validator: ValidatePassword, index: 2 },
  {
    elementId: "password-check",
    validator: (value) =>
      ValidatePasswordCheck(
        document.getElementById("password").firstElementChild.value,
        value
      ),
    index: 3,
  },
];

validationFunctions.forEach(({ elementId, validator, index }) => {
  const inputElement = document.getElementById(elementId).firstElementChild;
  const errorMessageElement = document.querySelector(".error-message");

  inputElement.addEventListener("blur", () => {
    const result = validator(inputElement.value);
    if (result === true) {
      greenLight(index);
      errorMessageElement.style.display = "none";
    } else {
      redLight(index);
      errorMessageElement.style.display = "block";
      errorMessageElement.textContent = result.message; // 오류 메시지 설정
    }
  });
});

export { validationFunctions };
