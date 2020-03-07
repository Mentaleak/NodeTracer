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
`2020:03:07:18:03:41` testtracer.js:7: test1A 
`2020:03:07:18:03:41` testtracer.js:8: test1B
`2020:03:07:18:03:41` testtracer.js:15: test2A
[#1589F0](https://placehold.it/15/1589F0/000000?text=+)
