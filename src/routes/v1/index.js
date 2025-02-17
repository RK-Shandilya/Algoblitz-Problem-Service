import { Router } from "express";
import problemRouter from "./problems.routes.js";

const v1router = Router();

v1router.use('/problems', problemRouter); 

export default v1router;