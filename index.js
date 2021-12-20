// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']
 function destructivelyAppendCat(name) {
    cats.push(name)
}
 function destructivelyPrependCat(name) {
     cats.unshift(name)
}
 function destructivelyRemoveLastCat() {
     cats.pop()
}
 function destructivelyRemoveFirstCat() {
     cats.shift()
}
 function appendCat(name) {
    let appendCopyOfCats = [...cats]
     appendCopyOfCats.push(name)
    return appendCopyOfCats
}
function prependCat(name) {
    let prependCopyOfCats = [...cats]
     prependCopyOfCats.unshift(name)
    return prependCopyOfCats
}
function removeLastCat() {
    let lastCat = [...cats]
    lastCat.pop()
    return lastCat
}
function removeFirstCat() {
    let firstCat = [...cats]
    firstCat.shift()
    return firstCat
}



 



