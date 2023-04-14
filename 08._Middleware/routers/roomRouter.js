import { Router } from "express";
const router = Router();

router.get("/test", (req, res) => {
    res.send({ message: "The test"});
})

export default router;
