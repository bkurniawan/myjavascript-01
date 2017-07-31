var john = {name: 'john',
            lastName:'smith', 
            yearOfBirth:1990,
           family:['mark','paul','matthew'],
           calculateAge: function(){
                return 2017 - this.yearOfBirth;   
            }
           };

console.log(john);
console.log(john.family);
console.log(john.family[2]);

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);


var john2 = {name: 'john2',
            lastName:'smith', 
            yearOfBirth:1990,
           family:['mark','paul','matthew'],
           calculateAge: function(){
                this.age = 2017 - this.yearOfBirth;   
            }
           };

//john2.calculateAge();
console.log(john2);