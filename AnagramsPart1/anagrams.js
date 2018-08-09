function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

let div1 = document.getElementById('div1')

function displayOnPage(a) {
    let text = document.createTextNode(a)
    let span = document.createElement('span')
    span.appendChild(text)
    div1.appendChild(span)

}

function clearDisplay() {
    document.getElementById('div1').innerHTML = ""
}

function displayAnArray(a) {
    clearDisplay()
    for (i = 0; i < a.length; i++) {
        displayOnPage(a[i] + " ")
    }
}

document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;
    let anagrams = []
    let alphabetizedTypedText = alphabetize(typedText)
    let numberOfAnagramsFound = 0
    for (i = 0; i < words.length; i++) {
        if (alphabetizedTypedText === alphabetize(words[i])) {
            anagrams[numberOfAnagramsFound] = words[i]
            numberOfAnagramsFound++
        }
    }
    if (numberOfAnagramsFound == 0) {
        clearDisplay()
        displayOnPage("No anagrams found. Try a different word.")
    } else {
        displayAnArray(anagrams)
    }
}