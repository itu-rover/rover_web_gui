var dps_1 = [{x:10,y:10},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]; // dataPoints



var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });


  // roslaunch starter function

function cmdStarter(cmd){

    console.log(cmd)
    
    var cmdStarterTopic = new ROSLIB.Topic({
        ros: ros,
        name: '/cmd_starter_topic',
        messageType: 'std_msgs/String'
    })
    
    var cmdStarterMsg = new ROSLIB.Message({data: cmd});

    
    console.log(cmdStarterMsg.data);

    cmdStarterTopic.publish(cmdStarterMsg);

}



// GPS LISTENER AND SUBSCRIBER

var gpsListener = new ROSLIB.Topic({
  ros: ros,
  name: '/gps/fix',
  messageType: 'sensor_msgs/NavSatFix'
})

gpsListener.subscribe(function(message) {
  
  document.getElementById("gps-lat").innerHTML = JSON.stringify(message.latitude);
  document.getElementById("gps-long").innerHTML = JSON.stringify(message.longitude);

});


// IMU LISTENER AND SUBSCRIBER

var imuListener = new ROSLIB.Topic({
  ros: ros,
  name: '/imu/data',
  messageType: 'sensor_msgs/Imu'
})

imuListener.subscribe(function(message) {
  
  document.getElementById("imu-x").innerHTML = JSON.stringify(message.orientation.x);
  document.getElementById("imu-y").innerHTML = JSON.stringify(message.orientation.y);
  document.getElementById("imu-z").innerHTML = JSON.stringify(message.orientation.z);

});


// Axis Listeners and Subscribers

// Axis 1

var axisListener1 = new ROSLIB.Topic({
  ros: ros,
  name: '/rover_arm_joint_1/command',
  messageType: 'std_msgs/Float64'
})

axisListener1.subscribe(function(message) {

  axisDegree = (360 * message.data) / (2 * Math.PI)
  document.getElementById("axis1").innerHTML = JSON.stringify(axisDegree);
  dps_1[0].x = axisDegree
  

});

//var joint_2_piece_endp_x = 10 + 100*(Math.cos(degrees_to_radian(joint_2_piece_angle))); // 10 10 robot kolun başlangıç noktası, 100 ilk parçanın uzunluğu
//var joint_2_piece_endp_y = 10 + 100*(Math.sin(degrees_to_radian(joint_2_piece_angle)));


// Axis 2

var axisListener2 = new ROSLIB.Topic({
  ros: ros,
  name: '/rover_arm_joint_2/command',
  messageType: 'std_msgs/Float64'
})

axisListener2.subscribe(function(message) {

  axisDegree = (360 * message.data) / (2 * Math.PI)
  document.getElementById("axis2").innerHTML = JSON.stringify(axisDegree);

});


// Axis 3

var axisListener3 = new ROSLIB.Topic({
  ros: ros,
  name: '/rover_arm_joint_3/command',
  messageType: 'std_msgs/Float64'
})

axisListener3.subscribe(function(message) {

  axisDegree = (360 * message.data) / (2 * Math.PI)
  document.getElementById("axis3").innerHTML = JSON.stringify(axisDegree);

});


// Axis 4

var axisListener4 = new ROSLIB.Topic({
  ros: ros,
  name: 'rover_arm_joint_4/command',
  messageType: 'std_msgs/Float64'
})

axisListener4.subscribe(function(message) {

  axisDegree = (360 * message.data) / (2 * Math.PI)
  document.getElementById("axis4").innerHTML = JSON.stringify(axisDegree);

});


// Axis 5

var axisListener5 = new ROSLIB.Topic({
  ros: ros,
  name: 'rover_arm_joint_5/command',
  messageType: 'std_msgs/Float64'
})

axisListener5.subscribe(function(message) {

  axisDegree = (360 * message.data) / (2 * Math.PI)
  document.getElementById("axis5").innerHTML = JSON.stringify(axisDegree);

});


// Axis 6

var axisListener6 = new ROSLIB.Topic({
  ros: ros,
  name: 'rover_arm_joint_6/command',
  messageType: 'std_msgs/Float64'
})

axisListener6.subscribe(function(message) {

  axisDegree = (360 * message.data) / (2 * Math.PI)
  document.getElementById("axis6").innerHTML = JSON.stringify(axisDegree);

});




// -----------------------------

// Codes for Robotic Arm Graphic

// -----------------------------


	var chart_1 = new CanvasJS.Chart("chartContainer_1", {

		theme: "dark2",
		title :{
			text: "Robotic Arm"
		},
		axisX:{
	        interval: 10
	    },
		axisY: {
			gridThickness: 0,
			interval: 10
		},
		data: [{
			type: "line",
			lineThickness: 20,
			lineColor:"white",
			dataPoints: dps_1
		}]
	});





