angular.module('app').controller('makeRequest', ['$scope', '$http', '$location', 'login',
function($scope, $http, $location, login)
{
  console.log("hello I am making request");
  $scope.requestForm = {};
  console.log(login.jwt_token);
  $scope.submitrequest = function()
  {
    console.log("Authorization " + "Bearer " + login.jwt_token);
    $http.post('http://hackathonbackend-dev.us-east-1.elasticbeanstalk.com/requests/new_request_farmer',
    {
      agronomistusername: "admin",
      comment: $scope.requestForm.comment
    },
    {
     headers:
     {
       "Authorization": "bearer " + login.jwt_token,
       "farmerusername": login.username
     }
    }).then(function(response)
    {
      console.log(response);
      $location.path('/#requests');
    });
  };
  // console.log($($("nav").children()[2]).addClass("current"));
  // $("#nav").children()[0].children()[1].addClass("current");
}]);

function recursiveImageUpload(pic_arr ,callback, url_arr) {
  if(url_arr.length == pic_arr.length){
    return url_arr;
  }
  else {
  $http.post('http://hackathonbackend-dev.us-east-1.elasticbeanstalk.com/imageupload',{
    //body
    "body":pic_arr[url_arr.length-1]
  },
  {
     headers:
     {
       "Authorization": "bearer " + login.jwt_token,
       "farmerusername": login.username
     }
  })
  .then(function(res) {
    url_arr.push(res);
  })
  .then(recursiveImageUpload(pic_arr, callback, url_arr))
  }
}