angular.module('twitchStatusApp', [])
	
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.user = ""
	$scope.twitchUsers = ["freecodecamp", "EtchTheSketch", "SoXvicious", "Dexteritybonus", "patrickrothfuss", "FeliciaDay", "ShaBooZey", "Monstercat", "TotalBiscuit", "Crendor", "brunofin", "comster404"];
	$scope.userData =[];
	for(i=0; i < $scope.twitchUsers.length; i++){
		$scope.user = $scope.twitchUsers[i];
		// console.log("user " + $scope.user);
		$http.get("https://api.twitch.tv/kraken/streams/" + $scope.user).success(function(data){
			console.log(data);
			if(stream==null){
			$http.get(data._links.self).success(function(info){
				console.log(info);
				$scope.userData.push(info);
				})
			}
			// data.username = data._links.self.split('/').pop();
			// console.log("username " + $scope.username);
			console.log($scope.userData);
		})
	};
	
}])



//add avatar 


//add data scope for offline vs offline of where to get in 
//class offline or online for sass to make color as same as fliter 

// add info for error and show as account closed