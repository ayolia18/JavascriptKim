const entrepreneurs = [   { first: 'Steve', last: 'Jobs', year: 1955 },   { first: 'Oprah', last: 'Winfrey', year: 1954 },   { first: 'Bill', last: 'Gates', year: 1955 },   { first: 'Sheryl', last: 'Sandberg', year: 1969 },   { first: 'Mark', last: 'Zuckerberg', year: 1984 },   { first: 'Beyonce', last: 'Knowles', year: 1981 },   { first: 'Jeff', last: 'Bezos', year: 1964 },   { first: 'Diane', last: 'Hendricks', year: 1947 },   { first: 'Elon', last: 'Musk', year: 1971 },   { first: 'Marissa', last: 'Mayer', year: 1975 },   { first: 'Walt', last: 'Disney', year: 1901 },   { first: 'Larry', last: 'Page', year: 1973 },   { first: 'Jack', last: 'Dorsey', year: 1976 },   { first: 'Evan', last: 'Spiegel', year: 1990 },   { first: 'Brian', last: 'Chesky', year: 1981 },   { first: 'Travis', last: 'Kalanick', year: 1976 },   { first: 'Marc', last: 'Andreessen', year: 1971 },   { first: 'Peter', last: 'Thiel', year: 1967 } ];
const entrepreneurIn70 = []
var entrepreneurRemoveYear = []
var ageEntrepreneurs = []
var lastNameEntrepreneurs = []


entrepreneurs.forEach(function(entrepreneur) {
    if(entrepreneur.year > 1970 && entrepreneur.year < 1980){
        entrepreneurIn70.push(entrepreneur)
    }

    entrepreneurRemoveYear.push([entrepreneur.first+' '+entrepreneur.last])

    ageEntrepreneurs.push(entrepreneur.first+' '+entrepreneur.last+ " aurait " + (2019-entrepreneur.year)+" ans ")

    lastNameEntrepreneurs.push(entrepreneur.last)
});


console.log('entrepreneurs qui sont nes dans les annees 70: ')
console.log(entrepreneurIn70)
console.log('une array qui contient le prénom et le nom des entrepreneurs ')
console.log(entrepreneurRemoveYear)
console.log('Quel âge aurait chaque inventeur aujourd\'hui ? ')
console.log(ageEntrepreneurs)
console.log('tTrie les entrepreneurs par ordre alphabétique du nom de famille')
console.log(lastNameEntrepreneurs.sort())