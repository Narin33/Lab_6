const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    // 1. สมัครสมาชิก (มีอยู่แล้ว)
    app.post('/register', 
        AuthenticationControllerPolicy.register, 
        AuthenticationController.register
    )

    // --- เพิ่ม 4 บรรทัดนี้ (CRUD) ---
    
    // 2. ดึงข้อมูล Users ทั้งหมด
    app.get('/users', AuthenticationController.index)

    // 3. แก้ไขข้อมูล User (ต้องระบุ id)
    app.put('/user/:userId', AuthenticationController.put)

    // 4. ลบข้อมูล User (ต้องระบุ id)
    app.delete('/user/:userId', AuthenticationController.remove)
    
    // 5. ดึงข้อมูล User คนเดียว (เผื่อใช้)
    app.get('/user/:userId', AuthenticationController.show)
    // ----------------------------
}