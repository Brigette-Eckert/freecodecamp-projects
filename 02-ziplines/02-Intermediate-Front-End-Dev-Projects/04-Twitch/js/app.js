angular.module('twitchStatusApp', [])
	
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.user = ""
	$scope.twitchUsers = ["freecodecamp", "EtchTheSketch", "SoXvicious", "Dexteritybonus", "patrickrothfuss", "FeliciaDay", "ShaBooZey", "Monstercat", "TotalBiscuit", "Crendor"];
	$scope.userData =[];
	for(i=0; i < $scope.twitchUsers.length; i++){
		$scope.user = $scope.twitchUsers[i];
		// console.log("user " + $scope.user);
		$http.get("https://api.twitch.tv/kraken/streams/" + $scope.user).success(function(data){
			console.log(data)
			$scope.username = data._links.self.split('/').pop();
			console.log("username " + $scope.username);
			$scope.userData.push(data);
			console.log($scope.userData);
		})
	};
	
}])



//add user name 

//add online vs offline status 
// to get user name - spilt channel url at / - pop username
//add avatar 

//add data scope for offline vs offline of where to get in 
//class offline or online for sass to make color as same as fliter 