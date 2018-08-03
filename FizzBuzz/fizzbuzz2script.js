div1 = document.getElementById("div1")
counter = 1
while (counter <= 1000) {
    let span = document.createElement("span")
    span.innerHTML = counter + " "
    if (counter % 2 == 0) {
        span.classList.add("bold")
    }
    if (counter % 3 == 0) {
        span.classList.add("red")
    }
    counter++
    console.log(span)
    div1.appendChild(span)
    if (isThisPrime(counter)){
        span.classList.add("box")
    }
}
function isThisPrime(a) {
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