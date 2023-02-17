const express = require("express");
const app = express();

const birds = [
    { id: 1, name: "bird1"}
];

app.get("/birds", (req, res) => {
    res.send();
})

app.get("/birds:id", (req, res) => {
    res.send({ data: birds });
})

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
})