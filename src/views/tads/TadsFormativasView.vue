<template>
  <div>
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <h1 class="text-sky-700 font-bold text-4xl mb-5">CAF (Ativ. Formativas)</h1>
            <div class="mb-3">
                <p class="mb-3">
                    A <b>Comissão de Avaliação de Atividades Formativas</b> 
                    é responsável por validar solicitações relacionadas a atividades formativas
                    no curso.
                </p>
            </div>
            <div class="mb-3 p-3 rounded rounded-xl border border-sky-700">
                <h1 class="font-bold text-xl text-sky-700 mb-3">Responsável</h1>
                <p><b>Prof. Paulo Eduardo Sobreira Moraes </b>paulomoraes@ufpr.br</p>
            </div>
            <hr class="mb-3">
            <h1 class="font-bold text-xl text-sky-700 mb-3">Como Solicitar?</h1>
            <div class="grid grid-cols-3 mb-3 gap-3">
                <div class="rounded rounded-xl border border-sky-700 p-3">
                    <div class="w-[20px] h-[20px] mb-3 rounded rounded-full bg-sky-700 text-white flex items-center justify-center"><p>1</p></div>
                    <div class="flex items-center">
                        <p class="text-justify">Acesse a secretaria online do SEPT para fazer sua solicitação.</p>
                    </div>
                </div>
                <div class="rounded rounded-xl border border-sky-700 p-3">
                    <div class="w-[20px] h-[20px] mb-3 rounded rounded-full bg-sky-700 text-white flex items-center justify-center"><p>2</p></div>
                    <div class="flex items-center">
                        <p class="text-justify">Digitalize e anexe os documentos comprobatórios necessários para cada atividade.</p>
                    </div>
                </div>
                <div class="rounded rounded-xl border border-sky-700 p-3">
                    <div class="w-[20px] h-[20px] mb-3 rounded rounded-full bg-sky-700 text-white flex items-center justify-center"><p>3</p></div>
                    <div class="flex items-center">
                        <p class="text-justify">Consulte o regulamento das atividades formativas para entender os detalhes do processo.</p>
                    </div>
                </div>
            </div>
            <hr class="mb-3">
            <h1 class="font-bold text-xl text-sky-700 mb-3">Regulamentos e Formulários</h1>
            <ul class="list-disc mx-5 mb-3">
                <li class="cursor-pointer text-sky-700 hover:text-sky-900"><a href="https://www.tads.ufpr.br/pluginfile.php/1732/mod_page/content/19/RegulamentoAtividadesFormativas2017.pdf"></a>Regulamento das atividades formativas (currículo atual - 2017).</li>
                <li class="cursor-pointer text-sky-700 hover:text-sky-900"><a href="https://www.tads.ufpr.br/pluginfile.php/1732/mod_page/content/19/formAF_2017.pdf"></a>Formulário de Avaliação de Atividades Formativas (currículo atual - 2017).</li>
            </ul>
            <hr class="mb-3">
            <h1 class="font-bold text-xl text-sky-700 mb-3">Avisos Importantes</h1>
            <ul class="list-disc mx-5 mb-3">
                <li>Cada atividade possui um <b>limite máximo de carga horária validável.</b></li>
                <li><b>Certificados de plataformas como Alura e Udemy não são aceitos</b>, pois não garantem controle sobre a participação real do aluno.</li>
                <li>Certificados de plataformas como <b>Coursera, EdX e ESR</b> são aceitos, desde que exijam projetos finais ou acompanhamento de tutores.</li>
            </ul>
            <hr class="mb-3">
            <h1 class="font-bold text-xl text-sky-700 mb-3">Erros Comuns</h1>
            <ul class="list-disc mx-5 mb-3">
                <li>Solicitar a validação de uma atividade incorreta (ex.: certificado descreve uma atividade diferente da solicitada).</li>
                <li>Não anexar documentos comprobatórios ou enviar documentação incompleta.</li>
                <li>Esquecer itens como: Conteúdo ou ementa de cursos / Documentos que comprovem admissão e desligamento (quando aplicável) / Prova de aprovação em disciplinas isoladas.</li>
            </ul>
            <hr class="mb-3">
            <p class="text-sky-700 mb-3">Para evitar problemas, revise todos os documentos antes de enviar e consulte o regulamento disponível.</p>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'ativFormativas',
    components: {
        TadsNavbar,
        Footer
    }
}
</script>

<style>

</style>