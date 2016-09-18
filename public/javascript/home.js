angular.module('app').controller('homeController', ['$scope', '$http', '$location',
function($scope, $http, $location)
{
  console.log("hello I am request");
  $($("#nav").children().children('.current')).removeClass("current");
  $($("#nav").children().children()[0]).addClass("current");
  // console.log($($("nav").children()[2]).addClass("current"));
  // $("#nav").children()[0].children()[1].addClass("current");
}]);
