<template>
    <div>
        <TadsNavbar class="sticky top-0 z-10 mb-5" />
        <div class="flex justify-center">
            <div class="w-[70vw]">
                <h1 class="text-sky-700 font-bold text-4xl mb-5">Trabalho de Conclusão de Curso (TCC) - Diretrizes e Informações Importantes</h1>
                <h1 class="font-bold text-xl text-sky-700 mb-3">Documentação e Templates</h1>
                <ul class="list-disc mx-5 mb-3">
                    <li>
                        <a class="font-bold text-sky-700 hover:text-sky-900" href="https://www.tads.ufpr.br/pluginfile.php/1733/mod_page/content/94/Resolu%C3%A7%C3%A3o%20TCC%20TADS.pdf">Regimento</a>
                        e 
                        <a class="font-bold text-sky-700 hover:text-sky-900" href="https://bibliotecas.ufpr.br/servicos/normalizacao/">Manual de Normalização</a>
                         (inclui modelos para TCC, monografias, dissertações e teses em 
                         <b>ODT, DOCX, DOC, e <a class="text-sky-700 hover:text-sky-900" href="https://bibliotecas.ufpr.br/wp-content/uploads/2022/02/tutorial_latex.pdf">LaTeX - Modelo ABNT-UFPR</a></b> ).
                    </li>
                    <li><b>Acervo/Banco de TCCs: </b><a class="font-bold text-sky-700 hover:text-sky-900" href="https://acervodigital.ufpr.br/handle/1884/34955">Consulte aqui os trabalhos disponíveis na Biblioteca UFPR.</a></li>
                </ul>
                <hr class="mb-3">
                <h1 class="font-bold text-3xl text-sky-700 mb-5">DS950 - Trabalho de Conclusão de Curso 1 (TCC1)</h1>
                <h1 class="font-bold text-xl text-sky-700 mb-3">Entrega do TCC1</h1>
                <ul class="list-disc mb-3 mx-5">
                    <li>Envie o <b>documento completo em PDF</b> para o professor orientador até <b>14/12/2024.</b></li>
                </ul>
                <h1 class="font-bold text-xl text-sky-700 mb-3">Avaliação</h1>
                <ul class="list-disc mb-3 mx-5">
                    <li>O professor orientador avaliará o planejamento do TCC. Se necessário, será constituída uma banca para avaliação.</li>
                </ul>
                <h1 class="font-bold text-xl text-sky-700 mb-3">Certificação</h1>
                <ul class="list-disc mb-3 mx-5">
                    <li>O orientador requisita as declarações para a unidade <b>CCTADS</b> e organiza o envio das certificações aos membros da banca.</li>
                </ul>
                <hr class="mb-3">
                <h1 class="font-bold text-3xl text-sky-700 mb-5">DS960 - Trabalho de Conclusão de Curso 2 (TCC2)</h1>
                <h1 class="font-bold text-xl text-sky-700 mb-3">1ª Entrega</h1>
                <ul class="list-disc mx-5 mb-3">
                    <li>Entregue o trabalho à banca até <b>uma semana antes da defesa.</b></li>
                    <li>Envie: PDF completo | Link para o código-fonte do sistema, incluindo um arquivo <b>LEIA-ME</b> com instruções de instalação e configuração.</li>
                </ul>
                <h1 class="font-bold text-xl text-sky-700 mb-3">Defesa do TCC</h1>
                <ul class="list-disc mx-5 mb-3">
                    <li>Período: <b>02/12/2024 a 13/12/2024</b>, em horários definidos pelo orientador.</li>
                    <li>A apresentação deve durar <b>20 minutos</b> e incluir: Contexto de aplicação do trabalho | Demonstração do software em funcionamento | Não é necessário apresentar elementos textuais ou diagramas</li>
                    <li>A banca terá <b>30 minutos</b> para perguntas e arguição, incluindo análise de código e documentação.</li>
                </ul>
                <h1 class="font-bold text-xl text-sky-700 mb-3">Entrega Final</h1>
                <ul class="mx-5 list-disc mb-3">
                    <li>Após aprovação, a versão final corrigida deve ser enviada ao orientador até <b>18/12/2024.</b></li>
                    <li>Enviar um e-mail para bibliotecasept@ufpr.br e bibept@gmail.com com o assunto: <b>DEPÓSITO DE TCC - TADS.</b></li>
                    <li>Informar o link para os seguintes itens: Documentação em PDF com a ata de aprovação assinada | Código-fonte compactado (ZIP) com instruções de instalação.</li>
                    <li>Após a conferência, a biblioteca emitirá um <b>Recibo de Entrega de TCC</b> via e-mail.</li>
                </ul>
                <h1 class="font-bold text-xl text-sky-700 mb-3">Formalização da Banca</h1>
                <ul class="mx-5 mb-3 list-disc">
                    <li>O orientador encaminha processo SEI com os seguintes documentos: Ata de Defesa e Termo de Aprovação | A coordenação emite as declarações e finaliza o processo.</li>
                    <li>A <b>lista de presença</b> será online, utilizando um link e palavra-senha informados durante a defesa.</li>
                </ul>
                <hr class="mb-3">
                <h1 class="font-bold text-3xl text-sky-700 mb-3">Orientações Gerais</h1>
                <ul class="mx-5 mb-3 list-disc">
                    <li><b>Apresentação:</b> a defesa é pública, e o comportamento e vestuário devem ser formais.</li>
                    <li><b>Contato:</b> reserve o auditório ou sala previamente com o orientador.</li>
                    <li><b>Nota Final:</b> será lançada após o envio do recibo de depósito pela biblioteca ao orientador.</li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
  
</template>

<script>
import TadsNavbar from '@/components/tadsNavbar.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'tcc',
    components: {
        TadsNavbar,
        Footer
    }
}
</script>
