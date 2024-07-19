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
      roleID: 1,
    };
    console.log("userData:", userData);
    try {
      const response = await fetch("http://localhost:4000/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      console.log("res:", response);

      console.log("result:", result);
      alert(result.message);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! Status: ${response.status}`
        );
      }
      const result = await response.json();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the data.");
    }
  });
