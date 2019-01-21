mapboxgl.accessToken = 'pk.eyJ1IjoiZGVrc3ByaW1lIiwiYSI6ImNqOGsxb3dyYzA4b2wyeHBsdGx0aXdzeHYifQ.4vYgxeGhICEGWbC1552LsQ';
var ros_server_url = document.location.hostname + ":9090";
var ros = new ROSLIB.Ros();
var rosConnected = false;
var data_metane = [0, 0, 0, 0, 0, 0, 0, 800];
var data_carbon = [0, 0, 800, 0, 0, 0, 0, 0];
var data_hum = [900, 0, 0, 0, 0, 0, 0, 0];
var data_air = [0, 0, 0, 0, 780, 0, 0, 0];
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


