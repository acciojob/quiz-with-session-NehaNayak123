//your JS code here.
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
      answer: "Everest",
    },
    {
      question: "What is the largest country by area?",
      choices: ["Russia", "China", "Canada", "United States"],
      answer: "Russia",
    },
    {
      question: "Which is the largest planet in our solar system?",
      choices: ["Earth", "Jupiter", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is the capital of Canada?",
      choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
      answer: "Ottawa",
    },
  ];

  let questionsElement=document.getElementById("questions")
  let submit=document.getElementById("submit")
  let score=document.getElementById("score")

  let userAnswers=[];

  const savedProgress=sessionStorage.getItem("progress");
  if(savedProgress){
    userAnswers=JSON.parse(savedProgress)
  }else{
    userAnswers=Array(questions.length).fill(null);
  }

  function render(){
    questionsElement.innerHTML="";
    for(let i=0;i<questions.length;i++){
        let ques=questions[i];
        let quesContainer=document.createElement("div")
        const quesText=document.createElement("p")
        quesText.innerText=ques.question;
        quesContainer.appendChild(quesText)

        for(let j=0;j<ques.choices.length;j++){
            let choice=ques.choices[j];
            let choiceContainer=document.createElement("div");
            
            let choiceInput=document.createElement("input")
            choiceInput.setAttribute("type", "radio")
            choiceInput.setAttribute("name", `question-${i}`)
            choiceInput.setAttribute("value", choice)
            choiceInput.id=`question-${i}-choice-${j}`

            if(userAnswers[i]== choice){
              choiceInput.setAttribute("checked", "true")
            }

            choiceInput.addEventListener("change", ()=>{
              userAnswers[i]=choice;
              sessionStorage.setItem("progress", JSON.stringify(userAnswers))

            })
            const choiceLabel=document.createElement("label");
            choiceLabel.setAttribute("for",choiceInput.id);
            choiceLabel.textContent=choice

            choiceContainer.appendChild(choiceInput)
            choiceContainer.appendChild(choiceLabel)

            quesContainer.appendChild(choiceContainer)

        }

        questionsElement.appendChild(quesContainer)
    }
  }
  render()

const savedScore=localStorage.getItem("score");
if(savedScore !== null){
  score.textContent=`Your score is ${savedScore} out of ${questions.length}.`
}

function calculateScore(){
  let score=0;
  for(let i=0;i<questions.length;i++){
    if(userAnswers[i]== questions[i].answer){
      score++;
    }
  }
  return score;
}
submit.addEventListener("click", ()=>{
  const score=calculateScore()
  score.textContent=`Your score is ${score} out of ${questions.length}.`;

  localStorage.setItem("score", score)
})






























// Do not change code below this line
// This code will just display the questions to the screen
// const questions = [
//     {
//       question: "What is the capital of France?",
//       choices: ["Paris", "London", "Berlin", "Madrid"],
//       answer: "Paris",
//     },
//     {
//       question: "What is the highest mountain in the world?",
//       choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
//       answer: "Everest",
//     },
//     {
//       question: "What is the largest country by area?",
//       choices: ["Russia", "China", "Canada", "United States"],
//       answer: "Russia",
//     },
//     {
//       question: "Which is the largest planet in our solar system?",
//       choices: ["Earth", "Jupiter", "Mars"],
//       answer: "Jupiter",
//     },
//     {
//       question: "What is the capital of Canada?",
//       choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
//       answer: "Ottawa",
//     },
//   ];
  
  // Display the quiz questions and choices
//   function renderQuestions() {
//     for (let i = 0; i < questions.length; i++) {
//       const question = questions[i];
//       const questionElement = document.createElement("div");
//       const questionText = document.createTextNode(question.question);
//       questionElement.appendChild(questionText);
//       for (let j = 0; j < question.choices.length; j++) {
//         const choice = question.choices[j];
//         const choiceElement = document.createElement("input");
//         choiceElement.setAttribute("type", "radio");
//         choiceElement.setAttribute("name", `question-${i}`);
//         choiceElement.setAttribute("value", choice);
//         if (userAnswers[i] === choice) {
//           choiceElement.setAttribute("checked", true);
//         }
//         const choiceText = document.createTextNode(choice);
//         questionElement.appendChild(choiceElement);
//         questionElement.appendChild(choiceText);
//       }
//       questionsElement.appendChild(questionElement);
//     }
//   }
//   renderQuestions();
  