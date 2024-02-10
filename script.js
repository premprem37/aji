const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        a: "//",
        b: "/*",
        c: "<!--",
        d: "*/",
        correct: "a",
    },
    {
        question: "What is the purpose of the '===' operator in JavaScript?",
        a: "Assigns a value to a variable",
        b: "Compares the value and type",
        c: "Concatenates two strings",
        d: "Checks if a variable is declared",
        correct: "b",
    },
    {
        question: "What is the result of the expression: 3 + 2 + '7' in JavaScript?",
        a: "12",
        b: "57",
        c: "327",
        d: "Error",
        correct: "c",
    },
    {
        question: "Which method is used to add a new element to the end of an array in JavaScript?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        correct: "a",
    },
    {
        question: "What is the result of the following expression: '2' + 2 in JavaScript?",
        a: "22",
        b: "4",
        c: "TypeError",
        d: "24",
        correct: "a",
    },
    {
        question: "What is the output of the following code: console.log(typeof undefined); in JavaScript?",
        a: "undefined",
        b: "string",
        c: "number",
        d: "object",
        correct: "a",
    },
    {
        question: "What is the output of the following code: console.log(1 + '1'); in JavaScript?",
        a: "2",
        b: "11",
        c: "11.0",
        d: "NaN",
        correct: "b",
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        a: "String",
        b: "Boolean",
        c: "Float",
        d: "Object",
        correct: "c",
    },
    {
        question: "What does the '||' operator do in JavaScript?",
        a: "Logical AND",
        b: "Logical OR",
        c: "Logical NOT",
        d: "Exclusive OR",
        correct: "b",
    },
    {
        question: "What is the result of the following expression: Boolean('0') in JavaScript?",
        a: "true",
        b: "false",
        c: "0",
        d: "1",
        correct: "a",
    },
    {
        question: "What method is used to remove the last element from an array in JavaScript?",
        a: "remove()",
        b: "delete()",
        c: "pop()",
        d: "splice()",
        correct: "c",
    },
    {
        question: "What does JSON stand for?",
        a: "JavaScript Object Notation",
        b: "JavaScript Orientation Notation",
        c: "JavaScript Object Naming",
        d: "JavaScript Output Notation",
        correct: "a",
    },
    {
        question: "What does the 'typeof' operator in JavaScript return for null?",
        a: "null",
        b: "undefined",
        c: "object",
        d: "function",
        correct: "c",
    },
    {
        question: "Which event is triggered when a user clicks on an HTML element?",
        a: "onchange",
        b: "onsubmit",
        c: "onclick",
        d: "onmouseover",
        correct: "c",
    },
    {
        question: "What does the 'NaN' stand for in JavaScript?",
        a: "Not a Negative",
        b: "Not a Number",
        c: "Not a Null",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is the correct syntax to refer to an external script called 'script.js' in JavaScript?",
        a: "<script href='script.js'></script>",
        b: "<script name='script.js'></script>",
        c: "<script src='script.js'></script>",
        d: "<script file='script.js'></script>",
        correct: "c",
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

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
