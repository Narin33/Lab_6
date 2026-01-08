const { User } = require('./src/models')

User.findAll().then(users => {
    console.log('--- ข้อมูลในฐานข้อมูล ---')
    users.forEach(user => {
        console.log('Email:', user.email)
        console.log('Password:', user.password) // ดูบรรทัดนี้ว่ายาวๆ ไหม
        console.log('---------------------')
    })
}).catch(err => {
    console.log('Error:', err)
})