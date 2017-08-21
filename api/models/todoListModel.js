'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({

    name: {
        type: String,
        required: 'Task To Do'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['to start', 'started', 'completed']
        }],
        default: ['to start']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);