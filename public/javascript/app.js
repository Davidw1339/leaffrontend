var app = angular.module('app', ['Login', 'ngRoute']);

app.config(function($routeProvider)
{
  console.log("Hello");
  $routeProvider
  .when('/',
  {
    templateUrl: '../views/main.html'
  })
  .when('/requests',
  {
    templateUrl: '../views/request.html'
  })
  .when('/profile',
  {
    templateUrl: '../views/profile.html'
  })
  .when('/login',
  {
    templateUrl: '../views/login.html'
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
