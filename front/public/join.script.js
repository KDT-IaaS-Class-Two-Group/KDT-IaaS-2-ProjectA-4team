// import { ValidateName } from "../module/Vaildate/ValidateName";
// import { ValidateEmail } from "../module/Vaildate/ValidateEmail";
// import { ValidatePassword } from "../module/Vaildate/ValidatePassword";
// import { validatePasswordCheck } from "../module/Vaildate/ValidatePasswordCheck";
// import { getEffectiveTypeParameterDeclarations } from "typescript";

// document
//   .getElementById("join-container")
//   .addEventListener("submit", async function () {
//     const form = document.getElementById("join-container");
//     const formData = new FormData(form);
//     const userData = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       password: formData.get("password"),
//       roleID: 1,
//     };
//     this.setAttributeNS;
//     console.log("userData:", userData);
//     try {
//       const response = await fetch("http://localhost:4000/join", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userData }),
//         credentials: "include",
//       });
//       console.log("res:", response);

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           errorData.message || `HTTP error! Status: ${response.status}`
//         );
//       }
//       const result = await response.json();
//       console.log("result:", result);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while sending the data.");
//     }
//   });

const form = document.getElementById("join-container");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const userData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    roleID: 1,
  };
  const response = await fetch("http://localhost:4000/join", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userData }),
  });
  try {
    if (!response.ok) {
      throw new Error("문혜림 불량");
    }
    const result = response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
