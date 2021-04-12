XLSX = require('xlsx');



var ws_name = "Sheet1";
 
/* make worksheet */
var ws_data = [
  [ "name", "age", "school", "address", "tel" ],
  [  '张三' ,  22 ,  '湖北工业大学' ,  '深圳' ,  '' ]
];
var ws = XLSX.utils.aoa_to_sheet(ws_data);
 
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, ws_name);



XLSX.writeFile(wb, 'out.xlsx');