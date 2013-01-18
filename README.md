# Repeater for CraftyJS
A CraftyJS component to schedule timers.

Methods:
.repeat( callback, delay (milliseconds ), how many times );
.stopRepeating();

***

##Demo
```javascript
//INFINITE LOOP
var mainTimer = Crafty.e("Repeater")
.repeat( function() { alert("a"); },1000,-1);
//-1 = infinite loop
//to stop the Repeater
mainTimer.stopRepeating();


//LOOP 10 TIMES
var mainTimer = Crafty.e("Repeater")
.repeat( function() { alert("a"); },1000,10);


```

***

##License

Dual licensed under MIT and GPL.
