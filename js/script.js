//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES


//FUNCTIONS



// DOCUMENT READY FUNCTION
$(document).ready(function() {
    
            $("#button").click(function() {
                    var choice = ["rock", "paper", "scissors"];
                    var RPS = Math.floor((Math.random() * 3));
                    var computerchoice = choice[RPS];
                    console.log(computerchoice);
                    var input = $("#input").val().toLowerCase();
                    console.log("test");
                    //--------------------------rock--------------------------
                    if (input === "rock" && computerchoice === "rock") {
                        $("#record").append("It's a Tie!");
                        $("#choice").append("rock");
                        $("#choice2").append("rock");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    else if (input === "rock" && computerchoice === "paper") {
                        $("#record").append("You Win!");
                        $("#choice").append("rock");
                        $("#choice2").append("paper");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    else if (input === "rock" && computerchoice === "scissors") {
                        $("#record").append("Computer Win!");
                        $("#choice").append("rock");
                        $("#choice2").append("scissors");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    //--------------------------paper--------------------------
                    if (input === "paper" && computerchoice === "paper") {
                        $("#record").append("It's a Tie!");
                        $("#choice").append("paper");
                        $("#choice2").append("paper");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    else if (input === "paper" && computerchoice === "rock") {
                        $("#record").append("You Win!");
                        $("#choice").append("paper");
                        $("#choice2").append("rock");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    else if (input === "paper" && computerchoice === "scissors") {
                        $("#record").append("Computer Win!");
                        $("#choice").append("paper");
                        $("#choice2").append("scissors");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    //--------------------------scissors--------------------------
                    if (input === "scissors" && computerchoice === "scissors") {
                        $("#record").append("It's a Tie!");
                        $("#choice").append("scissors");
                        $("#choice2").append("scissors");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    else if (input === "scissors" && computerchoice === "paper") {
                        $("#record").append("You Win!");
                        $("#choice").append("scissors");
                        $("#choice2").append("paper");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                    else if (input === "scissors" && computerchoice === "rock") {
                        $("#record").append("Computer Win!");
                        $("#choice").append("scissors");
                        $("#choice2").append("rock");
                        $("#input").hide();
                        $("#button").hide();
                        $("#please").hide();
                    }
                });
            });
