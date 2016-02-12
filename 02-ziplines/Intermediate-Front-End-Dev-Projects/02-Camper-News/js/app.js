//need controller 
angular.module('camperNewsApp', [])

.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('http://www.freecodecamp.com/news/hot').success(function(data){
		$scope.stories = data;
		// console.log(data);
		console.log($scope.stories);
	}).error(function(err){
		console.log(err);
})

}]);


