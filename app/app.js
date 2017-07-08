angular.module("bootstrapper",['ui.router'])
.controller("IndexPageController", ['$scope', '$http', function($scope, $http) {
	$scope.message = "Hello, World!!!";
	$scope.testConnection = function() {
		$http({
			'url' : 'https://bootstrapper-raul1991.herokuapp.com:33507',
			'method' : 'GET'
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log("Success"+response);
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log("failure"+ response);
		});
	};
}])
.config(function($qProvider, $stateProvider) {
    //it is for ui-router unwanted errors.
    $qProvider.errorOnUnhandledRejections(false);
    $stateProvider
    .state('home', {
    	url: "/home",
    	templateUrl: '/app/partials/home.html'
    });
});
