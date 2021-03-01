function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 34.66830485641752, lng: 135.42993596176453 },
		zoom: 18,
		mapId: "83ec5dd14fee8ce",
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
	marker = new google.maps.Marker({
		position: { lat: 34.668216616112495, lng: 135.43006470778658 },
		map,
		title: "Yoshi's House",
		icon: {
			url: "map.png",
			scaledSize: new google.maps.Size(38, 31),
		},
		animation: google.maps.Animation.DROP,
	});
}
