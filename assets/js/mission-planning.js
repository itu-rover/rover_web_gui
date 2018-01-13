mapboxgl.accessToken = 'pk.eyJ1IjoiZGVrc3ByaW1lIiwiYSI6ImNqOGsxb3dyYzA4b2wyeHBsdGx0aXdzeHYifQ.4vYgxeGhICEGWbC1552LsQ';

var ros_server_url = document.location.hostname + ":9090";
var ros = new ROSLIB.Ros();
var rosConnected = false; //control variable
var focused = false;
var monument = [-110.791941, 38.406320, ];
var waypoints = new Array(); //stores marker_rs

//stores geojson markers
var markerDatas = {
    "type": "FeatureCollection",
    "features": [
    ]
};

var markerLineString = {


    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "LineString",
        "coordinates": [[],[]
                    ]
    }
}


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    center: [-110.791941, 38.406320, ],
    zoom: 15
});
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
map.doubleClickZoom.disable();

// GeoJSON object to hold our measurement features
var geojson = {
    "type": "FeatureCollection",
    "features": [

    ]
};

//GeoJson object for drone marker
var drone = {
    "type": "Point",
    "coordinates": monument
};

//heading value fo drone marker
var direction;

//sync drone position 
function setDronePos() {
    map.getSource('drone').setData(drone);

    map.setLayoutProperty('drone', 'icon-rotate', direction);

    if (focused === true) {
        map.setCenter(drone.coordinates);
    }
}

ros.connect("ws://" + ros_server_url); //connected to ros

ros.on("connection", function () {
    console.debug("Connected to ROS server");
    rosConnected = true;
    initSubscribers(); //this function contains everything about realtime tracking
});

// Used to draw a line between points
//Added comments for Taha
var linestring = {
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": []
    }
};

// create the popup
var popup = new mapboxgl.Popup()
    .setText('Construction on the Washington Monument began in 1848.');

// create DOM element for the marker
// create the marker
map.on('click', function (e) {


    addMark({
        coordinates: e.lngLat
    });

});

map.on('mousemove', function (e) {

});

//if you want to do realtime operations on map, use this
map.on('load', function () {
    //CREATES source for waypoints
    map.addSource('waypoints', {
        "type": 'geojson',
        "data": markerDatas
    });

    //creates source for lines
    map.addSource("lines", {
        "type": "geojson",
        "data": markerLineString
    });

    // add the GeoJSON above to a new vector tile source
    if (rosConnected) {
        map.addSource('drone', {
            type: 'geojson',
            data: drone
        });

        map.setCenter(drone.coordinates);

        map.addLayer({
            "id": "drone-glow-strong",
            "type": "circle",
            "source": "drone",
            "paint": {
                "circle-radius": 18,
                "circle-color": "#fff",
                "circle-opacity": 0.4
            }
        });

        map.addLayer({
            "id": "drone-glow",
            "type": "circle",
            "source": "drone",
            "paint": {
                "circle-radius": 40,
                "circle-color": "#fff",
                "circle-opacity": 0.1
            }
        });

        map.addLayer({
            "id": "drone",
            "type": "symbol",
            "source": "drone",
            "layout": {
                "icon-image": "airport-15",
                "icon-rotation-alignment": "map"
            }
        });


        window.setInterval(setDronePos, 250);
    }
    //creates layer for waypoints
    map.addLayer({
        "id": "waypoint_layer",
        "type": "circle",
        "source": "waypoints",
        "paint": {
            "circle-radius": 30,
            "circle-color": "#fff",
            "circle-opacity": 0.5
        }

    });

    //draws lines
    map.addLayer({
        "id": "route",
        "type": "line",
        "source": "lines",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#fff",
            "line-width": 4,
            "line-opacity": 0.4
        }

    });

});


//obtain data from ros
function initSubscribers() {
    ////Define subscribers

    var battery_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/mavros/battery',
        messageType: 'sensor_msgs/BatteryState'
    });

    var state_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/mavros/state',
        messageType: 'mavros_msgs/State'
    });

    var global_position_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/mavros/global_position/global',
        messageType: 'sensor_msgs/NavSatFix'
    });

    var compass_hdg_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/mavros/global_position/compass_hdg',
        messageType: 'std_msgs/Float64'
    });

    var local_odom_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/mavros/local_position/odom',
        messageType: 'nav_msgs/Odometry'
    });

    var imu_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/mavros/imu/data',
        messageType: 'sensor_msgs/Imu'
    });

    //State
    //TODO Add Robostate /State topic
    //--Armed Status(True,False)
    //--Px4Mode(AUTO, OFFBOARD etc.)
    state_listener.subscribe(function (msg) {});
    //Battery
    //--Voltage(V)
    //--Percentage(%)
    //--Percentage bar design loader
    //--Current(A)
    //--Consumed(mAh)
    battery_listener.subscribe(function (msg) {});
    //Global
    //--Latitude (degrees)
    //--Longitude (degrees)
    //--Altitude (m)AMSL
    //TODO add artificial horizon
    global_position_listener.subscribe(function (msg) {
        drone.coordinates[1] = msg.latitude;
        drone.coordinates[0] = msg.longitude;
    });
    //--Compass heading
    compass_hdg_listener.subscribe(function (msg) {
        direction = msg.data;
    });
    //Local
    //--Position x, y, z (m)
    //--Orientation x, y, z, w (angle)(TODO convert to euler angles AND to degrees bc
    //--Velocity x, y, z, (m/s)
    local_odom_listener.subscribe(function (msg) {});
    //--Acceleration x, y, z (m/s/s)
    imu_listener.subscribe(function (msg) {

    });
}

//go to drone's location
jQuery("#go-btn").click(function () {
    map.setCenter(drone.coordinates);
});

jQuery("#focus-btn").click(function () { //focuses on the marker
    if (focused === true) {
        focused = false;
        jQuery(this).removeClass("disabled");
    } else {
        focused = true;
        jQuery(this).addClass("disabled");
    }
});

function addMark(data) {
    var marker_prototype = new marker_rs(data);
    markerDatas.features.push(marker_prototype.getFeature()); //geojson data. creates a bunch of points dynamically.
    waypoints.push(marker_prototype); //holds marker_rs objects

    /*
        System structure
            when the user clicks on the map:
            --a marker_rs object is created. every marker_rs object has a bunch of functions and variables.Most important ones are; 
            id, coordinates and getFeature() function
            --this object is added to and of waypoints array.index of this object is referred as temp_index
            --id of the object is "waypoint-" + index.So the first marker will have an id of "waypoint-0"
            --geojson data extracted from this object is pushed to markerDatas.features[] array. 
            --the geojson source "waypoints" watches markerDatas.İt automatically updates the points
            
            waypoint deleting procedure:
            --index of deleted marker will be held.
            -- waypoint will first be deleted from markerDatas Array, then from waypoints array and finally div object that has the correct "index" attribute.
            -- previous data will be shifted accordingly.
            --line data will be updated.
            --new data will be shown
            
            line drawing procedure:
            
            
    */
    var temp_index = waypoints.indexOf(marker_prototype);
    waypoints[temp_index].id = "waypoint-" + temp_index;
    waypoints[temp_index].setIndex(temp_index);

    var el = document.createElement('div');

    el.className = 'waypoint';
    el.id = waypoints[temp_index].id;
    el.setAttribute("index", temp_index);
    waypoints[temp_index].marker_div = el;
    map.getSource("waypoints").setData(markerDatas);
    new mapboxgl.Marker(el)
        .setLngLat(data.coordinates)
        .addTo(map);
    updateLines();


}

function updateLines(){
    for (i = 0; i < markerDatas.features.length; i++) {
        markerLineString.geometry.coordinates[i] = markerDatas.features[i].geometry.coordinates;
    }
    map.getSource("lines").setData(markerLineString);
}

//TODO Add marker arrays
//TODO Add list items and connect them to markers
//TODO Align the map and the info box - look at the columns
//TODO Draw linestrings in between the markers
//TODO Find a way to store array elements and save them into a file within the server
//when it is submitted
//TODO Make the waypoint markers draggable