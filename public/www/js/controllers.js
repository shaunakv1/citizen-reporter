'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ReportCtrl', [function() {
  	console.log('This is from the reporting controller');
  }])
  .controller('MapCtrl', [function() {
  	console.log('This is from the mapping controller');
  }]);