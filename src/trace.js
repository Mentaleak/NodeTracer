const path = require('path');
const colors = require('colors');


class traceManager {
    constructor(traceon) {
        this.traceon = traceon;
    };
    log(msg) {
        var _self = this;
        if(_self.traceon){
            var date = new Date();
            var hour = date.getHours();
            hour = (hour < 10 ? "0" : "") + hour;
            var min  = date.getMinutes();
            min = (min < 10 ? "0" : "") + min;
            var sec  = date.getSeconds();
            sec = (sec < 10 ? "0" : "") + sec;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = (month < 10 ? "0" : "") + month;
            var day  = date.getDate();
            day = (day < 10 ? "0" : "") + day;
            var stamp = year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

            const orig = Error.prepareStackTrace;
            Error.prepareStackTrace = (_, stack) => stack;
            const err = new Error();
            Error.captureStackTrace(err, arguments.callee);
            const callee = err.stack[0];
            Error.prepareStackTrace = orig;
            console.log(` ${stamp} `.black.bgWhite, `${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: `.bold.blue+ `${msg}`);
        }
    }
}
module.exports = traceManager;