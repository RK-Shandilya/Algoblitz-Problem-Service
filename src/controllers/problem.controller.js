import { StatusCodes } from "http-status-codes";
import BadRequest from "../errors/badrequest.error.js";

function pingProblemController(req, res) {
    return res.status(StatusCodes.ACCEPTED).json({message: "Problem controller is up"});
}

function addProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: ["Problem Name"]})
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
