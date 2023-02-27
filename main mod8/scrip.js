inpname= prompt("Enter your name");{
    if (inpname != ""){
        document.getElementById("fname").innerHTML =  inpname;
    }
}

sex = confirm("Enter your biological gender, OK for M, cancel for F");{
    if (sex==true){
        document.getElementById("gender").innerHTML = "M";
    }
    else{
        document.getElementById("gender").innerHTML = "F";
    }
}

uname = prompt("Enter your preffered username");{
    if (uname != ""){
        document.getElementById("username").innerHTML = uname;
    }
}

desc = prompt("Enter your Desription of yourself");{
    if (desc != ""){
        document.getElementById("desc").innerHTML = desc;
    }
}

btyr = prompt("Enter your full birth year");{
    if (btyr != ""){
        document.getElementById("year").innerHTML = btyr;

        const d = new Date();
        let year = d.getFullYear();
        document.getElementById("age").innerHTML = year-btyr;
        //https://www.w3schools.com/jsref/jsref_getfullyear.asp#:~:text=getFullYear()%20returns%20the%20full,4%20digits)%20of%20a%20date.//
    }
}

pfp = prompt("Enter a link or file name of your desired profile picture");{
    if (pfp != ""){
        document.getElementById("ppic").src = pfp
    }
}