//need controller 
angular.module('camperNewsApp', [])

.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('http://www.freecodecamp.com/news/hot').success(function(data){
		$scope.stories = data;
		for(i = 0; i < $scope.stories.length; i++){
			if($scope.stories[i].image == ""){
				$scope.stories[i].image  ="https://avatars2.githubusercontent.com/u/9892522?v=3&s=400";
			}
		 }
		console.log(data);
	}).error(function(err){
		console.log(err);
})

}]);


