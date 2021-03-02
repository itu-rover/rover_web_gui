#!/usr/bin/env python
import rospy
from std_msgs.msg import String
import os

def cmdStart(data):
    # Executes a 'roslaunch' terminal according to data. 

    rospy.loginfo(data.data)

    if data.data == "desc":
        os.system("roslaunch rover_21_description gazebo.launch")
    if data.data == "loc":
        os.system("roslaunch rover_21_localization localization.launch")
    if data.data == "nav":
        os.system("roslaunch rover_21_navigation move_base.launch")
    if data.data == "cont":
        os.system("roslaunch rover_21_control teleop_joy_f310.launch")
    
def cmdStarterListener():

    # In ROS, nodes are uniquely named. If two nodes with the same
    # name are launched, the previous one is kicked off. The
    # anonymous=True flag means that rospy will choose a unique
    # name for our 'listener' node so that multiple listeners can
    # run simultaneously.
    rospy.init_node('cmd_starter_node')

    rospy.Subscriber("/cmd_starter_topic", String, cmdStart)

    # spin() simply keeps python from exiting until this node is stopped
    rospy.spin()

if __name__ == '__main__':
    cmdStarterListener()


