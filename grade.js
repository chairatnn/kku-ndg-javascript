// คำสั่งเงื่อนไขสำหรับการตัดเกรด
let score3 = 75; // <-- ลองเปลี่ยนเลขตรงนี้
let grade;

if (score3 >= 80) {
  grade = "A";
} else if (score3 < 80 && score3 > 69) {
  grade = "B";
} else if (score3 < 70 && score3 > 59) {
  grade = "C";
} else {
  grade = "F";
}
console.log("คะแนน:", score3);
console.log("เกรดที่ได้:", grade);
