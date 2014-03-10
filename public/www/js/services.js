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
  })
  .factory('Social', function () {
  	return {
  		getTweets : function (lng, lat) {
  			return $.ajax({
  				url : "https://api.geofeedia.com/v1/search/latlon/" + lat+ "," + lng + ",1",
  				data : {
  					appId : "0e5cfb9b",
  					appKey : "cb14f6e603af80cbb9bc488de499e685",
  					sources : "Twitter"
  				},
  				type : "JSON",
  				method : "GET"
  			})
  		}
  	}
  })
