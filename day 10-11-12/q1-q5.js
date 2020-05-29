//q3
function reverseColor(){
    document.getElementById("q3").style.color = "blue";
    document.getElementById("q3").style.backgroundColor = "white";
}

function changeFont(){
    var fsize = document.getElementById("fontSize").value;
   // document.getElementById("q5").style.color = fsize ; //code works if you want to change color of the text.
    document.getElementById("q5").style.fontSize = fsize+"em" ;
}
