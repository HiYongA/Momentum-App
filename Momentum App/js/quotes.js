const quotes = [
  {
    quote: "배꼽. 새로운 시작의 줄기. 그리고 어떤 중심",
    author: "",
  },
  {
    quote:
      "줄리: 땅에서 높이 올라가 뺨을 스치는 바람을 느낄 때면 아름다움이 내 심장에 입을 맞추는 기분이에요.",
    author: "≪플립≫",
  },
  {
    quote: "삶이 내게 할 말이 있었기 때문에 그 일이 내게 일어났다.",
    author: "≪새의선물≫",
  },
  {
    quote:
      "질문(question)이라는 단어 속에는 다른 단어가 들어 있다. ‘찾아서 추구함(quest)’이란 아름다운 말. 나는 그 단어를 사랑한다.",
    author: "엘리 비젤(미국유대계작가이자 인권운동가)",
  },
  {
    quote:
      "의학, 법률, 경제, 기술 따위는 삶의 도구가 되지만 시와 아름다움, 낭만과 사랑은 삶의 목적인 거야",
    author: "≪죽은 시인의 사회플립≫",
  },
  {
    quote:
      "어쩌면 세상만사 모두가 마음이 만들어 낸 풍경인지도 몰랐다. 마음을 가득 채운 것에 따라 느끼고 또 보이니 말이다.",
    author: "≪강호의 도가 땅에 떨어졌도다≫",
  },
  {
    quote:
      "일년을 이렇게 빠르게 느끼고 살아가는데 남은 내 인생을 얼마나 멋지게 살 수가 있을까",
    author: "칵테일(뫼비우스의 띠 OST)",
  },
  {
    quote:
      "그대와 더불어 나눈 하룻저녁의 대화가 10년 동안 책을 읽는 것보다 낫다.",
    author: "",
  },
  {
    quote: "짧은 인생, 당신이 언제나 즐거웠으면 좋겠다.",
    author: "≪강호의 도가 땅에 떨어졌도다≫",
  },
  {
    quote:
      "좋아하는 일에 모든 것을 쏟아 부어, 마치 한 방울 한 방울 떨어지던 물이 어느 순간 컵을 가득 채워 흘러넘칠 때, 사람들은 비로소 그것을 주시한다.",
    author: "",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 랜덤 명언 만들기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
