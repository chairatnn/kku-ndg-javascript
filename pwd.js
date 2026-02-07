/**
 * ระบบ Password Masker & Security Checker
 * ตรวจสอบความปลอดภัยและเซ็นเซอร์รหัสผ่านก่อนบันทึกลง Log
 */

// 1. ข้อมูลที่มี (Data Input)
let password = "SuperSecretPassword123";

// 2. ขั้นตอนตรวจสอบความปลอดภัย (Step 1: Security Check)
// เงื่อนไข: ยาวอย่างน้อย 8 ตัว และไม่มีคำต้องห้าม
let isLongEnough = password.length >= 8;
let hasForbiddenWords = password.includes("password") || password.includes("1234");

if (!isLongEnough) {
    // Step 2: ถ้าไม่ผ่าน (ยาวไม่พอ)
    console.log("Error: รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร");
} else if (hasForbiddenWords) {
    // Step 2: ถ้าไม่ผ่าน (มีคำไม่ปลอดภัย)
    console.log("Error: รหัสผ่านไม่ปลอดภัย (ห้ามมีคำว่า 'password' หรือ '1234')");
} else {
    // Step 3: ถ้าผ่านเงื่อนไข ให้เริ่มกระบวนการ Masking
    let masked = ""; // เริ่มต้นด้วยค่าว่าง

    // Step 4: ใช้ for loop วนตามจำนวนตัวอักษรของรหัสผ่าน (.length)
    for (let i = 0; i < password.length; i++) {
        // ในแต่ละรอบ ให้เติมดอกจัน (*) ใส่ตัวแปร masked
        masked += "*";
    }

    // Step 5: แสดงผลลัพธ์
    console.log(`Password accepted: ${masked}`);
    console.log(`(ระบบบันทึกรหัสผ่านจำนวน ${password.length} หลักเรียบร้อยแล้ว)`);
}

/**
 * สรุปเทคนิคที่ใช้:
 * - .length: ใช้นับจำนวนตัวอักษรทั้งใน if และ for loop
 * - .includes(): ใช้ค้นหาคำที่ไม่ต้องการ (Case Sensitive)
 * - for loop: ใช้สร้างข้อความใหม่ที่มีจำนวนรอบเท่ากับต้นฉบับ
 * - Logical Operators: ใช้ || (หรือ) เพื่อเช็คคำต้องห้ามหลายคำพร้อมกัน
 */