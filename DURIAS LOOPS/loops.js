// using while loop
var even = 2;
while (even <= 60) {
    document.getElementById("even").innerHTML = document.getElementById("even").innerHTML + " " + even;
    even = even + 2;
}



// using do while loop
var odd = 3;
do {
    document.getElementById("odd").innerHTML = document.getElementById("odd").innerHTML + " " + odd;
    odd = odd + 3;
} 
while (odd <= 60);



// using for loop
for (var evenodd = 5; evenodd <= 50; evenodd = evenodd + 5){
    document.getElementById("evenodd").innerHTML = document.getElementById("evenodd").innerHTML + " " + evenodd;
}

