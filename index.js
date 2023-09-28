
var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(name) {
    return cats.concat([name]);
  }
  function prependCat(name) {
    return [name].concat(cats);
  }
  