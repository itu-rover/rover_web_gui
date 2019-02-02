mapboxgl.accessToken = 'pk.eyJ1IjoiZGVrc3ByaW1lIiwiYSI6ImNqOGsxb3dyYzA4b2wyeHBsdGx0aXdzeHYifQ.4vYgxeGhICEGWbC1552LsQ';

var ros_server_url = document.location.hostname + ":9090";
var ros = new ROSLIB.Ros();
var rosConnected = false;


var bio_data;

var ec_data;

var ph_data;





var data_bio = [60, 45]
var data_ec = [80, 46]
var data_ph = [40, 90]


var dps_bio = [];
var dps_ec = [];
var dps_ph = [];







window.gamepad = new Gamepad();
var focused = false;
var monument = [-110.791941, 38.406320];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    center: [-110.791941, 38.406320],
    zoom: 18
});
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
map.doubleClickZoom.disable();

ros.on("connection", function () {
    console.debug("Connected to ROS server");
    rosConnected = true;
    initSubscribers();
    initPublishers();
    chart.render();
});

ros.on("close", function () {
    console.debug("Disconnected from ROS server");
    rosConnected = false;
});

// Create connection
ros.connect("ws://" + ros_server_url);




function initSubscribers() {
   
    ////Define subscribers

    var bio_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'bio_data', //dinlenecek topic adı
        messageType: 'std_msgs/Int32MultiArray' //topicin mesaj tipi
    });

    var ec_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'ec_data',
        messageType: 'std_msgs/Int32MultiArray'
    });

    var ph_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'ph_data',
        messageType: 'std_msgs/Int32MultiArray'
    });

 

   
    bio_listener.subscribe(function (msg) {
        data_bio = msg.data;
    });
    dust_ec.subscribe(function (msg) {
        data_ec = msg.data;
    });

    ph_listener.subscribe(function (msg) {
        data_ph = msg.data;
    });

}



window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
     backgroundColor: "#d2d6de ",
	animationEnabled: true,
	title:{
		text: "BIOSENSOR-EC-PH"
	},
    exportEnabled: true,
	axisX: {
		title:"Time"
        
	},
	axisY:{
		title: "Value"
	},
	data: [ {
		type: "scatter",
		toolTipContent: "<span style=\"color:#4F81BC \"><b>{name}</b></span><br/><b> Value:</b> {x} <br/><b> Time:</b></span> {y} h",
		name: "BIO",
		showInLegend: true,
		dataPoints: [
	{ x: data_bio[0], y: data_bio[1]  },
			
		]
     
	},
           {
		type: "scatter",
		toolTipContent: "<span style=\"color:#4F81BC \"><b>{name}</b></span><br/><b> Value:</b> {x} <br/><b> Time:</b></span> {y} h",
		name: "PH",
		showInLegend: true,
		dataPoints: [
	{ x: data_ph[0], y: data_ph[1]  },
			
		]
	},
	{
		type: "scatter",
		name: "EC",
		showInLegend: true, 
		toolTipContent: "<span style=\"color:#4F81BC \"><b>{name}</b></span><br/><b> Value:</b> {x} <br/><b> Time:</b></span> {y} h",
		dataPoints: [
			{ x: data_ec[0], y: data_ec[1]  },
			
		]
	}]
});

	chart.render();
 	document.getElementById("exportChart").addEventListener("click",function(){
    	chart.exportChart({format: "jpg"});
    });  
}




