$(function () {
	if (geoPosition.init()) $('#geoLocationYes').removeClass('hide');
	else $('#geoLocationNo').removeClass('hide');	

	$('.event-type').click(function (evt) {
		$('#event_event_type_id').val($(this).data('id'));
		$('.event-type').removeClass('alert-danger');
		$(this).addClass('alert-danger');
		console.log($(this).data('id'));
	});

	$('#report').click(function(e) {
	    if(!$('#event_event_type_id').val()) alert('pick an event first');
    	else{
    		$('#geoLocationYes').addClass('hide');
    		var l = Ladda.create(this);
    		l.start();
    		geoPosition.getCurrentPosition(function (o) {
    		    $('#event_latitude').val(o.coords.latitude);
    		    $('#event_longitude').val(o.coords.longitude);
    		    $('#event_accuracy').val(o.coords.accuracy);
    		    $('#new_event').submit();
    		    l.stop();
    		}, 
    		    function error_callback(e) {
    		    //e.code PERMISSION_DENIED: 1
    		    //e.code  POSITION_UNAVAILABLE: 2
    		    //e.code  TIMEOUT: 3
    		    $('#geoLocationNo').text(e.message);
    		    $('#geoLocationNo').removeClass('hide');
    		}, 
    		{
    		        enableHighAccuracy: true,
    		        maximumAge: 10000 //10secs
    		});
    	}

	});

	$('#new_event').on('ajax:success',function (event, checkin, status) {
	    $('#geoLocationYes').text('Your event was recorded form : '+checkin.address);
	    $('#geoLocationYes').removeClass('hide');
	});    

	$('#new_event').on('ajax:error',function (event, error, status) {
	    $('#geoLocationNo').text('Something went wrong :( Could not check you in');
	    $('#geoLocationNo').removeClass('hide');
	});

});
