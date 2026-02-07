// ไม่ต้องมี tag <script> แล้ว
console.log("นี่คือ Javascript ที่เขียนอยู่ในไฟล์ js");

console.log("Hello Console");
console.log(10 + 20); // ผลลัพธ์ 30 จะไปโผล่ใน Console

let score1 = 0;
score1 = 10; // เปลี่ยนค่าได้ ไม่ Error
console.log(score1); // 10

const pi = 3.14;
// pi = 5; // เกิด Error เพราะไม่อนุญาตให้เปลี่ยนค่า

let x = 2;
let y = 3;
console.log(x ** y);

let price = 350;
let cash = 500;
let change = cash - price;
console.log(change); // 150

let side = 4;
// วิธีที่ 1
let area = side * side;
// วิธีที่ 2 (เท่กว่า)
let area2 = side ** 2;
console.log(area); // 16

let num = 15;
let result = num % 2;
console.log(result);
// ได้ 1 แปลว่าเหลือเศษ (เลขคี่)
// ถ้าได้ 0 แปลว่าลงตัว (เลขคู่)


let score2 = 75;
if (score2 >= 80) {
  console.log("Grade A"); // 1. ถ้าเงื่อนไขแรกจริง ทำอันนี้ จบเลย
} else if (score2 >= 70) {
  console.log("Grade B"); // 2. ถ้าอันแรกไม่จริง มาเช็คอันนี้ต่อ
} else {
  console.log("Fail"); // 3. ถ้าไม่เข้าเงื่อนไขไหนเลย ทำอันนี้
}

// Ternary Operator แบบเต็ม (โค้ดยาว)
let age1 = 20;
let type1;
if (age1 >= 18) {
  type1 = "Adult";
} else {
  type1 = "Kid";
}

// Ternary Operator แบบโค้ดสั้น
let age2 = 20;
// อ่านว่า: อายุ >= 18 ใช่ไหม? ถ้าใช่เอา Adult ถ้าไม่เอา Kid
let type2 = age2 >= 18 ? "Adult" : "Kid";


// For Loop (วนแบบรู้รอบ)
for (let i = 1; i < 3; i++) {
    console.log("รอบที่ " + i);
}

// While Loop (วนจนกว่าจะ..)
let energy = 10;

while (energy > 0) { // ตราบใดที่พลังยังมากกว่า 0 ให้รันโค้ดที่อยู่ในขอบเขตของวงเล็บปีกกา
    console.log("วิ่งอยู่.. พลังเหลือ " + energy);
    energy = energy - 4; // ลดพลังลงเรื่อย ๆ (สำคัญมาก! ถ้าไม่ลดค่าจะวนซ้ำแบบไม่รู้จบ)
}
console.log("พลังหมด หยุดวิ่ง!");


// Template Literals
let name = "Somchai";
let score = 80;
// 1. แทรกตัวแปร (Interpolation)
console.log(`User: ${name} Score: ${score}`);
// 2. ขึ้นบรรทัดใหม่ (Multi-line String)
// แค่กด Enter ใน Backticks ได้เลย
let menu = `รายการอาหาร:
- กะเพรา
- ไข่ดาว
- น้ำเปล่า`;
console.log(menu);