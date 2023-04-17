const quizData=[
    {
    question:"which language runs in a web browser",
    a: "java",
    b: "c",
    c: "python",
    d: "javascript",
    correct: "d",
    },

{
    question: "what does css stand for?",
    a: "central style sheets",
    b: "cascading style sheets",
    c: "cascading simple sheets",
    d: "cars SUVs sailboats",
    correct: "b",
},
{
 question: "what does HTML stand for?",
 a: "Hypertext markup language",
 b: "hypertext markdown lanuage",
 c: "hypertext simple sheets",
 d: "halicopters terminals motorboatas lamborginis",
 correct: "a",   
},
{
    question: "what year was javascript launcher",
    a: '1996',
    b: "1995",
    c: "1994",
    d: "none of java above",
    correct: "b",
},
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
 
loadQuiz()
 function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
 }
 function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
 }
 function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
return answer
 }
 submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML=`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
 })
 