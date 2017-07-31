for (var i = 0;i < 10; i++){
//    console.log ('loops : ' + i);
}

var john = {name: 'John',
           name: 'Smith',
           siblings: ['Mary', 'Lois', 'Chester']};

for (var a = 0; a < john.siblings.length; a++){
    console.log(john.siblings[a]);
}


for (var b = john.siblings.length - 1; b >= 0; b--){
    console.log(john.siblings[b]);
}

var x = 0;
while (x < john.siblings.length){
    console.log('While ' + john.siblings[x]);
    x++;
}

var x = john.siblings.length - 1;
while (x >= 0){
    console.log('While 02 ' + john.siblings[x]);
    x--;
}