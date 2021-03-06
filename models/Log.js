﻿var mongoose = require('mongoose');


var LogsSchema = new mongoose.Schema({
    ProcessId: { type: String },
    MethodId: { type: String },
    request_object: {},
    ResponseObject: {},
    Exception:{},
    CreatedTime: { type: Date, default: Date.now },
    UpdatedTime: { type: Date, default: Date.now },
});

mongoose.model('Logs', LogsSchema);
