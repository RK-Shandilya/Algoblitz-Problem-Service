import { Router } from "express";
import { ProblemController } from "../../controllers/problem.controller.js";

const problemRouter = Router();

problemRouter.get('/ping', ProblemController.pingProblemController)
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.delete('/:id', ProblemController.deleteProblem);
problemRouter.put('/:id', ProblemController.updateProblem);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.post('/', ProblemController.addProblem);

export default problemRouter;