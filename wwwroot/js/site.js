
//ändrar färg på h1 rubrik efter tid och ger olika hälsningar beroende på tid.
const hour = new Date().getHours(); 
let greeting;

if (hour < 11) {
    greeting = "God morgon!";
    var heading = document.getElementsByTagName("h1")[0];
    heading.style.color = "rgb(21, 85, 49)";
} else if (hour < 17) {
    greeting = "Ha en travlig dag!";
    var heading = document.getElementsByTagName("h1")[0];
    heading.style.color = "rgb(153, 60, 50)";
} else  {
    greeting = "Ha en trevlig kväll!";
    var heading = document.getElementsByTagName("h1")[0];
    heading.style.color = "black";
}

document.getElementById("js").innerHTML = "<h3>" + greeting + "</h3>";

