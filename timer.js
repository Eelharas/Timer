class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        //take these three different arguments and assign them to instance variables so we can refer back to these
        //DOM elements from other methods inside of our class if we so choose

        if(callbacks){
            this.onStart = callbacks.onStart;
            //reference to onstart method
            this.onTick = callbacks.onTick;
            //to store reference to callbacks.onTick
            this.onComplete = callbacks.onComplete;
            //storing a reference on all these callbacks.
        }
        //this is the code to process callbacks at specific points in time
        //this is how we identify the callbacks parameter to by optional, using if statement

        this.startButton.addEventListener("click", this.start);
        //calls the start() method anytime the user clicks on the start button
        //we set up the event listener in the constructor. we watch for a click event
        //anytime it occurs, we call this.start
        this.pauseButton.addEventListener("click", this.pause);
        //we make use of the pause method by adding in an eventlistener so that it runs
        //when it's activated ie clicked. we connect it using THIS
    }
    //constructor is a special function that gets called
    //automatically when a new instance of Timer is created
    //each time


    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
            //this.timeRememaning tells how long the timer will run in total
        }
        if (!running) {
        this.tick();
        //we call the tick method directly so what it starts right away, then 
        //the setinterval will run, which includes the 1 sec delay in the beginning
        this.interval = setInterval(this.tick, 20);
        //we want to run tick every 20miliseconds, but it starts AFTER 1 sec.
        //20mili will make the graphic smoother
        running = true
    }
    }
    //we learned that by using the arrow function, the value of THIS will refer to the 
    //instance of the Timer Class. so we'll stick with it here
    //now when we click start on the webpage, tick is logged in the console +1 every second

    pause = () => {
        clearInterval(this.interval);
        //this clears the timer variable, so it's actually never shown in the console.
        //we need to share info between start and paud method. so we use THIS.
        //this.timer = setInterval(this.tick, 1000);
        running = false
    }

    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            //to stop our tick method
            if(this.onComplete){
                this.onComplete();
            }
            //here we're calling the oncomplete method, if our tick is stopped.
            //check if "this.oncomplete was provided, if it was, run it"
        } else {
            this.timeRemaining = this.timeRemaining -.02;
            //this.timeRemaining refers to the setter
            //= this.timeRemaining -.02; refers to the getter method.
            //it has to match the tick interval of 20
            //doing this hides away all complexities
            if(this.onTick) {
                this.onTick(this.timeRemaining);
                //this is how we connect time remaining to ontick.
            }
            //we're applying the onTick callback while the timer is ticking.
        }
        //this is saying if timeremaining <= 0, stop timer. otherwise keep counting down
    }
    //console.log("tick tock");
    //we added a tick method to count down our timer

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
        //this value will be a string. we need to turn it into a number using parseFloat
        //this function takes the string and pulls out only the number aspect
        //note: parseInt will give a number that doesn't have decimal ->  "10.1" = 10
        //note: parseFloat will give a number that does have a decimal -> "10.1" = 10.1
    }
    //using a getter and setter method for a new method we call get timeReamaining
    //bc of get timeRemaining, we can call this.timeRemaining in the tick method without
    //having to call the whole timeReamining method and it'll know to use this method
    //using this get method makes the tick method much easier to read:
    //const timeRemaining = this.timeRemaining; is much cleaner and easier to read than
    // const timeRemaining = parseFloat(this.durationInput.value);

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
    //now we put the setter method to use. 
    //We can set up a setter to change the value inside the input.
    //.toFixed(2) makes the value only go to 2 decimal places

    // start(){
    //     console.log(this);
    // }
    //console.log(this); THIS is a method we defined inside our class Timer
    //we learned that the value of THIS inside a class is different than the THIS
    //made outside of the class. 
    //when we click start on the webpage, in the console we see: <button id="start">Start</button>
    //it just point to the html code for the button. this isn't what we want.
    //we want THIS to point to the instance of the CLASS 
}
//making a new class called Timer