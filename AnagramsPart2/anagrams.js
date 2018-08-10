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

function findAnagramAndDisplayToPage(input) {
    let anagrams = []
    let alphabetizedTypedText = alphabetize(input)
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
// findAnagramAndDisplayToPage("listen")


document.getElementById("findAllSetsOf5orMore").onclick = findAll5


function findAll5(){
    let word = ''
    let alpahbetizedWord = ''
    let anagramSets = {}
    for (i = 0; i < words.length; i++){
    // for (i = 0; i < 5000; i++){
        word = words[i].replace(/[^a-z\s]+/g, "")
        alpahbetizedWord = alphabetize(word)
        if(anagramSets[alpahbetizedWord] === undefined) {
            anagramSets[alpahbetizedWord] = 1
        } else { 
            anagramSets[alpahbetizedWord]++
        }
        // console.log("wait")
    }
   console.log(anagramSets)
   let alpahbetizedWordsWithMoreThan5Anagrams = {}
   for (let alpahbetizedWord in anagramSets){
       if (anagramSets[alpahbetizedWord] >= 5) {
           if (alpahbetizedWordsWithMoreThan5Anagrams[alpahbetizedWord] === undefined) {
            alpahbetizedWordsWithMoreThan5Anagrams[]
           }
       }
   }
   
}
