var dice1_list = ["1", "2", "3", "4", "5", "6"];
var dice2_list = ["1", "2", "3", "4", "5", "6"];

var new_dice1_list = [];
var new_dice2_list = [];

var counter = 0;

function btnThrow() {
  if (counter < 10) {
    dice1_list.sort(() => Math.random() - 0.5);
    dice2_list.sort(() => Math.random() - 0.5);

    var random_dice1 = dice1_list[4];
    var random_dice2 = dice1_list[2];

    document.getElementById("dice1").innerHTML = random_dice1;
    document.getElementById("dice2").innerHTML = random_dice2;

    new_dice1_list.push(random_dice1);
    new_dice2_list.push(random_dice2);

    counter++;

    var bodyRef = document
      .getElementById("tableName")
      .getElementsByTagName("tbody")[0];
    bodyRef.innerHTML = "";
  } else {
    alert("You can only play 10 times. Please proceed to new game");
  }
}

function btnShow() {
  dice1_list = ["1", "2", "3", "4", "5", "6"];
  dice2_list = ["1", "2", "3", "4", "5", "6"];
  counter = 0;

  var body = document.getElementsByTagName("body")[0];

  var tbl = document.getElementById("table");
  var tblBody = document.getElementById("tableBody");

  for (var i = 0; i < new_dice1_list.length; i++) {
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    var cellText = document.createTextNode(i + 1);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(
      new_dice1_list[i] + "," + new_dice2_list[i]
    );
    cell.appendChild(cellText);
    row.appendChild(cell);

    tblBody.appendChild(row);

    if (i === new_dice1_list.length - 1) {
      new_dice1_list.length = 0;
      new_dice2_list = [];
    }
  }

  tbl.appendChild(tblBody);

  body.appendChild(tbl);
}
