# What I Learned in Week 7

## Week 7 was mostly review of stuff I already learned.  However, I did learn about callbacks.

### CALLBACKS ###

#### Intervals ####
Intervals allow for the calling of a function after a delay.  There are two functions I learned for using this:
- `setTimeout(function, milliseconds)` - Executes a function after a delay.  Returns identifier of timer.
- `clearTimeout(timer)` - Cancels a previously-created timeout.  Takes the identifier of the timer.
- `setInterval(function, milliseconds)` - Repeatedly executes a function after a delay.  Returns identifier of timer.
- `clearInterval(timer)` - Cancels a previously-created interval.  Takes the identifier of the timer.

To pass parameters to the function, use `.bind()`:
```
setTimeout(console.log.bind(null, "Hello!"), 2000);
```

#### Event Listeners ####
Events can be bound to actions within the webpage.  The events are the css properties which start with `on`.  They can either be specified in CSS or through JavaScript.
A full list of events can be seen [Here](https://www.w3schools.com/jsref/dom_obj_event.asp).
- `element.addEventListener(type, function)` - Adds an event listener to the element of type `type`.  The `function` can have be passed parameters using `.bind()` as shown with the intervals.  When `function` is called, an event object is passed to it as a first parameter.  The `target` member of this object is the original `element` whose event listener was called.
