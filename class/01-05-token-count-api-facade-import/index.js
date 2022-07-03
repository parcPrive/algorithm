//module 방식
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
console.log("안녕하세요~~~");

//package.json안에 type이 commonjs이며 예전의 import 방식이다.
// const { checkValidationPhone } = require("./phone.js");

//핸드폰 토큰 생성 API
function createTokenOfPhone(myphone) {
  //1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    //2. 핸드폰 토큰 6자리
    const mytoken = getToken();

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);
  }
}
createTokenOfPhone("01012345678");
