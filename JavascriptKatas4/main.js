
function displayHeader(a) {
    let text = document.createTextNode(a);
    let headerElement = document.createElement('h4');
    headerElement.appendChild(text);
    destination.appendChild(headerElement);
}

function displayParagraph(a) {
    let text = document.createTextNode(a);
    let paragraphElement = document.createElement('p');
    paragraphElement.appendChild(text);
    destination.appendChild(paragraphElement);
}

function displayAnArrayRealPrettyLike(a) {
    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = JSON.stringify(a)
    destination.appendChild(paragraphElement);
}

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
let destination = document.getElementById("div1");

displayHeader("1. Display an array from the cities in gotCitiesCSV");
let gotCitiesArray = gotCitiesCSV.split(',');
displayAnArrayRealPrettyLike(gotCitiesArray);

displayHeader('2. Display an array of words from the sentence in bestThing');
let bestThingArray = bestThing.split(' ');
displayAnArrayRealPrettyLike(bestThingArray);

displayHeader('3. Display a string separated by semi-colons instead of commas from gotCitiesCSV');
displayParagraph(gotCitiesArray.join(';'));

displayHeader('4. Display a CSV (comma-separated) string from the lotrCitiesARray');
displayParagraph(lotrCitiesArray.join(','));

displayHeader('5. Display the first 5 cities in lotrCitiesArray');
displayAnArrayRealPrettyLike(lotrCitiesArray.slice(0,5));

displayHeader('6. Display the last 5 cities in lotrCitiesArray');
displayAnArrayRealPrettyLike(lotrCitiesArray.slice(-5));

displayHeader('7. Display the 3rd to 5th city in lotrCitiesArray');
displayAnArrayRealPrettyLike(lotrCitiesArray.slice(2,5))

displayHeader('8. Using splice, remove "Rohan" from lotrCitiesArray');
lotrCitiesArray.splice(2, 1);
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray');
lotrCitiesArray.splice(5);
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"');
lotrCitiesArray.splice(2, 0, 'Rohan');
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray');
lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('12. Using slice, display the first 14 characters from bestThing');
displayParagraph(bestThing.slice(0,14));

displayHeader('13. Using slice, display the last 12 characters from bestThing');
displayParagraph(bestThing.slice(-12));

displayHeader('14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"');
displayParagraph(bestThing.slice(23, 38));

displayHeader('15. Repeat #13 using substring instead of slice.');
displayParagraph(bestThing.substring(bestThing.length - 12));

displayHeader('16. Repeat #14 using substr instead of slice.');
displayParagraph(bestThing.substr(23, 38 - 23))

displayHeader('17. Find and display the index of "only" in bestThing');
displayParagraph(bestThing.indexOf('only'))

displayHeader('18. Find and display the index of the last word in bestThing');
let lastWord = bestThingArray[bestThingArray.length - 1]
displayParagraph(bestThing.indexOf(lastWord))

displayHeader('19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)');
for(let i = 0; i < gotCitiesArray.length; i++){
    if (gotCitiesArray[i].includes('aa') || gotCitiesArray[i].includes('ee') || gotCitiesArray[i].includes('ii') || gotCitiesArray[i].includes('oo') || gotCitiesArray[i].includes('uu')) {
        displayParagraph(gotCitiesArray[i])
    }
}

displayHeader('20. Find and display all cities from lotrCitiesArray that end with "or"');
for(let i = 0; i < lotrCitiesArray.length; i++){
    if (lotrCitiesArray[i].endsWith('or')) {displayParagraph(lotrCitiesArray[i])}
}

displayHeader('21. Find and display all the words in bestThing that start with a "b"');
for(let i = 0; i < bestThingArray.length; i++){
    if (bestThingArray[i].startsWith('b')) {displayParagraph(bestThingArray[i])};
}

displayHeader('22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"');
if(lotrCitiesArray.includes('Mirkwood')) {displayParagraph('Yes')} else {displayParagraph('No')};

displayHeader('23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"');
if(lotrCitiesArray.includes('Hollywood')) {displayParagraph('Yes')} else {displayParagraph('No')};

displayHeader('24. Display the index of "Mirkwood" in lotrCitiesArray');
displayParagraph(lotrCitiesArray.indexOf('Mirkwood'));

displayHeader('25. Find and display the first city in lotrCitiesArray that has more than one word');
for (i = 0; i < lotrCitiesArray.length; i++){
    if (lotrCitiesArray[i].split(' ').length > 1) {
        displayParagraph(lotrCitiesArray[i]);
        i = lotrCitiesArray;
    };
}

displayHeader('26. Reverse the order in lotrCitiesArray');
lotrCitiesArray.reverse();
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('27. Sort lotrCitiesArray alphabetically');
lotrCitiesArray.sort();
displayAnArrayRealPrettyLike(lotrCitiesArray);


displayHeader('28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)');
function compareStringLength(a, b){
    return a.length - b.length
}
lotrCitiesArray.sort(compareStringLength)
displayAnArrayRealPrettyLike(lotrCitiesArray)

displayHeader('29. Using pop, remove the last city from lotrCitiesArray');
let cityThatWasRemoved = lotrCitiesArray.pop();
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array');
lotrCitiesArray.push(cityThatWasRemoved);
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('31. Using shift, remove the first city from lotrCitiesArray');
let shiftedCity = lotrCitiesArray.shift();
displayAnArrayRealPrettyLike(lotrCitiesArray);

displayHeader('32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array');
lotrCitiesArray.unshift(shiftedCity);
displayAnArrayRealPrettyLike(lotrCitiesArray);

