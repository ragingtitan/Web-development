import mysql.connector as con
mycon=con.connect(host="localhost",user="root",password="28469",database="webapp")

if(mycon.is_connected()):
    print("Connection established successfully!\n")
else:
    print("Cannot establish conenction!\n")

cursor = mycon.cursor()
cursor.execute("select* from location")
result=cursor.fetchall()
print(result)
#Environment clean up required
mycon.close()
