var $ = function (id){
    return document.getElementById(id);
}
function validateTxt() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var mark1 = document.getElementById("mark1").value;
    var mark2 = document.getElementById("mark2").value;
    var mark3 = document.getElementById("mark3").value;
    var error = false;

    if (firstName == "" ) {
        $("firstName_error").firstChild.nodeValue = "This field is required";
        error = true;
    }
    else {
        $("firstName_error").firstChild.nodeValue = "";
    }

    if (lastName == "" ) {
        $("lastName_error").firstChild.nodeValue = "This field is required";
        error = true;
    }
    else {
        $("lastName_error").firstChild.nodeValue = "";
    }

    if (mark1 == "" || mark1 <0 || mark1 > 100) {
        $("mark1_error").firstChild.nodeValue = "This field is invalid";
        error = true;
    }
    else {
        $("mark1_error").firstChild.nodeValue = "";
    }

    if (mark2 == "" || mark2 < 0 || mark2 > 100) {
        $("mark2_error").firstChild.nodeValue = "This field is invalid";
        error = true;
    }
    else {
        $("mark2_error").firstChild.nodeValue = "";
    }

    if (mark3 == "" || mark3 < 0 || mark3 > 100) {
        $("mark3_error").firstChild.nodeValue = "This field is invalid";
        error = false;
    }
    else {
        $("mark3_error").firstChild.nodeValue = "";
    }
}
function printResult() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var mark1 = parseInt(document.getElementById("mark1").value);
    var mark2 = parseInt(document.getElementById("mark2").value);
    var mark3 = parseInt(document.getElementById("mark3").value);

    average = ((mark1 + mark2 + mark3) / 3);
    if (average >= 90){
        document.getElementById("result").innerHTML = "First name:\n " + firstName + "\nLast Name:"+ lastName + "\nAverage: " + average.toFixed(2) + "\nAwesome";
    }
    else if (average >=80 && average <90){
        document.getElementById("result").innerHTML = "First name:\n " + firstName + "\nLast Name:"+ lastName + "\nAverage: " + average.toFixed(2) + "\nVery Good";
    }
    else if (average >=50 && average < 80){
        document.getElementById("result").innerHTML = "First name:\n " + firstName + "\nLast Name:"+ lastName + "\nAverage: " + average.toFixed(2) + "\nOk";
    }
    else if (average < 50){
        document.getElementById("result").innerHTML = "First name:\n " + firstName + "\nLast Name:"+ lastName + "\nAverage: " + average.toFixed(2) + "\nFail";
    }
}
