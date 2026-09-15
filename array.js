const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const today = daysOfWeek[1];
// console.log(today);

const student = {
  name: "gayeon",
  mbti: "ESTJ",
  isMale: false,
  useAi: ["claude", "chatgpt", "gemini"]
}

// console.log(Array.isArray(student.useAi))

// for
for(let i=0; i<5; i++) {
  console.log(`${i}번째 실행중`)
}

const resceneMembers = ["woni", "liv", "minami", "may", "zena"];
resceneMembers.forEach((member, index) => {
  console.log(`${index}번째 멤버 : ${member.toUpperCase()}`)
})

// 1. map
// 2. filter
// 3. find
// 4. some(하나라도 만족하면 true)/every(모든게 만족해야 true)

const emojiMembers = resceneMembers.map((member) => {
  return `★${member}★`
})

const lengthTest = resceneMembers.find((member) => {
  return member.length > 7;
})

const someTest = resceneMembers.some((member) => {
  return member.length > 3;
})
console.log(someTest);