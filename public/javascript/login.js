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
      $http.post('http://hackathonbackend-dev.us-east-1.elasticbeanstalk.com/users/login', body).then(function(data) {
            user.jwt_token = data.data.token;
            console.log(user.jwt_token);
            callback();
      });
  }
  user.userIsLoggedIn = function() {
      if(user.jwt_token != '') {
          console.log('no token');
      }
      else {
          console.log('token exists');
      }
  }
  return user;
}]);

app.controller('loginController', ['$scope', '$http', 'login', 
  function($scope, $http, login) {
    $scope.loginForm = {
        username : '',
        password : ''
    };

    $scope.submitlogin = function() {
        login.login($scope.loginForm.username, $scope.loginForm.password, function(){
            $scope.login = login;
            console.log(login.jwt_token);
        });
    }
}]);
