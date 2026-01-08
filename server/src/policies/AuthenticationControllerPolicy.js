const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ).required(),
      
      name: Joi.string().allow(null, ''), // อนุญาตให้เป็นค่าว่างได้
      lastname: Joi.string().allow(null, ''),
      status: Joi.string().allow(null, ''),
      type: Joi.string().allow(null, '')
      
    })

    // 2. ตรวจสอบข้อมูล
    const { error } = schema.validate(req.body)

    if (error) {
      // ตรวจสอบว่า Error ตรงไหน
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'รูปแบบอีเมลไม่ถูกต้อง'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'รหัสผ่านต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข และมีความยาว 8 ถึง 32 ตัวอักษร'
          })
          break
        default:
          res.status(400).send({
            error: `ข้อมูลสมัครสมาชิกไม่ถูกต้อง: ${error.details[0].message}`
          })
      }
    } else {
      next()
    }
  }
}