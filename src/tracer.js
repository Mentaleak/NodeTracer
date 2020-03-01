const path = require('path');
const dotenv = require('dotenv/config');
const colors = require('colors');

function ReadableTimestamp(){
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

}
function log(msg) {
    if (process.env.TraceLogOn) {
        var stamp = ReadableTimestamp(); 
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
}
function error(msg) {
    if (process.env.TraceErrOn) {
        var stamp = ReadableTimestamp(); 
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
}
module.exports = {
    log,
    error
};
