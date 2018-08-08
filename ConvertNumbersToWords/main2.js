let distination = document.getElementById('div1')

function displayToPage(a) {
    let text = document.createTextNode(a)
    let spanText = document.createElement('span')
    spanText.appendChild(text)
    distination.appendChild(spanText)
}

function displayToPageAddComma(a) {
    a = a + ', '
    displayToPage(a)
}

function splitA4DigitNumber(a) {
    let splitNumber = [0, 0, 0, 0]
    splitNumber[0] = Math.floor(a / 1000)
    splitNumber[1] = (Math.floor(a / 100)) % 10
    splitNumber[2] = (Math.floor(a / 10)) % 10
    splitNumber[3] = (Math.floor(a)) % 10
    return splitNumber
}

const zeroToNineteenWORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen']
const tenPlaceWORDS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty']

function convertNumberToWord(a) {
    let word = ''
    let splitNumber = splitA4DigitNumber(a)
    let singlesPlace = splitNumber[3]
    let tensPlace = splitNumber[2]
    let hundredsPlace = splitNumber[1]
    let thousandsPlace = splitNumber[0]
    let firstTwoDigits = tensPlace.toString() + singlesPlace.toString()
    let firstTwoDigitsWord = ""
    if (firstTwoDigits < 20) {
        firstTwoDigitsWord = zeroToNineteenWORDS[a]
    } else if (20 <= firstTwoDigits < 100) {
        if (firstTwoDigits % 10 == 0) {
            firstTwoDigitsWord = tenPlaceWORDS[tensPlace]
        } else {
            firstTwoDigitsWord = tenPlaceWORDS[tensPlace] + " " + zeroToNineteenWORDS[singlesPlace]
        }
    }
    word = firstTwoDigitsWord
    return word
}

displayToPage(convertNumberToWord(99))