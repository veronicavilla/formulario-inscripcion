import {Router} from "express";
import {methods as clientesController} from "./../controllers/Clientes.controller";

const router = Router();

router.get("/", clientesController.getClientes);

export default router;