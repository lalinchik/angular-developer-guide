const spicyApp = angular.module('spicyApp', []);

spicyApp.controller('SpicyController', ['$scope', function ($scope) {
    $scope.spice = 'very';

    $scope.spicy = (customSpice) => {
        $scope.spice = customSpice;
    };
}]);