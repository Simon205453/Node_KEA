import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Upper | Welcome"
});

const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, {
    tabTitle: "Upper | IRLQuests"
});

const contact = templateEngine.readPage("./public/pages/contact/contact.html");
const contactPage = templateEngine.renderPage(contact, {
    tabTitle: "Upper"
})


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", async (req, res) => {
    const jokesPage = await templateEngine.renderJokePage();
    res.send(jokesPage);    
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

// API

app.post("/api/contact", (req, res) => {
    console.log(req.body);

    res.send(req.body);
});


if (process.env.ENV === "DEV") {
    //setup dev
}

console.log(process.env.PORT);

const PORT = Number(process.env.PORT) || 8082;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});
