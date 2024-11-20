<template>
  <TadsNavbar class="sticky top-0 z-10" />
  <div id="news" class="my-5">
    <div class="flex justify-center">
      <div class="w-[70vw]">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 text-5xl mb-5">
            <div class="flex gap-3 text-5xl mb-5">
              <h1 class="font-bold text-sky-700">Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
                (TADS)</h1>

            </div>
          </div>
          <button class="flex gap-3 items-center rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">
            <p>Filtrar</p>
            <font-awesome-icon class="text-white" :icon="['fas', 'chevron-down']" />
          </button>
        </div>
        <div class="flex gap-5">
          <div class="cursor-pointer w-full md:w-1/2 bg-white p-5">
            <h2 class="font-bold text-lg mb-3">Informações sobre o Curso</h2>
            <img src="@/assets/image5.jpg" alt="tads" class="mb-4 rounded-lg">
            <p class="mb-3">
              <a href="javascript:void(0);" @click="Tads"
                class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">Sobre o curso,</a><br>
              <a href="javascript:void(0);" @click="Coordenacao"
                class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">Coordenação,
              </a><br>
              <a href="http://200.236.3.198:28080/secretariaonline/Home" target="_blank"
                class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">Secretaria,
              </a><br>
              <a href="#" class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">Colegiado/Docentes,
              </a><br>
              <a href="https://pt-br.facebook.com/ufprcatei/ " target="_blank"
                class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">Centro Acadêmico,
                do TADS (CATEI).
              </a><br>
            </p>
            <p class="font-bold text-lg mb-3">UFPR Virtual</p>
            <img src="@/assets/virtual.jpg" alt="tads" class="mb-4 rounded-lg w-32 h-32">
            <p class="mb-3">
              <a href="https://ufprvirtual.ufpr.br/mod/forum/view.php?id=601969" target="_blank"
                class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">
                Clique Aqui para ver o Edital do curso/Coordenação.
              </a>
            </p>
            <p class="mb-3">
              <a href="https://ufprvirtual.ufpr.br/course/index.php?categoryid=1113" target="_blank"
                class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">
                Clique Aqui para Acessar as Salas na UFPR Virtual para as turmas da TARDE.
              </a>
            </p>
            <p class="mb-3">
              <a href="https://ufprvirtual.ufpr.br/course/index.php?categoryid=1068" target="_blank"
                class="text-sky-400 hover:text-sky-500 text-[#038fd0] hover:underline">Clique Aqui para Acessar as Salas
                na UFPR Virtual para as turmas da NOITE.
              </a>
            </p>
          </div>
          <div class="w-full md:w-1/2 bg-white p-5">
            <h2 class="font-bold text-lg mb-3">Avisos</h2>


            <div @click="aviso.route ? this.$router.push(aviso.route) : ''" v-for="(aviso, index) in avisos" :key="index"
              class="cursor-pointer bg-white p-4 mb-4 rounded-md border border-gray-300 transform hover:shadow-md">
              <div class="flex items-center mb-3">
                <font-awesome-icon class="text-gray-500 text-3xl mr-4" :icon="['fas', 'user-circle']" />
                <div>
                  <h3 class="font-semibold text-xl text-gray-900">{{ aviso.titulo }}</h3>
                  <div class="flex items-center text-sm text-gray-600">
                    <div class="mr-2">{{ aviso.autor }}</div>
                    <div class="mr-2">-</div>
                    <div>{{ aviso.data }}</div>
                  </div>
                </div>
              </div>
              <p class="text-gray-700 mt-5 mb-5 text-justify leading-relaxed">{{ aviso.mensagem }}</p>

              <div v-if="aviso.anexo" class="text-sm text-sky-600 hover:text-sky-800 mb-3">
                <a :href="aviso.anexo.url" target="_blank">
                  Anexo: {{ aviso.anexo.nome }}
                </a>
              </div>

              <div class="text-sky-700 cursor-pointer hover:text-sky-900 text-right mt-3">
                <a href="#" class="block mb-2">Discutir este tópico</a>
              </div>
            </div>
            <div class="flex justify-end">
              <button class="rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">Ver mais</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'
import TadsCoordenacaoView from './TadsCoordenacaoView.vue';

export default {
  name: 'HomeView',
  components: {
    TadsNavbar,
    Footer
  },
  methods: {
    Tads() {
      this.$router.push('/about-tads');
    },
    Coordenacao() {
      this.$router.push('/tads-coordenacao');
    }
  },
  data() {
    return {
      avisos: [
        {
          route: '/ic-bolsista-new',
          titulo: 'Edital de bolsista para IC',
          autor: 'Alessandro Brawerman',
          data: 'quinta, 5 set 2024, 15:22',
          mensagem: 'Torno público o edital de bolsista para IC no projeto "TECNOLOGIA ASSISTIVA NA AVALIAÇÃO CLÍNICO-FUNCIONAL INTEGRADA E PRESCRIÇÃO DE EXERCÍCIOS PARA PESSOAS IDOSAS USUÁRIAS DO SUS". Este projeto envolve muitas áreas e tecnologias da computação e a possibilidade de crescimento pessoal e aprendizagem é bem grande. É possível que o bolsista trabalhe ou faça estágio e mesmo assim realize suas atividades no projeto com bolsa, desde que haja dedicação e tempo para isto.',
          anexo: {
            nome: 'Edital 01-2024 Tecnoaging.pdf',
            url: 'https://www.example.com/Edital-01-2024.pdf'
          }
        },
        {
          titulo: 'Alteração de Cronograma',
          autor: 'Carlos Souza',
          data: 'segunda, 9 set 2024, 10:10',
          mensagem: 'Aviso importante: A aula de amanhã será na plataforma Zoom.',
          anexo: null
        },
        {
          titulo: 'Estudantes do TADS!',
          autor: 'Maria Oliveira',
          data: 'terça, 3 set 2024, 12:05',
          mensagem: 'Participem da eleição para a coordenação do TADS no dia 26/07/2024, das 08h às 20h. As eleições serão por meio do sistema de eleições on-line do SEPT, conforme instruções em anexo.',
          anexo: {
            nome: 'Sistema Eleições Online - Instruções Eleitores.pdf',
            url: 'https://www.example.com/Sistema-Eleições-Online.pdf'
          }
        }
      ]
    }
  }
}

</script>

<style scoped>
button {
  cursor: pointer
}
</style>
