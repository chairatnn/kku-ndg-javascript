let weight = 89;
let height = 178;

let bmi = weight / (height / 100) ** 2;

if (bmi > 30) {
  console.log(bmi.toFixed(2) + " อ้วน");
} else if (bmi < 18.5) {
  console.log(bmi.toFixed(2) + " ผอม");
} else {
  console.log(bmi.toFixed(2) + " ปรกติ");
}