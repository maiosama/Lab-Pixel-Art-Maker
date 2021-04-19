// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var canvas = document.getElementById("pixelCanvas");
var gridHight = document.getElementById("inputHeight");
var gridWidth = document.getElementById("inputWidth");

var size =document.getElementById("sizePicker");



function makeGrid() {
// Your code goes here!
    for ( let r= 0; r < gridHight.value; r ++){
        var tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let c = 0; c < gridWidth.value; c ++){
            var cell = document.createElement('td');
            tr.appendChild(cell);
    }

}

};
canvas.addEventListener('click', function(event){
    var color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor=color});

document.body.appendChild(canvas);

size.addEventListener('submit', function(e) {
e.preventDefault();
canvas.innerHTML=''
makeGrid();
});

