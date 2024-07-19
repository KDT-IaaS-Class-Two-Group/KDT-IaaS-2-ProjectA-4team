// import { ValidateName } from "../module/Vaildate/ValidateName";
// import { ValidateEmail } from "../module/Vaildate/ValidateEmail";
// import { ValidatePassword } from "../module/Vaildate/ValidatePassword";
// import { validatePasswordCheck } from "../module/Vaildate/ValidatePasswordCheck";
// import { getEffectiveTypeParameterDeclarations } from "typescript";

document
  .getElementById("join-button")
  .addEventListener("click", async function () {
    const form = document.getElementById("join-container");
    const formData = new FormData(form);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      testPw: formData.get("test-pw"),
    };
    console.log("userData:", userData);
    try {
      const response = await fetch("http://localhost:4000/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("res:", response);

      const result = await response.json();

      console.log("result:", result);
      alert(result.message);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the data.");
    }
  });
