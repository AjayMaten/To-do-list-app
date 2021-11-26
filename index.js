const superheroes = require("superheroes");
const supervillains = require("supervillains");

var name = superheroes.random();
var villainName = supervillains.random();
console.log(name, villainName);
