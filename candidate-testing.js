const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ``;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = [
  `Who was the first American Woman in space? `,
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ?	',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS?	'];
let correctAnswers = [
  `Sally Ride`,
  `true`,
  `40`,
  "Trajectory",
  `3`];

let candidateAnswers = [];
let gradeMark = 0


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question(`Please enter your name: `);
  console.log(`----------`);
  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length; i++){
  
  console.log(questions[i]);
  candidateAnswer = input.question(`\n\t Your Answer: `); 

  candidateAnswers.push(candidateAnswer);
 if (candidateAnswers[i] === correctAnswers[i]){
    console.log('\n');
    console.log('Correct!');
    console.log('The correct answer is: ' + correctAnswers[i]);
    console.log('\n');
    gradeMark = gradeMark +1;
  }
  else {
    console.log('\n');
    console.log('Incorrect.');
    console.log('The correct answer is: ' + correctAnswers[i]);
    console.log('\n');
  } }
}

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  

  let grade;
grade = gradeMark / correctAnswers.length * 100
console.log(`this is your grade: ${grade}.`);
if (grade > 60){
  console.log(`Congratulations ${candidateName}!!  You passed!!`);

} else {
  console.log(`Sorry ${candidateName}, please try again`);
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};