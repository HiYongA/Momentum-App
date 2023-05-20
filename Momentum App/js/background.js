const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
];

// 랜덤 배경화면 만들기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// img 태그를 생성하기
const bgImage = document.createElement("img");

// img 소스 넣기
bgImage.src = `img/${chosenImage}`;

// append()는 가장 뒤에, prepend()는 가장 위에 오게 한다.
// appendChild(): body에 html을 추가한다.
document.body.appendChild(bgImage);
