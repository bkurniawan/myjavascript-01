var ages = [1970, 2000, 1980, 1989, 2012];
var data = [];

function generation(yearOfBirth) {
    if (yearOfBirth > 1965 && yearOfBirth <= 1984) {
        generationLabel = 'Gen X';
        return generationLabel;
    } else if (yearOfBirth > 1984 && yearOfBirth <= 2000) {
        return 'Gen Y';
    } else if (yearOfBirth > 2000 && yearOfBirth <= 2017) {
        return 'Gen Z';
    }
}

for (var i = 0; i < ages.length; i++){
    data[i] = generation(ages[i]);
}

//generation = (generation(2000));
console.log(data);