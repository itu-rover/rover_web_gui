#!/usr/bin/env python
import rospy
from std_msgs.msg import String
import os

def cmdStart(data):
    rospy.loginfo(rospy.get_caller_id() + "I heard %s", data.data)
    if data:
        rospy.loginfo("data geliyor")
    if data.data == "ataparlar":
        os.system("roslaunch rover_21_description gazebo.launch")
        rospy.loginfo("donex")
    
def cmdStarterListener():

    # In ROS, nodes are uniquely named. If two nodes with the same
    # name are launched, the previous one is kicked off. The
    # anonymous=True flag means that rospy will choose a unique
    # name for our 'listener' node so that multiple listeners can
    # run simultaneously.
    rospy.init_node('cmdStarterNode')

    rospy.Subscriber("/cmd_starter_topic", String, cmdStart)

    # spin() simply keeps python from exiting until this node is stopped
    rospy.spin()

if __name__ == '__main__':
    cmdStarterListener()