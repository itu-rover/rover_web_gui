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

            };
            updateChart(100);
            setInterval(function () {
                updateChart()
            }, updateInterval);
