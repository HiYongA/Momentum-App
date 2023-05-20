const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

// string을 반복해서 사용하게 될 경우, 에러를 줄이기 위해 대문자 변수로 고정시켜준다.
const TODOS_KEY = "todos";

let toDos = [];

// 로컬스토리지에 toDos를 저장하는 함수
function saveToDos() {
  // "todos"를 string의 형태로 array에 넣으려면 JSON.stringify()객체를 사용하면 된다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// delete button click 이벤트 리스너
function deleteToDo(event) {
  // parentElement(부모요소)는 li, 작성된 투두를 찾아준다.
  const li = event.target.parentElement;
  // ❌버튼을 누르면 작성된 투투가 삭제된다.
  li.remove();
  // filter함수: 지우고 싶은 아이템을 빼고 새 배열을 만들기
  // todos배열 중 li의 id를 제외한 다른 id들을 toDos에 업데이트해준다.
  // 밑에 있는 todo는 toDos DB에 있는 요소 중 하나이다!
  // li.id는 string타입, todo.id는 number타입이므로, 문자열을 숫자로 바꿔주는 parseInt함수를 사용한다.
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  // 그리고 나서 toDos를 로컬스토리지에 저장한다.
  saveToDos();
}

// 이 함수는 투두를 그리는 역할을 한다.
function paintToDo(newTodo) {
  // <li id="13423"><span>text</span><button>delete</button></li>
  //    => 나중에 투두를 삭제하는 버튼을 만들기 위해 span태그를 이용하는 것이다.
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  // li의 자식은 span, button
  li.appendChild(span);
  li.appendChild(button);
  // toDoList는 <ul>태그를 가리키며, ul안에 li를 추가한다.
  toDoList.appendChild(li);
}

// Input submit 이벤트 리스너
function handleToDoSubmit(event) {
  event.preventDefault();
  // input창의 현재 value값을 저장하기 위해 새로운 변수에 할당한다.
  const newTodo = toDoInput.value;
  // newTodo변수와는 상관 없이 enter를 누름과 동시에 인풋 밸류를 초기화 해준다.
  toDoInput.value = "";
  // toDoInput.value값이 empty()로 적용되었기 때문에 콘솔창에 안 보인다.
  // console.log(newTodo, toDoInput.value);

  // Date.now()는 밀리초(1000분의 1초)를 주는 함수로, 랜덤 숫자로 사용한다.
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  // newTodoObj의 인풋값을 toDos리스트에 담는다.
  toDos.push(newTodoObj);
  // 그런 다음 newTodoObj의 인풋값을 화면에 그려준다.
  paintToDo(newTodoObj);
  // 그리고 나서 toDos를 로컬스토리지에 저장한다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// JSON.parse(): 전달받은 문자열을 자바스크립트 객체로 변환한다. => {name:"jin",age:"20"}
// JSON.stringify(): 자바스크립트 객체를 문자열로 변환한다. => {"name":"jin","age":"20"}

// 새로고침을 하더라도 로컬스토리지에 저장된 투두를 불러와 화면에 보여주는 로직
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // toDos배열을 가져와서 빈값이 아닌 로컬스토리지에 저장된 투두를 복원해준다.
  toDos = parsedToDos;
  // forEach()는 array의 각 item에 대해 function을 실행해준다.
  // 로컬스토리지에 저장된 투두를 불러와서 화면에 그려준다.
  parsedToDos.forEach(paintToDo);
}
