angular.module('promise').service('anotherService', function($http) {
  let baseURi = 'http://swapi.co/api/';

  this.getData = () => {
    return $http({
      method: 'GET',
      url: `${baseURi}planets/`
    }).then(response => {
      console.table(response.data.results);
      return response.data.results;
    },
  error => {
    console.log(error)
  })
  }
})
