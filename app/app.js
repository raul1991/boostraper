angular.module("bootstrapper",['ui.router'])
.controller("IndexPageController", ['$scope', '$http', function($scope, $http) {
    $scope.message = "Hello, World!!!";
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