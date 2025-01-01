let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const startButton = document.getElementById('start-btn');
const retryButton = document.getElementById('retry-btn');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const startContainer = document.getElementById('start-container');
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultTextElement = document.getElementById('result-text');

const answerValues = {
    'Never': 0,
    'Sometimes': 1,
    'Often': 2,
    'Always': 3
};

startButton.addEventListener('click', startGame);
retryButton.addEventListener('click', startGame);

function startGame() {
    startContainer.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    score = 0;
    currentQuestionIndex = 0;
    currentQuestions = getRandomQuestions(15);
    setNextQuestion();
}

function getRandomQuestions(num) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function setNextQuestion() {
    resetState();
    showQuestion(currentQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of 15`;
    questionElement.innerText = question.question;
    
    Object.keys(answerValues).forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, question.weight));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer, weight) {
    score += answerValues[answer] * weight;
    currentQuestionIndex++;

    if (currentQuestionIndex < 15) {
        setNextQuestion();
    } else {
        showResult();
    }
}

async function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');

    const maxScore = 15 * 3 * 3; // max questions * max answer value * max weight
    const { category, description } = analyzeResult(score, maxScore);

    resultTextElement.innerHTML = `
        <h3>${category}</h3>
        <p>${description}</p>
    `;
}