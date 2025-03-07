import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Problem title is required"],
    },
    description: {
        type: String,
        required: [true, "Problem description is required"],
    },
    difficulty :{
        type: String,
        required: [true, "Problem difficulty is required"],
        enum: ['easy', 'medium', 'hard'],
        default: 'easy'
    },
    testCases: [{
        input: {
            type: String,
            required: true
        },
        output: {
            type: String,
            required: true
        }
    }],
    codeStubs: [{
        language: {
            type: String,
            enum: ["Java", "Cpp", "Python", "Rust", "Go", "Javascript"],
            required: true
        },
        startSnippet: {
            type: String,
        },
        userSnippet: {
            type: String
        },
        endSnippet: {
            type: String
        }
    }],
    editorial: {
        type: String
    }
})

export default mongoose.model('Problem', problemSchema);