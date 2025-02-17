import { Router } from "express";
import v1router from "./v1/index.js";

const apiRouter = Router();

apiRouter.use('/v1', v1router ); 

export default apiRouter;