let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors, allBorders; 

allColors = ["yellow", "lightgreen", "black", "salmon", "silver"]
allBorders = ["groove", "dashed", "ridge", "dotted", "solid", "outset"]

firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');

btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2")
btn3 = document.getElementById("changebtn3")
btnall = document.getElementById("changebtnall");

function changeBoxOne() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "4px "+ allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

//copy changeBox, rename ChangeBoxTwo, copy eventListener, etc

btn1.addEventListener("click", changeBoxOne);

// to round # down = Math.floor()
// to round # up = Math.ceil()


