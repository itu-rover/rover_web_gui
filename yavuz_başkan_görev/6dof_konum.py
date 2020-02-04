import math

double l_1 = l_1           
double l_2 = l_2
double l_3 = l_3
double l_4 = l_4            # 3. ve 4. joint arası yatay
double l_5 = l_5            # 3. ve 4. joint arası dikey (- al !!!!)
double l_6 = l_6            # 3. ve 4. joint arası yatay (- al !!!!)
double l_7 = l_7            # 4. ve 5. joint arası yatay (- al !!!!)
 
class coordinate():

    def __init__(self,new_x,new_y,new_z):

        self.x = new_x
        self.y = new_y
        self.z = new_z

def Dof_6(t0,t1,t2,t3,t4):

    px=-l_7*math.cos(t4)*(math.sin(t0)*math.sin(t3) + math.cos(t3)*(math.cos(t0)*math.sin(t1)*math.sin(t2) - math.cos(t0)*math.cos(t1)*math.cos(t2))) l_6*math.cos(t3)*math.sin(t0) - l_4*math.sin(t0)*math.sin(t3) - l_2*math.cos(t0)*math.sin(t1) - l_4*math.cos(t3)*(math.cos(t0)*math.sin(t1)*math.sin(t2) - math.cos(t0)*math.cos(t1)*math.cos(t2)) -l_6*math.sin(t3)*(math.cos(t0)*math.sin(t1)*math.sin(t2) - math.cos(t0)*math.cos(t1)*math.cos(t2)) -l_7*math.sin(t4)*(math.cos(t0)*math.cos(t1)*math.sin(t2) + math.cos(t0)*math.cos(t2)*math.sin(t1)) - l_3*math.cos(t0)*math.sin(t1)*math.sin(t2) + l_3*math.cos(t0)*math.cos(t1)*math.cos(t2) -l_5*math.cos(t0)*math.cos(t1)*math.sin(t2) -l_5*math.cos(t0)*math.cos(t2)*math.sin(t1)
    py=-l_6*math.cos(t0)*math.cos(t3) + l_4*math.cos(t0)*math.sin(t3) - l_2*math.sin(t0)*math.sin(t1) l_7*math.cos(t4)*(math.cos(t0)*math.sin(t3) - math.cos(t3)*(math.sin(t0)*math.sin(t1)*math.sin(t2) - math.cos(t1)*math.cos(t2)*math.sin(t0))) - l_4*math.cos(t3)*(math.sin(t0)*math.sin(t1)*math.sin(t2) - math.cos(t1)*math.cos(t2)*math.sin(t0)) -l_6*math.sin(t3)*(math.sin(t0)*math.sin(t1)*math.sin(t2) - math.cos(t1)*math.cos(t2)*math.sin(t0)) -l_7*math.sin(t4)*(math.cos(t1)*math.sin(t0)*math.sin(t2) + math.cos(t2)*math.sin(t0)*math.sin(t1)) -l_5*math.cos(t1)*math.sin(t0)*math.sin(t2) -l_5*math.cos(t2)*math.sin(t0)*math.sin(t1) - l_3*math.sin(t0)*math.sin(t1)*math.sin(t2) + l_3*math.cos(t1)*math.cos(t2)*math.sin(t0)
    pz=l_2*math.cos(t1) l_5*math.cos(t1)*math.cos(t2) + l_3*math.cos(t1)*math.sin(t2) + l_3*math.cos(t2)*math.sin(t1) -l_5*math.sin(t1)*math.sin(t2) + l_4*math.cos(t3)*(math.cos(t1)*math.sin(t2) + math.cos(t2)*math.sin(t1)) l_6*math.sin(t3)*(math.cos(t1)*math.sin(t2) + math.cos(t2)*math.sin(t1)) l_7*math.sin(t4)*(math.cos(t1)*math.cos(t2) - math.sin(t1)*math.sin(t2)) l_7*math.cos(t3)*math.cos(t4)*(math.cos(t1)*math.sin(t2) + math.cos(t2)*math.sin(t1)) + l_1

    return coordinate(px,py,pz)

def Dof_5(t0,t1,t2,t3):

    px=-l_6*math.sin(t3)*(math.cos(t0)*math.sin(t1)*math.sin(t2) - math.cos(t0)*math.cos(t1)*math.cos(t2)) l_6*math.cos(t3)*math.sin(t0) - l_4*math.sin(t0)*math.sin(t3) - l_4*math.cos(t3)*(math.cos(t0)*math.sin(t1)*math.sin(t2) - math.cos(t0)*math.cos(t1)*math.cos(t2)) - l_2*math.cos(t0)*math.sin(t1) - l_3*math.cos(t0)*math.sin(t1)*math.sin(t2) + l_3*math.cos(t0)*math.cos(t1)*math.cos(t2) -l_5*math.cos(t0)*math.cos(t1)*math.sin(t2) -l_5*math.cos(t0)*math.cos(t2)*math.sin(t1)
    py=-l_6*math.cos(t0)*math.cos(t3) + l_4*math.cos(t0)*math.sin(t3) - l_2*math.sin(t0)*math.sin(t1) - l_4*math.cos(t3)*(math.sin(t0)*math.sin(t1)*math.sin(t2) - math.cos(t1)*math.cos(t2)*math.sin(t0)) -l_6*math.sin(t3)*(math.sin(t0)*math.sin(t1)*math.sin(t2) - math.cos(t1)*math.cos(t2)*math.sin(t0)) -l_5*math.cos(t1)*math.sin(t0)*math.sin(t2) -l_5*math.cos(t2)*math.sin(t0)*math.sin(t1) - l_3*math.sin(t0)*math.sin(t1)*math.sin(t2) + l_3*math.cos(t1)*math.cos(t2)*math.sin(t0)
    pz=l_2*math.cos(t1) l_5*math.cos(t1)*math.cos(t2) + l_3*math.cos(t1)*math.sin(t2) + l_3*math.cos(t2)*math.sin(t1) -l_5*math.sin(t1)*math.sin(t2) + l_4*math.cos(t3)*(math.cos(t1)*math.sin(t2) + math.cos(t2)*math.sin(t1)) l_6*math.sin(t3)*(math.cos(t1)*math.sin(t2) + math.cos(t2)*math.sin(t1)) + l_1

    return px,py,pz
    
def Dof_4(t0,t1,t2,t3):

    px= l_3*math.cos(t0)*math.cos(t1)*math.cos(t2) - l_4*math.sin(t0)*math.sin(t3) - l_4*math.cos(t3)*(math.cos(t0)*math.sin(t1)*math.sin(t2) - math.cos(t0)*math.cos(t1)*math.cos(t2)) - l_3*math.cos(t0)*math.sin(t1)*math.sin(t2) - l_2*math.cos(t0)*math.sin(t1) -l_5*math.cos(t0)*math.cos(t1)*math.sin(t2) -l_5*math.cos(t0)*math.cos(t2)*math.sin(t1)
    py= l_4*math.cos(t0)*math.sin(t3) - l_2*math.sin(t0)*math.sin(t1) - l_4*math.cos(t3)*(math.sin(t0)*math.sin(t1)*math.sin(t2) - math.cos(t1)*math.cos(t2)*math.sin(t0)) -l_5*math.cos(t1)*math.sin(t0)*math.sin(t2) -l_5*math.cos(t2)*math.sin(t0)*math.sin(t1) - l_3*math.sin(t0)*math.sin(t1)*math.sin(t2) + l_3*math.cos(t1)*math.cos(t2)*math.sin(t0)
    pz= l_2*math.cos(t1) l_5*math.cos(t1)*math.cos(t2) + l_3*math.cos(t1)*math.sin(t2) + l_3*math.cos(t2)*math.sin(t1) -l_5*math.sin(t1)*math.sin(t2) + l_4*math.cos(t3)*(math.cos(t1)*math.sin(t2) + math.cos(t2)*math.sin(t1)) + l_1

    return px,py,pz

def Dof_3(t0,t1,t2):

    px=l_3*math.cos(t0)*math.cos(t1)*math.cos(t1) - l_3*math.cos(t0)*math.sin(t1)*math.sin(t2) - l_2*math.cos(t0)*math.sin(t1)
    py=l_3*math.cos(t1)*math.cos(t1)*math.sin(t0) - l_3*math.sin(t0)*math.sin(t1)*math.sin(t2) - l_2*math.sin(t0)*math.sin(t1)
    pz=l_2*math.cos(t1) + l_3*math.cos(t1)*math.sin(t2) + l_3*math.cos(t1)*math.sin(t1) + l_1

    return px,py,pz

def Dof_2(t0,t1):

    px=-l_2*math.cos(t0)*math.sin(t1)
    py=-l_2*math.sin(t0)*math.sin(t1)
    pz= l_2*math.cos(t1) + l_1

    return px,py,pz

def Dof_1(t0):

    px=0
    py=0
    pz=l_1

    return px,py,pz

Result=Dof_6(5,5,5,5,5)
print(Result)  


