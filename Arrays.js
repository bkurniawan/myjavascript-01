var apostles = ['john', 'mark','paul', 'peter'];
console.log(apostles);

var books = new Array('genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy');
console.log (books[3]);

books.push('joshua');
console.log ('push - ' + books);

books.unshift('old testament');
console.log ('unshift - ' + books);

books.pop();
console.log ('pop - ' + books);

books.shift();
console.log ('shift - ' + books);
