import { Router } from "express";
import { problemController } from "../../controllers/problem.controller.js";

const problemRouter = Router();

problemRouter.get('/ping', problemController.pingProblemController)
problemRouter.get('/:id', problemController.getProblem);
problemRouter.delete('/:id', problemController.deleteProblem);
problemRouter.put('/:id', problemController.updateProblem);
problemRouter.get('/', problemController.getProblems);
problemRouter.post('/', problemController.addProblem);

export default problemRouter;