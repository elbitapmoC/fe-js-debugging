const btn = document.querySelector("button");
btn.addEventListener("click", moveRight);

// OPTION 1: Console.log
// function moveRight() {
//   const circle = document.getElementById("circle");
//   // console.log(getComputedStyle(circle)); // '0px'
//   // returns an object w/ MANYYY properties.
//   const { left } = getComputedStyle(circle);
//   circle.style.left = parseInt(left) + 25 + "px";
// }

// OPTION 2: Debugger
// function moveRight() {
//   debugger;
//   const circle = document.getElementById("circle");
//   const { left } = getComputedStyle(circle);
//   circle.style.left = parseInt(left) + 25 + "px";
// }

// OPTION 3: Breakpoints
// Debugger > Event Listener Breakpoints > Mouse > Click > Click Button (Move Right)
// Note: You can add breakpoints manually, inside file. Click line number.
