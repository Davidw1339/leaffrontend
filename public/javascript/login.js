var app = angular.module('Login', []);

app.factory('login', ['$http', function($http){ //create a factory "stores" that
// will hold the variable stores, as well as http functions
  var user = {
      username : 
  }
//getting
  o.getAll = function(callback) { //perform http requests
    return $http.get('http://laundryscrape-dev.us-east-1.elasticbeanstalk.com/halls').success(function(data) { 
        console.log('hello')
        console.log(data);
        angular.copy(data, o.halls); //binding data from get with o.halls
        callback();
    });
  };
  return o;
}]);

app.controller('loginController', ['$scope', '$http', 'halls', 
  function($scope, $http, login) {
    halls.getAll(function() {
      $scope.halls = halls.halls;
    });

}]);
