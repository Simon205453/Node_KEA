import { Router } from "express";
const router = Router();

/*
function checkPass(req, res, next) {
    if (req.query.name === )
}
*/

//Logout overfører ikke data derfor er det bare en get
router.get("/auth/logout", (req, res) => {
    res.send();
});

//Login ovreføres data til sitet, derfor skal det være post
router.post("/auth/login", (req, res) => {
    
    res.send();
});

export default router;