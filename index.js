
//step 1 we create the Timer class.
//step 2 we added a constructor function, which has 3 parameters
//step3 we assign those parameters to instance variables that we can refer to later on
//step 4 we made a start method that logs a message
//step 5 we go back to constuctor and add that start method eventlistener so that it activates
//when the user clicks.
//step 6 we added ids in the html file so we can select and put it to use here:
//<input id="duration"type="text"> <button id="start">Start</button> <button id="pause">Pause</button>
//step 7 we selected duration, start, and pause elements and assign a variable to them
//step 8 we create a new instance of Timer and connected it to Timer class by 
//passing in those same 3 parameters

//It's now the instant that we create a new instance of the timer and pass in those 
//three elements. Our Timer class is going to automatically set up that event listener 
//for us whenever user clicks on the Start button. We're going to run that console log.

//step 9 we passed in this in the start method and added a timer.start() at the end 
//step 10 we learned about THIS and made the start method into an arrow function
//step 11 we created a tick method, which logs tick tock
//step 12 we add the tick method into the start method, and set an interval to keep
//running it after a second
//step 13 now we need a pause method, so we make one that has clearinterval inside. 
//then we added an event listener so when we click the pause button on the webpage,
//it will stop the timer. 
//step 14 inside html file, add a vale property to the input tag: value="30"
//keep in mind we need to convert that "30" string into a number.
//we made a setter and getter method and use it in the tick method to update the time remaining
//step 15 we need to stop the timer when it gets to 0. otherwise it'll keep going in negatives
//we add an if statement to the tick method to do this
//step 16 we adeed callback methods to the timer variable

//final changes:
//I solved the first issue.  In order for the equation in circle.setAttribute to work, 
//'duration' needs to be constant (number it started with), but it's not because duration's 
//value is set to 'totalDuration' in onStart() and that changes it to the remaining time 
//when paused. I commented that out because it doesn't seem to perform a function. 
//I set duration = durationInput.value and below that added also a change listener 
//in case you change the input value.

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");
//we want to select an element by Id and assign a variable to it.

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
//we made a getter and setter attribute. getter for the perimeter
//setter for creating a gap in the perimeter

let duration  = durationInput.value;
//and we started off the current offset at 0;

durationInput.addEventListener('change', () => {
    duration = durationInput.value
  });

  let running = false;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        console.log("TIMER STARTED!");
        //when we call onstart, we pass in an argument 
        //that represent how much time it'll take for timer to run
        
        // duration = totalDuration;
        //we made a parameter name totalDuration and pass it to = the duration
    },
    onTick(timeRemaining){
        circle.setAttribute("stroke-dashoffset", 
            perimeter * timeRemaining / duration - perimeter
            //now it stops at 0
        );
        
        //we want the tick to countown the negative space
        //design, so we incorporated the setter and current offset
        //to move in incremements each time

        //in te onTick parameter to pass in timeRemainig
    },
    onComplete(){
        console.log("TIMER STOPPED!");
    }
    //these are callback methods
});
//we create a new instance of Timer and pass in those 3 parameters that we selected
//we want to pass in a 4th argument, these are optional and wil contain callbacks
//these callabacks get invoked at certain times of our timer cycle.
//so our Timer will call each of these at some time

// timer.start()
//this is one of the two ways a start timer will activate. once, automatically,
//when our app loads. and 2, when the start button is clicked, as stated in the constructor


