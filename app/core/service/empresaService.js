angular.module('myApp')
  .factory('empresaservice', ['$http', 
    function($http) {
      var factory = {};

      factory.getEmpresas = function(msg) {
        return $http({
            method: 'get', 
            url: '../../assets/data/companies.json'
        }).then(function (response) {
            return response.data.result.companies;
        },function (error){
            console.log(error, 'can not get data.');
        });
     };
      
      return factory;
  }]);