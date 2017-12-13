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
var userChoice = "";
var computerChoice = "";
var winner = "";
var choice = ["rock", "paper", "scissors"]


//FUNCTIONS



// DOCUMENT READY FUNCTION
$(document).ready(function() {
            // $("#button").click(function() {
            //         var input = $("#input").val();
            //         $("#record").append(input);
            //          $("#input").hide();
            //           $("#button").hide();
            //           $("#please").hide();
            // });

            $("#button").click(function() {
                        var choice = ["rock", "paper", "scissors"]
                        var RPS = Math.floor((Math.random() * 3));
                        var computerchoice = choice[RPS]
                        console.log(computerchoice);
                        var input = $("#input").val().toLowerCase();
                        console.log("test");
//--------------------------rock--------------------------
                        if (input === "rock" && computerchoice === "rock") {
                            var input = $("#input").val();
                            $("#record").append("It's a Tie!");
                            $("#input").hide();
                            $("#button").hide();
                            $("#please").hide();
                        }
                        else if (input === "rock" && computerchoice === "paper") {
                            var input = $("#input").val();
                            $("#record").append("You Win!");
                            $("#button").hide();
                            $("#please").hide();
                        }
                        else if (input === "rock" && computerchoice === "scissors") {
                            var input = $("#input").val();
                            $("#record").append("Computer Win!");
                            $("#button").hide();
                            $("#please").hide();
//--------------------------paper--------------------------
                            if (input === "paper" && computerchoice === "paper") {
                            var input = $("#input").val();
                            $("#record").append("It's a Tie!");
                            $("#input").hide();
                            $("#button").hide();
                            $("#please").hide();
                        }
                        else if (input === "paper" && computerchoice === "rock") {
                            var input = $("#input").val();
                            $("#record").append("You Win!");
                            $("#button").hide();
                            $("#please").hide();
                        }
                        else if (input === "paper" && computerchoice === "scissors") {
                            var input = $("#input").val();
                            $("#record").append("Computer Win!");
                            $("#button").hide();
                            $("#please").hide();
//--------------------------scissors--------------------------
                            if (input === "scissors" && computerchoice === "scissors") {
                            var input = $("#input").val();
                            $("#record").append("It's a Tie!");
                            $("#input").hide();
                            $("#button").hide();
                            $("#please").hide();
                        }
                        else if (input === "scissors" && computerchoice === "paper") {
                            var input = $("#input").val();
                            $("#record").append("You Win!");
                            $("#button").hide();
                            $("#please").hide();
                        }
                        else if (input === "scissors" && computerchoice === "rock") {
                            var input = $("#input").val();
                            $("#record").append("Computer Win!");
                            $("#button").hide();
                            $("#please").hide();
                        });
