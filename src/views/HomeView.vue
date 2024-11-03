<template>
  <Navbar class="sticky top-0 z-10" />
  <div id="carrousel" class="h-[50vh] w-full relative mb-12">
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full hover:bg-white hover:bg-opacity-25 text-white hover:duration-300 hover:ease-in-out"
    >
      <span class="text-3xl">&#10094;</span>
    </button>

    <div
      v-if="currentSlide === 0"
      class="h-full w-full transition-opacity duration-500"
    >
      <div class="h-[85%] bg-[url('/src/assets/bear.jpg')] bg-cover bg-center flex justify-start items-center">
        <div class="grid grid-col bg-white bg-opacity-90 h-[30vh] p-12 mx-12 justify-between rounded rounded-2xl">
          <h1 class="text-3xl font-[500]">Acesse as grades horárias</h1>
          <p>Tenha acesso às grades horárias de todos os cursos do setor</p>
          <button class="rounded rounded-3xl w-full p-3 h-[50px] bg-blue-500 text-white hover:bg-blue-600 transition hover:duration-300 hover:ease-in-out">
            Visualizar grades
          </button>
        </div>
      </div>
      <div class="h-[15%] bg-sky-700 text-white grid grid-cols-3">
        <div class="px-5 cursor-pointer flex gap-3 hover:bg-sky-800 items-center">
          <h1 class="font-[600]">2024-2 | </h1>
          <p>Grade Horária por Cursos</p>
        </div>
        <div class="px-5 cursor-pointer flex gap-3 hover:bg-sky-800 items-center">
          <h1 class="font-[600]">2024-2 | </h1>
          <p>Grade Horária por Salas</p>
        </div>
        <div class="px-5 cursor-pointer flex gap-3 hover:bg-sky-800 items-center">
          <h1 class="font-[600]">2024-2 | </h1>
          <p>Grade Horária por Docentes</p>
        </div>
      </div>
    </div>

    <div
      v-if="currentSlide === 1"
      class="h-full w-full transition-opacity duration-500"
    >
      <div class="h-full bg-[url('/src/assets/room.png')] bg-cover bg-center flex justify-end items-center">
        <div class="rounded rounded-2xl grid grid-col bg-white bg-opacity-90 h-[30vh] p-12 mx-12 justify-between">
          <h1 class="text-3xl font-[500]">Reserva de salas</h1>
          <p>Tenha acesso ao controle de reserva de salas de aula</p>
          <button class="rounded rounded-3xl w-full p-3 h-[50px] bg-blue-500 text-white hover:bg-blue-600 transition hover:duration-300 hover:ease-in-out">
            Reservar sala
          </button>
        </div>
      </div>
    </div>

    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full hover:bg-white hover:bg-opacity-25 text-white hover:duration-300 hover:ease-in-out"
    >
      <span class="text-3xl">&#10095;</span>
    </button>
  </div>

  <div id="news" class="mx-5 mb-5">
    <div class="flex justify-center">
      <div class="w-[70vw]">
        <div class="flex gap-3 text-5xl mb-5">
          <h1 class="font-bold text-sky-700 ">Sept</h1>
          <p class="font-[400]">notícias</p>
        </div>
        <div class="transform transition-transform duration-200 cursor-pointer flex justify-center h-[50vh] mb-12">
          <div class="grid hover:shadow-lg grid-cols-3 border rounded rounded-2xl">
            <div class="bg-[url('/src/assets/news.png')] h-[50vh] rounded-l rounded-l-2xl bg-cover bg-center col-span-2"></div>
            <div class="p-12 flex flex-col gap-3 justify-between">
              <div>
                <p class="text-sm">2 de novembro de 2024</p>
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
              <div class="bg-[url('/src/assets/news.png')] rounded-t rounded-t-2xl bg-cover bg-center h-[30vh]"></div>
              <div class="p-12 flex flex-col gap-3 justify-between">
                <div class="flex flex-col gap-3">
                  <p class="text-sm">1 de novembro de 2024</p>
                  <h1 class="text-3xl font-[500]">Novo tipo de acesso ao Office 365</h1>
                  <p>Seguindo a política de segurança da Microsoft para o Office 365, comunicamos que será implantado o DUPLO FATOR DE AUTENTICAÇÃO (2FA) nas contas @UFPR.BR a partir de 15/10/2024 para servidores TAEs, docentes, discentes, terceirizados e outros que utilizam o sistema Microsoft 365 da UFPR.</p>
                </div>
                <div class="text-end text-sm mt-3">
                    <p>AGTIC/UFPR</p>
                </div>
              </div>
            </div>
          </div>
           <div class="transform transition-transform duration-200 cursor-pointer flex justify-center h-[75vh]">
            <div class="grid hover:shadow-lg flex flex-col border rounded rounded-2xl h-full">
              <div class="bg-[url('/src/assets/news.png')] rounded-t rounded-t-2xl bg-cover bg-center h-[30vh]"></div>
              <div class="p-12 flex flex-col gap-3 justify-between">
                <div class="flex flex-col gap-3">
                  <p class="text-sm">1 de novembro de 2024</p>
                  <h1 class="text-3xl font-[500]">Novo tipo de acesso ao Office 365</h1>
                  <p>Seguindo a política de segurança da Microsoft para o Office 365, comunicamos que será implantado o DUPLO FATOR DE AUTENTICAÇÃO (2FA) nas contas @UFPR.BR a partir de 15/10/2024 para servidores TAEs, docentes, discentes, terceirizados e outros que utilizam o sistema Microsoft 365 da UFPR.</p>
                </div>
                <div class="text-end text-sm mt-3">
                    <p>AGTIC/UFPR</p>
                </div>
              </div>
            </div>
          </div>
           <div class="transform transition-transform duration-200 cursor-pointer flex justify-center h-[75vh]">
            <div class="grid hover:shadow-lg flex flex-col border rounded rounded-2xl h-full">
              <div class="bg-[url('/src/assets/news.png')] rounded-t rounded-t-2xl bg-cover bg-center h-[30vh]"></div>
              <div class="p-12 flex flex-col gap-3 justify-between">
                <div class="flex flex-col gap-3">
                  <p class="text-sm">1 de novembro de 2024</p>
                  <h1 class="text-3xl font-[500]">Novo tipo de acesso ao Office 365</h1>
                  <p>Seguindo a política de segurança da Microsoft para o Office 365, comunicamos que será implantado o DUPLO FATOR DE AUTENTICAÇÃO (2FA) nas contas @UFPR.BR a partir de 15/10/2024 para servidores TAEs, docentes, discentes, terceirizados e outros que utilizam o sistema Microsoft 365 da UFPR.</p>
                </div>
                <div class="text-end text-sm mt-3">
                    <p>AGTIC/UFPR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="mb-5 rounded rounded-xl border p-3 h-[50px] w-[23vw] hover:bg-blue-500 hover:text-white transition hover:border-0 hover:duration-300 hover:ease-in-out">
            Todas as notícias
          </button>
        </div>
      </div>
    </div>
  </div>

  <div id="calendar" class="mx-5 mb-12">
    <div class="flex justify-center">
      <div class="w-[70vw]">
        <div class="flex gap-3 text-5xl mb-5">
          <h1 class="font-bold text-sky-700 ">Sept</h1>
          <p class="font-[400]">eventos</p>
        </div>
        <div class="transform transition-transform duration-200 grid grid-cols-4 gap-5 h-[30vh]">
          <div class="cursor-pointer hover:shadow-lg flex flex-col border rounded rounded-2xl rouded rounded-2xl">
            <div class="h-[40%]">
              <div class="rounded-t rounded-t-2xl text-white bg-[url('/src/assets/bear.jpg')] bg-cover bg-center h-full flex items-end">
                <div class="bg-sky-700 text-sm p-2 w-[70%]">
                  <h1>4 de novembro de 2024</h1>
                </div>
              </div>
            </div>
            <div class="h-[60%]">
              <div class="flex flex-col gap-5 justify-between h-full p-5">
                <h1 class="font-[500] text-lg">Evento</h1>
                <div class="flex gap-3 text-sm items-center">
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Conheça o Sept</p>
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Futuros Alunos</p>
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Coordenação</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cursor-pointer hover:shadow-lg flex flex-col border rounded rounded-2xl rouded rounded-2xl">
            <div class="h-[40%]">
              <div class="rounded-t rounded-t-2xl text-white bg-[url('/src/assets/bear.jpg')] bg-cover bg-center h-full flex items-end">
                <div class="bg-sky-700 text-sm p-2 w-[70%]">
                  <h1>4 de novembro de 2024</h1>
                </div>
              </div>
            </div>
            <div class="h-[60%]">
              <div class="flex flex-col gap-5 justify-between h-full p-5">
                <h1 class="font-[500] text-lg">Evento</h1>
                <div class="flex gap-3 text-sm items-center">
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Administração e gestão</p>
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Calendário universitário</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cursor-pointer hover:shadow-lg flex flex-col border rounded rounded-2xl rouded rounded-2xl">
            <div class="h-[40%]">
              <div class="rounded-t rounded-t-2xl text-white bg-[url('/src/assets/bear.jpg')] bg-cover bg-center h-full flex items-end">
                <div class="bg-sky-700 text-sm p-2 w-[70%]">
                  <h1>4 de novembro de 2024</h1>
                </div>
              </div>
            </div>
            <div class="h-[60%]">
              <div class="flex flex-col gap-5 justify-between h-full p-5">
                <h1 class="font-[500] text-lg">Evento</h1>
                <div class="flex gap-3 text-sm items-center">
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Atividades de treinamento</p>
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Empreendedorismo</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cursor-pointer hover:shadow-lg flex flex-col border rounded rounded-2xl rouded rounded-2xl">
            <div class="h-[40%]">
              <div class="rounded-t rounded-t-2xl text-white bg-[url('/src/assets/bear.jpg')] bg-cover bg-center h-full flex items-end">
                <div class="bg-sky-700 text-sm p-2 w-[70%]">
                  <h1>4 de novembro de 2024</h1>
                </div>
              </div>
            </div>
            <div class="h-[60%]">
              <div class="flex flex-col gap-5 justify-between h-full p-5">
                <h1 class="font-[500] text-lg">Evento</h1>
                <div class="flex gap-3 text-sm items-center">
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Conferência</p>
                  <p class="rounded rounded-lg w-fit py-1 px-3 bg-gray-200">Seminário on-line</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <button class="mb-5 rounded rounded-xl border p-3 h-[50px] w-[23vw] hover:bg-blue-500 hover:text-white transition hover:border-0 hover:duration-300 hover:ease-in-out">
        Todos os eventos
      </button>
    </div>
  </div>

  <Footer />
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      currentSlide: 0, 
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % 2
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + 2) % 2
    },
  },
}
</script>

<style scoped>
button {
  cursor: pointer
}
</style>
