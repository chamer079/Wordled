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
let currentWord //<- need to refer to current random word for
let guessedWord
let attempts

/*------------------------ Cached Element References ------------------------*/
const keyRowEls = document.querySelectorAll(".key-row")
const displayRowEls = document.querySelectorAll(".display-row")
const tileEls = document.querySelectorAll(".tile")
const keyEls = document.querySelectorAll(".key")
const deleteEl = document.querySelector("#delete")
const enterEl = document.querySelector("#enter")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("#resetBtn")

// c(?). get the index for an id assigned to the target el in the HTML - assign this to a const called keyIndex
const keyboard = document.querySelectorAll(".keyboard")

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
    attempts = 0

    resetBtnEl.addEventListener("click", init)

    render()
} 
init()
    

function render(){
    updateBoard()
    updateMessage()
}


function updateBoard(){
    // *** displayBoard ***  
    // // *credit Megan for this code block!!!
    // // const tileIndex = taking the rowIdx multiplying 
    // displayBoard.forEach((row, rowIdx) => {
    //     row.forEach((tile, tileIdx) => {
    //         const tileIndex = rowIdx * displayBoard[0].length + tileIdx;
            
    //         tileEls[tileIndex].style.background = "red";
    //         // console.log(tileEls[tileIndex]);
    //         console.log(displayBoard[0].length)
    //     });
    // });

    
    // ** displayBoard Alternate **
    tileEls.forEach((tile, idx) => {
        tileEls[idx].style.background = "red"
        // console.log("tileEls[idx]", tileEls[idx])
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
    
    if (guessedWord.length < 5){
        messageEl.textContent = "The word is too short."
    }   else if (guessedWord.length > 5){
        messageEl.textContent = "The word is too long."
    }
}

function placeLetter(index){  // will probably need an interation and if/else(?)
    displayBoard[index] = attempts  

    // console.log("currentAttempt test", attempts)
}
        
// **** Maybe combine both currentTurn() & checkForWinner -> both () will more than likely need to iterate through each row to see if there are any blank spaces? -> practicing DRY codeing? Would it be better to compartmentalize into different functions? **//




    //if row ! empty, move to the next turn / row    
       // 6.2b: update board so that it is = to the current guessedWord of the turn
       // 6.2c: call currentTurn() in handleClick



// Step 6.2a: create a currentAttempt function - 
 // if current attempt is empty then populate with current guessed word
 //if row ! empty, move to the next turn / row    

        
/*----------------------------- Event Listeners -----------------------------*/       
// Step 6. Handle a player clicking a letter with a handleClick function -> THIS IS FOR KEYBOARD .
function handleClick(event){
    console.log(displayBoard)
    
    // d. if winner = true return out of handleClick
    if(displayBoard[event.target.id] === " " || winner === true){
        return
    }   
    console.log("Key Test", event.target.id)
    console.log("board test", event.target)
    
    tileEls.forEach((tile) => {
        tileEls[0].textContent = event.target.textContent

        
    
    })
    // placeLetter(event.target.id)
    // // currentTurn()
    
    // render()
    
}




keyEls.forEach((key, idx) => {
    key.addEventListener("click", handleClick)
    
    
}) 
 
    // Step 6.3a: create a checkForWinner()
        // 6.3b: if there is a winner / randomWord = wordEntered - message: "you won!" & return out of function
        // call checkForWinner() in handleClick
