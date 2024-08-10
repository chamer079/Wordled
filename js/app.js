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

// // c(?). get the index for an id assigned to the target el in the HTML - assign this to a const called keyIndex
// const keyboard = document.querySelectorAll(".keyboard")

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
render()


function updateBoard(){
    // **Credit Megan for the this code blcok ** //
    displayBoard.forEach((row, rowIdx) => {
        row.forEach((tile, tileIdx) => {
            const tileIndex = rowIdx * displayBoard[0].length + tileIdx

            tileEls[tileIndex].style.background = "red"  // alter to assign tileEls[tileIndex] a variable for changing tile colors to show guess results?
        })
    })

      // *** keyboard ***
      keyEls.forEach((tile, idx) => {
        keyEls[idx].style.background = "red"
        // console.log("keyEls[idx", keyEls[idx])
    })
    // c. loop over board & keyboard for each el -> 1)use the current idx to access the corresponding tiles & style to correspond to the correct / incorrect letter in each tile
    // c1. if the tile has the correct letter && in the correct tile index: tile = #079855, letter = white, +tile animation 
    // c2. if the tile has the correct letter && ! in the correct tile index: tile = #daa520, letter = white, +tile animation
    // c.3 if the tile ! have the correct letter && ! inthe correct tile index: tile = #616060, letter = white, +tile animation
}



function updateMessage(){  
    // would it be better to place this message in checkForWinner()??
    if(winner === false && attempts === 0){
        messageEl.textContent = `Better luck next time.The correct word was ${randomWord} Want to try again?`
        // console.log("winner = false")
    } else if(winner === false && attempts !== 0 && attempts <= 6){
        messageEl.textContent = `You have ${attempts} turns remaining.`

       
    } else{
        messageEl.textContent = "Congratulations! You guessed the word. Want to try again?"
        // console.log("winner = true")
    }
    
    // if (guessedWord.length <= 5){
    //     messageEl.textContent = "The word is too short."
    // }   else if (guessedWord.length >= 5){
    //     messageEl.textContent = "The word is too long."
    // }
}


// NEEDED TO MEET MVP:
    // 1) Need to have a function enter/submit button - upon clicking the button:
        // a) the guessedWord will be check with the random word for that turn (since guessedWord is a string -split()?) - the results from checking the letters/words will change the color of the tiles. IF... 
                // incorrect letter = gray
                // correct letter but worng spot = yellow
                // correct letter & correct spot = green
            // need messages her for: <- ???
                // word too short
                // word too long
                // is not a word
        //  b) the attempts count will decrease by 1  
        // reset guessedWord for the next attempt
    // 2) Have a functional reset button to restart the game one the game is over - have a corresponding message for the associated game result  


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
    if(guessedWord.length === 5 || winner === true){
        return
    }

    displayBoard[currentRow] = guessedWord.split("")
    let currentRandomWord = randomWord.split("")
    console.log("test current random word", currentRandomWord)
    // console.log("current guessed word test:", guessedWord)

    if(guessedWord === currentRandomWord){
        winner = true
        updateMessage()
    } else{
        
    }    
  
}
handleEnter()

        
/*----------------------------- Event Listeners -----------------------------*/       
//Handle a player clicking a letter with a handleClick function -> THIS IS FOR KEYBOARD .


keyEls.forEach((key, idx) => {
    key.addEventListener("click", handleClick)
}) 
enterEl.addEventListener("click", handleEnter)

    // Step 6.3a: create a checkForWinner()
        // 6.3b: if there is a winner / randomWord = wordEntered - message: "you won!" & return out of function
        // call checkForWinner() in handleClick
