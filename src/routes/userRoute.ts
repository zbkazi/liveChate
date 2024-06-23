import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("<h1>Hello Kazi Byte!, Welcome to Kazi Byte API</h1>");
});

export default router;