<template>
  <div>
    <div class="grid grid-cols-4">
      <div class="bg-sky-600 col-span-3 p-1"></div>
      <div class="bg-sky-800"></div>
    </div> 
    <div class="flex justify-between px-5 bg-white shadow-lg">
      <div class="flex items-center">
        <img @click="this.$router.push('/tads')" src="@/assets/analise-e-desenvolvimento-de-sistemas-curitiba-sept.png" alt="logoSept" class="h-[10vh] cursor-pointer">
        <div class="ml-12 flex gap-5">
            <p @click="this.$router.push('/about-tads')" class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Sobre</p>
            <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Documentos</p>
            <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Pesquisa e Extensão</p>
            <p class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Sites</p>
            <a href="http://200.236.3.198:28080/secretariaonline/Home" class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Secretaria Online</a>
            <p @click="this.$router.push('/tads-coordenacao')" class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Coordenação</p>
            <p @click="this.$router.push('/tads-corpo-docente')" class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Corpo Docente</p>
            <p @click="this.$router.push('/')" class="cursor-pointer font-[500] hover:text-sky-700 hover:transition duration-300 ease-in-out">Sept</p>
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
      languageActive: false,
      selectedLanguage: 'PT',
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
