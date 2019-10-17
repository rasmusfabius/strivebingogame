window.onload = function() {
  greatNumbers();
};

function greatNumbers() {
  //Get the referance to the bingo div
  var bingo = this.document.querySelector("#bingo");
  for (var i = 0; i < 76; i++) {
    var cell = this.document.createElement("div");
    cell.className = "number";
    var h3 = this.document.createElement("h3");
    h3.innerText = i + 1;
    cell.appendChild(h3);
    bingo.appendChild(cell);
  }
}

function randomize() {
  document.querySelector("#bingo").innerHTML = "";
  for (var i = 0; i < 76; i++) {
    //var randomizeNumbers = Math.floor(Math.random() * 77) + 1;
    var cell = this.document.createElement("div");
    cell.className = "number";
    var h3 = this.document.createElement("h3");
    h3.innerText = Math.floor(Math.random() * 77) + 1;
    cell.appendChild(h3);
    bingo.appendChild(cell);

    //console.log(randomizeNumbers);
  }
}
