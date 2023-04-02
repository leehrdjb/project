const express = require("express");
const app = express();

//2023.03.28 KJY
//정적파일 제공 위한 미들웨어 추가
app.use(express.static("public"))

//api 설정
app.get("/home", (req, res)=>{
    res.sendFile(__dirname + '/pages/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/pages/new.html');
});
app.get('/burger', (req, res) => {
    res.sendFile(__dirname + '/pages/burger.html');
});

app.listen(3000, ()=>{
    console.log("서버 가동 중");
})


