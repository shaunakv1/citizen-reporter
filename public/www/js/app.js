'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {templateUrl: 'partials/report.html', controller: 'ReportCtrl'});
  $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'MapCtrl'});
  $routeProvider.otherwise({redirectTo: '/MapCtrl'});
}]);
