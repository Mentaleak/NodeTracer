# NodeTracer
 For tracing, debugging and logging in node


# TestTracer Example
```javascript
var nodeTracer= require('./index.js');
var tracer = new nodeTracer(
    true, //TLS
    true // debug
);

tracer.log("test1A");
tracer.error("test1B");

var tracerb = new nodeTracer(
    true, //TLS
    false // debug
);

tracerb.log("test2A");
tracerb.error("test2B");
```
# Output would be

