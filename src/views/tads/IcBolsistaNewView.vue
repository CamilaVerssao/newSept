<template>
  <div>
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <h1 class="text-sky-700 font-bold text-4xl mb-3">Cadastro de Bolsista de Iniciação Científica</h1>
            <p class="font-bold mb-3">TECNOLOGIA ASSISTIVA NA AVALIAÇÃO CLÍNICO-FUNCIONAL INTEGRADA E PRESCRIÇÃO DE EXERCÍCIOS PARA PESSOAS IDOSAS USUÁRIAS DO SUS</p>
            <hr class="mb-5">
            <div id="dadosPessoais" class="mb-5 rounded rounded-xl p-5 border border-sky-700">
                <h1 class="text-sky-700 font-bold text-xl mb-5">Dados pessoais</h1>
                <div class="grid grid-cols-3 gap-3 mb-3">
                    <Input required class="col-span-2" placeholder="Fulano da Silva" label="Nome" type="text" :width="'w-full'" />
                    <Input required label="Data de Nascimento" type="date" :width="'w-full'" />
                    <Input required placeholder="email@gmail.com" label="Email" type="email" :width="'w-full'" />
                    <Input required placeholder="(DDD) 99999-9999" label="Telefone" type="phone" :width="'w-full'" />
                    <Select required placeholder="Nacionalidade" label="Nacionalidade" :items="this.nacionalities" :width="'w-full'" />
                    <Input required placeholder="Curitiba" label="Cidade" type="text" :width="'w-full'" />
                    <Input required class="col-span-2" placeholder="Rua Exemplo, 222" label="Endereço Completo" type="text" :width="'w-full'" />
                </div>
                <p class="text-red-500 text-sm mb-1">Campos obrigatórios *</p>
                <hr class="mb-3">
            </div>
            <div id="dadosAcademicos" class="mb-3 rounded rounded-xl p-5 border border-sky-700">
                <h1 class="text-sky-700 font-bold text-xl mb-5">Dados acadêmicos</h1>
                <div class="grid grid-cols-3 gap-3 mb-3">
                    <Input required placeholder="20221010" label="GRR" type="text" :width="'w-full'" />
                    <Select required placeholder="TADS" label="Curso" :items="this.courses" :width="'w-full'" />
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
                            required 
                            v-model="previousXp" 
                            :label="previousXp ? 'Sim' : 'Não'" 
                            type="checkbox" 
                        />
                    </div>
                    <hr class="mb-3">
                    <div class="mb-3">
                        <p class="mb-3 font-[500]">2. Já trabalhou com tecnologias assistivas ou áreas correlatas?</p>
                        <TextArea placeholder="Especifique caso já tenha trabalhado" required :width="'w-full'" :height="'h-[100px]'" />
                    </div>
                    <hr class="mb-3">
                    <div class="mb-3">
                        <p class="mb-3 font-[500]">3. Tem experiência em programação ou em alguma linguagem de computação?</p>
                        <TextArea placeholder="Especifique caso tenha experiência" required :width="'w-full'" :height="'h-[100px]'" />
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
                            <TextArea placeholder="Especifique sua disponibilidade durante a semana, ex: seg a sex das 10h as 15h" required :width="'w-full'" :height="'h-[100px]'" />
                        </div>
                        <hr class="mb-3">
                        <div>
                            <p class="mb-3 font-[500]">2. Tem interesse em desenvolver atividades de estágio enquanto realiza o projeto? </p>
                            <Input 
                                required 
                                v-model="previousXp" 
                                :label="estagio ? 'Sim' : 'Não'" 
                                type="checkbox" 
                            />
                        </div>
                    </div>
                </div>
                <p class="text-red-500 text-sm mb-1">Campos obrigatórios *</p>
                <hr class="mb-3">
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'
import Input from '@/components/input.vue'
import Select from '@/components/select.vue'
import TextArea from '@/components/textArea.vue'

export default {
    name: 'conselhoSetorial',
    components: {
        TadsNavbar,
        Footer,
        Input,
        Select,
        TextArea
    },
    data: () => ({
        nacionalities: [
            'Brasileiro(a)',
            'Americano(a)',
            'Francês(esa)',
            'Japonês(esa)',
            'Alemão(a)',
            'Mexicano(a)',
            'Italiano(a)',
            'Espanhol(a)',
            'Chinês(esa)',
            'Canadense'
        ],
        previousXp: false,
        estagio: false
    })
}
</script>
