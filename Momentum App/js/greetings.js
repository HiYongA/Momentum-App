const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string을 반복해서 사용하게 될 경우, 에러를 줄이기 위해 대문자 변수로 고정시켜준다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // submit을 누르면 form에 class="hidden"을 추가한다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // 로컬스토리지에 username값을 입력하면 저장한다.
  localStorage.setItem(USERNAME_KEY, username);
  // input창에 유저정보를 입력한 값을 인자로 받게 되고 paintGreetings함수를 호출한다.
  paintGreetings(username);
}

// 이 함수는 그리팅(인사)을 그리는 역할을 한다.
function paintGreetings(username) {
  // 로컬스토리지에 저장된 유저정보를 텍스트로 보여준다.
  greeting.innerText = `안녕, ${username}!`;
  // hidden 클래스명을 지워서 h1인 greeting id를 보여준다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 새로고침을 하더라도 유저정보 저장유무에 따라 화면이 다르게 나타나는 로직
// getItem으로 로컬스토리지에서 유저정보 유무를 확인할 수 있다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // hidden 클래스명을 지워서 form을 보여준다.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // value값을 입력하고 submit을 하면 onLoginSubmit이벤트가 작동한다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 로컬스토리지에 저장된 값을 인자로 받게 되고 paintGreetings함수를 호출한다.
  paintGreetings(savedUsername);
}
