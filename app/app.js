angular.module("bootstrapper",['ui.router'])
.controller("IndexPageController", ['$scope', function($scope) {
    $scope.message = "Hello, World!!!";
}])
.config(function($qProvider, $stateProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: '/app/partials/home.html'
    });
});