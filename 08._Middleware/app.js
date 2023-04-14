import express from "express";
const app = express();

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter)

function houseButler(req, res, next) {
    console.log("This way...");
    next();
}

app.use("/room", houseButler);


function guard(req, res, next) {
    if (req.query.name === "Simon") {
        req.myName = "Simon"
        next();
    } else {
    res.send("You are not allowed")
    }
}

app.get("/frontdoor", guard, (req, res) => {
    res.send({ message: `Please enter, ${req.myName}`});
})

/*
function get(path, cb) {
    // match
    let req, res, next = {};
    cb(req, res, next)
}
*/
//where is middleware, 

app.get("/inlinemiddleware", (req, res, next) => {
    console.log("Enters here first");
    next();
}, 
(req, res, next) => {
    console.log("Is here now")
    res.send({ message: "Called the inline middleware"});
}
)

app.get("/room", (req, res, next) => {
    next();
})

app.get("/room", (req, res, next) => {
    res.send({ message: "I am in room 2"})
})

app.get("/*", (req, res, next) => {
    res.send("<h1>404 Not found</h1>");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));