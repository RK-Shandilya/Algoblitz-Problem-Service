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
    }]
})

export default mongoose.model('Problem', problemSchema);