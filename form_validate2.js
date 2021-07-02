function f1(){
    var name=document.getElementById("uname");
    var pword=document.getElementById("pass");
    if(name.value.trim()=="" || pword.value.trim()=="")
    {
        alert("Blank Values not allowed!");
        return false;
    }
    else
    return true;
}


//correct solution:
function f1(){
    var name=document.getElementById("uname");
    var pword=document.getElementById("pass");
    if(name.value.trim()=="")
    {
        alert("Blank Values not allowed!");
        name.style.border="solid 3px red";
        document.getElementById("lbl").style.visibility="visible";
        return false;
    }
    else if(pword.value.trim()=="")
    {
        alert("Blank Values not allowed!");
        return false;

    }
    else if(pword.value.trim().length=="")
    {
        alert("Length below 5 characters not allowed!");
        return false;

    }
    else
    return true;
}