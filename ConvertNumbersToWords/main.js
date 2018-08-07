let div1 = document.getElementById('div1')
function displayOnPage(a) {
    let text = document.createTextNode(a + ", ")
    div1.appendChild(text)
}
const onesNames = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const teenNames = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tensPlaceNames = ['',' ', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eight', 'ninty']
for (i = 1; i < 10; i++) {
    let r = onesNames[i]
    console.log(r)
    displayOnPage(r)
}
for (i = 10; i < 20; i++){
    let r = teenNames[i - 10]
    displayOnPage(r)
}
for (i = 20; i < 100; i++){
    let r = tensPlaceNames[Math.floor(i / 10)]
    displayOnPage(r)
}