const score = 60;

if (score >=55) {
  console.log("합격");
} else {
  console.log("불합격");
}

score >= 55 ? console.log("합격") : console.log("불합격");

let grade; // 등급

if(score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}

const userInput = "";
if(!userInput) {
  console.log("값이 비었습니다. 입력해주세요.")
}