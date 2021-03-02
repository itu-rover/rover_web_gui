
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

