<template>
  <div>
    <Navbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <div class="flex gap-3 text-5xl mb-5">
                <h1 class="font-bold text-sky-700 ">Sept</h1>
                <p class="font-[400]">núcleo de tecnologia educacional</p>
            </div>
            <div class="mb-12">
                <h1 class="font-bold text-2xl text-sky-700 mb-5">Atividades em andamento</h1>
                <div class="grid grid-cols-2 gap-5">
                    <div class="group transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer rounded-lg">
                        <p class="group-hover:font-[600] mb-3">Live: Aplicação da LGPD na pesquisa</p>
                        <a href="https://www.youtube.com/channel/UC77hF_GR2ibihiNABQrj9SQ"
                        class="block rounded-lg bg-[url('/src/assets/Aplicação-da-LGPD-na-pesquisa-300x300.jpeg')] bg-cover bg-center h-[30vh]">
                        </a>
                    </div>
                    <div class="group transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer rounded-lg">
                        <p class="group-hover:font-[600] mb-3">Live: Aplicação da LGPD na pesquisa</p>
                        <a href="https://www.youtube.com/channel/UC77hF_GR2ibihiNABQrj9SQ"
                        class="block rounded-lg bg-[url('/src/assets/CapturadeTela.png')] bg-cover bg-center h-[30vh]">
                        </a>
                    </div>
                </div>
            </div>
            <div class="mb-12">
                <div class="flex justify-between items-center mb-5">
                    <h1 class="font-bold text-2xl text-sky-700">Histórico das atividades</h1>
                    <button class="flex gap-3 items-center rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">
                        <p>Filtrar</p>
                        <font-awesome-icon class="text-white" :icon="['fas', 'chevron-down']" />
                    </button>
                </div>
                <div class="grid grid-cols-3 gap-5 h-[30vh]">
                    <div class="group transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer rounded-lg">
                        <p class="group-hover:font-[600] mb-3">Planejamento estratégico para cursos do SEPT</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeB_BnAyQJYIhdmav451NNgRatDKADkOg7hW_t5ktSYx-GikA/closedform"
                        class="block rounded-lg bg-[url('/src/assets/WhatsApp-Image-2021-09-03-at-09.54.19-1-768x960.jpeg')] bg-cover bg-center h-full">
                        </a>
                    </div>
                    <div class="group transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer rounded-lg">
                        <p class="group-hover:font-[600] mb-3">Live: Curricularização da extensão no SEPT</p>
                        <a href="https://www.facebook.com/ntesept/videos/1516061768742999"
                        class="block rounded-lg bg-[url('/src/assets/WhatsApp-Image-2021-07-23-at-15.54.04-1-723x1024.jpeg')] bg-cover bg-center h-full">
                        </a>
                    </div>
                    <div class="group transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer rounded-lg">
                        <p class="group-hover:font-[600] mb-3">Pesquisa sobre os usos da Tecnologia nas Atividades</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf29acwtErQRYqcHW17wr72f6uzeCMYVAgCFppZseRYFTU6fw/viewform"
                        class="block rounded-lg bg-[url('/src/assets/PESQUISA-1-768x622.png')] bg-cover bg-center h-full">
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-5">
                <button class="rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">Ver mais</button>
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
    name: 'nte',
    components: {
        Navbar,
        Footer
    }

}
</script>

