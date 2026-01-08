// server/src/models/User.js
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return
  }
  return bcrypt.genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    
    // --- ส่วนที่ต้องเพิ่ม ---
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING
    // ---------------------

  }, {
    hooks: {
      // ... (ส่วน hashPassword เหมือนเดิม ห้ามลบ)
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  // ... (ส่วน comparePassword ด้านล่างเหมือนเดิม)
  
  return User
}