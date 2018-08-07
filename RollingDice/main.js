function rollOfOneDice() {
    let a = Math.random()
    a = (a * 6) + 1
    a = Math.floor(a)
    return a
}
console.log("Roll of one dice")
console.log(rollOfOneDice())

function rollOfTwoDice() {
    let a = rollOfOneDice() + rollOfOneDice()
    return a
}
console.log("Roll of two dice")
console.log(rollOfTwoDice())

function rollTwoDice1000Times() {
    const countArray = [0,0,0,0,0,0,0,0,0,0,0]
    let roll = 0
    for (i = 1; i <= 1000; i++) {
        roll = rollOfTwoDice()
        countArray[roll-2] += 1
    }
    return countArray
}
// console.log("roll of two dice, 1000 times")
// console.log(rollTwoDice1000Times())

let destination = document.getElementById("div1")
console.log(destination)
let count = rollTwoDice1000Times()
for (i = 0; i < 11; i++){
    let p = document.createElement('div')
    let text = document.createTextNode(i + 2 + ": " + count[i])
    p.appendChild(text)
    destination.appendChild(p)
}

let br = document.createElement('br')
destination.appendChild(br)
for (i = 0; i < 11; i++){
    let div = document.createElement('div')
    div.className = "diceTotalAndBarDiv"
    let divWithTextInIt = document.createElement('div')
    divWithTextInIt.style.width = "30px"
    let text = document.createTextNode(i + 2 + ": " )
    let divBox = document.createElement ('div')
    divBox.className = "bar"
    divBox.style.height = "20px"
    divBox.style.width = count[i] + "px"
    console.log(divBox)
    divWithTextInIt.appendChild(text)
    div.appendChild(divWithTextInIt)
    div.appendChild(divBox)
    destination.appendChild(div)
}


