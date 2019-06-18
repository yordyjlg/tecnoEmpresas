'use strict';

angular.module('myApp').
component('detalles', {
templateUrl: 'detalles/detalles.html',
bindings: {
    dataempresa: '<',
    onClose: '&'
},
controller: ['$rootScope', '$timeout', 'productoservice', 'clienteservice', function detallesController($rootScope, $timeout, productoservice, clienteservice) {
    var self = this;

    /**
     * inicializa los datos del cliente y los productos
     */
    self.init = function () {
        productoservice.getProductos(self.dataempresa.id).then(function(data){
            self.productos = data;
            return clienteservice.getClientes(self.dataempresa.id);
        }).then(function(data){
            self.clientes = data;
            console.log(data);
        });
    }

    /**
     * busca y devuelve la direccion principal
     */
    self.getMain = function (objet) {
        var result = objet.filter(function(item) {
            return item.main;
        });

        return result[0];
    }

    /**
     * dispara el evento para cerrar los detalles
     */
    self.close = function(){
        self.onClose();
      }

    $timeout( function(){
        self.init();
    }, 500 );
  }]
});