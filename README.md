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

![image](https://user-images.githubusercontent.com/22431171/76153978-7315d300-60a2-11ea-9de0-41800dd294a1.png)
