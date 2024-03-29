const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/boards", (req, res) => {
  // 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 1,
      writer: "영희",
      title: "영희 제목입니다.",
      contents: "영희 내용입니다.",
    },
    {
      number: 1,
      writer: "훈이",
      title: "훈이 제목입니다.",
      contents: "훈이 내용입니다.",
    },
  ];
  res.send(result);
});

app.post("/boards", (req, res) => {
  // 1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍어서 확인 해보기
  console.log(req.body);
  // 2. 저장결과 알려주기!!
  res.send("등록에 성공하였습니다.");
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.listen(port)
