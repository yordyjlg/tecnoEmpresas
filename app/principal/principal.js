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

  $scope.init = function() {
    empresaservice.getEmpresas('wef').then(function(data){
      $scope.empresas = data;
      console.log($scope.empresas);
    });
  }

  $scope.selectEmpresa = function(empresa) {
    $scope.empresActive = empresa;
  }

  $scope.close = function() {
    $timeout( function(){
      $scope.empresActive = null;
    }, 100 );
  }

  $scope.clearSearch = function() {
    $scope.search = '';
  }

}]);