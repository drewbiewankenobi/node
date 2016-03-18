var lumos = function(a,b,c){
var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
	return luminosity
}
var brightness = ""
if (luminosity > 155) {
	var brightness = "light"
} else { var brightness = "dark"}
console.log (brightness)
return brightness