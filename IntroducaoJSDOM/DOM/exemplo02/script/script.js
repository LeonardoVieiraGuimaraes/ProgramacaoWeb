// var myMain = document.getElementById("main");
// myMain.addEventListener(
//   "click",
//   function (event) {
//     myMain.style.color = "red";
//     myMain.style.backgroundColor = "blue";
//   },
//   false
// );

var myInput = document.getElementById("input");
myInput.addEventListener(
  "select",
  function (event) {
    myInput.style.color = "red";
    myInput.style.backgroundColor = "blue";
  },
  false
);

// var draggableItem = document.getElementById("draggable");
// var dropZone = document.getElementById("dropzone");

// draggableItem.addEventListener("dragstart", function (event) {
//   event.dataTransfer.setData("text", event.target.id);
// });

// dropZone.addEventListener("dragover", function (event) {
//   event.preventDefault();
// });

// dropZone.addEventListener("drop", function (event) {
//   event.preventDefault();
//   var data = event.dataTransfer.getData("text");
//   var draggedElement = document.getElementById(data);
//   dropZone.appendChild(draggedElement);
// });
