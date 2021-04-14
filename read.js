var XLSX = require('xlsx')

XLSXStyle = require('xlsx-style');

var wb = XLSXStyle.readFile("template.xlsx");



var sheet1 = wb.Sheets['Sheet1'];

console.log(sheet1);


