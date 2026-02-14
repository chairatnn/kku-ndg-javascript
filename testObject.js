let user = {
    name: "Somchai",    // Property
    age: 25,
    isMember: true,
    sayHi: function() { // Method
        return "Hello " + this.name;
    }
};

// การใช้งาน (Dot Notation)
console.log(user.name);   // "Somchai"
console.log(user.sayHi());// "Hello Somchai"

// การใช้งาน (Bracket Notation) - ใช้เมื่อ Key มีวรรค
console.log(user["age"]); // 25


// JSON (JavaScript Object Notation)
let data = { id: 1, title: "Learn JS" };
// 1. แปลงเป็นข้อความเพื่อส่ง Server
let jsonString = JSON.stringify(data);
console.log(jsonString); // '{"id":1,"title":"Learn JS"}'
// 2. รับข้อความมาแปลงกลับเป็น Object
let original = JSON.parse(jsonString);
console.log(original.title); // "Learn JS"