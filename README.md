# Wordled
![Wordled logo](./assets/Logo.png)

## About
 Wordled is a clone of the well known NY Times game - Wordle. The player has  6 chances to correctly guess a 5 letter word. There will be notifications that will on whether or not the letter is: 1)Not used in the word. 2)Correct word, but the placement is wrong. 3)Correct letter in the correct place. 

 I choose to clone this game because it has a special place in my heart. My friends and I are gamer aficionados. During lockdown, Wordle was one of several ways that my firends and I could continue our gaming routine...especially on a daily basis. 

## Getting Started
### User Stories
* As a user, I want to know the instructions for playing the game. 
* As a user, I want to know if the letters in the word and in the correct space.
* As a user, I want to know if the letters in the word, but in the wrong space.
* As a user, I want to know if the letters are not used in the word.
* As a user, I want a running list/tally to know which letters have been used.  
* As a user, I want a notification if the word is too long or short.
* As a user, I want the option to delete a letter(s) before submition.
* As a user, I want to know if I won or loss the game.
* As a user, I want an option to restart the game.

### Psuedocode
```js
// Define required variables to track the state of the game.
// Store cache element refernces.
// Upon loading, the game state should be initialized, and a function should be called to render this game state
// The state of the game should be rendered to the user.
// Create reset functionality.

//===============================
//          Keyboard
//===============================
// Create a mock keyboard using flex.
// Handle a player clicking a letter with a handleClick function.
// Upon clicking a letter, said letter will render on the board.
// Color out the keys that are used:   
    //1) Letters that are in the word and in the correct space.
    //2) Letters that are in the word, but not in the correct space.
    //3) Letters are not used in the word.
// Have a backspace key to delete letters.
// Have an enter key to submit the guess.

//===============================
//          Game Board
//===============================
// Create a 5x6 game board: 5 squares acrossed (a 5 letter word) and 6 rows (number of tries) using flex.
// Create a function that will randomly assign a word to guess.
// Create a function that will check if any of the submitted letters/word match the word/answer.
// Color out the letters in the current row:
    //1) Letters that are in the word and in the correct space.
    //2) Letters that are in the word, but not in the correct space.
    //3) Letters are not used in the word.
// Have a message if the word is too long/short.

//================================
//          Word Bank
//================================
// Create an array of a minimum of 13 words.

//================================
//      Winning Conditions
//================================
// Have a message if the player guesses the word within 6 trys.
//If won, all the correct letters on the keyboard turn green.
// Have a message if the player was not able to guess the correct word after 6 trys.
//If lost, the colors on the keyboard do not change.
```

### Wireframe
[Here's a sneak peak.](https://www.figma.com/proto/Hm7sYLy7xYfgoEL5ow7ds2/Wordled?node-id=0-1&t=f99EDojvJDawTTFb-1)

## Attributions
* I would like to give thanks to Megan Hawkins and Tamerlan Mustafayev for their support and experience during this project.
* ChatGPT for being on call for late night help.

## Technologies Used
1. JavaScript
2. HTML
3. CSS


## Next Steps
* Incorporate a landing page intorducing the game and playing instructions.
* Have the tiles on the key board change colors pending if the letter is in the word and/or in the correct space.
* Use an API to pull a bigger variety of 5 letter words.
* Add a "Not a word" feature with a message notifying that said submitted word is not a word.
* Use an API to pull a variety of 5 letter "Not a word" words.
* Incorporate additional messages:
    * "Word is too short"
    * "Word is too long"
    * "...is not a word."
* Incorporate an animation feature to the tiles upon revealing if they are in the word and/or correct space.
* Incorporate a dropdown menu for instructions while playing the game.
* Incorporate a toggle switch for light mode and dark mode.
