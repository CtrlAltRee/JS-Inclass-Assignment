let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors, allBorders, allPixels; 

allColors = ["yellow", "lightgreen", "black", "salmon", "silver"]
allBorders = ["double", "groove", "dashed", "ridge", "dotted", "solid", "outset"]
allPixels = ["2.5px", "5px", "6.5px"]

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

function changeBoxTwo() {
    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = allPixels[Math.floor(Math.random() * allPixels.length)] + " " + allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

btn2.addEventListener("click", changeBoxTwo);

function changeBoxThree() {
    thirdbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.border = "4px "+ allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

btn3.addEventListener("click", changeBoxThree);
