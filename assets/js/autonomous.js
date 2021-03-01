
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


function cmdStarter(){
    
    var cmdStarterTopic = new ROSLIB.Topic({
        ros: ros,
        name: '/cmd_starter_topic',
        messageType: 'std_msgs/String'
    })
    
    var cmdStarterMsg = new ROSLIB.Message({data: "ataparlar"});

    
    console.log(cmdStarterMsg.data);

    cmdStarterTopic.publish(cmdStarterMsg);

}


/*
listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
    listener.unsubscribe();
});
*/