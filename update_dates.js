//for my art experience start
const startYearArt = 2015;
//daily draw start date
const DDstart = new Date('2024-04-20');
//AF experience start
const startYearAirForce = 2016;
//current date object should be updated everytime html reloads?
const today = new Date();
//curr year for simple year calculations
const currentYear = today.getFullYear();

//getting difference between today and my dd start will yield milliseconds so we need to account for that
const DDpassed = Math.floor((today - DDstart) / (1000 * 60 * 60 * 24))
const yearsArt = currentYear - startYearArt;
const yearsAF = currentYear - startYearAirForce;

//set all text contents needing updates
document.getElementById('years-art').textContent = yearsArt;
document.getElementById('DD-count').textContent = DDpassed;
document.getElementById('years-AF').textContent = yearsAF;