/*-------------------------------- Constants --------------------------------*/
const wordBank = [
    "BLAST",
    "PEACH",
    "CHEER",
    "FROST",
    "COAST",
    "GHOST",
    "PIVOT",
    "TIPSY",
    "ZOMBI",
    "TWICE",
    "FALSE",
    "QUEST",
    "AGREE",
    "GRAIN",
    "SCORE",
    "RELAX",
    "BLANK",
    "ACORN",
    "SNACK",
    "APPLE", 
    "WHALE",
    "PANDA",
    "RINSE"
]

/*---------------------------- Variables (state) ----------------------------*/
let displayBoard
let winner
let randomWord
let guessedWord
let attempts
let currentRow
let currentCol


/*------------------------ Cached Element References ------------------------*/
const displayRowEls = document.querySelectorAll(".display-row")
const tileEls = document.querySelectorAll(".tile")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("#resetBtn")
const keyRowEls = document.querySelectorAll(".key-row")
const keyEls = document.querySelectorAll(".key")
const deleteEl = document.querySelector("#delete")
const enterEl = document.querySelector("#enter")
/*-------------------------------- Functions --------------------------------*/
function init(){
    displayBoard = [  
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]
    winner = false
    randomWord = wordBank[(Math.floor(Math.random() * wordBank.length))]
    console.log("randomWord test:", randomWord)
    guessedWord = ""
    attempts = 6
    currentRow = 0
    currentCol = 0

    resetDisplayBoard()
    render()
} 
init()

function render(){
    updateBoard()
    updateMessage()
}

function updateBoard(){
    // **Credit Megan for the this code block: displayBoard -> tile = tileEls{...} ** //
  
        displayBoard.forEach((row, rowIdx) => {
        row.forEach((tile, tileIdx) => {
            const tileIndex = rowIdx * 5 + tileIdx

            tile = tileEls[tileIndex].textContent 
                        
            if(tile === ""){
                tileEls[tileIndex].style.background = "#dedede"
                tileEls[tileIndex].style.color = "#000000"
            } else if(randomWord[tileIndex] === tile){
                tileEls[tileIndex].style.background = "#079855"
                tileEls[tileIndex].style.color = "#ffffff"
            } else if(randomWord.includes(tile)){
                tileEls[tileIndex].style.background = "#daa520"
                tileEls[tileIndex].style.color = "#ffffff"
            } else {
                tileEls[tileIndex].style.background = "#616060"
                tileEls[tileIndex].style.color = "#ffffff"
            }               
        })
    })

      // *** keyboard ***
      keyEls.forEach((tile, idx) => {
        // keyEls[idx].style.background = "red"
    })
    

    // displayBoard[currentRow].forEach((letter, idx) => {
    //     const letterIdx = currentRow * 5 + idx
    //     console.log("letterIdx", letterIdx)


    //     if(letter === ""){
    //         tileEls[letterIdx].style.background = "#dedede"
    //         tileEls[letterIdx].style.color = "#000000"
    //     } else if(randomWord[letterIdx] === letter){
    //         tileEls[letterIdx].style.background = "#079855"
    //         tileEls[letterIdx].style.color = "#ffffff"
    //     } else if (randomWord[letterIdx].includes(letter)){
    //         tileEls[letterIdx].style.background = "#079855"
    //         tileEls[letterIdx].style.color = "#ffffff"
    //     } else {
    //         tileEls[letterIdx].style.background = "#616060"
    //         tileEls[letterIdx].style.color = "#ffffff"
    //     }
    //     console.log(randomWord[letterIdx] === letter)
    // })
}

function updateMessage(){  
    if(winner === false && attempts === 0){
        messageEl.textContent = `Better luck next time.The correct word was ${randomWord} Want to try again?`
    } else if(winner === false && attempts <= 5){
        messageEl.textContent = `You have ${attempts} turns remaining.`      
    } else if(winner === false && attempts === 6){
        messageEl.textContent = "Choose, but choose wisley. Good Luck!"
    } else{
        messageEl.textContent = "Congratulations! You guessed the word. Want to try again?"
    }
    
}

function checkWord(){
    let correctLetter = 0

    displayBoard[currentRow].forEach((letter, idx) => {
        if(letter === randomWord[idx]){
            correctLetter++
        }
        return correctLetter === 5
    })
}

function handleClick(event){
    let letter = event.target.textContent
    
    if(currentCol < 5){
        tileEls[currentRow * 5 + currentCol].textContent = letter
        displayBoard[currentRow][currentCol] = letter
        currentCol++
    }
    console.log(letter)    
}

function handleEnter(){
    if(currentCol < 5 && winner === false){
        return
    } 
    
    guessedWord = displayBoard[currentRow].join("")
    
    if(checkWord()){
        winner = true
        updateMessage()
    } else if(attempts === 0 && winner === false){
        updateMessage()
    } else{
        currentRow++
        currentCol = 0
        attempts--
        guessedWord = ""
        updateMessage()
    }  
    render()
}

function deleteLetter(){
   if(currentCol <= 5 ){
       currentCol--
       tileEls[currentRow * 5 + currentCol].textContent = ""
       displayBoard[currentCol][currentRow] = ""
   }
}

function resetDisplayBoard(){
    tileEls.forEach((tile) => {
        tile.textContent = ""
        tile.style.background = "#dedede"
        tile.style.color ="#000000"
    })
}
/*----------------------------- Event Listeners -----------------------------*/       
keyEls.forEach((key, idx) => {
    key.addEventListener("click", handleClick)
}) 
enterEl.addEventListener("click", handleEnter)
deleteEl.addEventListener("click", deleteLetter)
resetBtnEl.addEventListener("click", init)

