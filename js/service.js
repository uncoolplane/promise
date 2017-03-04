angular.module('promise').service('mainService', function($http, $q) {
  var baseURi = 'http://swapi.co/api/';

  this.getData = function() {
    var defer = $q.defer();
    $http({ //note .... no return
      method: 'GET',
      url: baseURi + 'people/'
    }).then(function(response) {
      var data = response.data.results;
      console.table(data);
      defer.resolve(data);
    }, function(err) {
      console.log('mainService', err);
    });
    return defer.promise;
  }
})
