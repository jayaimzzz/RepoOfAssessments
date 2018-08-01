let counter = 1
let counterStr = ""
// function isItOdd(a){
//     if
// }
while (counter <= 1000) {
    counterStr = counter.toString()
    if (counter % 2 === 0) {
        counterStr = counterStr.bold()
    }
    if (counter % 3 === 0){
    counterStr = counterStr.fontcolor("red")
    }
  
    document.write(counterStr + " ")
    counter++
}