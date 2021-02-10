const quizContent = [
    {
    question: "What is the capital of Chile?",
    a:"Montevideo",
    b:"Karakas",
    c:"Santiago",
    d:"Buenos Aires",
    correct:"c"
    },

    {
    question: "What is the smallest country in the world?",
    a:"San Marino",
    b:"Liechtenstein",
    c:"Malta",
    d:"Vatican City",
    correct:"d"
    },    

    {
    question: "What is the longest river in the world?",
    a:"Nile",
    b:"Amazon",
    c:"Volga",
    d:"Mississippi",
    correct:"a"
    },

    {
    question: "What is the largest country in the world?",
    a:"Canada",
    b:"Australia",
    c:"Russia",
    d:"Brazil",
    correct:"c"
    },
    
]
let quizContainer = document.getElementById("quiz");
let score=0;
let radios = document.getElementsByClassName("radio");
let qText = document.getElementById("qText");
let aText = document.getElementById("aText");
let bText = document.getElementById("bText");
let cText = document.getElementById("cText");
let dText = document.getElementById("dText");
const submitBtn = document.getElementById("submit")

let currentQuestion = 0;
loadQuiz();

function loadQuiz(){
    qText.innerText = quizContent[currentQuestion].question;
    aText.innerText = quizContent[currentQuestion].a;
    bText.innerText = quizContent[currentQuestion].b;
    cText.innerText = quizContent[currentQuestion].c;
    dText.innerHTML = quizContent[currentQuestion].d;
    console.log(currentQuestion);


}

function deselect(){
for(let i=0; i<radios.length; i++){
    radios[i].checked=false;
}  
}

function checkAnswer(){
    for(let i=0; i<radios.length; i++){
        if(radios[i].checked==true && radios[i].id ==quizContent[currentQuestion].correct ){
            score++;
        
        }
    }  
}


submitBtn.addEventListener("click",() => {
    checkAnswer();
    currentQuestion++;
    
    
    if(currentQuestion<quizContent.length){
        deselect();
        loadQuiz();
    } 
    else{
        quizContainer.innerHTML = `
        <h2>Completed! Your score: ${score}/${quizContent.length}</h2>`;
    }
});

