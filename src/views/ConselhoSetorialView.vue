<template>
  <div>
    <Navbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'conselhoSetorial',
    components: {
        Navbar,
        Footer
    }
}
</script>
