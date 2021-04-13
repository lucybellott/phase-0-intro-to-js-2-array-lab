const  cats = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copyofcats = [...cats, 'Broom']
    return copyofcats;
}
function prependCat(name) {
    const precopyofcats = ['Arnold', ...cats]
    return precopyofcats;
}
function removeLastCat() {
    const newarray = cats.slice(0, - 1);
    return newarray;
}
function removeFirstCat() {
    const firstcatarray = cats.slice(1, 3);
    return firstcatarray;
}