mapboxgl.accessToken = 'pk.eyJ1IjoiZGVrc3ByaW1lIiwiYSI6ImNqOGsxb3dyYzA4b2wyeHBsdGx0aXdzeHYifQ.4vYgxeGhICEGWbC1552LsQ';

//graphic tab, not effective and useable, dashboard_map tab is active


var ros_server_url = document.location.hostname + ":9090";
var ros = new ROSLIB.Ros();
var rosConnected = false;
var data_metane = [0, 0, 0, 0, 0, 0, 0, 0];
var data_carbon = [0, 0, 0, 0, 0, 0, 0, 0];
var data_hum = [0, 0, 0, 0, 0, 0, 0, 0];
var data_air = [0, 0, 0, 0, 0, 0, 0, 0];
var data_dust = [0, 999, 0, 0, 0, 0, 0, 0];
var data_etanol = [0, 0, 0, 0, 0, 400, 0, 0];
var data_geiger = [0, 0, 0, 0, 700, 0, 0, 0];

var dps_metane = [];
var dps_carbon = [];
var dps_hum = [];
var dps_air = [];
var dps_dust = [];
var dps_etanol = [];
var dps_geiger = [];


function initSubscribers() {

    ////Define subscribers

    var humidty_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'humidty_data', //dinlenecek topic adı
        messageType: 'std_msgs/Int32MultiArray' //topicin mesaj tipi
    });

    var dust_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'dust_data',
        messageType: 'std_msgs/Int32MultiArray'
    });

    var air_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'air_data',
        messageType: 'std_msgs/Int32MultiArray'
    });

    var carbon_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'carbon_data',
        messageType: 'std_msgs/Int32MultiArray'
    });

    var etanol_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'etanol_data',
        messageType: 'std_msgs/Int32MultiArray'

    });

    var metane_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'metane_data',
        messageType: 'std_msgs/Int32MultiArray'
    });
    var geiger_listener = new ROSLIB.Topic({
        ros: ros,
        name: 'geiger_data',
        messageType: 'std_msgs/Int32MultiArray'
    });

    var sensor_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/sensor', //dinlenecek topic adı
        messageType: 'std_msgs/Int32MultiArray' //topicin mesaj tipi
    });






    //State
    //TODO Add Robostate /State topic
    //--Armed Status(True,False)
    //--Px4Mode(AUTO, OFFBOARD etc.)
    humidty_listener.subscribe(function (msg) {
        data_hum = msg.data;
    });
    dust_listener.subscribe(function (msg) {
        data_dust = msg.data;
    });

    air_listener.subscribe(function (msg) {
        data_air = msg.data;
    });

    carbon_listener.subscribe(function (msg) {
        data_carbon = msg.data;

    });

    etanol_listener.subscribe(function (msg) {
        data_etanol = msg.data;


    });
    metane_listener.subscribe(function (msg) {
        console.log(msg);
        data_metane = msg.data;


    });
    geiger_listener.subscribe(function (msg) {
        console.log(msg);
        data_geiger = msg.data;


    });

    sensor_listener.subscribe(function (msg) {
        console.log(msg);
        data = msg.data;
        console.log(data);

    });


    var chart = new CanvasJS.Chart("chartContainer1", {
            title: {
                text: ""
            },
            axisX: {
                title: ""
            },
            axisY: {
                title: ""
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                    type: "spline",
                    name: "Metane",
                    showInLegend: true,
                    dataPoints: dps_metane
	},
                {
                    type: "spline",
                    name: "Dust",
                    showInLegend: true,
                    dataPoints: dps_dust
	},
                {
                    type: "spline",
                    name: "Air",
                    showInLegend: true,
                    dataPoints: dps_air

	},
                {
                    type: "spline",
                    name: "Carbon",
                    showInLegend: true,
                    dataPoints: dps_carbon
	},
                {
                    type: "spline",
                    name: "Etanol",
                    showInLegend: true,
                    dataPoints: dps_etanol
	},
                {
                    type: "spline",
                    name: "Geiger",
                    showInLegend: true,
                    dataPoints: dps_geiger
	},
                {
                    type: "spline",
                    name: "Humidity",
                    showInLegend: true,
                    dataPoints: dps_hum
	}],
        }


    );

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

    //chart.render();


    var updateChart = function () {



        dps_hum.push({
            x: xVal,
            y: +data_hum[yVal]
        });
        dps_carbon.push({
            x: xVal,
            y: +data_carbon[yVal]
        });
        dps_etanol.push({
            x: xVal,
            y: +data_etanol[yVal]
        });
        dps_dust.push({
            x: xVal,
            y: +data_dust[yVal]
        });
        dps_air.push({
            x: xVal,
            y: +data_air[yVal]
        });
        dps_metane.push({
            x: xVal,
            y: +data_metane[yVal]
        });
        dps_geiger.push({
            x: xVal,
            y: +data_geiger[yVal]
        });



        yVal++;
        xVal++;


        chart.render();



        // update chart after specified time. 

    };
    updateChart(100);
    setInterval(function () {
        updateChart()
    }, updateInterval);


    // 
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


    alert("I am an alert box!");


    }
    
  
    
/// chart for biyosensor,ec, ph sensors. should be scatter charts cause data is discontinuos
    
    
window.onload = function () {


var chart = new CanvasJS.Chart("chartContainere", {
	animationEnabled: true,
	zoomEnabled: true,
	title:{
		text: "Real Estate Rates"
	},
	axisX: {
		title:"Area (in sq. ft)",
		minimum: 790,
		maximum: 2260
	},
	axisY:{
		title: "Price (in USD)",
		valueFormatString: "$#,##0k"
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

}