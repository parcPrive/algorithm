export function checkValidationPhone(myphone) {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("에러발생! 핸드폰 번호를 제대로 입력하세요.");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const mycount = 6;
  if (mycount === undefined) {
    console.log("에러발생!! 갯수를 제대로 입력해 주세요!!!");
    return;
  } else if (mycount <= 0) {
    console.log("에러발생!! 갯수가 너무 적습니다.");
    return;
  } else if (mycount > 10) {
    console.log("에러발생!!! 갯수가 너무 많읍니다.");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** mycount)).padStart(
    mycount,
    "0"
  );
  return result;
}

export function sendTokenToSMS(myphone, mytoken) {
  console.log(myphone + "번호로 인증번호" + mytoken + "를 전송합니다!!!");
}
