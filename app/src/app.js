const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("루트로 들어온 요청 처리 완료")
})

app.listen(3000, ()=>{
    console.log("서버 가동 중");
})


