'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('DashCtrl', function($scope, Events) {
  	$scope.allEvents = Events.getEvents();
  	$scope.order = "votes"
  	$scope.map, $scope.currentEvent, $scope.currentGraphic, $scope.markerSymbol;
  	//Initialize Map
  	require(["esri/map", 
  			 "esri/geometry/Point", 
  			 "esri/graphic", 
  			 "esri/symbols/SimpleMarkerSymbol",
  			 "dojo/_base/Color",
  			 "dojo/domReady!"], 
  	function(Map, Point, Graphic, SimpleMarkerSymbol, Color) {
  		$scope.map = new Map("map", {
	      center: [-116.532705, 33.917568],
	      zoom: 12,
	      basemap: "hybrid"
	    });
	    //Create Marker Symbol
	    $scope.markerSymbol = new SimpleMarkerSymbol();
        $scope.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
        $scope.markerSymbol.setColor(new Color("#00FFFF"));

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
  		$scope.map.centerAndZoom($scope.currentEvent, 13)
  	}
  });