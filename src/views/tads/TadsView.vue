<template>
  <TadsNavbar class="sticky top-0 z-10" />
  <div id="news" class="my-5">
    <div class="flex justify-center">
      <div class="w-[70vw]">
        <div class="flex justify-between items-center">
            <div class="flex gap-3 text-5xl mb-5">
            <h1 class="font-bold text-sky-700 ">Tads</h1>
            <p class="font-[400]">notícias</p>
        </div>
         <button class="flex gap-3 items-center rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">
            <p>Filtrar</p>
            <font-awesome-icon class="text-white" :icon="['fas', 'chevron-down']" />
        </button>
        </div>
        <div class="transform transition-transform duration-200 cursor-pointer flex justify-center h-[50vh] mb-12">
          <div class="grid hover:shadow-lg grid-cols-3 border rounded rounded-2xl">
            <div class="bg-[url('/src/assets/office.jpg')] h-[50vh] rounded-l rounded-l-2xl bg-cover bg-center col-span-2"></div>
            <div class="p-12 flex flex-col gap-3 justify-between">
              <div class="flex flex-col gap-3">
                <p class="text-sm">6 de novembro de 2024</p>
                <h1 class="text-3xl font-[500]">Novo tipo de acesso ao Office 365</h1>
                <p>Seguindo a política de segurança da Microsoft para o Office 365, comunicamos que será implantado o DUPLO FATOR DE AUTENTICAÇÃO (2FA) nas contas @UFPR.BR a partir de 15/10/2024 para servidores TAEs, docentes, discentes, terceirizados e outros que utilizam o sistema Microsoft 365 da UFPR.</p>
              </div>
              <div class="text-end text-sm">
                  <p>AGTIC/UFPR</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-5 mb-5">
          <div class="transform transition-transform duration-200 cursor-pointer flex justify-center h-[75vh]">
            <div class="grid hover:shadow-lg flex flex-col border rounded rounded-2xl h-full">
              <div class="bg-[url('/src/assets/SEPT.jpg')] rounded-t rounded-t-2xl bg-cover bg-center h-[30vh]"></div>
              <div class="p-12 flex flex-col gap-3 justify-between">
                <div class="flex flex-col gap-3">
                  <p class="text-sm">1 de novembro de 2024</p>
                  <h1 class="text-3xl font-[500]">Inovações e Oportunidades no Ensino Técnico e Tecnológico</h1>
                  <p>O Setor de Educação Profissional e Tecnológica (SEPT) continua a se destacar como um polo de inovação
                  e excelência na formação de profissionais técnicos e
                  tecnológicos de alta qualidade. </p>
                </div>
                <div class="text-end text-sm mt-3">
                    <p>AGTIC/UFPR</p>
                </div>
              </div>
            </div>
          </div>
           <div class="transform transition-transform duration-200 cursor-pointer flex justify-center h-[75vh]">
            <div class="grid hover:shadow-lg flex flex-col border rounded rounded-2xl h-full">
              <div class="bg-[url('/src/assets/code.jpg')] rounded-t rounded-t-2xl bg-cover bg-center h-[30vh]"></div>
              <div class="p-12 flex flex-col gap-3 justify-between">
                <div class="flex flex-col gap-3">
                  <p class="text-sm">12 de outubro de 2024</p>
                  <h1 class="text-3xl font-[500]">Vagas para Tutores no Curso de Desenvolvimento Ágil da UFPR</h1>
                  <p>O curso de Especialização em Desenvolvimento Ágil de Software da Universidade Federal do Paraná
                    (UFPR), vinculado ao Setor de Educação Profissional e Tecnológica (Sept), lançou edital para
                    selecionar de dois a seis tutores.</p>
                </div>
                <div class="text-end text-sm mt-3">
                    <p>AGTIC/UFPR</p>
                </div>
              </div>
            </div>
          </div>
           <div class="transform transition-transform duration-200 cursor-pointer flex justify-center h-[75vh]">
            <div class="grid hover:shadow-lg flex flex-col border rounded rounded-2xl h-full">
              <div class="bg-[url('/src/assets/image6.jpg')] rounded-t rounded-t-2xl bg-cover bg-center h-[30vh]"></div>
              <div class="p-12 flex flex-col gap-3 justify-between">
                <div class="flex flex-col gap-3">
                  <p class="text-sm">3 de setembro de 2024</p>
                  <h1 class="text-3xl font-[500]">Curso de Luteria da UFPR destaca relevância dos instrumentos de corda</h1>
                  <p>A Universidade Federal do Paraná (UFPR) já formou 110 luthiers, ao longo dos 15 anos de existência
                    do curso. Esses profissionais estão transformando a paisagem de construção, manutenção e restauração
                    de instrumentos de corda no Brasil.</p>
                </div>
                <div class="text-end text-sm mt-3">
                    <p>AGTIC/UFPR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="mb-5 rounded rounded-xl border p-3 h-[50px] w-[23vw] hover:bg-sky-700 hover:text-white transition hover:border-0 hover:duration-300 hover:ease-in-out">
            Todas as notícias
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'HomeView',
  components: {
    TadsNavbar,
    Footer
  },
}
</script>

<style scoped>
button {
  cursor: pointer
}
</style>
