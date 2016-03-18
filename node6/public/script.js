angular.module("myApp",[]);

angular.module("myApp")
	.controller("contestTroller", ['$scope', '$http', '$sce', function($scope, $http, $sce){

			var s = $scope
			s.submission = "Make Your Submissions!"
			s.greeting = "Here are the Videos"
			s.trust = $sce.trustAsResourceUrl
			$http.get('/api/videos')
						.then(function(dataFromServer){
						s.videos = dataFromServer.data
								s.videoPush = function(){
									if (s.videos.length <= 7) {
									$http.post('/api/videos', s.newVideo)
									.then(function(dataFromServer){
										console.log(dataFromServer)
										s.videos = dataFromServer.data
										s.newVideo= {}
										console.log("array: " + s.videos)
										console.log("array: " + s.videos.length)
										})
									
									}

							else { 
									s.submission = "Contest closed!  Go to the submissions page to vote!"
									s.videoPush = null
								}
							}
							
							
					})
				s.videoVote = function(video,index){
					$http.post('/api/videos/votes', video)
							.then(function(dataFromServer){
								video.votes = dataFromServer.data[index].votes
							})
				}

				s.contestButton = function(video,index){
					
				}
			


	}])