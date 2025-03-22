import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Problem title is required"],
        trim: true
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
            enum: ["java", "cpp", "python", "rust", "go", "javascript"],
            required: true
        },
        startSnippet: {
            type: String,
            required: true
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
    },
    tags: {
        type: [String],
        default: []
    },
    referenceSolutions: [{
        language: {
          type: String,
          enum: ["java", "cpp", "python", "rust", "go", "javascript"],
          required: true
        },
        solution: {
          type: String,
          required: true
        }
      }]
})

export default mongoose.model('Problem', problemSchema);
