/**
 * ฟังก์ชันสำหรับการสลับร่างวนไปตามลำดับ
 * ลำดับ: ปกติ -> active (วงกลม) -> active2 (สามเหลี่ยม) -> active3 (วงรี) -> กลับมาปกติ
 */
function transformBox() {
    const box = document.getElementById('box');
    const status = document.getElementById('statusText');

    // ตรวจสอบว่าปัจจุบันมีคลาสอะไรอยู่ แล้วเปลี่ยนเป็นลำดับถัดไป
    if (!box.classList.contains('active') && !box.classList.contains('active2') && !box.classList.contains('active3')) {
        // จากปกติไป วงกลม
        box.classList.add('active');
        box.textContent = "วงกลม";
        status.textContent = "สถานะ: วงกลมสีแดง";
    } 
    else if (box.classList.contains('active')) {
        // จากวงกลมไป สามเหลี่ยม
        box.classList.remove('active');
        box.classList.add('active2');
        box.textContent = "สามเหลี่ยม";
        status.textContent = "สถานะ: สามเหลี่ยมสีเขียว";
    } 
    else if (box.classList.contains('active2')) {
        // จากสามเหลี่ยมไป วงรี
        box.classList.remove('active2');
        box.classList.add('active3');
        box.textContent = "วงรี";
        status.textContent = "สถานะ: วงรีสีม่วง";
    } 
    else {
        // จากวงรีกลับสู่ ร่างปกติ
        box.classList.remove('active3');
        box.textContent = "ร่างปกติ";
        status.textContent = "สถานะ: กล่องสี่เหลี่ยม";
    }
}

/**
 * ฟังก์ชันสลับโหมด มืด/สว่าง (Theme Toggle)
 */
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.textContent = "🌙 Dark Mode";
    }
}