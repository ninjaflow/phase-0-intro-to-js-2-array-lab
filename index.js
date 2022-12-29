const cats = [
    "Milo", "Otis", "Garfield"
];

function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat

function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat

function appendCat(name){
    const appendCat = [...cats, name];
    return appendCat;
}
appendCat

function prependCat(name){
    const prependCat = [name, ...cats];
    return prependCat;
}
prependCat


function removeLastCat(){
   const removeLastCat = cats.slice(0,-1);
   return removeLastCat;
}
removeLastCat

function removeFirstCat(){
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}
removeFirstCat