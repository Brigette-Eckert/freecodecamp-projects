angular.module('twitchStatusApp', [])
	
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.twitchUsers = ["freecodecamp", "EtchTheSketch", "SoXvicious", "Dexteritybonus", "patrickrothfuss", "FeliciaDay", "ShaBooZey", "Monstercat", "TotalBiscuit", "Crendor", "comster404", "brunofin"];
	$scope.userData =[];

	for(i=0; i < $scope.twitchUsers.length; i++){
		$scope.user = $scope.twitchUsers[i];
		$http.get("https://api.twitch.tv/kraken/streams/" + $scope.user).success(function(data){
			if(data.stream == null){
				// console.log("offline")
				$http.get(data._links.channel).success(function(info){
					// console.log(info);
					$scope.name = info.display_name;
					$scope.avatar = info.logo;
					$scope.game = "";
					$scope.userInfo = {name: $scope.name , game: $scope.game, avatar: $scope.avatar}
					$scope.userData.push($scope.userInfo);		
				    console.log($scope.userData);	
				})
			} else {
				$scope.channel = data.stream.channel;
				$scope.name = $scope.channel.display_name;
				$scope.game = $scope.channel.game;
				$scope.avatar = $scope.channel.logo;
				$scope.userInfo = {name: $scope.name , game: $scope.game, avatar: $scope.avatar}
			    $scope.userData.push($scope.userInfo);		
			    console.log($scope.userData);	
			}
		}).error(function(error){
			console.log(error)
			$scope.name = error.message.split("'")[1];
			console.log("name " + $scope.name)
			$scope.avatar = "img/notwitch.png";
			$scope.game = "No Account";
			$scope.userInfo = {name: $scope.name , game: $scope.game, avatar: $scope.avatar}
			$scope.userData.push($scope.userInfo);	
			console.log($scope.userData);	
		})

	};
}])





//use ng-show to show/hide based on online status
//class offline or online for sass to make color as same as fliter 

//sort userData 