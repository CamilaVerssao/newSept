<template>
  <div>
    <Loader v-if="isLoading" />
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <h1 class="text-sky-700 font-bold text-4xl mb-3">Cadastro de Bolsista de Iniciação Científica</h1>
            <p class="font-bold mb-3">TECNOLOGIA ASSISTIVA NA AVALIAÇÃO CLÍNICO-FUNCIONAL INTEGRADA E PRESCRIÇÃO DE EXERCÍCIOS PARA PESSOAS IDOSAS USUÁRIAS DO SUS</p>
            <hr class="mb-5">
            <div id="dadosPessoais" class="mb-5 rounded rounded-xl p-5 border border-sky-700">
                <h1 class="text-sky-700 font-bold text-xl mb-5">Dados pessoais</h1>
                <div class="grid grid-cols-3 gap-3 mb-3">
                    <Input v-model="object.name" required class="col-span-2" placeholder="Fulano da Silva" label="Nome" type="text" :width="'w-full'" :error="errors.name" />
                    <Input v-model="object.date" required label="Data de Nascimento" type="date" :width="'w-full'" :error="errors.date" />
                    <Input v-model="object.email" required placeholder="email@gmail.com" label="Email" type="email" :width="'w-full'" :error="errors.email" />
                    <Input v-model="object.phone" required placeholder="(DDD) 99999-9999" label="Telefone" type="phone" :width="'w-full'" :error="errors.phone" />
                    <Select v-model="object.nacionality" required placeholder="Nacionalidade" label="Nacionalidade" :items="this.nacionalities" :width="'w-full'" :error="errors.nacionality" />
                    <Input v-model="object.city" required placeholder="Curitiba" label="Cidade" type="text" :width="'w-full'" :error="errors.city" />
                    <Input v-model="object.address" required class="col-span-2" placeholder="Rua Exemplo, 222" label="Endereço Completo" type="text" :width="'w-full'" :error="errors.address" />
                </div>
                <p class="text-red-500 text-sm mb-1">Campos obrigatórios *</p>
                <hr class="mb-3">
            </div>
            <div id="dadosAcademicos" class="mb-3 rounded rounded-xl p-5 border border-sky-700">
                <h1 class="text-sky-700 font-bold text-xl mb-5">Dados acadêmicos</h1>
                <div class="grid grid-cols-3 gap-3 mb-3">
                    <Input v-model="object.grr" required placeholder="20221010" label="GRR" type="grr" :width="'w-full'" :error="errors.grr" />
                    <Select v-model="object.course" required placeholder="Curso" label="Curso" :items="this.courses" :width="'w-full'" :error="errors.course" />
                    <Input label="Certificações" type="file" :width="'w-full'" />
                </div>
                <p class="text-red-500 text-sm mb-1">Campos obrigatórios *</p>
                <hr class="mb-3">
            </div>
            <div id="dadosProfissional" class="mb-3 rounded rounded-xl p-5 border border-sky-700">
                <h1 class="text-sky-700 font-bold text-xl mb-5">Experiência profissional e Projetos</h1>
                <div class="mb-3">
                    <div class="mb-3">
                        <p class="mb-3 font-[500]">1. Possui experiência anterior em projetos de IC ou atividades de pesquisa?</p>
                        <Input 
                            v-model="object.previousXp" 
                            :label="object.previousXp ? 'Sim' : 'Não'" 
                            type="checkbox" 
                        />
                    </div>
                    <hr class="mb-3">
                    <div class="mb-3">
                        <p class="mb-3 font-[500]">2. Já trabalhou com tecnologias assistivas ou áreas correlatas?</p>
                        <TextArea v-model="object.previousTech" placeholder="Especifique caso já tenha trabalhado" required :width="'w-full'" :height="'h-[100px]'" :error="errors.previousTech" />
                    </div>
                    <hr class="mb-3">
                    <div class="mb-3">
                        <p class="mb-3 font-[500]">3. Tem experiência em programação ou em alguma linguagem de computação?</p>
                        <TextArea v-model="object.previousProg" placeholder="Especifique caso tenha experiência" required :width="'w-full'" :height="'h-[100px]'" :error="errors.previousProg" />
                    </div>
                </div>
                <p class="text-red-500 text-sm mb-1">Campos obrigatórios *</p>
                <hr class="mb-3">
            </div>
            <div id="dadosDisponibilidade" class="mb-3 rounded rounded-xl p-5 border border-sky-700">
                <h1 class="text-sky-700 font-bold text-xl mb-5">Disponibilidade</h1>
                <div class="mb-3">
                    <div class="mb-3">
                        <div class="mb-3">
                            <p class="mb-3 font-[500]">1. Disponibilidade semanal para o projeto</p>
                            <TextArea v-model="object.disponibility" placeholder="Especifique sua disponibilidade durante a semana, ex: seg a sex das 10h as 15h" required :width="'w-full'" :height="'h-[100px]'" :error="errors.disponibility" />
                        </div>
                        <hr class="mb-3">
                        <div>
                            <p class="mb-3 font-[500]">2. Tem interesse em desenvolver atividades de estágio enquanto realiza o projeto? </p>
                            <Input
                                v-model="object.estagio" 
                                :label="object.estagio ? 'Sim' : 'Não'" 
                                type="checkbox" 
                            />
                        </div>
                    </div>
                </div>
                <p class="text-red-500 text-sm mb-1">Campos obrigatórios *</p>
                <hr class="mb-3">
            </div>
            <div class="flex justify-end mb-3">
                <button @click="save" class="flex gap-3 items-center rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">
                    <p>Salvar</p>
                    <font-awesome-icon class="text-white" :icon="['fas', 'floppy-disk']" />
                </button>
            </div>
        </div>
    </div>
    
    <div v-if="toastMessage" class="fixed top-[100px] left-0 right-0 bg-red-500 text-white text-center p-3 z-50">
      {{ toastMessage }}
    </div>
    <Toast v-if="showToast" message="Dados salvos com sucesso!" />
    <Footer />
  </div>
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'
import Input from '@/components/input.vue'
import Select from '@/components/select.vue'
import TextArea from '@/components/textArea.vue'
import Loader from '@/components/loader.vue'
import Toast from '@/components/toast.vue'

export default {
  name: 'conselhoSetorial',
  components: {
    TadsNavbar,
    Footer,
    Input,
    Select,
    TextArea,
    Loader,
    Toast
  },
  data: () => ({
    nacionalities: [
      'Brasileiro(a)', 'Americano(a)', 'Francês(esa)', 'Japonês(esa)', 
      'Alemão(a)', 'Mexicano(a)', 'Italiano(a)', 'Espanhol(a)', 
      'Chinês(esa)', 'Canadense'
    ],
    courses: [
      'TADS', 'TCI', 'TNI', 'Luteria'
    ],
    object: {
      name: null,
      date: null,
      email: null,
      phone: null,
      nacionality: null,
      city: null,
      address: null,
      grr: null,
      course: null,
      previousTech: null,
      previousProg: null,
      disponibility: null,
    },
    errors: {},
    showToast: false,
    toastMessage: null,
    isLoading: false 
  }),
  methods: {
    validateFields() {
      this.errors = {}

      Object.keys(this.object).forEach(field => {
        if (this.object[field] === null || this.object[field] === '') {
          this.errors[field] = 'Este campo é obrigatório';
        }
      });

      if (this.object.phone && !/^\(\d{2}\) \d{5}-\d{4}$/.test(this.object.phone)) {
        this.errors.phone = 'Número de telefone inválido. Use o formato (DDD) 99999-9999.';
      }

      if (this.object.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.object.email)) {
        this.errors.email = 'Email inválido.';
      }

      if (this.object.grr && this.object.grr.length !== 8) {
        this.errors.grr = 'O GRR deve conter exatamente 8 dígitos.'
      }
    },
    save() {
      this.validateFields()

      if (Object.keys(this.errors).length > 0) {
        this.toastMessage = 'Por favor, corrija os campos com erros.'
        window.scrollTo(0, 0);

        setTimeout(() => {
          this.toastMessage = null
        }, 3000)
        return
      }

      this.isLoading = true
      this.showToast = true
      setTimeout(() => {
        this.isLoading = false
        this.$router.push('/tads')
      }, 500)
    }
  }
}
</script>
