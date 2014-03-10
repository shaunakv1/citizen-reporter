'use strict';

/* Services */


// Angular Services
angular.module('myApp.services', []).
  value('version', '0.1')
  .factory('Event', function () {
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
