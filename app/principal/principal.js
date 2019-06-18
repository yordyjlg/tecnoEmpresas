'use strict';

angular.module('myApp.principal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/principal', {
    templateUrl: 'principal/principal.html',
    controller: 'principalCtrl'
  });
}])

.controller('principalCtrl', ['$scope', '$timeout', 'empresaservice', function($scope, $timeout, empresaservice) {
  $scope.empresActive =  null;
  $scope.search = '';

  /**
   * carga los datos de la empresa
   */
  $scope.init = function() {
    empresaservice.getEmpresas('wef').then(function(data){
      $scope.empresas = data;
      console.log($scope.empresas);
    });
  }

  /**
   * selecciona una empresa para mostrar los detalles
   */
  $scope.selectEmpresa = function(empresa) {
    $scope.empresActive = empresa;
  }

  /**
   * cierra los detalles de la empresa seleccionada
   */
  $scope.close = function() {
    $timeout( function(){
      $scope.empresActive = null;
    }, 100 );
  }

  /**
   * limpia el compa de busqueda
   */
  $scope.clearSearch = function() {
    $scope.search = '';
  }

}]);