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

    self.init = function () {
        productoservice.getProductos(self.dataempresa.id).then(function(data){
            self.productos = data;
            return clienteservice.getClientes(self.dataempresa.id);
        }).then(function(data){
            self.clientes = data;
            console.log(data);
        });
    }

    self.getMain = function (objet) {
        var result = objet.filter(function(item) {
            return item.main;
        });

        return result[0];
    }

    self.close = function(){
        self.onClose();
      }

    $timeout( function(){
        self.init();
    }, 500 );
  }]
});