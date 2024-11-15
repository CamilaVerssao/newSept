<template>
  <div>
    <div class="grid grid-cols-4">
      <div class="bg-sky-600 col-span-3 p-1"></div>
      <div class="bg-sky-800"></div>
    </div> 
    <div class="flex justify-between px-5 bg-white shadow-lg">
      <div class="flex items-center">
        <img @click="this.$router.push('/')" src="@/assets/logo.jpg" alt="logoSept" class="h-[10vh] cursor-pointer">
        <div class="ml-12 flex gap-5">
            <div class="relative" @mouseover="this.isAboutActive = true" @mouseleave="this.isAboutActive = false">
                <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Sobre</p>
                <div v-if="isAboutActive" class="absolute bg-white border rounded-md p-3 shadow-lg w-[10vw]">
                    <ul>
                        <li @click="this.$router.push('/history')" class="p-2 hover:bg-sky-100 cursor-pointer">História</li>
                        <li @click="this.$router.push('/docent-body')" class="p-2 hover:bg-sky-100 cursor-pointer">Corpo Docente</li>
                        <li @click="this.$router.push('/systems')" class="p-2 hover:bg-sky-100 cursor-pointer">Sistemas</li>
                        <li @click="this.$router.push('/nte')" class="p-2 hover:bg-sky-100 cursor-pointer">NTE</li>
                        <li @click="this.$router.push('/colegiado')" class="p-2 hover:bg-sky-100 cursor-pointer">Colegiados</li>
                    </ul>   
                </div>
            </div>
            <div class="relative" @mouseover="this.isCourseActive = true" @mouseleave="this.isCourseActive = false">
                <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Cursos</p>
                <div v-if="isCourseActive" class="absolute bg-white border rounded-md p-3 shadow-lg w-[10vw]">
                    <ul>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Análise e Desenvolvimento de Sistemas</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Petróleo e Gás</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Produção Cênica</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Secretariado</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Luteria</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Comunicação Institucional</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Negócios Imobiliários</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Negócios Imobiliários</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Gestão de Qualidade</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Agente Comunitário de Saúde</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Gestão Pública</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Pós em Bioinformática</li>
                    </ul>   
                </div>
            </div>
            <div class="relative" @mouseover="this.isStudentActive = true" @mouseleave="this.isStudentActive = false">
              <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Espaço do Estudante</p>
              <div v-if="isStudentActive" class="absolute bg-white border rounded-md p-3 shadow-lg w-[10vw]">
                <ul>
                    <li class="p-2 hover:bg-sky-100 cursor-pointer">
                        <a href="https://siga.ufpr.br/siga/selecionanivelacesso?comboAcesso=IXSEPX40001016111G0XSEPX49XSEPX6XSEPXXSEPX0XSEPX1">SIGA</a>
                    </li>
                    <li class="p-2 hover:bg-sky-100 cursor-pointer">
                        <a href="https://bibliotecas.ufpr.br/">Biblioteca</a>
                    </li>
                    <li @click="this.$router.push('/bolsas')" class="p-2 hover:bg-sky-100 cursor-pointer">Bolsas</li>
                    <li 
                        @mouseover="this.isGraduationActive = true" 
                        @mouseleave="this.isGraduationActive = false"
                        class="p-2 hover:bg-sky-100 cursor-pointer relative"
                    >
                        Formatura
                        <div v-if="this.isGraduationActive" @mouseover="this.isGraduationActive ? this.isGraduationActive = true : this.isGraduationActive = false" class="bg-white border rounded-md shadow-lg">
                            <ul>
                                <li class="p-2 hover:bg-sky-100 cursor-pointer">
                                    <a href="http://www.prograd.ufpr.br/portal/diplomas/">Diplomas</a>
                                </li>
                                <li class="p-2 hover:bg-sky-100 cursor-pointer">
                                    <a href="http://www.sept.ufpr.br/portal/estudantes/wp-content/uploads/sites/16/2020/02/25manual_colacao_grau.pdf">Manual de Colação de Grau</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="p-2 hover:bg-sky-100 cursor-pointer">Serviços</li>
                </ul>
              </div>
            </div>
            <p @click="this.$router.push('/pesquisa-extensao')" class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Pesquisa e Extensão</p>
            <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Concursos e Testes</p>
            <div class="relative" @mouseover="this.isInfoActive = true" @mouseleave="this.isInfoActive = false">
                <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Acesso a Informação</p>
                <div v-if="isInfoActive" class="absolute bg-white border rounded-md p-3 shadow-lg w-[10vw]">
                    <ul>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">
                          <a href="http://200.236.3.198:28080/calendariosetorial/Home">Agenda</a>
                        </li>
                        <li @click="this.$router.push('/conselho-setorial')" class="p-2 hover:bg-sky-100 cursor-pointer">Conselho Setorial</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Financeiro</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Resoluções</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Editais</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">SAAD</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">NIM</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">NIM</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Licitações</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Formatura</li>
                        <li class="p-2 hover:bg-sky-100 cursor-pointer">Serviços</li>
                    </ul>
                </div>
            </div>

            <div class="relative" @mouseover="this.isContactActive = true" @mouseleave="this.isContactActive = false">
                <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Contato</p>
                 <div v-if="isContactActive" class="absolute bg-white border rounded-md p-3 shadow-lg w-[10vw]">
                    <ul>
                        <li @click="this.$router.push('/contact')" class="p-2 hover:bg-sky-100 cursor-pointer">Telefones</li>
                        <li @click="this.$router.push('/map')" class="p-2 hover:bg-sky-100 cursor-pointer">Mapa</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      
      <div class="flex items-center relative">
        <div class="cursor-pointer h-[40px] hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out p-3 flex items-center">
          <font-awesome-icon icon="magnifying-glass" />
        </div>

        <div
          class="flex gap-2 items-center cursor-pointer h-[40px] hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out p-3"
          @click="toggleLanguageMenu"
        >
          <p>{{ selectedLanguage }}</p>
          <font-awesome-icon icon="chevron-down" />
        </div>

        <div v-if="languageActive" class="transform transition-transform duration-300 absolute top-[92px] left-0 text-white bg-sky-700 shadow-lg rounded-b-md p-3 w-[125px]">
          <ul>
            <li
              v-for="language in languagesArray"
              :key="language.id"
              class="p-1 mb-2 text-center hover:bg-sky-800 cursor-pointer"
              :class="{ 'bg-sky-800': language.id === selectedLanguage }"
              @click="setLanguage(language.id)"
            >
              {{ language.id }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languagesArray: [
        { id: 'PT', isActive: false },
        { id: 'ENG', isActive: false },
        { id: 'ESP', isActive: false },
        { id: 'JPN', isActive: false }
      ],
      isGraduationActive: false,
      languageActive: false,
      selectedLanguage: 'PT',
      isCourseActive: false,
      isStudentActive: false,
      isAboutActive: false,
      isInfoActive: false,
      isContactActive: false
    };
  },
  methods: {
    toggleLanguageMenu() {
      this.languageActive = !this.languageActive;
    },
    setLanguage(languageId) {
      this.selectedLanguage = languageId;
      this.languageActive = false;
    }
  }
};
</script>
