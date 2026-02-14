/**
 * ระบบจัดการคลังสินค้า (Warehouse Management System)
 * 1. เติมของเพิ่มทุกชิ้น
 * 2. คัดกรองสินค้าที่สต็อกต่ำ
 * 3. รายงานผล
 */

// 1. ข้อมูลสินค้าในสต็อกเริ่มต้น
let inventory = [
    { id: 1, name: "Pen", stock: 5 },
    { id: 2, name: "Paper", stock: 50 },
    { id: 3, name: "Eraser", stock: 2 }
];

console.log("--- เริ่มต้นจัดการคลังสินค้า ---");
console.log("สต็อกเดิม:", inventory);

/**
 * 2. เติมของ (Restock)
 * ใช้ .map() เพื่อสร้าง Array ใหม่ที่มีการเพิ่มค่า stock ขึ้น 10 หน่วยในทุกรายการ
 */
const restockedInventory = inventory.map(item => ({
    ...item,
    stock: item.stock + 10
}));

console.log("\n--- หลังการเติมของ (+10 ทุกรายการ) ---");
console.log(restockedInventory);

/**
 * 3. เช็คของขาด (Check Low)
 * ใช้ .filter() เพื่อหาสินค้าที่มี stock น้อยกว่า 20 หน่วย
 */
const lowStockItems = restockedInventory.filter(item => item.stock < 20);

/**
 * 4. รายงาน (Report)
 * วนลูปแสดงชื่อสินค้าที่สต็อกต่ำ โดยใช้ Destructuring ดึงค่า name และ stock ออกมา
 */
console.log("\n--- รายงานสินค้าที่สต็อกต่ำ (ต่ำกว่า 20) ---");

if (lowStockItems.length > 0) {
    lowStockItems.forEach(item => {
        // ใช้ Destructuring ในการดึงค่าจาก Object
        const { name, stock } = item;
        console.log(`⚠️ สินค้า: ${name} | คงเหลือ: ${stock} หน่วย`);
    });
} else {
    console.log("✅ สินค้าทุกชิ้นมีสต็อกเพียงพอ");
}

/**
 * สรุปเทคนิคที่ใช้:
 * - .map() : ใช้สร้าง Array ใหม่โดยเปลี่ยนแปลงค่าข้างใน (เพิ่มสต็อก)
 * - .filter() : ใช้คัดกรองเฉพาะข้อมูลที่ตรงตามเงื่อนไข (สต็อกต่ำกว่า 20)
 * - Destructuring : ช่วยให้ดึงค่าจาก Object มาใช้งานได้สั้นลง ไม่ต้องพิมพ์ item.name หรือ item.stock
 */