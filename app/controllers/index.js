function doZoom(e){
		$.mapview.setLocation({
            "longitudeDelta": 0.0011428681160623455, //With pinch I can zoom into this level
            "latitudeDelta": 0.0010288447511470622,  //but call this function twice will stop at zoom level 
            "longitude": 6.773784,					 //latitudeDelta: 0.0030906995086823486 longitudeDelta: 0.003433227641380654
            "latitude": 51.226154,
            "animate": true
        });
};

function doRegionchanged(e){
	
	Ti.API.info("latitudeDelta: " + e.latitudeDelta);
	Ti.API.info("longitudeDelta: " + e.longitudeDelta);
}
        
$.index.open();
