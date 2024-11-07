<template>
  <div>
    <Navbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <div class="flex gap-3 text-5xl mb-5">
                <h1 class="font-bold text-sky-700 ">Sept</h1>
                <p class="font-[400] mb-5">sistemas ufpr</p>
            </div>
            <div class="grid grid-cols-4 gap-5 mb-12">
                <div class="col-span-2 cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Secretaria On-line</h1>
                </div>
                <div class="col-span-2 cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Cronograma e Ensalamento</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Reserva de Salas</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Emissão de Portarias</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">SEI - processos</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Manual - informação</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">SIGA - gestão acadêmica</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Cadastro SEPT</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Teletrabalho</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Boletim de Gestão de Pessoas</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Tutorial Moodle</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Solicitar Manutenção</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">CEEDD - apoio</h1>
                </div>
                <div class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Portal SIPEC</h1>
                </div>
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
    name: 'docentBody',
    components: {
        Navbar,
        Footer
    }
}
</script>
