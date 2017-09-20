"use strict";
const config = {
	pkey: "pk.eyJ1Ijoiamx5b24xMSIsImEiOiJjajd0YWtieXk1NjQ0MnFucHYxbGQyN2dwIn0.c8nc1po08pFtUCT0SlUzgA",
	skey: "sk.eyJ1Ijoiamx5b24xMSIsImEiOiJjajd0YWw4bDIzaGZ2MndxbmVkOWpkM2h3In0.OahVHoyr99vm1S5rIHuLlA",
	url: "https://api.mapbox.com/v4/mapbox.emerald/page.html?access_token=",
	mapContainer: "mapbox",
	styleUrl: "mapbox://styles/mapbox/streets-v9",
};

const init = function() {
	mapboxgl.accessToken = config.pkey;
	var map = new mapboxgl.Map({
		container: config.mapContainer,
		style: config.styleUrl,
	});
};

init();
