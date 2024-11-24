<template>
  <div
    v-if="visible"
    class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'ToastMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = false
    }, 2000)
  }
}
</script>

