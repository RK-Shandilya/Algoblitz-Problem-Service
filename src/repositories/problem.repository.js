import logger from "../config/logger.config.js";
import NotFound from "../errors/notfound.error.js";
import Problem from "../models/problem.model.js";

export default class ProblemRepository {
    async createProblem(problemData) {
        try {
            if (!problemData.title || !problemData.description || !problemData.difficulty) {
                throw new Error("Missing required fields: title, description, or difficulty");
            }

            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases || [], 
                codeStubs: problemData.codeStubs || [], 
                difficulty: problemData.difficulty,
                editorial: problemData.editorial || {},
                tags: problemData.tags || []
            });

            logger.info(`Problem created successfully: ${problem._id}`);
            return problem;
        } catch (error) {
            logger.error(`Error creating problem: ${error.message}`);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            logger.info(`Fetched ${problems.length} problems`);
            return problems;
        } catch (error) {
            logger.error(`Error fetching all problems: ${error.message}`);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if (!problem) {
                logger.error(`Problem with id: ${id} not found`);
                throw new NotFound("Problem", id);
            }
            logger.info(`Problem fetched successfully: ${problem._id}`);
            return problem;
        } catch (error) {
            logger.error(`Error fetching problem: ${error.message}`);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if (!deletedProblem) {
                logger.error(`Problem with id: ${id} not found`);
                throw new NotFound("Problem", id);
            }
            logger.info(`Problem deleted successfully: ${deletedProblem._id}`);
            return deletedProblem;
        } catch (error) {
            logger.error(`Error deleting problem: ${error.message}`);
            throw error;
        }
    }

    async updateProblem(id, problemData) {
        try {
            const existingProblem = await Problem.findById(id);
            if (!existingProblem) {
                logger.error(`Problem with id: ${id} not found`);
                throw new NotFound("Problem", id);
            }

            const updatedProblem = await Problem.findByIdAndUpdate(id, problemData, { new: true });
            logger.info(`Problem updated successfully: ${updatedProblem._id}`);
            return updatedProblem;
        } catch (error) {
            logger.error(`Error updating problem: ${error.message}`);
            throw error;
        }
    }
}