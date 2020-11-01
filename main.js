// console.log(document)

// const playingField = document.getElementById("playing-field")
// console.log(playingField.innerHTML)

// const down = document.getElementById("down")
// console.log(down)

// const ballColor = document.getElementById("block")
// ballColor.style.backgroundColor = 'yellow'

// document.getElementById('block').style.backgroundColor = 'yellow'
//********************************************************************************************************
//ex1
const moveRight = document.getElementById("right")
moveRight.onclick = function (){
    const block = document.getElementById('block');
    let left = parseInt(block.style.left) || 0;
    left += 15;
    block.style.left = left + 'px';
}
const moveLeft = document.getElementById("left")
moveLeft.onclick = function (){
    const block = document.getElementById('block');
    let right = parseInt(block.style.left) || 0;
    right -= 15;
    block.style.left = right + 'px';
}
const moveUp = document.getElementById("up")
moveUp.onclick = function (){
    const block = document.getElementById('block');
    let down = parseInt(block.style.top) || 0;
    down -= 15;
    block.style.top = down + 'px';
}
const moveDown = document.getElementById("down")
moveDown.onclick = function (){
    const block = document.getElementById('block');
    let up = parseInt(block.style.top) || 0;
    up += 15;
    block.style.top = up + 'px';
}
//********************************************************************************************************
//ex2
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
const inputName = document.createElement("input")
inputName.setAttribute("id", "inputName")
inputName.setAttribute("type", "text")
document.body.appendChild(inputName)

const btn = document.createElement("button")
btn.setAttribute("id", "btn")
btn.innerHTML = "check reservations"
btn.onclick = function(){
   let name = document.getElementById("inputName").value

   if(reservations[name] && !reservations[name].claimed) {
    alert("Welcome in, " + name)
  } else if (reservations[name] && reservations[name].claimed){
    alert("Hmm, someone already claimed this reservation")
  } else if (!reservations[name]) {
    alert("You have no reservation")
  }	
}
document.body.appendChild(btn)
 //********************************************************************************************************
//ex3
for(let i = 0; i < 6; i++){
    const box = document.createElement("div")
    box.setAttribute("class", "boxes")
    box.onmouseenter = function(){
        box.style.backgroundColor = getRandomColor()
    }
    container.appendChild(box)
}
const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }