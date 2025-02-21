import { StatusCodes } from "http-status-codes";
import BadRequest from "../errors/badrequest.error.js";
import  {ProblemService} from "../services/index.js";
import  {ProblemRepository} from "../repositories/index.js"; 

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

function getProblem(req, res) {}

function getProblems(req, res) {
    return res.status(200).json({message: "hello"});
}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}

export const problemController = { addProblem, getProblem, getProblems, deleteProblem, updateProblem, pingProblemController };
