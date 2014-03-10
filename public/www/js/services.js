'use strict';

/* Services */


// Angular Services
angular.module('myApp.services', [])
  .factory('Events', function () {
  	return {
  		getEvents : function () {
  			//replace this with an ajax request
  			return [
  				{
  					latitude : 33.817568, 
  					longitude : -116.532705,
  					address : '1029 Palm Springs Ave',
  					votes : 2,
  					status : 'pending'
  				},
  				{
  					latitude : 33.917568, 
  					longitude : -116.532705,
  					address : '1045 Palm Springs Ave',
  					votes : 3,
  					status : 'pending'
  				}
  			]
  		}
  	}
  });
