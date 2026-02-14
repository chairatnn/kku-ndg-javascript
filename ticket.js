/**
 * ระบบคำนวณราคาตั๋วหน้าทางเข้าสวนสนุก
 * ตามเงื่อนไข: ส่วนสูง และ คูปองส่วนลด
 */

// 1. กำหนดตัวแปร (Requirements)
let height = 150;        // ส่วนสูง (ซม.) - ลองเปลี่ยนตัวเลขเพื่อทดสอบ
let hasCoupon = false;    // มีคูปองไหม (true = มี, false = ไม่มี)
let price = 0;           // ตัวแปรเก็บราคาเริ่มต้น

// 2. เขียน Logic เพื่อคำนวณราคา (Logic Conditions)
if (height <= 100) {
    // สูงไม่เกิน 100 ซม. -> เข้าฟรี
    price = 0;
} else if (height <= 140) {
    // สูง 101 - 140 ซม. -> บัตรเด็ก
    price = 100;
} else {
    // สูงเกิน 140 ซม. -> บัตรผู้ใหญ่
    price = 200;
    
    // โปรลับ (VIP): ถ้าเป็นผู้ใหญ่ และ มีคูปองส่วนลด ลด 50%
    if (hasCoupon === true) {
        price = price * 0.5; // ลดเหลือ 100 บาท
    }
}

// 3. แสดงผลลัพธ์ผ่าน console.log
 // console.log(`ส่วนสูง ${height} ซม. / มีคูปอง: ${hasCoupon} -> ราคาค่าเข้า: ${price} บาท`);

        // 3. รวมข้อความผลลัพธ์
        const resultText = `ส่วนสูง ${height} ซม. / มีคูปอง: ${hasCoupon} -> ราคาค่าเข้า: ${price} บาท`;

        // 4. แสดงผลลัพธ์ผ่าน console.log (ตามเดิม)
        console.log(resultText);

        // 5. แสดงผลลัพธ์ที่หน้าจอ (เพิ่มเติม)
        // เข้าถึง Element ด้วย ID แล้วเปลี่ยนข้อความภายใน
        document.getElementById("screen-output").textContent = resultText;

/**
 * สรุปตรรกะที่ใช้:
 * - ใช้ if...else if สำหรับแบ่งช่วงส่วนสูง
 * - ใช้ Nested If (if ซ้อนด้านใน) เพื่อเช็คเงื่อนไขคูปองเฉพาะกลุ่มผู้ใหญ่
 * - ใช้ Template Literals (Backticks) ในการแสดงผลข้อความผสมตัวแปร
 */