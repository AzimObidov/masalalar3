// 1
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = document.getElementById('div');

// if ( a < 0){
//     b.textContent = a + 0
// }
// else{
//     b.textContent = a + 1
// }
// });


// 2
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = document.getElementById('div');

// if ( a < 0){
//     b.textContent = a - 2
// }
// else{
//     b.textContent = a + 1
// }
// });


// 3
// document.getElementById('javob').addEventListener('click',() => {
// const a = parseFloat(document.getElementById('number1').value)
// const b = document.getElementById('div')


// if (a > 0){
//     b.textContent = a + 1
// }
// else if (a === 0)(
//     b.textContent = a + 10
// )
// else{
//     b.textContent = a - 2
// }
// })


// 4 !!!
// document.getElementById('javob').addEventListener('click',() => {
//     const a = prompt('qiymatlarni kiriting')
//     const b = prompt('qiymatlarni kiriting')
//     const c = prompt('qiymatlarni kiriting')
//     const d = document.getElementById('div')

// if (c > 0 && a > 0 && b > 0){
//     d.textContent = '3ta:',a , b , c
// }
// else if (a < 0 ){
//     d.textContent = '1ta: ',a
// }else if (b < 0 ){
//     d.textContent = '1ta: ',b
// }else if (c < 0 ){
//     d.textContent = '1ta: ',c
// }else if ( b < 0 &&c < 0){
//     d.textContent = '2ta: ',a
// }else if ( a < 0 &&c < 0){
//     d.textContent = '2ta: ',b
// }else if ( a < 0 &&b < 0){
//     d.textContent = '2ta: ',c
// }
// else {
//     d.textContent = '0 ta'
// }
// })


// 5 !!!
// document.getElementById('javob').addEventListener('click',() => {
//     const a = prompt('qiymatlarni kiriting')
//     const b = prompt('qiymatlarni kiriting')
//     const c = prompt('qiymatlarni kiriting')
//     const d = document.getElementById('div')

// if (c > 0 && a > 0 && b > 0){
//     d.textContent = '3ta:',a , b , c
// }
// else if (a < 0 ){
//     d.textContent = '1ta va 2ta: ',a
// }else if (b < 0 ){
//     d.textContent = '1ta va 2ta: ',b
// }else if (c < 0 ){
//     d.textContent = '1ta va 2ta: ',c
// }else if ( b < 0 &&c < 0){
//     d.textContent = '2ta va 1ta: ',a
// }else if ( a < 0 &&c < 0){
//     d.textContent = '2ta va 1ta: ',b
// }else if ( a < 0 &&b < 0){
//     d.textContent = '2ta va 1ta: ',c
// }
// else {
//     d.textContent = '0 ta va 3 ta'
// }
// })


// 6
// document.getElementById('javob').addEventListener('click', () => {
//     let a = parseFloat(document.getElementById('number1').value)
//     let b = parseFloat(document.getElementById('number2').value)
//     let c = document.getElementById('div')

//     if (a > b){
//         c.textContent = 'a katta'
//     }
//     else if (a === b){
//         c.textContent = 'ular teng'
//     }
//     else{
//         c.textContent = 'b katta'
//     }
    
// })


// // 7
// document.getElementById('javob').addEventListener('click', () => {
//     let a = parseFloat(document.getElementById('number1').value)
//     let b = parseFloat(document.getElementById('number2').value)
//     let c = document.getElementById('div')

//     if (a > b){
//         c.textContent = 'b kichik'
//     }
//     else if (a === b){
//         c.textContent = 'ular teng'
//     }
//     else{
//         c.textContent = 'a kichik'
//     }
// })


// 8
// document.getElementById('javob').addEventListener('click', () => {
//     let a = parseFloat(document.getElementById('number1').value)
//     let b = parseFloat(document.getElementById('number2').value)
//     let c = document.getElementById('div')

//     if (a > b){
//         c.textContent = 'b kichik va a katta'
//     }
//     else if (a === b){
//         c.textContent = 'ular teng'
//     }
//     else{
//         c.textContent = 'a kichik va b katta'
//     }
// })


// 9
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value)
//     const b = parseFloat(document.getElementById('number2').value)
//     const c = document.getElementById('div')
//     if(a < b){
//         const a = parseFloat(document.getElementById('number2').value)
//         c.textContent = a
//     }
//     else{
//         c.textContent = a
//     }
// })


// 10
// document.getElementById('javob').addEventListener('click', () => {
//     let a = parseFloat(document.getElementById('number1').value)
//     let b = parseFloat(document.getElementById('number2').value)
//     let c = document.getElementById('div')

//     if ( a > b){
//         c.textContent = a + b
//     }
//     else if (a === b){
//         c.textContent = '0'
//     }
//     else{
//         c.textContent = a + b
//     }
// })


// 11
// document.getElementById('javob').addEventListener('click', () => {
//     let a = parseFloat(document.getElementById('number1').value)
//     let b = parseFloat(document.getElementById('number2').value)
//     let c = document.getElementById('div')

//     if ( a > b){
//         c.textContent = a
//     }
//     else if (a === b){
//         c.textContent = '0'
//     }
//     else{
//         c.textContent = b
//     }
// })


// 12
// document.getElementById('javob').addEventListener('click', () => {
// let a = parseFloat(document.getElementById('number1').value)
// let b = parseFloat(document.getElementById('number2').value)
// let c = parseFloat(document.getElementById('number3').value)
// let d = document.getElementById('div')

// if (a < b && a < c) {
//     d.textContent = a + '  a kichik';
// } else if (b < a && b < c) {
//     d.textContent = b + '   b kichik';
// } else if (c < a && c < b) {
//     d.textContent = c + '   c kichik';
// } else {
//     d.textContent = ' ';
// }

// })


// 13
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = parseFloat(document.getElementById('number3').value);
//     const d = document.getElementById('div');

//     if (a < b && b < c) {
//         const p = c - b;
//         const q = b - a;
//         const w = c - a;
//         d.textContent = 'b va c orasi = ' + p + '      a va b orasi = ' + q + '     a va c orasi = ' + w;
//     } else if (a === b && b === c) {
//         d.textContent = 'bular teng';
//     } else if (a > b && b > c) {

//     }
//     else if ( a < b && b > c){
//         const q = b - a
//         const w = b - c
//         d.textContent = 'b va a orasi ='+ q + 'b va c orasi =' + w
//     } else {
//         const p = a - b;
//         const q = b - c;
//         const w = a - c;
//         d.textContent = 'a va b orasi = ' + p + '      b va c orasi = ' + q + '     a va c orasi = ' + w;
//     }
// });


// 14
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').Value)
//     const b = parseFloat(document.getElementById('number2').Value)
//     const c = parseFloat(document.getElementById('number3').Value)
//     const d = document.getElementById('div')

//     if (a > b && a > c){
//         d.textContent = a + 'a eng kattasi '
//         d.textContent = c + 'c eng kichigi '
//     }else if(a > b && c > b){
//         d.textContent = a + 'a eng kattasi '
//         d.textContent = b + 'b eng kichigi '
//     }else if(a < b && c < b){
//         d.textContent = b + 'b eng kattasi '
//         d.textContent = a + 'a eng kichigi '
//     }else{
//         d.textContent = 'xato'
//     }

// })


// 15 !!!!
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = parseFloat(document.getElementById('number3').value);
//     const d = document.getElementById('div');

//     if (a > c && b > c) {
//         const q = a + b + c;
//         d.textContent = 'Yig‘indisi = ' + q + '; katta ikkita sonlar: ' + a + ' va ' + b;
//     }else if(b > a && b > c) {
//         const q = a + b + c;
//         d.textContent = 'Yig‘indisi = ' + q + '; katta ikkita sonlar: ' + a + ' va ' + b;
//     }
// })


// 16
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = parseFloat(document.getElementById('number3').value);
//     const d = document.getElementById('div');

//     if (c > b && b > a) {
//         const q = (a + b + c) * 2
//         d.textContent = q + '    =sonlar osish tartibida'
//     }else{ 
//         d.textContent = 'a qiymat ='+ -a + 'b qiymat ='+ -b + 'c qiymat ='+ -c;
//     }
// })


// 17
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = parseFloat(document.getElementById('number3').value);
//     const d = document.getElementById('div');

//     if (c > b && b > a) {
//         const q = (a + b + c) * 2
//         d.textContent = q + '    =sonlar osish tartibida'
//     }else if (c < b && b < a){
//         const q = (a + b + c) * 2
//         d.textContent = q + '    =sonlar osish tartibida'
//     }
// else{ 
//         d.textContent = 'a qiymat ='+ -a + 'b qiymat ='+ -b + 'c qiymat ='+ -c;
//     }
// })


// 18
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = parseFloat(document.getElementById('number3').value);
//     const d = document.getElementById('div');

//     if(a === b && b !== c){
//         d.textContent = c + ' = alohida son'
//     }else if (a === c && c !== b){
//         d.textContent = b + ' = alohida son'
//     }
//     else if (c === b && b !== a){
//         d.textContent = a + ' = alohida son'
//     }
//     else if ( a === b && b === c){
//         d.textContent = 'ular teng'
//     }
//     })


// 19
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = parseFloat(document.getElementById('number3').value);
//     const e = prompt('e ni kiriting');
    
//     const d = document.getElementById('div');

//     if(a === b && b === c && c !== e){
//         d.textContent = e + ' = alohida son'
//     }else if (a === c && c === e && e !== b ){
//         d.textContent = b + ' = alohida son'
//     }
//     else if (c === b && b === e && e !== a){
//         d.textContent = a + ' = alohida son'
//     }    else if (a === b && b === e && c !== a){
//         d.textContent = c + ' = alohida son'
//     }
//     else if ( a === b && b === c && c === e){
//         d.textContent = 'ular teng'
//     }
//     else if (a !== b && b !== c && c !== e && e !== a)
//         d.textContent = 'ular teng emas'
//     })


// 25-29!!!!











// 1
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = 1
//     const c = 2
//     const d = 3
//     const e = 4
//     const f = 5
//     const g = 6
//     const h = 7

//     const p = document.getElementById('div');
//     if(a === b){
//         p.textContent = 'dushanba'
//     }else if ( a === c){
//         p.textContent = 'seshanba'
//     }else if (a === d){
//         p.textContent = 'chorshanba'
//     }else if (a === e){
//         p.textContent = 'payshanba'
//     }else if (a === f){
//         p.textContent = 'juma'
//     }else if (a === g){
//         p.textContent = 'shanba'
//     }else if ( a === h){
//         p.textContent = 'yakshanba'
//     }else{
//         p.textContent = 'bunday kun mavjud emas'
//     }


//     })


// 2
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = 1
//     const c = 2
//     const d = 3
//     const e = 4
//     const f = 5

//     const p = document.getElementById('div');
//     if(a === b){
//         p.textContent = 'yomon baho'
//     }else if ( a === c){
//         p.textContent = 'qoniqarsi baho'
//     }else if (a === d){
//         p.textContent = 'qoniqarli baho'
//     }else if (a === e){
//         p.textContent = 'yaxshi baho'
//     }else if (a === f){
//         p.textContent = 'alo baho'
//     }else{
//         p.textContent = 'bunday baho mavjud emas'
//     }


//     })


// 3
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = 1
//     const c = 2
//     const d = 3
//     const e = 4
//     const f = 5
//     const g = 6
//     const h = 7
//     const i = 8
//     const j = 9
//     const k = 10
//     const l = 11
//     const m = 12

//     const p = document.getElementById('div');
//     if(a === b || a === c || a === m){
//         p.textContent = 'qish'
//     }else if ( a === d ||  a === e || a === f){
//         p.textContent = 'bahor'
//     }else if (a === g || a === h || a === i){
//         p.textContent = 'yoz'
//     }else if (a === j || a === k || a === l){
//         p.textContent = 'kuz'
//     }else{
//         p.textContent = 'bunday oy va fasl mavjud emas'
//     }


//     })


// 4
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = 1
//     const c = 2
//     const d = 3
//     const e = 4.
//     const f = 5
//     const g = 6.
//     const h = 7
//     const i = 8
//     const j = 9.
//     const k = 10
//     const l = 11.
//     const m = 12

//     const p = document.getElementById('div');
//     if ( a === b || a === d || a === f || a === h || a === i || a === k || a === m ){
//         p.textContent = a + 'chi oyda 31 ta kun bor'
//     }else if ( a === c){
//         p.textContent = a + 'chi oyda 29 |4/1| 28 kun bor'
//     }else if (a === e || a === g || a === j || a === l){
//         p.textContent = a + 'chi oyda 30 kun bor'
//     }


//     })


// 5
// document.getElementById('div').textContent = ' 1 bosilsa qoshish amali  ,  2 bosilsa ayirish amali  ,  3 bosilsa boluv amali  ,  4 bosilsa kopaytuv amali . AMALLARNI D GA YOZING'
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const d = parseFloat(document.getElementById('number3').value);

//     const p = document.getElementById('div');

//     if(d === 1){
//         const q = a + b
//         p.textContent = q+ ' = a + b'
//     }else if(d === 2){
//         const w = a - b
//         p.textContent = w + ' = a - b'
//     }else if ( d === 3){
//         const t = a / b
//         p.textContent = t + ' = a / b'
//     }else if (d === 4){
//         const r = a * b
//         p.textContent = r + ' = a * b'
//     }else{
//         p.textContent = 'nomalum amal'
//     }


//     })


// 6
// document.getElementById('div').textContent = '1 = mm , 2 = sm , 3 = dsm , 4 = m , 5 = km . AMALLAR B GA YOZILADI . sizning soningiz amali = m'
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = 1
//     const d = 2
//     const e = 3
//     const f = 4
//     const h = 5

//     const p = document.getElementById('div');
//     if(b === c){
//         const y = a * 1000
//         p.textContent = y
//     }else if(b === d){
//         const y = a * 100
//         p.textContent = y
//     }else if(b === e){
//         const y = a * 10
//         p.textContent = y
//     }else if(b === f){
//         p.textContent = a
//     }else if(b === h){
//         const y = a / 1000
//         p.textContent = y
//     }


//     })


// 7
// document.getElementById('div').textContent = '1 = mlg , 2 = gr , 3 = kg , 4 = tn , 5 = stn . AMALLAR B GA YOZILADI . sizning soningiz amali = kg'
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const c = 1
//     const d = 2
//     const e = 3
//     const f = 4
//     const h = 5

//     const p = document.getElementById('div');
//     if(b === c){
//         const y = a * 10000
//         p.textContent = y
//     }else if(b === d){
//         const y = a * 1000
//         p.textContent = y
//     }else if(b === e){
//         const y = a * 1
//         p.textContent = y
//     }else if(b === f){
//         const y = a / 1000
//         p.textContent = y
//     }else if(b === h){
//         const y = a / 100000
//         p.textContent = y
//     }


//     })


// 9
// document.getElementById('div').textContent = 'KUN A GA YOZILADI . OY B GA YOZILADI . YIL D GA YOZILADI va ertangi kun chiqadi!'
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);
//     const b = parseFloat(document.getElementById('number2').value);
//     const d = parseFloat(document.getElementById('number3').value);

//     const p = document.getElementById('div');
//     const y = a + 1
//     p.textContent = y + '  =  kun' + b + '  =  oy' + d + '  =  yil'

//     })


// 10
// document.getElementById('div').textContent = '1=chapga   ,   2=onga  '
// document.getElementById('javob').addEventListener('click', () => {
//     const a = parseFloat(document.getElementById('number1').value);

//     const p = document.getElementById('div');
// if (a === 1){
//     p.textContent = 'robot garbda'
// }else if (a === 2){
//     p.textContent = 'robot sharqda'
// }

// })