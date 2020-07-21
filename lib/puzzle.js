// THE HINT BTN //

// The syntax
// element.addEventListener('event', () => {})

// ALWAYS the first step is to select the element
const button = document.querySelector("#show-hint");
console.log(button)

// add event listener on the button
button.addEventListener('click', () => {
  // when the event(click) happens,
  // find the hint div
  const hint = document.querySelector('div.hint');
  // toggle the active class on the hint div
  
  // element.classList.add('name of the class')
  // element.classList.remove('name of the class')
  // element.classList.toggle('name of the class')
  hint.classList.toggle('active');

});
// this event is going to be a click

//////////////
// THE GAME //
//////////////

// SELECTING ELEMENTS
// select all of the tds
const tds = document.querySelectorAll('td');


// THE FUNCTIONS
const canMove = (clickedBox) => {
  // it can move if the clicked box is adjacent to the black box

  // check the column of the clicked box
  const clickedBoxColumn = clickedBox.cellIndex;
  // check the row of the clicked box
  const clickedBoxRow = clickedBox.parentElement.rowIndex

  // find the empty box
  const emptyBox = document.querySelector('.empty');
  // check the column of the empty box
  const emptyBoxColumn = emptyBox.cellIndex;
  // check the row of the empty box
  const emptyBoxRow = emptyBox.parentElement.rowIndex

  const colDiff = Math.abs(clickedBoxColumn - emptyBoxColumn)
  const rowDiff = Math.abs(clickedBoxRow - emptyBoxRow)

  // check whether they are adjacent or not

  // OPTION 1
  // if the difference of the COLs is 0 and the diffROWs is 1
  // OR
  // if the difference of the ROWs is 0 and the diffCOLs is 1

  // ALSO we can check for

  // OPTION 2
  // if the absolute sum is 1

  // it can move (return true)
  
  // if (rowDiff + colDiff === 1) return true 
  // if (rowDiff + colDiff === 1) {
  //   return true 
  // } 
  return rowDiff + colDiff === 1
  
};

const swap = (clickedBox) => {
  // find the empty box
  const emptyBox = document.querySelector('.empty');

  // add the number to the empty box
  emptyBox.innerText = clickedBox.innerText;
  // remove the .empty from the empty box
  emptyBox.classList.remove('empty');

  // remove the number from the clicked box
  clickedBox.innerText = '';
  // add the .empty to the clicked box
  clickedBox.classList.add('empty');

};

const gameIsOver = () => {
  const tds = document.querySelectorAll('td');
  const currentSequence = Array.from(tds).map( td => td.innerText ).join();
  const finalSequence = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"
  return currentSequence === finalSequence
};


// THE LOOP

// for each of the tds
tds.forEach( (td) => {
  // add a event listener
  // event is going to be a click
  td.addEventListener('click', (event) => {
    // when the click happens

    // console.log driven development
    // console.log('it is clicked');
    
    // if the box can move (the box can only move if it's adjacent to the black box)

    // how's the syntax for a if statement
    
    // if (condition) { 
    //   doSomething(); 
    // };

    // if (condition) doSomething();

    if (canMove(event.currentTarget)) {
      // then, swap the boxes
      swap(event.currentTarget);
      // then, check if the game is over
      if (gameIsOver()) {
        // alert!
        alert('Du hast gewonnen!');
        // reload the game!
        document.location.reload();
      };
    };
  });
});

