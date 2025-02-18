import { StatusCodes } from "http-status-codes";
import BadRequest from "../errors/badrequest.error.js";

function pingProblemController(req, res, next) {
    return res.status(StatusCodes.ACCEPTED).json({message: "Problem controller is up"});
}

function addProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: ["Problem Name"]})
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {}

function getProblems(req, res, next) {
    return res.status(200).json({message: "hello"});
}

function deleteProblem(req, res, next) {}

function updateProblem(req, res, next) {}

export const problemController = { addProblem, getProblem, getProblems, deleteProblem, updateProblem, pingProblemController };
