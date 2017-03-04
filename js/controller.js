angular.module('promise').controller('mainCtrl', function($scope, mainService, anotherService) {
  $scope.getPeople = function() {
    mainService.getData().then(
      function(response) {
        $scope.data = response;
      }
    );
  }

  $scope.getPlanets = function() {
    anotherService.getData().then(
      function(response) {
        $scope.data = response;
      }
    )
  }
})
