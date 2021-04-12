const fs = require('fs');
const readline = require('readline');




const todayDate = new Date()
function getMM(d) {
    return d >= 10 ? d : '0' + d
}

const today = todayDate.getFullYear() + '-' + getMM(todayDate.getMonth() + 1) + '-' + getMM(todayDate.getDate())


const result = []
result.push(["日期", "姓名", "详细"])



// 读取目录的内容
const files = fs.readdirSync('./');

files.forEach(async (v,i) => {
    if (v.endsWith('.txt')) {
        // var s = fs.readFileSync(v, 'utf8')
        console.log(v);
        const rl = readline.createInterface({
            input: fs.createReadStream(v),
            crlfDelay: Infinity
        });

        for await (const line of rl) {
        // rl.on('line', (line) => {
            // var linedemo = '[2021-01-12] [张三] 1.demo, 2.666'
            var lineArr = line.match(/\[(\d{4}-\d{2}-\d{2})\]\s(\[[^\]]*\])\s(.*)/)

            var date = lineArr[1]
            var name = lineArr[2]
            var txt = lineArr[3]
            if (date == today) {
                result.push([date, name, txt])
                rl.close()
                rl.removeAllListeners()
            }
            console.log(222);
        };
        console.log(i);
        if(i == files.length-1) {
            console.log(result);
        }
    }
})



