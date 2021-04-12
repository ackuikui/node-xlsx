var XLSX = require('xlsx')


var wb = XLSX.readFile("file.xlsx");



var sheet1 = wb.Sheets['Sheet1'];

console.log(sheet1['A1'].v);
console.log(sheet1['A2'].v);
console.log(sheet1['B1'].v);
console.log(sheet1['B2'].v);