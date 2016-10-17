angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {

    $scope.data = {
      token : "TokenTestValue"
    };

    $scope.$watch('data.token', function (newValue, oldValue) {
      $scope.data.link = "d8ii://deep/?token=" + newValue;
      console.log("$watch", newValue);
    });

    $scope.open = function (link) {
      console.log("open", link);
      window.open(link, '_blank', 'location=yes');
    };

});
