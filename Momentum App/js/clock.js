const clock = document.querySelector("#clock");

// padStart()함수는 string에 쓸 수 있고, padding을 string의 시작부분에 추가해주는 함수이다.
// 예) "hello".padStart(20, "x") => 결과: "xxxxxxxxxxxxxxxhello"
// "1".padStart(2, "0") => 만약에 길이가 2가 아니라면 앞쪽에 "0"을 추가한다는 의미
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// website가 load되지마자 getClock()을 실행하고 매초마다 다시 실행되도록 한다.
getClock(); // getClock()을 한번 호출하면 바로 시간을 볼 수 있다.
// 특정시간마다 함수를 실행한다.
setInterval(getClock, 1000); // 1000ms=>1s(1초)
