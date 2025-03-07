import logger from "../config/logger.config.js";
import NotFound from "../errors/notfound.error.js";
import  Problem  from "../models/problem.model.js";

export default class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : [],
                codeStubs: problemData.codeStubs
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem) {
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if(!deletedProblem) {
                logger.error(`Problem with id: ${id} not found in database`);
                throw new NotFound("Problem", id);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, problemData) {
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, problemData, {new: true});
            if(!updatedProblem) {
                throw new NotFound("Problem", id);
            }
            return updatedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}