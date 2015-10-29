var questions =
["Does the refrigerator light really turn off when you close the door?",
"Is schrodinger's cat alive or dead?",
"Can you cook a steak by dropping it?", "Thanks, you got " + num_correct + "/3 right!"];

var question_num = 0;
var num_correct = 0;


function questionFunction () {
  if (question_num < questions.length)document.getElementById('question').innerHTML =  questions[question_num]
  question_num += 1;
}


function answerFunction() {

var result = document.getElementById('result').value;

    if ((result === "yes")||(result === "y")) {
      document.getElementById('answer').innerHTML = "Sure we can be fairly certain about that.";
      document.getElementById('question').innerHTML = "";
      num_correct += 1
    }
    else {
      document.getElementById('answer').innerHTML = "I guess thats an alright answer.";
    }
//alerts the user with a summary statement telling them how many /3 they got correct
    }


//document.getElementById('summary').innerHTML = "Thanks, you got " + num_correct + "/3 right!"//

