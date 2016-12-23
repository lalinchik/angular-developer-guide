const myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', function ($scope) {
    $scope.timeOfDay = 'morning';
    $scope.name = 'Nikki';
}]);

myApp.controller('ChildController', ['$scope', function ($scope) {
    $scope.name = 'Mattie';
}]);

myApp.controller('GrandChildController', ['$scope', function ($scope) {
    $scope.timeOfDay = 'evening';
    $scope.name = 'Gingerbread baby';
}]);