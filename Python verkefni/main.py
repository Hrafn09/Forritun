
nafn = input("Hvað heitir þú? ")
aldur = input("Hvað ertu gamall? ")

if aldur < ("0"):
    print("Flott")
else:
    print("Villa, þetta er ekki númer")
    exit()
    
if aldur > ("20"):
    print("Þetta nálgast lokin hjá þér")

print("Velkominn,", nafn)
print("Þú ert", aldur, "ára")

