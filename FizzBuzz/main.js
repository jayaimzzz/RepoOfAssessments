let counter = 1
let counterStr = ""

function Prime(a) {
    let counter = 2
    let result = true
    while (counter < a) {
        if (a % counter == 0) {
            result = false
            counter = a
        } else {
            result = true
            counter++
        }
    }
    return result
}
console.log(Prime(4))


while (counter <= 1000) {
    counterStr = counter.toString()
    if (counter % 2 === 0) {
        counterStr = counterStr.bold()
    }
    if (counter % 3 === 0) {
        counterStr = counterStr.fontcolor("red")
    }
    if (Prime(counter)) {
    document.write('<span class="prime">' + " " + counterStr + " " + '</span>')
    } else {
        document.write(" " + counterStr)
    }
    counter++
}
// let div1 = document.getElementById("div1")
// div1.innerHTML = "hellwo"
// let test = document.createElement("article")
// div1.appendChild(test)