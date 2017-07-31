var name = prompt('What is your name?');
var birthYear = prompt('What is your birth year?');


function calculateAge(birthYear){
    var now = 2017;
    age = now - birthYear;
    return age;
}

var age = calculateAge(birthYear);

function printToConsole(age, name){
    console.log (name + ', your age is ' + age);
}

printToConsole(age, name);