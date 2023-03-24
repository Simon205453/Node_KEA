const express = require("express");
const app = express();

const birds = [
    { id: 1, name: "bird1"},
    { id: 2, name: "bird2"},
    { id: 3, name: "bird3"},
    { id: 4, name: "bird4"},
    { id: 5, name: "bird5"},
];
//CRUD READ
//GET all birds
app.get("/birds", (req, res) => {
    res.send({ data: birds });
})
//CRUD READ
//GET bird by id
app.get("/birds/:id", (req, res) => {
    const requestedBird = birds.find(bird => bird.id === Number(req.params.id));

    res.send({ data: requestedBird });
})
//CRUD CREATE
//POST bird

app.post("/birds", (req, res) => {
    const tempBird = req.body;
    const createdBird = birds.push(tempBird)
    res.send({ data: createdBird });
})

app.post("/birds", (req, res) => {
    const tempBird = req.body.bird;
    birds.push(tempBird);
    res.send({ data: tempBird });
})


//CRUD UPDATE
//PUT bird
app.put("/birds/:id", (req, res) => {
    const updatedBird = birds.map(bird => {
        req.body.data
    })
})

//CRUD DELETE
//Delete bird
app.delete("/birds/:id", (req, res) => {
    const removedBird = birds.splice(Number(req.params.id)-1, 1); //adds -1 to the id, since splice removes after the given id value
    res.send({ data: removedBird})
})


//

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
})