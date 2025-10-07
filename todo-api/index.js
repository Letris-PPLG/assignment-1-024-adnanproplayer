import express from "express";

const app = express();
app.use(express.json());

//DUmmy Data
let users = [  
    { msg: "API berjalan normal", code: 200},
  { "id": 1, "title": "Belajar Node.js", "done": false },
  { "id": 2, "title": "Belajar Express.js", "done": true }
];

const post = [
    { title: "Belajar REST API",
  done: false}
]

//GET
app.get("/users", (req,res) => {
    res.json(users); 
});

//POST
app.post("/post", (req, res) => {
    const { post } = req.body; 
});

app.get("/apasih", (req, res) => {
    res.send("selamat datang di sistemm");
});

app.listen(5001, () => console.log(
"server running on http://localhost:5001"
))