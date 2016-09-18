var app = angular.module('Login', []);

app.factory('login', ['$http', function($http){ //create a factory "stores" that
// will hold the variable stores, as well as http functions
  var user = {}
//http post for login
  user.login = function(name, pwd, callback) {
      body = {
          username : name,
          password : pwd
      }
      $http.post('http://localhost:3000/users/login', body).then(function(data) {
          user.jwt_token = data.data.token;
            console.log(user.jwt_token);
            callback();
      });
  } 
  return user;
}]);

app.controller('loginController', ['$scope', '$http', 'login', 
  function($scope, $http, login) {
    login.login('admin', '123', function(){
        $scope.login = login;
        console.log(login.jwt_token);
    });
}]);
