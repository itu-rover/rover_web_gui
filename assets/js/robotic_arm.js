
// ROSTAN GELEN VERİLERLE AÇI DEĞERLERİNE GÖRE BİR ROBOT KOL GRAFİĞİ ÇİZER

function degrees_to_radian(my_degree){ //veri veri rostan derece olarak gelir. Radyana çeviremiz gerek.

	var radian = ((my_degree * (1.0))/180)*(Math.PI);
	return radian;
}

function check_str(my_string){
    
    var my_float = parseFloat(my_string);
    if(my_string.search("-") == -1){
        
        my_float = my_float * (-1);
    }
    
    return my_float;
}

var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
});

ros.on('connection', function(){
    console.log('Connected to websocket server.');
});

ros.on('error', function(error){
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function(){
    console.log('Connection to websocket server closed.');
});

var pos_listener = new ROSLIB.Topic({
    ros: ros,
    name: '/ui_joint_pos',
    messageType: 'sensor_msgs/String'
});

var my_message = "";

listener.subscribe(function(message) {
    my_message = message.data;
    pos_listener.unsubscribe();
});

window.onload = function(){

	var dps_1 = [{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]; // dataPoints

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

	chart_1.render();

	function robotic_arm_move(){
        
        var pos_array = my_message.split(" ");

		var joint_2_x = check_str(pos_array[0]); // 10 10 robot kolun başlangıç noktası, 100 ilk parçanın uzunluğu
		var joint_2_y = check_str(pos_array[1]);

		var joint_3_x = check_str(pos_array[2]);
		var joint_3_y = check_str(pos_array[3]);

		var joint_4_x = check_str(pos_array[4]);
		var joint_4_y = check_str(pos_array[5]);

		var joint_5_x = check_str(pos_array[6]);
		var joint_5_y = check_str(pos_array[7]);
        
        var ee_x = check_str(pos_array[8]);
        var ee_y = check_str(pos_array[9]);

		dps_1[1] = {x: joint_2_x, y: joint_2_y};
		dps_1[2] = {x: joint_3_x, y: joint_3_y};
		dps_1[3] = {x: joint_4_x, y: joint_4_y};
		dps_1[4] = {x: joint_5_x, y: joint_5_y};
		dps_1[5] = {x: ee_x, y: ee_y};

		chart_1.render();
	};

	setInterval(function(){robotic_arm_move()},33);
}	








