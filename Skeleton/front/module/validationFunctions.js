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

const validateField = (elementId, validator) => {
  const inputElement = document.getElementById(elementId).firstElementChild;
  console.log("Input Value:", inputElement.value);
  const errorMessageElement = document.querySelector(".error-message");

  return new Promise((resolve) => {
    inputElement.addEventListener("blur", () => {
      const result = validator(inputElement.value);
      const fieldIndex = validationFunctions.find(
        (vf) => vf.elementId === elementId
      ).index;
      if (result === true) {
        greenLight(fieldIndex);
        errorMessageElement.style.display = "none";
        resolve(true);
        console.log("초록불");
      } else {
        redLight(fieldIndex);
        errorMessageElement.style.display = "block";
        errorMessageElement.textContent = result.message; // 오류 메시지 설정
        resolve(false);
      }
    });
  });
};

const validateAllFields = async () => {
  let allValid = true;
  for (const { elementId, validator } of validationFunctions) {
    const isValid = await validateField(elementId, validator);
    if (!isValid) allValid = false;
  }
  return allValid;
};

export { validationFunctions, validateField, validateAllFields };