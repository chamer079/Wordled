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

    resetBtnEl.addEventListener("click", init)

    render()
} 
init()
    

function render(){
    updateBoard()
    updateMessage()
}

function updateBoard(){
    // **Credit Megan for the this code blcok ** //
    displayBoard.forEach((row, rowIdx) => {
        row.forEach((tile, tileIdx) => {
            const tileIndex = rowIdx * displayBoard[0].length + tileIdx

            tileEls[tileIndex].style.background = "red"  
        })
    })

      // *** keyboard ***
      keyEls.forEach((tile, idx) => {
        keyEls[idx].style.background = "red"
        // console.log("keyEls[idx", keyEls[idx])
    })
  
}



function updateMessage(){  
    if(winner === false && attempts === 0){
        messageEl.textContent = `Better luck next time.The correct word was ${randomWord} Want to try again?`
    } else if(winner === false && attempts !== 0){
        messageEl.textContent = `You have ${attempts} turns remaining.`      
    } else{
        messageEl.textContent = "Congratulations! You guessed the word. Want to try again?"
    }
    
    // if (guessedWord.length <= 5){
    //     messageEl.textContent = "The word is too short."
    // }   else if (guessedWord.length >= 5){
    //     messageEl.textContent = "The word is too long."
    // }
}

function checkWord(){
    let correctLetter = 0

    displayBoard[currentRow].forEach((letter, idx) => {
        if(letter === randomWord[idx]){
            correctLetter++
        }
    })
    return correctLetter === 5
}
checkWord()

function handleClick(event){
    let letter = event.target.textContent
    
    if(currentCol < 5){
        tileEls[currentRow * 5 + currentCol].textContent = letter
        displayBoard[currentRow][currentCol] = letter
        currentCol++
    }
    console.log(displayBoard, letter)    
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
   
}

function deleteLetter(){
   if(currentCol >= 0){
       tileEls[currentRow * 5 + currentCol].textContent = ""
       displayBoard[currentCol][currentRow] = ""
       currentCol--
   }
    updateBoard()
}

/*----------------------------- Event Listeners -----------------------------*/       
keyEls.forEach((key, idx) => {
    key.addEventListener("click", handleClick)
}) 
enterEl.addEventListener("click", handleEnter)
deleteEl.addEventListener("click", deleteLetter)


