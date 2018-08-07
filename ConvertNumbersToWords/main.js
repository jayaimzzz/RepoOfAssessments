let div1 = document.getElementById('div1')

function displayOnPage(a) {
    let text = document.createTextNode(a + ", ")
    div1.appendChild(text)
}

function displayOnPageNoCommaAtEnd(a) {
    let text = document.createTextNode(a)
    div1.appendChild(text)
}
const onesNames = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const teenNames = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tensPlaceNames = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty']

function convertNumbers0to19ToWord(n) {
    let r = ""
    if (n < 10) {
        r = onesNames[n]
    } else {
        r = teenNames[n - 10]
    }
    return r
}

function twoDigitNumberToArrayMSDLSD(a) {
    let firstDigit = Math.floor(a / 10)
    let secondDigit = a % 10
    let result = [firstDigit, secondDigit]
    return result
}


function converNumbers0to99toWord(n) {
    numberArray = twoDigitNumberToArrayMSDLSD(n)
    if (n < 20) {
        result = convertNumbers0to19ToWord(n)
    } else {
        if (n % 10 == 0) {
            result = tensPlaceNames[numberArray[0]]
        } else
            result = tensPlaceNames[numberArray[0]] + " " + onesNames[numberArray[1]]

    }
    return result
}

function threeDigitNumberToArrayOfTwoElements(a) {
    let firstDigit = Math.floor(a / 100)
    let secondAndThirdDigit = a % 100
    let result = [firstDigit, secondAndThirdDigit]
    return result
}

console.log(threeDigitNumberToArrayOfTwoElements(110))

function convertNumbers100to999toWord(n) {
    let numberArray = threeDigitNumberToArrayOfTwoElements(n)
    if (n % 100 === 0) {
        result = onesNames[numberArray[0]] + " hundred"
    } else {
        result = onesNames[numberArray[0]] + " hundred and " + converNumbers0to99toWord(numberArray[1])
    }
    return result
}

for (i = 1; i < 100; i++) {
    displayOnPage(converNumbers0to99toWord(i))
}
for (i = 100; i < 1000; i++) {
    displayOnPage(convertNumbers100to999toWord(i))
}
displayOnPageNoCommaAtEnd("one thousand")