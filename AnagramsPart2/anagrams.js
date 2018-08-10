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

function addABreakToPage(){
    let break1 = document.createElement('br')
    div1.appendChild(break1)
}

function clearDisplay() {
    document.getElementById('div1').innerHTML = ""
}

function displayAnArray(a) {
    clearDisplay()
    for (let i = 0; i < a.length; i++) {
        displayOnPage(a[i] + " ")
    }
}

document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;
    let anagrams = []
    let alphabetizedTypedText = alphabetize(typedText)
    let numberOfAnagramsFound = 0
    for (let i = 0; i < words.length; i++) {
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
    for (let i = 0; i < words.length; i++) {
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


function findAll5() {
    clearDisplay()
    let word = ''
    let alpahbetizedWord = ''
    let anagramSets = {}
    let set = []
    for (let i = 0; i < words.length; i++) {
        // for (i = 0; i < 5000; i++){
        word = words[i].replace(/[^a-z\s]+/g, "")
        // word = words[i]
        // console.log(word)
        alpahbetizedWord = alphabetize(word)
        // console.log(alpahbetizedWord)
        if (anagramSets[alpahbetizedWord] === undefined) {
            anagramSets[alpahbetizedWord] = [words[i]]
        } else {
            anagramSets[alpahbetizedWord].push(' ' + words[i])
        }
        // console.log("wait")
    }
    console.log(anagramSets)
    console.log(anagramSets.a.length)

       for (let alpahbetizedWord in anagramSets){
           if (anagramSets[alpahbetizedWord].length > 4) {
               displayOnPage(anagramSets[alpahbetizedWord])
               addABreakToPage()
           }
       }
    //    let alpahbetizedWordsWithMoreThan5Anagrams = {}
    //    for (let alpahbetizedWord in anagramSets){
    //        if (anagramSets[alpahbetizedWord] >= 5) {
    //            if (alpahbetizedWordsWithMoreThan5Anagrams[alpahbetizedWord] === undefined) {
    //             alpahbetizedWordsWithMoreThan5Anagrams[]
    //            }
    //        }
    //    }

}

// function findAll5() {
//     let word = ''
//     let alpahbetizedWord = ''
//     for (i = 0; i < words.length; i++){
//         word = words[i]
//         alpahbetizedWord = alphabetize(word)

//     }
// }