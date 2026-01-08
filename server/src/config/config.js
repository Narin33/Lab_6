module.exports = {
  port: 8081,
  db: {
    database: 'coffee_shop',
    user: 'user',
    password: 'password',
    options: {
      dialect: 'sqlite',
      host: 'localhost',
      storage: './User-Lab-6.sqlite' // ไฟล์ Database จะถูกสร้างที่นี่
    }
  }
}