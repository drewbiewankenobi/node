var colorutil = require('./colorutil.js')

var goDark = function(){
var dark = 0
var dark = colorutil.darkos(process.argv[2], process.argv[3], process.argv[4])
return dark
}

console.log(goDark())