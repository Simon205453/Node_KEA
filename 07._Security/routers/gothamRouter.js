import { Router } from "express";
const router = Router();

router.get("/gotham", (req, res) => {
    res.send({ message: "This is gotham!"});
})

export default router;
