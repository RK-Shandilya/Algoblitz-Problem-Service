import NotFound from "../errors/notfound.error.js";
import  Problem  from "../models/problem.model.js";

export default class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create(problemData);
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
            console.log("Problem not found", deletedProblem);
            if(!deletedProblem) {
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