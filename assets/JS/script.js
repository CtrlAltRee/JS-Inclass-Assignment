let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors, allBorders, allPixels, btn4, btn5, btn6, hidebtnall, showbtnall, resetbtnall; 

allColors = ["yellow", "lightgreen", "black", "salmon", "silver", "white", "lavender", "#ffaa20"]
allBorders = ["double", "groove", "dashed", "ridge", "dotted", "solid", "outset"]
allPixels = ["2.5px", "5px", "6.5px"]

firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');

btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2")
btn3 = document.getElementById("changebtn3")
btnall = document.getElementById("changebtnall");

btn4 = document.getElementById("hidebtn1");
btn5 = document.getElementById("hidebtn2")
btn6 = document.getElementById("hidebtn3")
hidebtnall = document.getElementById("hidebtnall");

showbtnall = document.getElementById("showbtnall");

resetbtnall = document.getElementById("resetbtnall");

console.log(showbtnall);

function changeBoxOne() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "4px "+ allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

//copy changeBox, rename ChangeBoxTwo, copy eventListener, etc

// to round # down = Math.floor()
// to round # up = Math.ceil()

function changeBoxTwo() {
    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = allPixels[Math.floor(Math.random() * allPixels.length)] + " " + allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

function changeBoxThree() {
    thirdbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.border = "4px "+ allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

function changeAllBoxes() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "4px "+ allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];

    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = allPixels[Math.floor(Math.random() * allPixels.length)] + " " + allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];

    thirdbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.border = "4px "+ allBorders[Math.floor(Math.random() * allColors.length)] + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

function hideBoxOne() {
    firstbox.style.display = "none";
}

function hideBoxTwo() {
    secondbox.style.display = "none";
}

function hideBoxThree() {
    thirdbox.style.display = "none";
}

function hideAllBoxes() {
    firstbox.style.display = "none";
    secondbox.style.display = "none";
    thirdbox.style.display = "none";
}

function showAllBoxes() {
    firstbox.style.display = "block";
    secondbox.style.display = "block";
    thirdbox.style.display = "block";
}

btn1.addEventListener("click", changeBoxOne);
btn2.addEventListener("click", changeBoxTwo);
btn3.addEventListener("click", changeBoxThree);
btnall.addEventListener("click", changeAllBoxes);

btn4.addEventListener("click", hideBoxOne);
btn5.addEventListener("click", hideBoxTwo);
btn6.addEventListener("click", hideBoxThree);
hidebtnall.addEventListener("click", hideAllBoxes);

showbtnall.addEventListener("click", showAllBoxes);





