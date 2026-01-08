const { User } = require('../models')

module.exports = {
  // 1. สมัครสมาชิก (Register) - ของเดิม
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'อีเมลนี้มีผู้ใช้งานแล้วในระบบ'
      })
    }
  }, // <--- สังเกตตรงนี้! ต้องมีลูกน้ำ (comma) คั่นก่อนเริ่มฟังก์ชันใหม่

  // 2. ดึงข้อมูล User ทั้งหมด (Index)
  async index (req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'เกิดข้อผิดพลาดในการดึงข้อมูล Users'
      })
    }
  },

  // 3. แก้ไขข้อมูล (Put/Update)
  async put (req, res) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.userId
        },
        individualHooks: true // <--- บรรทัดสำคัญมาก! ใส่เพื่อบอกให้ระบบทำการเข้ารหัสรหัสผ่านใหม่ด้วย
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'ไม่สามารถแก้ไขข้อมูลได้'
      })
    }
  },

  // 4. ลบข้อมูล User (Delete/Remove)
  async remove (req, res) {
    try {
      // ค้นหา User ก่อนว่ามีไหม
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'ไม่พบผู้ใช้งานนี้'
        })
      }

      // สั่งลบ
      await user.destroy()
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'เกิดข้อผิดพลาดในการลบข้อมูล'
      })
    }
  },

  // 5. ดูข้อมูลรายคน (Show)
  async show (req, res) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'ไม่พบข้อมูลผู้ใช้งาน'
      })
    }
  }
}