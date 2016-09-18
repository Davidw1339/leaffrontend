var app = angular.module('app', ['Login', 'ngRoute']);

app.config(function($routeProvider)
{
  $routeProvider
  .when('/',
  {
    templateUrl: '../views/main.html',
    controller: 'homeController'
  })
  .when('/requests',
  {
    templateUrl: '../views/request.html',
    controller: 'requestController'
  })
  .when('/profile',
  {
    templateUrl: '../views/profile.html',
    controller: 'profileController'
  })
  .when('/login',
  {
    templateUrl: '../views/login.html',
    controller: 'loginCtrl'
  })
  .otherwise(
  {
    redirectTo: '/'
  });
});

app.controller('requestController', ['$scope', '$http', 'Login', function($scope, $http, loginService)
{
  $scope.username = "davidew2";
  $scope.farmer = true;
  $scope.agronomist = true;

  if($scope.farmer)
  {
    $http.get('/requests/data_farmer').then(function(response)
    {

    });
  }
  else if($scope.agronomist)
  {

  }
}]);
