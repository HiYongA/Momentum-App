// 이 로직으로 유저의 위치를 파악할 수 있다.

const API_KEY = "ff280de819239368e6ab7ddec00c0fd8";

function onGeoSuccess(position) {
  // 위치-> 좌표 -> 위도
  const lat = position.coords.latitude;
  // 위치-> 좌표 -> 경도
  const lon = position.coords.longitude;
  // openweathermap.org/current <= API문서를 보면 위치에 대한 현재 날씨를 얻을 수 있다.
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // 자바스크립트가 url을 부른다.
  fetch(url) // 이 URL로 웹 통신을 요청한다. 괄호 안에 다른 것이 없다면 GET!
    .then((res) => res.json()) // 통신 요청을 받은 데이터는 res라는 이름으로 JSON화 한다
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // JSON 형태로 바뀐 데이터를 data라는 이름으로 붙여 사용한다
}

function onGeoError() {
  alert("당신의 위치와 날씨를 찾을 수 없어요.");
}
// 그냥 이걸 부르면 브라우저에서 user의 위치 좌표를 보여준다. (wifi, 위치, GPS 등등)
// getCurrentPosition(모든게 잘됐을 때 실행 될 함수, 에러가 발생했을 때 실행될 함수)
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
