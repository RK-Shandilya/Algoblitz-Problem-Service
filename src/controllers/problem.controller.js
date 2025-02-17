function pingProblemController(req, res) {
    return res.status(200).json({message: "Problem controller is up"});
}

function addProblem(req, res) {}

function getProblem(req, res) {}

function getProblems(req, res) {
    return res.status(200).json({message: "hello"})
}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}

export const problemController = { addProblem, getProblem, getProblems, deleteProblem, updateProblem, pingProblemController };
