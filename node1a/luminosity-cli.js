var colorutil = require('./colorutil.js')

var isBright = function(){
var bright = 0
var bright = colorutil.lumos(process.argv[2], process.argv[3], process.argv[4])
return bright
}

console.log(isBright())