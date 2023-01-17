import {Router} from "express";

const router = Router();

router.get("/", (request, response) => {
    res.send("Verónica Montoya")
})

export default router;