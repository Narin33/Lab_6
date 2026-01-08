<template>
  <div>
    <h1>Show User</h1>
    <p>User ID: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: null // สร้างตัวแปรมารอรับค่า
    }
  },
  created() {
    // ดึงค่า userId จาก URL (route params) เมื่อเริ่มโหลดหน้าเว็บ
    this.userId = this.$route.params.userId
  }
}
</script>

<style scoped>
</style>