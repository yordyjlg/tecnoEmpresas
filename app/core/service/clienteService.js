angular.module('myApp')
  .factory('clienteservice', ['$http', 
    function($http) {
      var factory = {};

      factory.getClientes = function(idProducto) {
        return $http({
            method: 'get', 
            url: '../../assets/data/clients' + idProducto + '.json'
        }).then(function (response) {
            return response.data.result.clients;
        },function (error){
            console.log(error, 'can not get data.');
        });
     };
      
      return factory;
  }]);