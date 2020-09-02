// map script
// mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0cDYiLCJhIjoiY2s4emdvODA5MWlwMjNub2tzdXE1N2I5eiJ9.IrocfCfXkf_E3jEbZety_g';
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [12.550343, 55.665957],
//         zoom: 8
//     });

//     var marker = new mapboxgl.Marker()
//         .setLngLat([12.550343, 55.665957])
//         .addTo(map);

//  map script end

// data script 
fetch("hotels.json").then(function(resp){
    console.log("first");
    return resp.json();
})
.then(function(data){
    console.log("Second");
    console.log("dta lat", data.latitude);
    console.log("dta long", data.longitude);

});
