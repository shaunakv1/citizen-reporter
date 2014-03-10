'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ReportCtrl', function($scope, Event) {
  	$scope.eventTypes = Event.getEventTypes();
  })
  .controller('MapCtrl', function() {
  	console.log('This is from the mapping controller');
  });