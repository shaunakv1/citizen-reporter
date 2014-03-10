'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
  .factory('eventTypes', function () {
  	return {
  		getEventTypes : function () {
  			return [
  				'Fire',
  				'Car Accident',
  				'Active Shooter',
  				'Flooding',
  				'Explosion'
  			]
  		}
  	}
  });
