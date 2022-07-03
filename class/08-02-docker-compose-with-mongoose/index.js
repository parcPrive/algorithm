import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", async (req, res) => {
  // 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  //Board.find({writer: "철수"})
  const result = await Board.find();
  res.send(result);
});

app.post("/boards", async (req, res) => {
  // 1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍어서 확인 해보기
  const board = new Board({
    // writer: req.body.writer,
    // title: req.body.title,
    // contents: req.body.contents,
    ...req.body,
  });
  await board.save();
  // 2. 저장결과 알려주기!!
  res.send("등록에 성공하였습니다.");
});

app.post("/tokens/phone", (req, res) => {
  const myphone = req.body.myphone;
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    //2. 핸드폰 토큰 6자리
    const mytoken = getToken();

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);
    res.send("인증완료");
  }
});

app.post("/users", (req, res) => {
  const myuser = req.body.user;
  // 1. 이메일이 정상인지 확인( 1-존재여부, 2-"@"포함여부)
  console.log(myuser.email);
  const isValid = checkValidationEmail(myuser.email);
  // 2. 가입환영 템플릿 만들기
  if (isValid) {
    const mytemplate = getWelcomeTemplate(myuser);
    // 3. 이메일에 가입환영 템플릿 전송
    const aaa = sendTemplateToEmail(myuser.email, mytemplate);
    console.log(aaa);
    console.log(mytemplate);
    res.send("가입완료");
  }
});
// app.get("/boards/:id", (req, res) => {
//   console.log(req);
//   res.send("Hello World!");
// });

// app.put("/boards/:id", (req, res) => {
//   console.log(req);
//   res.send("Hello World!");
// });

// app.delete("/boards/:id", (req, res) => {
//   console.log(req);
//   res.send("Hello World!");
// });

// 몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/mok"); //네임 리졸루션

// Backend API 서버 오픈!!(리슨)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.listen(port)
