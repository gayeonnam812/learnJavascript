// DAY3

// 논리연산자 - Logical operators

/**
 * 관리자페이지 접근 조건
 * 1. 로그인된 상태일 것
 * 2. role이 admin일 것
 */

const user = {
  isLoggedin: true,
  role: "user"
}

if( user.isLoggedin && user.role == "admin" ) {
  // 관리자만 접근 가능 상태
  console.log("관리자페이지 접근 가능");
} else {
  // 관리자페이지 접근 불가능 상태
  console.log("관리자페이지 접근 불가");
}

if (user.isLoggedin || user.role == "admin") {
  // 페이지 접근 가능
} else {
  // 페이지 접근 불가능
}

const userage = 33;
const message = userage >= 18 ? "성인" : "미성년자";

// spread syntax : 객체나 배열에서 사용 가능
const resceneMembers = ["woni", "liv", "minami", "may", "zena"];
const copyMembers = ["TEST", ...resceneMembers, "test"];
console.log(copyMembers);

const copyUser = {...user, age:"30", isLoggedin: false};
console.log(copyUser);