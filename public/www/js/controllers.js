'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('DashCtrl', function($scope, Events) {
  	$scope.allEvents = Events.getEvents();
  	$scope.order = "votes"
  });