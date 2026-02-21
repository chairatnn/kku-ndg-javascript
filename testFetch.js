async function getPokemon() {
    try {
        // 1. ส่งพนักงานไปขอข้อมูล Pikachu (รอจนกว่าจะกลับมา)
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        
        // 2. แกะกล่องข้อมูล แปลงเป็น JS Object
        let data = await response.json(); 
        
        console.log("ชื่อ:", data.name);
        console.log("น้ำหนัก:", data.weight);
        console.log("รูปภาพ:", data.sprites.front_default);
        
    } catch (error) {
        console.error("ติดต่อ Server ไม่สำเร็จ:", error);
    }
}


let myFav = { name: "Pikachu" };

// 1. แปลง Object เป็น String
let stringData = JSON.stringify(myFav);

// 2. เก็บลงกระเป๋า ตั้งชื่อว่า "fav_mon"
localStorage.setItem("fav_mon", stringData);

// 1. หยิบของตามชื่อป้าย
let data = localStorage.getItem("fav_mon");

if (data !== null) {
    // 2. แปลงกลับเป็น Object
    let myFav = JSON.parse(data); 
    console.log(myFav.name);
}

// ท่าที่ 1: เลือกลบแค่บางรายการ
localStorage.removeItem("fav_mon");

// ท่าที่ 2: ล้างบาง! ลบทุกอย่างของเว็บนี้
// (ใช้ด้วยความระมัดระวัง)
localStorage.clear();