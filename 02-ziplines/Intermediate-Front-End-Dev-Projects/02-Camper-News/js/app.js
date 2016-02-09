//need controller 
angular.module('camperNewsApp', [])

$http.get('http://www.freecodecamp.com/news/hot').success(function(data){
	console.log(data);
}).error(function(err){
	console.log(err);
})