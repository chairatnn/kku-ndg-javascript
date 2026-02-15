let todoList = ["นอน", "กินข้าว", "อ่านหนังสือ", "ซื้อของใช้"];

// 1. เข้าถึงข้อมูล (Access)
console.log(todoList[0]); // "นอน"

// 2. เพิ่มงาน (Push) -> ต่อท้ายแถว
todoList.push("เขียนโค้ด"); 
// ผล: ["นอน", "กินข้าว", "อ่านหนังสือ", "ซื้อของใช้", "เขียนโค้ด"]

// 3. ลบงานล่าสุด (Pop) -> เอาตัวท้ายออก
let doneJob = todoList.pop(); 
console.log(doneJob); // "เขียนโค้ด" (ตัวที่ถูกลบ)

// 4. เช็คจำนวน
console.log(todoList.length); // 4


let prices = [100, 200, 300];
// วนลูปแสดงราคา
prices.forEach((p) => {
    console.log(`ราคา: ${p} บาท`);
});

let prices2 = [100, 200, 300];
// สร้าง Array ใหม่ ที่ลดราคา 50%
let salePrices = prices2.map(p => p * 0.5);
console.log(salePrices); // [50, 100, 150]

let scores = [45, 80, 60, 30, 90];
// เอาเฉพาะคนที่สอบผ่าน (>= 50)
let passed = scores.filter(s => s >= 50);
console.log(passed); // [80, 60, 90]

let users = ["Ant", "Bird", "Cat", "Boy"];
// หาชื่อที่ขึ้นต้นด้วย B
let result = users.find(u => u.startsWith("B"));
console.log(result); // "Bird"
// หาชื่อที่ขึ้นต้นด้วย B ทั้งหมด
let result2 = users.filter(u => u.startsWith("B"));
console.log(result2); // [ 'Bird', 'Boy' ]


let label = [1500, 500, 3000, 800, 200];
// เอาเฉพาะราคาที่ถูกกว่า (< 1000)
let cheap = label.filter(l => l < 1000);
console.log(cheap);

let exchange = cheap.map(e => e / 35);
console.log(exchange);

exchange.forEach((e) => {
    console.log(`ราคา: ${e.toFixed(2)} usd`);
});