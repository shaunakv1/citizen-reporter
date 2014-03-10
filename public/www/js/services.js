'use strict';

/* Services */


// Angular Services
angular.module('myApp.services', [])
  .factory('Events', function () {
  	return {
  		getEvents : function () {
  			return $.ajax({
  				url : "http://gf.georati.com/events.json",
  				method : "GET",
  				dataType : "JSONP"
  			})
  		}
  	}
  })
  .factory('Social', function () {
  	return {
  		getTweets : function (lng, lat) {
  			return $.ajax({
  				url : "https://api.geofeedia.com/v1/search/latlon/" + lat+ "," + lng + ",0.5",
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
