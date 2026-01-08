const express = require('express')
const cors = require('cors')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

// Middleware พื้นฐาน
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// --- ส่วนสำคัญ: เรียกใช้ Routes ที่เราแยกไฟล์ไว้ ---
// ส่งตัวแปร app เข้าไปเพื่อให้ routes.js ใช้งาน
require('./routes')(app) 

// สั่งให้ Database Sync และเริ่มรัน Server
sequelize.sync({ force: false }).then(() => {
    app.listen(config.port, () => {
        console.log('Server running on port ' + config.port)
    })
})