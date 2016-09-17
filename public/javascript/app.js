var app = angular.module('app', ['Login']);

app.controller('requestController', ['$scope', '$http', 'Login', function($scope, $http, loginService)
{
  $scope.username = "davidew2";
  $scope.farmer = true;
  $scope.agronomist = true;

  if($scope.farmer)
  {
    $http.get()
  }
  else if($scope.agronomist)
  {

  }
}]);
