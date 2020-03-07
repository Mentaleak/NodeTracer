const path = require('path');
const colors = require('colors');


function nodeTracer(TraceLogOn, TraceErrOn) {
      this.TraceLogOn =TraceLogOn;
      this.TraceErrOn = TraceErrOn;
}

nodeTracer.prototype.ReadableTimestamp =function(){
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    var stamp = year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
return stamp
};
nodeTracer.prototype.log =function(msg) {
    if (this.TraceLogOn) {
        var stamp = this.ReadableTimestamp(); 
        const orig = Error.prepareStackTrace;
        Error.prepareStackTrace = (_, stack) => stack;
        const err = new Error();
        Error.captureStackTrace(err, arguments.callee);
        const callee = err.stack[0];
        Error.prepareStackTrace = orig;
        console.log(` ${stamp} `.black.bgWhite, `${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: `.bold.blue + `${msg}`);
    } else {
        //console.log("Trace mode is disabled");
    }
};
nodeTracer.prototype.error =function (msg) {
    if (this.TraceErrOn) {
        var stamp = this.ReadableTimestamp(); 
        const orig = Error.prepareStackTrace;
        Error.prepareStackTrace = (_, stack) => stack;
        const err = new Error();
        Error.captureStackTrace(err, arguments.callee);
        const callee = err.stack[0];
        Error.prepareStackTrace = orig;
        console.log(` ${stamp} `.black.bgWhite, `${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: `.bold.red + `${msg}`);
    } else {
        //console.log("Trace mode is disabled");
    }
};

module.exports = nodeTracer;