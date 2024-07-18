const question= document.getElementById("question")

const choices= Array.from(document.getElementsByClassName("choice-text"))
let CurrentQues={}
let acceptingAns=true
let score=0
let quesCounter=0
let availQues=[]


let questions=[
    {
        question:'Inside which HTML element do we put the JS?',
        choice1:'<script>',
        choice2:'<js>',
        choice3:'<javascript>',
        choice4:'<scripting>',
        ans:1
    },
    {
        question:'How do we refer the css external file in our HTML page?',
        choice1:'<link ref="styles">',
        choice2:'<style href="xxx.css">',
        choice3:'<link rel="stylesheet" href="xxx.css">',
        choice4:'<styling="xxx.css">',
        ans:3
    },
    {
        question:'How do we refer the js external file in our HTML page?',
        choice1:'<script ref="xxx.js">',
        choice2:'<script href="xxx.js">',
        choice3:'<script rel="javascript" href="xxx.js">',
        choice4:'<script src ="xxx.js">',
        ans:4
    }
]

const Corr_Bonus=10
const Max_Ques=3

startGame=()=>{
    quesCounter=0
    score=0
    availQues=[...questions]
    getNewQues()
}

getNewQues=()=>{
    quesCounter++
    const quesIndex=Math.floor(Math.random()*3)
    CurrentQues=availQues[quesIndex]
    question.innerText=CurrentQues.question
    console.log(question.innerText)

//     choices.forEach(choice=>{
//     const num=choice.dataset["number"]
//     choice.innerText=CurrentQues["choice"+number]
// })
//     availQues.splice(quesIndex,1)
//     acceptingAns=true

}


