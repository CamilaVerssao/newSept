<template>
  <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
    <div class="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
