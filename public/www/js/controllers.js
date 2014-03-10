'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('DashCtrl', function($scope, Events, Social) {
    $scope.allEvents = [];
    function getEvents() {
      var eventPromise = Events.getEvents();
      $.when.call($, eventPromise).then(function (r) {
        $scope.allEvents = r;
        $scope.$apply();
      })
    }
    //Continuous update of data
    setInterval(function () {
    	getEvents();
    }, 3000);

    getEvents();

  	$scope.order = "vote"
  	$scope.map, $scope.currentEvent, $scope.currentGraphic, $scope.markerSymbol;
  	$scope.filterText = "";
  	$scope.tweets = [];
  	//Initialize Map
  	require(["esri/map", 
  			 "esri/geometry/Point", 
  			 "esri/graphic", 
  			 "esri/symbols/PictureMarkerSymbol",
  			 "dojo/_base/Color",
  			 "dojo/domReady!"], 
  	function(Map, Point, Graphic, PictureMarkerSymbol, Color) {
  		$scope.map = new Map("map", {
	      center: [-116.532705, 33.917568],
	      zoom: 12,
	      basemap: "hybrid"
	    });
	    //Create Picture
	    $scope.markerSymbol= new PictureMarkerSymbol({"angle":0,"xoffset":0,"yoffset":0,"type":"esriPMS","url":"http://static.arcgis.com/images/Symbols/Basic/esriCrimeMarker_86.png","contentType":"image/png","width":24,"height":24});

        //Create point
	    $scope.currentEvent = new Point();

	    //Create Graphic
	    $scope.currentGraphic = new Graphic();
	    $scope.currentGraphic.setSymbol($scope.markerSymbol);
  	});

  	// Add point to map and pan
  	$scope.viewEvent = function (lat, lng) {
  		//Add new current event
  		$scope.currentEvent.setX(lng);
  		$scope.currentEvent.setY(lat);
  		$scope.currentGraphic.setGeometry($scope.currentEvent);
  		$scope.map.graphics.add($scope.currentGraphic);
  		//Pan and zoom
  		$scope.map.centerAndZoom($scope.currentEvent, 14);
      function updateTweets() {
    		var promise = Social.getTweets(lng, lat);
        $.when.call($, promise).then(function (r) {
          $scope.tweets = r.items;
          $scope.$apply();
        })
      }
      updateTweets();

      setInterval(function () {
        updateTweets()
      }, 10000)
  	}

    $scope.formatDate = function (str) {
       return Date.parse(str);
    }

  	//Remove an event !DANGER!
  	$scope.deleteEvent = function (id) {
      $.ajax({
        url : 'http://gf.georati.com/events/' + id + "/delete.json",
        method : 'GET',
        success : function () {
          getEvents();
        }
      })
  	}
    
  	//Send report for incident
  	$scope.createReport = function (id) {
      $.ajax({
        url : 'http://gf.georati.com/events/' + id + "/verify.json",
        methond : 'GET',
        success : function () {
          getEvents();
        }
      })
  	}

    //Get affected items
    $scope.getAssets = function (id) {
      $.ajax({
        url : 'http://gf.georati.com/events/id/effects.json'
      })
    }
  });