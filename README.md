# NodeTracer
This Module is for tracing, debugging and logging in node
This is essentially a console.log but it starts with a Time stamp in the format
YYYY:MM:dd:HH:mm:ss
Year:Month:Day:Hour:Minute:Second
Then it tells you the name of the origin file and the line of the log call.
This will either be in blue or red depending on if it was called using .log() or .error()
Then whatever message you want to pass

# TestTracer Example
```javascript
var nodeTracer= require('./index.js');
var tracer = new nodeTracer(
    true, //Trace Log On
    true // Trace Error On
);

tracer.log("test1A");
tracer.error("test1B");

var tracerb = new nodeTracer(
    true, //Trace Log On
    false // Trace Error On
);

tracerb.log("test2A");
tracerb.error("test2B");
```
# Output would be

![image](https://user-images.githubusercontent.com/22431171/76153978-7315d300-60a2-11ea-9de0-41800dd294a1.png)
