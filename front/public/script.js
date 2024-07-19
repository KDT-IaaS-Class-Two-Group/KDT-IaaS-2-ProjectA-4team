document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  fetch('http://localhost:4000/endpoint')
    .then(response => response.json())
    .then(data => {
      root.innerHTML = data.map(item => item.name).join('<br>');
    })
    .catch(error => console.error('Error fetching data:', error));
});

const root = document.getElementById('root');
const submit1 = document.getElementById('submit1');

submit1.addEventListener('click', () => {
  // localStorage.setItem// 로컬스토리지
  console.log("A")
  fetch('http://localhost:3000/end')
  .then(response => response.json())
    .then(data => {
      console.log("data")
      console.log(data)
    })
    .catch(error => console.error('Error fetching data:', error));
});