//Question bank
var questionBank= [
    {
        question : 'Which of the following is not a stable sorting algorithm in its typical implementation',
        option : ['Insertion Sort','Merge Sort','Quick Sort','Bubble Sort'],
        answer : 'Quick Sort'
    },
    {
        question : 'HTML(Hypertext Markup Language) has language elements which permit certain actions other than describing the structure of the web document. Which one of the following actions is NOT supported by pure HTML (without any server or client side scripting)pages?',
        option : ['Embed web objects from different sites into the same page',
        'Refresh the page automatically after a specified interval',
        'Automatically redirect to another page upon download',
        'Display the client time as part of the page'],
        answer : 'Display the client time as part of the page'
    },
    {
        question : 'HELO and PORT, respectively, are commands from the protocols ',
        option : ['FTP and HTTP','TELNET and POP3','HTTP and TELNET','SMTP and FTP'],
        answer : 'SMTP and FTP'
    },
    {
        question : 'The behaviour of the document elements in XML can be defined by',
        option : ['Using document object','Registering appropriate event handlers','Using element object','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Which of the following is TRUE only of XML but NOT HTML?',
        option : ['It is derived from SGML','It describes content and layout','It allows user defined tags','It is restricted only to be used with web browsers'],
        answer : 'It allows user defined tags'
    },
    {
        question : 'In HTML, which of the following can be considered a container?',
        option : ['SELECT','VALUE','INPUT','BODY'],
        answer : 'BODY'
    },
    {
        question : 'Which is not the prime number?',
        option : ['43','57','73','101'],
        answer : '57'
    },
    {
        question : 'What will be the next number? 3, 5, 7, 11, 13, 17……',
        option : ['21','19','25','20'],
        answer : '19'
    },
    {
        question : 'What will be the maximum sum of 44, 42, 40, ...... ',
        option : ['502','504','506','500'],
        answer : '506'
    },
    {
        question : 'Given the sequence of terms, AD CG FK JP, the next term is ',
        option : ['OV','OW','PV','PW'],
        answer : 'OV'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();