function f1(){
                var s1=document.getElementById("b1").value;
                var s2=document.getElementById("b2").value;
                var s3=document.getElementById("b3").value;
                var s4=document.getElementById("b4").value;
                var s5=document.getElementById("b5").value;
                var x=1;
                if (s1!=s1.toUpperCase()){
                    x=0;
                alert("The First Name should be in caps.");}
                if (s2!=s2.toUpperCase()){
                    x=0;
                alert("The Last Name should be in caps.");}
                if (s4!=s5){
                    x=0;
                alert("UserName and Passwords do not match!!")
                }

                if(x==1)
                alert("All data satisfies every requirements.")
                

            }