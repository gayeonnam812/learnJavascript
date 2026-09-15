console.log("test");

// 변수 : 값을 저장하는 이름을 가진 공간
let username = "namgayeon";
console.log(username);

username = "남가연";

console.log(username);

// 데이터 타입
const num = 10;
console.log("🚀 ~ num:",num, typeof num);

const isDarkMode = true;
console.log("🚀 ~ isDarkMode:", isDarkMode, typeof isDarkMode);

// 함수 : 특정 기능을 수행하도록 만든 코드 조각
// function greeting(param) {
//   console.log(`${param}님 반갑습니다.`)
// }

const greeting = (param) => {
  console.log(`${param}님 반갑습니다.`)
} 

const greeting2 = (studentName, userMbti) => {
  console.log(`${studentName}님, 반갑습니다.`);
  console.log(`MBTI는 ${userMbti}이시군요!`);
}
// greeting2("gayeon", "ESTJ");

const add = (num1, num2) => {
  return num1 + num2;
}

const sum = add(10, 20);
console.log("🚀 ~ sum:", sum)

const doubleSum = (num) => {
  console.log(num);
  return num * 2;
}


