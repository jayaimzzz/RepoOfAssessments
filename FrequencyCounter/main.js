document.getElementById("countButton").onclick = function () {
    // your code will go here ...

    var typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.

    let letterCounts = {}
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        // do something for each letter.
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    for(let letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
     }
     
     let typedWords = typedText.split(/\s/)
     let wordCounts = {}
     for (let i = 0; i <typedWords.length; i++) {
         currentWord = typedWords[i]
         if (wordCounts[currentWord] === undefined) {
             wordCounts[currentWord] = 1;
         } else {
             wordCounts[currentWord]++
         }

     }
     for(let typedWords in wordCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + typedWords + "\": " + wordCounts[typedWords] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
     }
     

}