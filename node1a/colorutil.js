var lumos = function(a,b,c){
a = process.argv[2]
b = process.argv[3]
c = process.argv[4]

var luminosity = 0.2126*a + 0.7152*b + 0.0722*c
	return luminosity
}

var darkos = function(a,b,c){
a = process.argv[2]
b = process.argv[3]
c = process.argv[4]
var darkText = []
var dark1 = a-(0.2*a) 
var dark2 = b-(0.2*b) 
var dark3 = c-(0.2*c)
darkText.push(dark1,dark2,dark3)
return darkText.join(" ")
}

module.exports = {
	lumos : lumos,
	darkos : darkos
}