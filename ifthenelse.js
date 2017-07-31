var name = 'John';
var age = 25;
var isMarried = false;

if (age > 30 && !isMarried) {
    console.log(name + ' ' + 'should get married');
} else {
    console.log(name + ' ' + 'is to young to get married');
}

// with '==', java script will do data type coersion.
// with '===', java script will NOT do data type coersion.