<<<<<<< HEAD
var ros_server_url = document.location.hostname + ":9090";
var ros = new ROSLIB.Ros();
var rosConnected = false;

var data_bio = [0, 0, 0, 0];
var data_ec = [0, 0, 0, 0];
var data_ph = [0, 0, 0, 0];


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

    bio_listener.subscribe(function (msg) {
        data_bio = msg.data;
    });

    window.onload = function () {

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                zoomEnabled: true,
                title: {
                    text: "Biosensor-EC-PH"
                },
                axisX: {
                    title: "Value",

                },
                axisY: {
                    title: "TIME",
                    valueFormatString: "h"
                },
                data: [{
                    type: "scatter",
                    toolTipContent: "<b>Time: </b>{x} <br/><b>Value: </b>{y}h",
                    dataPoints: dps_bio
	}]
            });

            function toggleDataSeries(e) {

                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }

                chart.render();

            }
            var xVal = 1;
            var yVal = 0;
            var updateInterval = 1000;
            var updateChart = function () {



                dps_bio.push({
                    x: xVal,
                    y: +data_bio[yVal]
                });

                yVal++;
                xVal++;


                chart.render();
=======
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	zoomEnabled: true,
    backgroundColor: "#d2d6de",
	title:{
		text: "Biosensor-EC-PH"
	},
	axisX: {
		title:"TIME",
		minimum: 790,
		maximum: 2260
	},
	axisY:{
		title: "VALUE",
		valueFormatString: "H"
         
        
	},
	data: [{
		type: "scatter",
		toolTipContent: "<b>Area: </b>{x} sq.ft<br/><b>Price: </b>${y}k",
		dataPoints: [
			{ x: 800, y: 350 },
			{ x: 900, y: 450 },
			{ x: 850, y: 450 },
			{ x: 1250, y: 700 },
			{ x: 1100, y: 650 },
			{ x: 1350, y: 850 },
			{ x: 1200, y: 900 },
			{ x: 1410, y: 1250 },
			{ x: 1250, y: 1100 },
			{ x: 1400, y: 1150 },
			{ x: 1500, y: 1050 },
			{ x: 1330, y: 1120 },
			{ x: 1580, y: 1220 },
			{ x: 1620, y: 1400 },
			{ x: 1250, y: 1450 },
			{ x: 1350, y: 1600 },
			{ x: 1650, y: 1300 },
			{ x: 1700, y: 1620 },
			{ x: 1750, y: 1700 },
			{ x: 1830, y: 1800 },
			{ x: 1900, y: 2000 },
			{ x: 2050, y: 2200 },
			{ x: 2150, y: 1960 },
			{ x: 2250, y: 1990 }
		]
	}]
});
chart.render();
>>>>>>> master

            };
            updateChart(100);
            setInterval(function () {
                updateChart()
            }, updateInterval);
