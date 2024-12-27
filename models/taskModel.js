const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: { // Renamed from 'statut' to 'status'
        type: Boolean,
        default: false,
    },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
