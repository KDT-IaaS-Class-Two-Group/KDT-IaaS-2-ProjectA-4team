const root = document.getElementById('root');
const logout = document.getElementById('logout');


logout.addEventListener('click', () => {
  console.log("ㅁㅁㅁ")
  fetch('http://localhost:4000/index')
  .then(response => response.json())//성공
    .then( data => {
      if (data.success) {
        console.log("aaaa")
      window.location.href = 'index.html';  // 로그아웃 성공 시 리다이렉션
    } else {
      console.log(data.message);
    }})//성공
    .catch(error => console.error('프론트 실패', error));//실패
});