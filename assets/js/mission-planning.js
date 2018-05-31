 mapboxgl.accessToken = 'pk.eyJ1IjoiZGVrc3ByaW1lIiwiYSI6ImNqOGsxb3dyYzA4b2wyeHBsdGx0aXdzeHYifQ.4vYgxeGhICEGWbC1552LsQ';

 var ros_server_url = document.location.hostname + ":9090";
 var ros = new ROSLIB.Ros();
 var rosConnected = false; //control variable


 //map style 'Ları burada tanımlanıyor-----
 var itu_map_bound = new mapboxgl.LngLatBounds([29.012778611801405, 41.094110180449768], [29.040779718268116, 41.1139016927532]);
 var itu_map = {
     "version": 8,
     "sources": {
         "itu_map_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/itu-ayazaga/{z}/{x}/{y}.pbf"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "itu_map_tile",
         "type": "raster",
         "source": "itu_map_tile",
         "minzoom": 0,
         "maxzoom": 19
        }]
 };
 var utah_down_bound = new mapboxgl.LngLatBounds([-111.00344215235384, 38.751553685542895], [ -110.83489481926759, 
        38.86109881413995]);
 var utah_down_map = {
     "version": 8,
     "sources": {
         "utah_down_map_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-down/{z}/{x}/{y}.png"],
             //"maxzoom": 19,
             //"minzoom": 12,        

         }
     },
     "layers": [{
         "id": "utah_down_tile",
         "type": "raster",
         "source": "utah_down_tile",
         "minzoom": 14,
         "maxzoom": 17
        }]
 };

 var utah_1_bound = new mapboxgl.LngLatBounds([-110.79389650482354, 38.4057982037259], [-110.78977663177666, 38.406956319882759]);
 var utah_1 = {
     "version": 8,
     "sources": {
         "utah_1_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-1/{z}/{x}/{y}.pbf"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_1_tile",
         "type": "raster",
         "source": "utah_1_tile",
         "minzoom": 0,
         "maxzoom": 19
        }]
 };
var utah_3_bound = new mapboxgl.LngLatBounds([-111.00344215235384, 38.751553685542895], [-110.91916848581072, 38.806326249841419]);
 var utah_3 = {
     "version": 8,
     "sources": {
         "utah_3_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-3/{z}/{x}/{y}.png"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_3_tile",
         "type": "raster",
         "source": "utah_3_tile",
         "minzoom":0,
         "maxzoom": 17
        }]
 };
var utah_4_bound = new mapboxgl.LngLatBounds([-110.99749759079766, 38.500701246092532], [-110.83219412916202, 38.711684652915714]);
 var utah_4 = {
     "version": 8,
     "sources": {
         "utah_4_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-4/{z}/{x}/{y}.png"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_4_tile",
         "type": "raster",
         "source": "utah_4_tile",
         "minzoom":0,
         "maxzoom": 17
        }]
 };
var utah_5_bound = new mapboxgl.LngLatBounds([ -111.00765372761339, 
        38.55835409558226], [-110.99155292071923, 
        38.568023250125528]);
 var utah_5 = {
     "version": 8,
     "sources": {
         "utah_5_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-5/{z}/{x}/{y}.png"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_5_tile",
         "type": "raster",
         "source": "utah_5_tile",
         "minzoom":0,
         "maxzoom": 17
        }]
 };
var utah_6_bound = new mapboxgl.LngLatBounds([ -110.92780084763663, 
        38.749913679849335], [ -110.8333481512758, 
        38.83774377939325]);
 var utah_6 = {
     "version": 8,
     "sources": {
         "utah_6_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-6/{z}/{x}/{y}.png"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_6_tile",
         "type": "raster",
         "source": "utah_6_tile",
         "minzoom":0,
         "maxzoom": 17
        }]
 };
var utah_7_bound = new mapboxgl.LngLatBounds([ -110.84311533268679, 
        38.267784539441365], [ -110.50162806716752, 
        38.401424723945475]);
 var utah_7 = {
     "version": 8,
     "sources": {
         "utah_7_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-7/{z}/{x}/{y}.png"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_7_tile",
         "type": "raster",
         "source": "utah_7_tile",
         "minzoom":0,
         "maxzoom": 17
        }]
 };

 var utah_2_bound = new mapboxgl.LngLatBounds([-110.80391473427945, 38.394643283958821], [-110.77716804847765, 38.415678114259329]);
 var utah_2 = {
     "version": 8,
     "sources": {
         "utah_2_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-2/{z}/{x}/{y}.pbf"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_2_tile",
         "type": "raster",
         "source": "utah_2_tile",
         "minzoom": 0,
         "maxzoom": 19
        }]
 };


 //alt satır değişecek
 var utah_home_bound = new mapboxgl.LngLatBounds([-109.48548157105029, 38.45871958498919], [-109.41147533977734, 38.51431037116815]);
 var utah_home = {
     "version": 8,
     "sources": {
         "utah_home_tile": {
             "type": "raster",
             // "url": "mapbox://map-id"
             //"url": location.origin+location.pathname+"itu-ayazaga" 
             "tiles": [location.origin + "/maps/utah-home/{z}/{x}/{y}.png"],
             //"maxzoom": 19,
             //"minzoom": 14,        

         }
     },
     "layers": [{
         "id": "utah_home_tile",
         "type": "raster",
         "source": "utah_home_tile",
         "minzoom": 0,
         "maxzoom": 19
        }]
 };
 
 //----------------------------map-stylelarının sonu

 var ui_variables = { // control değişkenleri oluşturuldu
     focused: false,
     editable: false,
     remove: false,
     move: false,
     add: false,
     target_index: null,
     marker_moving: false

 }
 var monument = [-110.791941, 38.406320, ];
 var waypoints = new Array(); //stores marker_rs

 //stores geojson markers
 var markerDatas = {
     "type": "FeatureCollection",
     "features": [
    ]
 };

 //Define ros messages
 var pos_msg = new ROSLIB.Message({ //position mesaj objesini oluşturdum.
     latitude: null,
     longitude: null
 });
 //-------------------------------------------------------------------------
 //define publishers--
 var position_publisher = new ROSLIB.Topic({
     ros: ros,
     name: 'rover_gps/waypoint',
     messageType: 'sensor_msgs/NavSatFix'
 });
 //----------------------------------------------
 //define subscribers
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
 var gps_control_listener = new ROSLIB.Topic({
     ros: ros,
     name: 'gps/control',
     messageType: 'sensor_msgs/NavSatFix'
 });
 //-------------------------------------------

 var markerLineString = {


     "type": "Feature",
     "properties": {},
     "geometry": {
         "type": "LineString",
         "coordinates": [[], []
                    ]
     }
 }

 $(document).ready(function () {
     $("#marker-adder").hide();
     $("#edit-controls").hide();
     $("converter_section").hide();
 });
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

     //map.setLayoutProperty('drone', 'icon-rotate', direction);

     if (ui_variables.focused === true) {
         map.setCenter(drone.coordinates);
     }
 }

 ros.connect("ws://" + ros_server_url); //connected to ros

 ros.on("connection", function () {
     console.debug("Connected to ROS server");
     rosConnected = true;
     initSubscribers();
     initPublishers();
 });

 ros.on("close", function () {
     console.debug("Disconnected from ROS server");
     rosConnected = false;
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

 // create DOM element for the marker
 // create the marker
 map.on('click', function (e) {
     if (ui_variables.add && ui_variables.editable) {
         addMark([e.lngLat.lng, e.lngLat.lat]);
     }

 });

 map.on('mousemove', function (e) {
     var temp_coordinate = [e.lngLat.lng, e.lngLat.lat];
     if (ui_variables.move && ui_variables.editable && ui_variables.marker_moving) {
         moveMarker(ui_variables.target_index, temp_coordinate);
     }
     $("#temp-pos").html(temp_coordinate[1] + "," + temp_coordinate[0]);
 });


 //if you want to do realtime operations on map, use this
 map.on('styledata', function () {
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
                 "circle-color": "#000",
                 "circle-opacity": 0.4
             }
         });

         map.addLayer({
             "id": "drone-glow",
             "type": "circle",
             "source": "drone",
             "paint": {
                 "circle-radius": 40,
                 "circle-color": "#000",
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
             "circle-color": "#000",
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
             "line-color": "#b80909",
             "line-width": 8,
             "line-opacity": 0.6
         }

     });

 });

 function converter() {
     var degree = document.getElementById('deg').value;
     var minute = document.getElementById('min').value;
     var second = document.getElementById('sec').value;
     var longitude_i = document.getElementById('long').value;


     //alert(degree);
     longitude = parseFloat(degree) + parseFloat(minute / 60) + parseFloat(second / 3600);
     document.getElementById("outputLong").innerHTML = longitude;
     //alert(longitude);

     long_deg = Math.floor(longitude_i);
     document.getElementById("outputDeg").innerHTML = long_deg;

     long_min_i = 60 * (longitude_i - long_deg);

     long_min = Math.floor(long_min_i);


     document.getElementById("outputMin").innerHTML = long_min;

     long_sec = 60 * (long_min_i - long_min);

     document.getElementById("outputSec").innerHTML = long_sec;





 }


 function initPublishers() {
     position_publisher.publish(pos_msg);
 }

 //obtain data from ros
 function initSubscribers() {

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
     gps_control_listener.subscribe(function (msg) {
         console.log(msg.data);
         drone.coordinates[0] = msg.latitude;
         drone.coordinates[1] = msg.longitude;
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
 jQuery("#go-to-rover").click(function () {
     map.setCenter(drone.coordinates);
 });

 $("#addMarkBtn").click(function () {
     var data = [Number($("#addMarkLat").val()), Number($("#addMarkLng").val())];
     addMark(data);
 });

 $("#edit-markers").click(function () {
     if (!ui_variables.editable) {
         initControl("#move-marker");
         initControl("#remove-marker");
         initControl("#add-marker");
         initControl("#remove-all-markers");
         ui_variables.add = false;
         ui_variables.move = false;
         ui_variables.remove = false;
     }
     ui_variables.editable = !ui_variables.editable;
     $("#marker-adder").slideToggle(500);

     $("#edit-controls").slideToggle(500);

 });

 $("#converter").click(function () {
     if (!ui_variables.editable) {
         initControl("#convert_section");

         ui_variables.add = false;
         ui_variables.move = false;
         ui_variables.remove = false;
     }
     ui_variables.editable = !ui_variables.editable;
     $("#convert").slideToggle(500);


 });

 $("#add-marker").click(function () {
     ui_variables.add = !ui_variables.add;
     $("#move-marker").slideToggle(500);
     $("#remove-marker").slideToggle(500);
     $("#remove-all-markers").slideToggle(500);

 });

 $("#move-marker").click(function () {
     if (!ui_variables.move) {
         map.dragPan.disable();
     } else {
         map.dragPan.enable();
     }
     ui_variables.move = !ui_variables.move;
     $("#add-marker").slideToggle(500);
     $("#remove-marker").slideToggle(500);
     $("#remove-all-markers").slideToggle(500);

 });

 $("#remove-marker").click(function () {
     ui_variables.remove = !ui_variables.remove;
     $("#add-marker").slideToggle(500);
     $("#move-marker").slideToggle(500);
     $("#remove-all-markers").slideToggle(500);

 });

 $("#map-online").click(function () {
     map.setStyle('mapbox://styles/mapbox/satellite-streets-v9');
     map.setCenter([-110.791941, 38.406320]);
     map.setMaxBounds(null);
 });

 $("#map-offline-1").click(function () {
     map.setStyle(itu_map);
     map.setCenter([29.02677916503476, 41.104005936601482]);
     map.setMaxBounds(itu_map_bound);
     map.setZoom(15);
 });

 $("#map-offline-2").click(function () {
     map.setStyle(utah_1);
     map.setCenter([-110.791941, 38.406320]);
     map.setMaxBounds(utah_1_bound);
     map.setZoom(15);
 });

 $("#map-offline").click(function () {
     map.setStyle(utah_home);
     map.setCenter([ -109.448478, 38.486514]);
     map.setMaxBounds(utah_home_bound);
     map.setZoom(16);
 });

 $("#map-offline-3").click(function () {
     map.setStyle(utah_2);
     map.setCenter([-110.791941, 38.406320]);
     map.setMaxBounds(utah_2_bound);
     map.setZoom(15);

 });
$("#map-offline-utah-3").click(function () {
     map.setStyle(utah_3);
     map.setCenter([-110.919168, 38.806326]);
     map.setMaxBounds(utah_3_bound);
     map.setZoom(14);

 });
$("#map-offline-utah-4").click(function () {
     map.setStyle(utah_4);
     map.setCenter([-110.914845, 38.606192]);
     map.setMaxBounds(utah_4_bound);
     map.setZoom(14);

 });
$("#map-offline-utah-5").click(function () {
     map.setStyle(utah_5);
     map.setCenter([-110.9996, 
        38.5631]);
     map.setMaxBounds(utah_5_bound);
     map.setZoom(14);

 });
$("#map-offline-utah-6").click(function () {
     map.setStyle(utah_6);
     map.setCenter([-110.88057, 
        38.79382]);
     map.setMaxBounds(utah_6_bound);
     map.setZoom(14);

 });
$("#map-offline-utah-7").click(function () {
     map.setStyle(utah_7);
     map.setCenter([-110.67237, 
        38.33460]);
     map.setMaxBounds(utah_7_bound);
     map.setZoom(14);

 });
 $("#map-offline-4").click(function () {
     map.setStyle(utah_down_map);
     map.setCenter([ -110.91484585997983, 38.60619294950412]);
     map.setMaxBounds();
     map.setZoom(14);

 });
$("#map-offline-down").click(function () {
     map.setStyle(utah_down_map);
     map.setCenter([ -110.914845, 38.60619]);
     map.setMaxBounds();
     map.setZoom(14);

 });

 $("#map-offline-5").click(function () {
     map.setStyle(utah_home);
     //alt satır değişecek
     map.setCenter([-109.44754849557347,38.486199700774549]);
     map.setMaxBounds(utah_home_bound);
     map.setZoom(15);

 });

 $("#map-offline-90").click(function () {
     map.setStyle(utah_demo);
     //alt satır değişecek
     map.setCenter([-110.7000, 38.40000]);
     map.setMaxBounds(utah_demo_bound);
     map.setZoom(15);

 });


 $(document).on("click", ".waypoint", function (e) {
     if (ui_variables.remove && ui_variables.editable) {
         removeMarker(e.target);
     } else if (!ui_variables.editable && rosConnected == true) {
         var target_index = e.target.getAttribute("index");
         var target_pos = waypoints[target_index].coordinates;
         pos_msg.latitude = target_pos[0];
         pos_msg.longitude = target_pos[1];
         position_publisher.publish(pos_msg);
     }
 });

 $(document).on("mousedown", ".waypoint", function (e) {
     e.preventDefault();
     if (ui_variables.move && ui_variables.editable) {
         ui_variables.target_index = e.target.getAttribute("index");
         ui_variables.marker_moving = true;
     }
 });

 $(document).on("mouseup", ".waypoint", function (e) {
     if (ui_variables.move && ui_variables.editable) {
         ui_variables.target_index = null;
         ui_variables.marker_moving = false;
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
     var el = document.createElement('div');
     if (temp_index == 0) {
         el.style.backgroundColor = "green";
     }
     waypoints[temp_index].marker_div = el;
     waypoints[temp_index].setIndex(temp_index);

     map.getSource("waypoints").setData(markerDatas); //this "waypoints" is not the array that marker_rs s are stored.It is name of the source.
     waypoints[temp_index].marker = new mapboxgl.Marker(el)
         .setLngLat(data)
         .addTo(map);
     updateLines();


 }

 function updateLines() {
     markerLineString.geometry.coordinates = [];
     for (i = 0; i < markerDatas.features.length; i++) {
         markerLineString.geometry.coordinates[i] = markerDatas.features[i].geometry.coordinates;
     }
     if (markerDatas.features.length < 2) {
         markerLineString.geometry.coordinates = [[], []];
     }
     map.getSource("lines").setData(markerLineString);
 }

 function removeMarker(element) {
     var idx = element.getAttribute("index");
     element.remove();
     waypoints.splice(idx, 1);
     markerDatas.features.splice(idx, 1);
     for (k = idx; k < markerDatas.features.length; k++) {
         waypoints[k].setIndex(k);
         waypoints[k].marker = new mapboxgl.Marker(waypoints[k].marker_div).setLngLat(waypoints[k].coordinates).addTo(map);
     }

     map.getSource("waypoints").setData(markerDatas);
     updateLines();
 }

 function moveMarker(idx, pos) {
     waypoints[idx].setPosition(pos);
     markerDatas.features[idx] = waypoints[idx].getFeature();
     waypoints[idx].marker.setLngLat(pos);
     map.getSource("waypoints").setData(markerDatas);
     updateLines();
 }

 function initControl(elm) {
     $(elm).removeClass("disabled");
     $(elm).show();
 }
 //TODO Add marker arrays
 //TODO Add list items and connect them to markers
 //TODO Align the map and the info box - look at the columns
 //TODO Draw linestrings in between the markers
 //TODO Find a way to store array elements and save them into a file within the server
 //when it is submitted
 //TODO Make the waypoint markers draggable
