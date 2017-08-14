angular.module("bootstrapper",["ui.router"])
.controller("IndexPageController", ["$scope", "$http", function($scope, $http) {
	$scope.message = "Hello, World!!!";
	$scope.testConnection = function() {
		var PROD = true;
		$http({
			"url" : PROD ? "/home" : "//localhost:$PORT/home",
			"method" : "GET"
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log("Congratulations, we are able to connect to the backend flask server");
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log("Connection unsuccessful"+ response);
		});
	};
}])
.config(function($qProvider, $stateProvider) {
    //it is for ui-router unwanted errors.
    $qProvider.errorOnUnhandledRejections(false);
    $stateProvider
    .state("home", {
    	url: "/home",
    	templateUrl: "static/partials/home.html"
    });
});
