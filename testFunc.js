function sayHello(name) {
  return "Hello " + name;
}
// เรียกใช้งาน (Call)
let msg = sayHello("Somchai");
console.log(msg); // "Hello Somchai"

// แบบคืนค่า (Return)
function add(a, b) {
  return a + b; // ส่งเลขผลรวมกลับไป
}
let sum = add(10, 5); // sum มีค่า 15
console.log(sum * 2); // เอาไปคูณต่อได้ (ได้ 30)

// แบบไม่คืนค่า (Void)
function notify(msg) {
  // alert("แจ้งเตือน: " + msg);
  // ไม่มี return
}
let result = notify("ระวัง!"); // result เป็น undefined
// เอาไปคำนวณต่อไม่ได้

// Arrow Functions (ES6)
//  แบบเต็ม (Full Syntax)
const calcTax = (price) => {
  let tax = price * 0.07;
  let total = price + tax;
  return total; // ต้องเขียน return เอง
};

// แบบย่อ (Shorthand) เจอบ่อย
// รับ price คืนค่า price * 1.07 ทันที
const calcTax2 = (price) => price * 1.07;
console.log(calcTax2(100)); // 107

// การใส่วงเล็บ () Parameter 1 ตัว ไม่ต้องใส่วงเล็บก็ได้! (นิยมมาก)
const double = n => n * 2;
// 0 หรือตั้งแต่ 2 ตัวขึ้นไป ต้องใส่วงเล็บเสมอ
// ไม่มี Param
const sayHi = () => console.log("Hi");
// หลาย Params
const add2 = (a, b) => a + b;

// แปลง Fahrenheit to Celsius
const toFahrenheit = (c) => c * 1.8 + 32;
console.log(toFahrenheit(30)); 

// เช็คคะแนนผ่าน
const checkPass = (p) => p >=50 ;
console.log(checkPass(49)); 