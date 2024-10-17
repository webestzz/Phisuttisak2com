document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginSound = document.getElementById('loginSound'); // เพิ่มบรรทัดนี้

    // เปลี่ยนชื่อผู้ใช้และรหัสผ่านที่ถูกต้องตามต้องการ
    const correctUsername = 'Est';
    const correctPassword = '074';

    if (username === correctUsername && password === correctPassword) {
        loginSound.play(); // เล่นเสียงเมื่อล็อกอินสำเร็จ
        setTimeout(() => {
            window.location.href = 'index2.html'; // เปลี่ยนไปยังหน้า index2.html
        }, 1000); // รอ 1 วินาทีเพื่อให้เสียงเล่นเสร็จ
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

