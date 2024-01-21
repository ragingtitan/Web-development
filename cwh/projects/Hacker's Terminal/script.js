document.addEventListener('DOMContentLoaded',()=>{
    function randomTime()
    {
        let time=Math.floor(Math.random()*(8000-1000)+1000);
        return time;
    }
    let messages=["Booting up scrapper algorithm...","Checking All the Files...","Searching the system for passwords...","Passwords Found!","Deploying keylogging algorithm...","Starting keylogger...","Keylogger started!","Keylogger - Collecting data...","Collection finished!","Wrapping up...","Sending data to the server...","Data sent successfully!"];
    let l=messages.length;
    console.log(l)
    //let randMsg=Math.floor(Math.random()*l);
    let terminal=document.getElementById('terminal');
    let message0=document.getElementById('message0');
    let message1=document.getElementById('message1');
    let message2=document.getElementById('message2');
    let message3=document.getElementById('message3');
    let message4=document.getElementById('message4');
    let message5=document.getElementById('message5');
    let message6=document.getElementById('message6');
    let message7=document.getElementById('message7');
    terminal.focus()
    terminal.addEventListener('keydown',(e)=>{
        if(e.key=='Enter')
        {
            alert("Enter pressed!!");
        }
        message0.innerHTML="Initializing Algorithms...";
        let p1=new Promise ((res,rej)=>{
            
            res(`${messages[0]}`);
            
        });
        let p2=new Promise ((res,rej)=>{
            
            res(`${messages[1]}`);
            
        });
        let p3=new Promise ((res,rej)=>{
            
            res(`${messages[2]}`);
            
        });
        let p4=new Promise ((res,rej)=>{
            
            res(`${messages[3]}`);
            
        });
        let p5=new Promise ((res,rej)=>{
            
            res(`${messages[4]}`);
            
        });
        let p6=new Promise ((res,rej)=>{
            
            res(`${messages[5]}`);
            
        });
        let p7=new Promise ((res,rej)=>{
            
            res(`${messages[6]}`);
            
        });
        let p8=new Promise ((res,rej)=>{
            
            res(`${messages[7]}`);
            
        });
        let p9=new Promise ((res,rej)=>{
            
            res(`${messages[8]}`);
            
        });
        let p10=new Promise ((res,rej)=>{
            
            res(`${messages[9]}`);
            
        });
        let p11=new Promise ((res,rej)=>{
            
            res(`${messages[10]}`);
            
        });
        let p12=new Promise ((res,rej)=>{
            
            res(`${messages[11]}`);
            
        });
        console.log(randomTime())
        p1.then((a)=>{
            setTimeout(()=>{
                message1.innerHTML=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p2.then((a)=>{
            setTimeout(()=>{
                message2.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p3.then((a)=>{
            setTimeout(()=>{
                message3.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p4.then((a)=>{
            setTimeout(()=>{
                message4.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p5.then((a)=>{
            setTimeout(()=>{
                message5.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p6.then((a)=>{
            setTimeout(()=>{
                message6.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p7.then((a)=>{
            setTimeout(()=>{
                message7.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p8.then((a)=>{
            setTimeout(()=>{
                message8.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p9.then((a)=>{
            setTimeout(()=>{
                message9.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p10.then((a)=>{
            setTimeout(()=>{
                message10.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p11.then((a)=>{
            setTimeout(()=>{
                message11.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
        p12.then((a)=>{
            setTimeout(()=>{
                message12.innerHTML+=a;
            },randomTime())
        }).catch(err=>{
            console.log(err);
        });
    });
});