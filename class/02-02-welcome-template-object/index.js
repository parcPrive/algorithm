const apple = 3;
const banana = 2;

console.log(
  "철수는 사과를 " +
    apple +
    "개, " +
    "바나나를 " +
    banana +
    "개 가지고 있습니다."
);
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);
function getWelcomeTemplate({ myname, myage, myschool, createAt }) {
  return `
    <html>
      <body>
        <h1>${myname}님 가입을 환영합니다!!</h1>
        <hr />
        <div>이름: ${myname}</div>
        <div>나이: ${myage}살</div>
        <div>학교: ${myschool}</div>
        <div>가입일: ${createAt}</div>
      </body>
    </html>
  `;
}
const myuser = {
  myname: "철수",
  myage: 13,
  myschool: "다람쥐초등학교",
  createAt: "2020-01-03",
};

const result = getWelcomeTemplate(myuser);
console.log(result);
