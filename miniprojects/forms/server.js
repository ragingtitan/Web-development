let con=require('./connector')

//console.log(con)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname+ '/public/register.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname+ '/public/login.html'));
});

app.post('/login',(req,res)=>{
  let flag=0;
  //console.log(req.body);
  let email=req.body.Email;
  let password=req.body.Password;
  console.log(email,password)
  con.connect((err)=>{
    if(err) throw err;
    else{
      let query2='SELECT * FROM DATA'
      con.query(query2,(err,res2)=>{
      //console.log(res2);
      res2.forEach(item => {
        // Accessing properties of each object
        if (item.Email == email && item.PASSWORD == password) {
          flag = 1;
        }
      });
      if (flag == 1) {
        res.send('Login successful!');
      } else {
        res.send('No user found!!');
      }
    })
    }
  })
})
app.post('/register', (req, res) => {
  console.log(req.body);
  // You can add logic here to handle the form data received in req.body
  let username=req.body.Username;
  let email=req.body.Email;
  let password=req.body.Password;
  //console.log(username,email,password);

  con.connect(function(error){
    
    if(error) throw error;
    let flag2=0;
    let query2='SELECT * FROM DATA'
        con.query(query2,(err,res2)=>{
        console.log(res2);
        res2.forEach(item => {
          // Accessing properties of each object
          if (item.Username==username && item.Email == email) {
            flag2 = 1;
          }
        });
        if (flag2 == 1) {
          res.send('User already exists!');
        } else {
          let query = "INSERT INTO DATA(Username,Email,Password) VALUES(?,?,?)"
          con.query(query,[username,email,password],(error,res1)=>{
          if(error) throw error;
          else{
        
          }
        });
          res.send('Registration successful!');
        }
      })
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/login.html`);
});
