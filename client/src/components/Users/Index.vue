<template>
  <div>
    <h1>Get All Users</h1>
    <div>
      <h2>จำนวนผู้ใช้งาน: {{ users.length }}</h2>
      <p><button @click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>
      
      <div v-for="user in users" :key="user.id">
        <p>ID: {{ user.id }}</p>
        <p>ชื่อ-สกุล: {{ user.name }} {{ user.lastname }}</p>
        <p>
          <button @click="navigateTo('/user/'+ user.id)">ดูข้อมูล</button>
          <button @click="navigateTo('/user/edit/'+ user.id)">แก้ไขข้อมูล</button>
          <button @click="deleteUser(user)">ลบข้อมูล</button>
        </p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ต้องมีตัวแปร users ตรงนี้เสมอ ไม่งั้นจอขาว
      users: [
        { id: 1, name: 'Somchai', lastname: 'Jaidee' },
        { id: 2, name: 'Somsri', lastname: 'Rakrian' }
      ]
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    deleteUser(user) {
      alert("ลบ user: " + user.name);
    }
  }
}
</script>
<style scoped>
</style>