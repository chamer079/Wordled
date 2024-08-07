/*-------------------------------- Constants --------------------------------*/
// Step1. Create an wordBank array of a minimum of 13 words.
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
// Step 2. Define required variables to track the state of the game. 
let player  // <-necessary to have this for a 1 player game? will revisit
let displayBoard
let winner
let randomWord
let guessWord

/*------------------------ Cached Element References ------------------------*/
// Step 3. Store cache element refernces. 
const keyRowEls = document.querySelectorAll(".key-row")
const displayRowEls = document.querySelectorAll(".display-row")
const tileEls = document.querySelectorAll(".tile")
const keyEls = document.querySelectorAll(".key")
const deleteEl = document.querySelector("#delete")
const enterEl = document.querySelector("#enter")
const messageEl = document.querySelector("#message")

// c(?). get the index for an id assigned to the target el in the HTML - assign this to a const called keyIndex
const keyIndex = document.querySelector(".keyboard")

/*-------------------------------- Functions --------------------------------*/
// Step 4. Upon loading, the game state should be initialized, and a function should be called to render this game state
function init(){
    displayBoard = [   // <- realized the need for neseted arr due to words.  is correct?
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
    guessWord = ["", "", "", "", ""]
} 
init()
    
// Step 5. The state of the game should be rendered to the user.
function render(){
    // console.log("HI RENDER()!")
    updateBoard()
    updateMessage()
}
render()

// console.log("test render()", render())

function updateBoard(){
    // console.log("UPDATE BOARD()")
    // *** displayBoard ***
    displayBoard.forEach((row) => {
        row.forEach((tile, idx) => {
            tileEls[idx].style.background = "gold"  //<- only coloring 1 row.
            // tileEls[idx].textContent = ["w"] //<- if inputting "whale", will render "whale" 5x
            tileEls[idx].style.color = "white"
           
        })


        // c. loop over board & keyboard for each el -> 1)use the current idx to access the corresponding tiles & style to correspond to the correct / incorrect letter in each tile
    
    
    
            // c1. if the tile has the correct letter && in the correct tile index: tile = #079855, letter = white, +tile animation 
            // c2. if the tile has the correct letter && ! in the correct tile index: tile = #daa520, letter = white, +tile animation
            // c.3 if the tile ! have the correct letter && ! inthe correct tile index: tile = #616060, letter = white, +tile animation
    })



}
// console.log("test updateBoard()", updateBoard())

function updateMessage(){
    // console.log("UPDATE MESSAGE()")
    // messageEl.textContent = "TEST"
   
    // f. render a message that if the player won or lost -> ?? would it be better to place this message in checkForWinner()??
    if(winner === false){
        messageEl.textContent = "Better luck next time. Want to try again?"
        // console.log("winner = false")
    } else{
        messageEl.textContent = "Congratulations! You guessed the word. Want to try again?"
        // console.log("winner = true")
    }
    
    // e. render a message if the word entered is: 
        // e1. too short -> < randomWord.length 
        // e2. too long -> > randomWord.length
}
// console.log("updateMessage test: updateMessage()")


// Step 7. create a reset functionality


        
/*----------------------------- Event Listeners -----------------------------*/       
// Step 6. Handle a player clicking a letter with a handleClick function -> THIS IS FOR KEYBOARD .
function handleClick(event){
    // console.log("HANDLE CLICK()")
    // console.log(keyRowEls)
//    console.log("Key Test", event.target.id)
    displayBoard = event.target.id
    console.log(displayBoard)

    // displayBoard.textContent = "keyRowEls.event.id"
    // console.log(displayBoard)
}
// console.log("test handleClick():", handleClick())

keyRowEls.forEach((key) => {
    key.addEventListener("click", handleClick)
    
    // b1. Have a backspace key to delete letters. -> .pop
    // b2. Have an enter key to submit the guess. render word in the current blank row
})
// console.log(handleClick())
// handleClick()
    
    // d. if winner = true return out of handleClick

    // Step 6.1a: create a currentTurn function that accepts a parameter of index??? -> will probably need an interation and if/else(?)
    // if current turn/ row is empty then populate with current guessed word
    //if row ! empty, move to the next turn / row    
        // 6.1b: update board so that it is = to the current guessedWord of the turn
        // 6.1c: call currentTurn() in handleClick
    
    // Step 6.2a: create a checkForWinner()
        // 6.2b: if there is a winner / randomWord = wordEntered - message: "you won!" & return out of function
        // call checkForWinner() in handleClick

    // Step 6.3: call the render() in handleClick