// get all the dom nodes needed for the project
const Submit = document.getElementById("Submit");
const enterPlayer = document.getElementById("enterPlayer");
const usernameInput = document.getElementById("username-2");
const gameBoard = document.querySelectorAll('.gameBoard');
const playerForms = document.querySelectorAll('.Player-forms');
const form = document.getElementById('Players');
const userInput= document.getElementById("userInput");
const Results = document.getElementById('Results');

const playerNames = {
  first:"",
  second:""
}







function resetUsernameInput () {
  userInput.value = "";
}

  Submit.addEventListener("click", function(){
    if (userInput.value == "" || userInput.value.trim()  == "") {
      alert("Enter player name");
      return;
    }

    debugger;

    if(!playerNames.first) {

      enterPlayer.textContent = "Enter Player 2: ";
      playerNames.first = userInput.value;
    }    

    if(!playerNames.second) {
      playerNames.second = userInput.value;

      // hide form
    } 
     resetUsernameInput()    
  });
 


















































































































































// let playeRTurn = "X";
// Submit.onclick = function() {
//     num1.textContent = num1;
//};
// function submitForm(){
//     alert ("Hello World");
// }
// const Username2 = document.getElementById('Username');
// function changeText(){
//     Username2.textContent;
// }



// function decideTurn (clickedField) {
//     if(playeTurn == "X") {
//         playeTurn = "Y";
//     }else {
//         playeTurn = "X";
//     }
// }

// function reset () {
    
// }

// // [[X, O, X]
// // [O, X, O]
// // [X, O, X]]
// const matrix= [ [  1, 2, 3 ], 
//                 [  4, 5, 6 ], 
//                 [  7, 8, 9 ],
//                 [],
//                 [],
//                 [],
//                 [],
//                 [],
//                 [],
//             ]
//             matrix[0][0] =  'X';
// matrix[0][1] =  'O';
// matrix[0][2] =  'X';
// matrix[1][0] =  'O';
// matrix[1][1] =  'X';
// matrix[1][2] =  'O';
// matrix[2][0] =  'X';
// matrix[2][1] =  'O';
// matrix[2][2] =  'X';

// for(let row of matrix){
//     const rowString = row.join('');
//     console.log(matrix); 
// }



// function toggleVisibility () {
    
    
// }


// function isWinner () {
    
// }



// add event listeners at the bottom
// gameBoard.forEach(gameBoard => {
    //     gameBoard.addEventListener("click", gameBoardClicked, false);
    // });
    
    // function FieldClicked(clickedCellEvent) {
        // //   const clickedField = clickedFieldEvent.target;
//   const clickedField = parseInt(clickedField.id.replace('cell-', '')) - 1;

//   if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
    //       return;
    //     }
    // }
// // Submit.addEventListener("click", submitForm );
// // Username2.addEventListener("input", changeText);
// let playerTurn = username;
  // if(usernameInput == ""){
    //      console.log("LEAVE")
    // }
  // if(usernameInput == ""){
    //      console.log("LEAVE")
    // }
