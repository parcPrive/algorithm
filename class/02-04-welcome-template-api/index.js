import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";

function createUser(user) {
  // 1. 이메일이 정상인지 확인( 1-존재여부, 2-"@"포함여부)
  console.log(user.email);
  const isValid = checkValidationEmail(user.email);
  // 2. 가입환영 템플릿 만들기
  if (isValid) {
    const mytemplate = getWelcomeTemplate(user);
    sendTemplateToEmail(user.email, mytemplate);
  }
  // 3. 이메일에 가입환영 템플릿 전송
}
const user = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
  email: "a@a.com",
  password: "1234",
};
createUser(user);
