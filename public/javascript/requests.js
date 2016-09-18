angular.module('app').controller('requestController', ['$scope', '$http', '$location', 'login',
function($scope, $http, $location, login)
{
  console.log("hello I am request");
  console.log(login.username);
  // changes which tab is marked as active
  $($("#nav").children().children('.current')).removeClass("current");
  $($("#nav").children().children()[1]).addClass("current");
  $scope.requests = [];
  $http.get("localhost:3000/requests/data_farmer", {"farmerusername":"david"}).then(function(response)
  {
      $scope.requests = response.data;
  });

}]);
