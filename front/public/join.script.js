import { allLightsGreen } from "../module/lightFunctions.js";
// import { validationFunctions } from "../module/validationFunctions.js";

const form = document.getElementById("join-container");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!allLightsGreen()) {
    alert("모든 값이 바른지 확인해주세요.");
    return;
  }

  const formData = new FormData(form);
  const userData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    roleID: 1,
  };

  // 모든 필드가 포함되어 있는지 확인
  if (!userData.name || !userData.email || !userData.password) {
    alert("모든 값이 입력되어 있습니다.");
    return;
  }
  try {
    const response = await fetch("http://localhost:4000/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! Status: ${response.status}`
      );
    }

    const result = await response.json();
    console.log(result);
    alert(result.message);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while sending the data.");
  }
});
