XLSX = require('xlsx');
XLSXStyle = require('xlsx-style');



var ws_name = "Sheet1";

/* make worksheet */
var ws_data = [
    ["name", "age", "school", "address", "tel"],
    ['张三', 22, '湖北工业大学', '深圳', '']
];
var ws = XLSX.utils.aoa_to_sheet(ws_data);

setHeaderStyle(ws, ['B1', 'C1', 'D1', 'E1'])

setBorder(ws)

ws['!ref'] = 'A1:E16',
ws['!cols'] = [{ wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 40 }];

var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, ws_name);



XLSXStyle.writeFile(wb, 'out.xlsx');

function setHeaderStyle(ws, cell) {
    cell.forEach(e => {
        ws[e].s = {
            // theme: 1 ~ 11 1黑 2灰 3深蓝 4浅蓝 5橘黄 6浅绿 7浅紫 8淡蓝 9黄色 10深蓝 11紫红
            // tint: -1 ~ 1，-1黑色覆盖, 0原色, 1白色覆盖
            fill: { patternType: 'solid', fgColor: { theme: 6, tint: 0 } },
        }
    });
}

function setBorder(ws, range) {
    // range = range || {s:{c:'B', r:1}, e:{c:'E', r:15}}
    var col = ['B', 'C', 'D', 'E']
    var row = 16

    var BORDER_STYLE = 'thin'
    var COLOR_SPEC = 'rgb: "FFFFAA00"'
    border = {
        top: { style: BORDER_STYLE, color: COLOR_SPEC },
        bottom: { style: BORDER_STYLE, color: COLOR_SPEC },
        left: { style: BORDER_STYLE, color: COLOR_SPEC },
        right: { style: BORDER_STYLE, color: COLOR_SPEC }
    }

    for (let i = 1; i <= row; i++) {
        col.forEach(c => {
            setCellBorder(ws, c + i, border)
        })
    }

}

function setCellBorder(ws, cell, border) {
    if (!ws[cell]) {
        ws[cell] = {v: ''}
    }
    if (!ws[cell].s) {
        ws[cell].s = {}
    }
    ws[cell].s.border = border
}