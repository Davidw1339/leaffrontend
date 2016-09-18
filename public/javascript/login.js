var app = angular.module('Login', []);

app.factory('login', ['$http', function($http){ //create a factory "stores" that
// will hold the variable stores, as well as http functions
  var user = {
      username : String,
      jwt_token : String
  }
//http post for login
  user.login = function(callback, name, pwd) {
      body = {
          username : admin,
          password : 123
      }
      return $http.post('http://hackathonbackend-dev.us-east-1.elasticbeanstalk.com/users/login', body).then(function(data) {
          angular.copy(user.jwt_token, data);
          console.log(data);
          console.log(user.jwt_token);
      });
  } 
  return o;
}]);

app.controller('loginController', ['$scope', '$http', 'login', 
  function($scope, $http, login) {
    login.login();
}]);
