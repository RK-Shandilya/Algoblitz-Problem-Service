import { StatusCodes } from "http-status-codes";
import  {ProblemService} from "../services/index.js";
import  {ProblemRepository} from "../repositories/index.js"; 
import NotFound from "../errors/notfound.error.js";

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.status(StatusCodes.ACCEPTED).json({message: "Problem controller is up"});
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Problem created successfully",
            data: newProblem,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        const id = req.params.id;
        const problem = await problemService.getProblem(id);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem fetched successfully",
            data: problem,
            error: {}
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problems fetched successfully",
            data: problems,
            error: {}
        })
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req, res, next) {
    try {
        const id = req.params.id;
        const response = await problemService.deleteProblem(id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem deleted successfully",
            data: response,
            error: {}
        }) 
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {}

export const problemController = { addProblem, getProblem, getProblems, deleteProblem, updateProblem, pingProblemController };
