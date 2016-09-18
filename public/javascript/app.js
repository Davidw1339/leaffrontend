var app = angular.module('app', ['Login']);

listView.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('Login', { //routes /list/funcID to display stores with the same funcID
      //"Layer 1"
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'loginCtrl',
    });

    $stateProvider.state('main', { //routes /store/store._id to new template, new controller,
      //new variable of selected store created that is populated with items
      //"Layer 2"
      url: '/index',
      templateUrl: '/templates/index.html',
      controller: 'AppCtrl',
    });


  $urlRouterProvider.otherwise('/chat');
}]);

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
