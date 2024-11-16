<template>
  <div>
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
      <div class="w-[70vw]">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 text-5xl mb-5">
            <h1 class="font-bold text-sky-700">Tads</h1>
            <p class="font-[400]">o curso</p>
          </div>
          <div class="border border-sky-700 rounded rounded-xl w-[25%] mb-5 relative">
            <div 
              @click="this.seePortarias = !this.seePortarias" 
              :class="this.seePortarias ? 'bg-sky-700' : ''" 
              class="rounded-t rounded-t-xl p-3 cursor-pointer flex justify-between items-center">
              <p 
                :class="this.seePortarias ? 'text-white' : ''" 
                class="text-2xl font-bold text-sky-700">Portarias</p>
              <font-awesome-icon 
                :icon="this.seePortarias ? 'chevron-up' : 'chevron-down'" 
                :class="[this.seePortarias ? 'text-white' : '', 'text-sky-700']" />
            </div>
            <div 
              v-if="this.seePortarias" 
              class="absolute top-full left-0 w-full bg-white border-t border-t-sky-700 p-3 shadow-lg z-50">
              <div class="flex flex-col gap-3">
                <a href="https://www.tads.ufpr.br/pluginfile.php/1727/mod_page/content/106/SEI_UFPR%20-%203602660%20-%20Portaria.pdf" class="cursor-pointer hover:text-sky-700">
                  <p><b>Portaria 40-21 Prograd</b> - Altera distribuição de cargas horárias de disciplinas c/ EaD</p>
                </a>
                <a href="https://www.tads.ufpr.br/pluginfile.php/1727/mod_page/content/106/SEI_UFPR%20-%203410263%20-%20Portaria.pdf" class="cursor-pointer hover:text-sky-700">
                  <p><b>Portaria 16-21 Prograd</b> - Substituir a disciplina DS612 por DS613 e DS614</p>
                </a>
                <a href="https://www.tads.ufpr.br/pluginfile.php/1727/mod_page/content/106/20200919Portaria171PROGRAD-AlteraDistribChDisciplinasLab.pdf" class="cursor-pointer hover:text-sky-700">
                  <p><b>Portaria 171-20 Prograd</b> - Altera distribuição de cargas horárias de disciplinas c/ laboratório</p>
                </a>
                <a href="https://www.tads.ufpr.br/pluginfile.php/1727/mod_page/content/106/Portaria163-20%20Prograd-InclOptativasSEI_UFPR%20-%202936503%20-%20Portaria.pdf" class="cursor-pointer hover:text-sky-700">
                  <p><b>Portaria 163-20 Prograd</b> - Inclusão de optativas DS876 até DS879</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section class="mb-5 w-full w-full text-justify leading-relaxed text-gray-800">
          <p class="mb-3">O curso superior de <b>Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)</b> foi criado no ano de 2009, em substituição aos cursos superiores de Tecnologia em Sistemas de Informação (2004) e Tecnologia em Informática (2001).</p>
          <p class="mb-3">O objetivo do curso é formar o profissional Tecnólogo em Análise e Desenvolvimento de Sistemas, capacitado para analisar as necessidades e demandas da sociedade, construir soluções que explorem e apliquem recursos de informática e novas tecnologias, atuar com princípios éticos e promover o desenvolvimento humano.</p>
          <p class="mb-3">O curso consta no Catálogo Nacional de Cursos Superiores de Tecnologia (CNCST) e possui nota máxima (5) no ENADE (Exame Nacional de Desempenho dos Estudantes, e-mec 42461), além de conceitos 3 no CPC (Conceito Preliminar de Curso), 4 no CC (Conceito de Curso) e 3 no IDD (Indicador de Diferença entre o Desempenho Observado e Esperado).</p>
          <p class="mb-3">O TADS possui duração recomendada de <b>3 anos</b>, com oferta em dois turnos: vespertino (47A) e noturno (48A). Anualmente, são disponibilizadas <b>40 vagas</b> no período vespertino (1º semestre) e <b>80 vagas</b> no período noturno, divididas entre o 1º e 2º semestres, com 40 alunos por turma.</p>
          <p>As aulas acontecem de segunda a sábado, das <b>14:30 às 18:30</b> no turno vespertino, e das <b>19:00 às 23:00</b> no turno noturno. A carga horária total do curso é de <b>2310 horas</b>, sendo 2130 horas obrigatórias, 120 horas optativas e 60 horas de atividades complementares. A carga horária semestral varia entre 240 e 390 horas, com prazo máximo de integralização curricular de 9 semestres.</p>
        </section>
        <div class="mb-5 flex flex-col md:flex-row justify-between gap-5">
          <div class="w-full md:w-[50%]">
            <p class="font-bold text-2xl text-sky-700 mb-3">Ementa atual</p>
            <img src="../../assets/EmentasGradeTADS20220613.png" alt="" class="w-full">
          </div>
          <div class="w-full md:w-[50%] h-auto md:h-[40%]">
            <p class="font-bold text-2xl text-sky-700 mb-3">Ementa 2009 - 2016</p>
            <img src="../../assets/TADS_digarama_antigo.png" alt="" class="w-full h-full">
          </div>
        </div>
        
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'tadsView',
    components: {
        TadsNavbar,
        Footer
    },
    data: () => ({
      seePortarias: false
    })
}
</script>
