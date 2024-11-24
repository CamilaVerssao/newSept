<template>
  <div>
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
          <div class="flex justify-between mb-5">
            <h1 class="text-sky-700 font-bold text-4xl mb-3">COA (Orientação)</h1>
            <a href="https://www.tads.ufpr.br/pluginfile.php/1730/mod_page/content/12/Orientac%CC%A7a%CC%83o%20Acade%CC%82mica%20no%20Curso%20de%20Tecnologia%20em%20Ana%CC%81lise%20e%20Desenvolvimento%20de%20Sistemas.pdf" class="items-center rounded rounded-xl py-2 px-5 h-[40px] bg-sky-700 hover:bg-sky-900 text-white">
              <p>Ver mais informações</p>
            </a>
          </div>
          <p class="text-jusitfy mb-3">
            O <b>Programa de Orientação Acadêmica</b> oferece suporte aos estudantes
            do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS),
            ajudando a superar dificuldades acadêmicas, evitar retenção ou evasão,
            e garantir o progresso no curso.
          </p>
          <hr class="mb-">
          <h1 class="font-bold text-xl text-sky-700 mb-3">Como funciona?</h1>
          <ul class="list-disc mb-3 mx-5">
            <li>Atendimentos Individuais: Realizados pela Comissão de Orientação Acadêmica (COA), por agendamento, via Microsoft Teams.</li>
            <li>Público Alvo: Estudantes com dificuldades no curso ou baixo desempenho em disciplinas / Alunos que extrapolaram o tempo regular de integralização do curso.</li>
            <li>Plano de Integralização: Durante o atendimento, um plano personalizado é elaborado, considerando as particularidades do aluno.</li>
          </ul>
          <hr class="mb-3">
          <h1 class="font-bold text-xl text-sky-700 mb-3">Comissão de Orientação Acadêmica (COA)</h1>
          <p class="mb-3">A COA é composta pelos seguintes professores</p>
          <div class="rounded rounded-xl border border-sky-700 p-3 mb-3">
            <p class="mb-3"><span class="font-bold">Prof. Luiz Antonio Cardoso (Presidente): </span>lcardosocx@gmail.com</p>
            <p class="mb-3"><span class="font-bold">Profa. Sandramara S. K. de Paula Soares: </span>sskusano@gmail.com</p>
            <p><span class="font-bold">Profa. Carina Folena Cardoso Paes: </span> carinafolena@ufpr.br</p>
          </div>
          <hr class="mb">
          <h1 class="font-bold text-xl text-sky-700 mb-3">Agendamento</h1>
          <p class="mb-3">Envie um e-mail para qualquer docente da COA utilizando os endereços acima.</p>
          <hr class="mb-3">
          <h1 class="font-bold text-xl text-sky-700 mb-3">Horários de Atendimento</h1>
          <p class="mb-3"><span class="font-bold">Terças-feiras: </span>10h</p>
          <p class="mb-3"><span class="font-bold">Quintas-feiras: </span>18h</p>
          <p class="mb-3">Se necessário, horários alternativos podem ser ajustados conforme a disponibilidade da comissão.</p>
          <hr class="mb-3">
          <h1 class="font-bold text-xl text-sky-700 mb-3">Importância do Programa</h1>
          <p class="mb-3">Manter um bom desempenho acadêmico é essencial para:</p>
          <ul class="list-disc mb-3 mx-5">
            <li>Concluir o curso dentro do prazo regulamentar.</li>
            <li>Evitar o risco de jubilamento.</li>
            <li>Garantir a regularização e renovação de estágios.</li>
          </ul>
          <p class="text-sky-700 mb-3">A COA está à disposição para ajudar você a alcançar seus objetivos acadêmicos no TADS!</p>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'conselhoSetorial',
    components: {
        TadsNavbar,
        Footer
    }
}
</script>
