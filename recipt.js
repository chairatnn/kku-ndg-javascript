/**
 * ระบบออกใบเสร็จ (Receipt System)
 * หน้าที่: แปลงข้อมูลราคาสินค้า, รวมยอดเงิน และคำนวณภาษี
 */

let priceList = "100,250,50,500";

/**
 * 2. ฟังก์ชันคำนวณยอดรวม (calculateTotal)
 * รับค่าเป็น String, แยกค่าด้วย split, แปลงเป็นตัวเลข และหาผลรวม
 */
function calculateTotal(str) {
    // แยกข้อความด้วยเครื่องหมายลูกน้ำ จะได้ Array ของ String
    let items = str.split(",");
    let sum = 0;

    // วนลูปเพื่อแปลงค่าและรวมยอด
    for (let i = 0; i < items.length; i++) {
        // ใช้ Number() แปลง String เป็นตัวเลขก่อนบวก
        sum += Number(items[i]);
    }

    return sum;
}

/**
 * 3. ฟังก์ชันคำนวณภาษี (addVat) 
 * ใช้ Arrow Function แบบย่อ (Implicit Return) 
 * รับยอดเงิน และคืนค่าผลรวมที่รวม VAT 7% (* 1.07)
 */
const addVat = (amount) => amount * 1.07;

// --- ส่วนการเรียกใช้งาน (Execution) ---

// เรียกใช้ฟังก์ชันคำนวณยอดรวม
let subTotal = calculateTotal(priceList);

// เรียกใช้ฟังก์ชันคำนวณภาษี
let grandTotal = addVat(subTotal);

// 4. แสดงผลลัพธ์
console.log(`--- ใบเสร็จรับเงิน ---`);
console.log(`ราคาสินค้าทั้งหมด: ${subTotal.toLocaleString()} บาท`);
console.log(`ยอดสุทธิรวมภาษี (7%): ${grandTotal.toLocaleString()} บาท`);

/**
 * สรุปการทำงาน:
 * - split(",") : เปลี่ยน "100,250" ให้กลายเป็น ["100", "250"]
 * - Number() : ป้องกันปัญหา "100" + "50" กลายเป็น "10050" (String concatenation)
 * - toLocaleString() : ช่วยเพิ่มคอมม่าในตัวเลขเพื่อให้แสดงผลสวยงาม (เช่น 1,000)
 */