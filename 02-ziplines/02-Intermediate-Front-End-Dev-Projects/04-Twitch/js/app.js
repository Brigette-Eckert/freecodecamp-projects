angular.module('twitchStatusApp', [])
	
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.user = ""
	$scope.twitchUsers = ["freecodecamp", "EtchTheSketch", "SoXvicious", "Dexteritybonus", "patrickrothfuss", "FeliciaDay", "ShaBooZey", "Monstercat", "TotalBiscuit", "Crendor"];
	$scope.userData =[];
	for(i=0; i < $scope.twitchUsers.length; i++){
		$scope.user = $scope.twitchUsers[i];
		// console.log("user " + $scope.user);
		$http.get("https://api.twitch.tv/kraken/streams/" + $scope.user).success(function(data){
			// console.log("og data " + data);
			console.log("streaming status " + data.stream)
			if(data.stream == "null"){
			$http.get(data._links.self).success(function(info){
				console.log("offline");
				// $scope.userData.push(info);
				})
			} else if(data.stream != "null") {
				$scope.channel = data.stream.channel;
				$scope.name = $scope.channel.display_name;
				$scope.game = $scope.channel.game;
				$scope.avatar = $scope.channel.logo;
				$scope.userInfo = {name:'"' + scope.name + '"', game: '"' + scope.game + '"', avatar: '"' + scope.avatar + '"'}
			    $scope.userData.push($scope.userInfo);			
			}
			console.log($scope.userData);
		})
		
	};
	
}])



//add avatar 


//add data scope for offline vs offline of where to get in 
//class offline or online for sass to make color as same as fliter 

// add info for error and show as account closed
//"brunofin", "comster404" closed accounts