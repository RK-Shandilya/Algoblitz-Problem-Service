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

function deleteProblem(req, res) {}

function updateProblem(req, res) {}

export const problemController = { addProblem, getProblem, getProblems, deleteProblem, updateProblem, pingProblemController };
