// 1. สร้าง Object user โดยมี Key เป็น id และ name
const user = {
  id: "U789",
  name: "Chairat Innovate",
};

// 2. สร้าง Array cart สำหรับเก็บข้อมูลสินค้า (แต่ละชิ้นเป็น Object มี id และ price)
const cart = [
  {
    id: "BK001",
    price: 450,
  },
  {
    id: "BK042",
    price: 590,
  },
];

// 3. รวมร่างเป็น Object ใหญ่ชื่อ order
const order = {
  user: user,
  cart: cart,
  orderDate: new Date().toISOString(), // เพิ่มวันเวลาที่สั่งซื้อ (Good Practice)
  totalPrice: cart.reduce((total, item) => total + item.price, 0), // คำนวณราคารวม
};

// 4. แปลง order เป็น JSON เพื่อพร้อมส่ง
const orderJSON = JSON.stringify(order);

// แสดงผลทาง Console เพื่อตรวจสอบ
console.log(orderJSON);


// หน้าตาของข้อมูล JSON ที่จะได้ (Payload)
// {
//   "user": {
//     "id": "U789",
//     "name": "Chairat Innovate"
//   },
//   "cart": [
//     { "id": "BK001", "price": 450 },
//     { "id": "BK042", "price": 590 }
//   ],
//   "orderDate": "2026-02-14T07:46:00.000Z",
//   "totalPrice": 1040
// }