import time


bankanr = 123412 #heiltala e. integer
nafn = "Bjarkalingur" #strengur e. string
er_I_Gardaskola = False #boolean
tala_pi = 3.14 #float



#skilgreinum fallið
def fall():
    print(bankanr)
    time.sleep(0.1)
    fall()
#kalla í fallið
fall()