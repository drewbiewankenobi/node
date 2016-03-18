var request = require('request');

var _ = require('underscore')
var colorValue = function(a){
	a=process.argv[2]
	var newArray = []

	request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
	var x=''
  if (!error && response.statusCode == 200) {
   var x = JSON.parse(body)
   
   var newArray = _.findWhere(x, {name:a})
   console.log(newArray.rgb.r, newArray.rgb.g, newArray.rgb.b)
 
  }  
})
}

colorValue()
