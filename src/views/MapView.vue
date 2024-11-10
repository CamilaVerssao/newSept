<template>
    <div>
        <Navbar class="sticky top-0 z-10" />
        <div class="flex justify-center">
            <div class="w-[70vw]">
                <div class="my-5">
                    <iframe class="w-full h-[70vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4431212609306!2d-49.23934782102807!3d-25.45687497485978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4df926b4ea3%3A0x88b4331e264d4ee4!2sSetor%20de%20Educa%C3%A7%C3%A3o%20Profissional%20e%20Tecnol%C3%B3gica%20UFPR!5e0!3m2!1spt-BR!2sbr!4v1731257857416!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'MapView',
    components: {
        Navbar,
        Footer
    }
}
</script>
