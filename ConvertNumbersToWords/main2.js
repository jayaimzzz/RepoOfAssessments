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

const zeroToNineteenWORDS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tenPlaceWORDS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty']

function convertNumberToWord(a) {
    let word = ''
    let splitNumber = splitA4DigitNumber(a)
    let singlesPlace = splitNumber[3]
    let tensPlace = splitNumber[2]
    let hundredsPlace = splitNumber[1]
    let thousandsPlace = splitNumber[0]
    let twoLSDs = parseInt(tensPlace.toString() + singlesPlace.toString())
    let twoLSDsWord = ''
    let hundredsPlaceWord = ''
    let thousandsPlaceWord = ''
   
    
    if (twoLSDs < 20) {
        twoLSDsWord = zeroToNineteenWORDS[twoLSDs]
    }
    
    if (twoLSDs < 100 && twoLSDs >= 20) {
        console.log(20 <= twoLSDs < 100)
        if (twoLSDs % 10 == 0) {
            twoLSDsWord = tenPlaceWORDS[tensPlace]
        } else {
            twoLSDsWord = tenPlaceWORDS[tensPlace] + " " + zeroToNineteenWORDS[singlesPlace]
        }
    }


    if (hundredsPlace !== 0) {
        hundredsPlaceWord = zeroToNineteenWORDS[hundredsPlace] + ' hundred '
    }
  
    if (thousandsPlace !== 0) {
        thousandsPlaceWord = zeroToNineteenWORDS[thousandsPlace] + ' thousand '
    }

    word = thousandsPlaceWord + hundredsPlaceWord + twoLSDsWord
    return word
}

for (i = 1; i < 10000; i++){
    if (i < 9999) {
        displayToPageAddComma(convertNumberToWord(i))
    } else {
        displayToPage(convertNumberToWord(i))
    }
}