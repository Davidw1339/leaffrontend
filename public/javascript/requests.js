angular.module('app').controller('requestController', ['$scope', '$http', '$location', 'login',
function($scope, $http, $location, login)
{
  console.log("hello I am request");
  console.log(login.username);
  // changes which tab is marked as active
  $($("#nav").children().children('.current')).removeClass("current");
  $($("#nav").children().children()[1]).addClass("current");
  $scope.requests = [];
  var isFarmer = true;
  if(isFarmer)
  {
    $http.get("http://hackathonbackend-dev.us-east-1.elasticbeanstalk.com/requests/data_farmer", {
      headers:
      {
        "Authorization": "bearer " + login.jwt_token,
        "farmerusername": login.username
      }
    }).success(function(response)
    {
      console.log("it was a sucess:D::::D:D:D:D::");
      console.log(response);
      $scope.requests = response;
    });
  }
  else
  {
    console.log(login.username);
    $http.get("http://hackathonbackend-dev.us-east-1.elasticbeanstalk.com/requests/data_agronomist", {
      headers:
      {
        "Authorization": "bearer " + login.jwt_token,
        "agronomistusername": login.username
      }
    }).success(function(response)
    {
      console.log("it was a sucess:D::::D:D:D:D::");
      console.log(response);
      $scope.requests = response;
    });
  }
  $scope.viewrequest = function()
  {
    $location.path('/viewrequest')
  }
  //
  // $http.get('http://localhost:3000/posts.json', {
  //     headers: {
  //         "Authorization": 'Token token="1111"'
  //     }
  //   }).success(function(response){
  //     console.log(response)
  //   });

}])
.controller('viewRequest', ['$scope', '$http', '$location', 'login',
function($scope, $http, $location, login)
{
  console.log("hello I am viewing request");

  // console.log($($("nav").children()[2]).addClass("current"));
  // $("#nav").children()[0].children()[1].addClass("current");
}]);
