const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SolutionSchema = new Schema({
    username: {type:String, required: true},
    assnumber: String,
    std: {type: String, required: true},
    qsn: [String],
    ans: [String],
},
    {timestamps: true}
);

module.exports = mongoose.model('Solution', SolutionSchema);