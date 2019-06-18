angular.module('myApp')
  .factory('productoservice', ['$http', 
    function($http) {
      var factory = {};

      factory.getProductos = function(idProducto) {
        return $http({
            method: 'get', 
            url: '../../assets/data/products' + idProducto + '.json'
        }).then(function (response) {
            return response.data.result.productos;
        },function (error){
            console.log(error, 'can not get data.');
        });
     };
      
      return factory;
  }]);