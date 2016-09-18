angular.module('app').controller('makeRequest', ['$scope', '$http', '$location', 'login',
function($scope, $http, $location, login)
{
  console.log("hello I am making request");
  $scope.requestForm = {};
  console.log(login.jwt_token);
  $scope.submitrequest = function()
  {
    $http.post('http://hackathonbackend-dev.us-east-1.elasticbeanstalk.com/requests/new_request_farmer',
    {
      headers:
      {
        "Authorization": "bearer " + login.jwt_token
      }
      // agronomistusername: "admin",
      // comment: $scope.requestForm.comment
    }).then(function(response)
    {
      console.log(response);
    });
  };
  // console.log($($("nav").children()[2]).addClass("current"));
  // $("#nav").children()[0].children()[1].addClass("current");
}]);
