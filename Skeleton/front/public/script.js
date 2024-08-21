document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const joinBtn = document.getElementById('join-button');
  joinBtn.addEventListener('click', () => {
    window.location.href = '/join';
  });

  fetch("http://localhost:4000/endpoint")
    .then((response) => response.json())
    .then((data) => {
      root.innerHTML = data.map((item) => item.name).join("<br>");
    })
    .catch((error) => console.error("Error fetching data:", error));
});

