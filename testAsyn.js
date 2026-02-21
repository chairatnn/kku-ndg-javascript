console.log("1. รับออเดอร์โต๊ะ 1");
// สมมติว่าตรงนี้ใช้เวลาทำอาหาร 5 วินาที (หน้าเว็บจะค้างไปเลย)
console.log("2. เสิร์ฟโต๊ะ 1");
console.log("3. รับออเดอร์โต๊ะ 2"); // ต้องรอโต๊ะ 1 เสร็จก่อน


console.log("1. รับออเดอร์โต๊ะ 1 (ส่งเข้าครัว)");

// จำลองการใช้เวลา 2 วินาที (ไม่บล็อกการทำงาน)
setTimeout(() => {
    console.log("3. อาหารโต๊ะ 1 เสร็จแล้ว นำไปเสิร์ฟ");
}, 2000);

console.log("2. รับออเดอร์โต๊ะ 2 ต่อทันที"); 
// ลำดับที่ออก: 1 -> 2 -> 3(รอ 2 วิ)


// หลังบ้านยุคใหม่ ต้องเปลี่ยนฟังก์ชันให้ Return Promise (สมมติว่าเซิร์ฟเวอร์อัปเกรดให้แล้ว)
const loginUserAsync = (user, pass) => new Promise((resolve, reject) => {
    setTimeout(() => pass === "1234" ? resolve({ id: 99, name: user }) : reject("รหัสผ่านไม่ถูกต้อง!"), 500);
});
const getProfileAsync = (id) => new Promise((resolve, reject) => {
    setTimeout(() => id === 99 ? resolve({ id: 99, email: "s@mail.com" }) : reject("ไม่พบผู้ใช้"), 500);
});
const getOrdersAsync = (id) => new Promise(resolve => setTimeout(() => resolve([{ id: "ORD-001" }]), 500));
const getPaymentStatusAsync = (orderId) => new Promise((resolve, reject) => {
    setTimeout(() => orderId === "ORD-001" ? resolve("PAID (จ่ายแล้ว)") : reject("ไม่พบออเดอร์"), 500);
});

loginUserAsync("somchai", "1234")
    .then((user) => {
        // ได้ user มา ส่งไปหา profile ต่อ
        return getProfileAsync(user.id); 
    })
    .then((profile) => {
        // ได้ profile มา ส่งไปหา orders ต่อ
        return getOrdersAsync(profile.id);
    })
    .then((orders) => {
        // ได้ orders มา ส่งไปหาสถานะจ่ายเงินต่อ
        return getPaymentStatusAsync(orders[0].id);
    })
    .then((status) => {
        // จบกระบวนการ นำข้อมูลไปใช้
        console.log("เข้าสู่ระบบสำเร็จ สถานะ:", status); 
    })
    .catch((err) => {
        // ถ้าพังที่ชั้นไหนก็ตาม (เช่น รหัสผิด หรือหาออเดอร์ไม่เจอ) 
        // มันจะกระโดดข้ามมาเข้ากล่อง catch นี้ทันที!
        console.error("เกิดข้อผิดพลาด:", err);
    });

    loginUserAsync("somchai", "1234")
    .then(user => getProfileAsync(user.id))
    .then(profile => getOrdersAsync(profile.id))
    .then(orders => getPaymentStatusAsync(orders[0].id))
    .then(status => console.log("เข้าสู่ระบบสำเร็จ สถานะ:", status))
    .catch(err => console.error("เกิดข้อผิดพลาด:", err));


    async function runSuccess() {
    try {
        // โค้ดเรียงตัวสวยงาม ไม่มี Callback ลึกๆ อีกต่อไป!
        let user = await loginUserAsync("somchai", "1234");
        let profile = await getProfileAsync(user.id);
        let orders = await getOrdersAsync(profile.id);
        let status = await getPaymentStatusAsync(orders[0].id);
        
        console.log("เข้าสู่ระบบสำเร็จ สถานะ:", status);
    } catch (err) {
        // ถ้าบรรทัดไหนใน try พัง มันกระโดดมานี่ทันที
        console.error("เกิดข้อผิดพลาด:", err);
    }
}

runSuccess();


