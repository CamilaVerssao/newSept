<template>
  <div>
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <h1 class="text-sky-700 font-bold text-4xl mb-3">COE (Estágio)</h1>
            <div class="mb-3">
                <p class="mb-3">Membros da COE:</p>
                <div class="flex gap-3 mb-12">
                    <div class="flex items-center border rounded rounded-xl">
                        <div class="h-full flex items-center p-3 rounded-l rounded-l-xl w-[50%] bg-sky-700 text-white">
                            <p class="text-center font-[500]">Prof. Luiz Antônio Pereira Neves</p>
                        </div>
                        <div class="p-3 w-[50%]">
                            <p class="text-center">neves@ufpr.br</p>
                        </div>
                    </div>
                    <div class="flex items-center border rounded rounded-xl">
                        <div class="flex items-center h-full p-3 rounded-l rounded-l-xl w-[50%] bg-sky-700 text-white">
                            <p class="text-center font-[500]">Prof. Mario de Paula Soares Filho</p>
                        </div>
                        <div class="p-3 w-[50%]">
                            <p class="text-center">mariopaulasoares@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mb-3">
            <div class="mb-5">
                <div class="flex justify-between items-center mb-3">
                    <h1 class="text-sky-700 font-bold text-2xl mb-3">Estágio não obrigatório</h1>
                    <a class="text-white bg-sky-700 px-3 py-1 rounded rounded-xl hover:bg-sky-900 cursor-pointer" href="https://www.tads.ufpr.br/pluginfile.php/1731/mod_page/content/64/Res%2001-13-TADS%20-%20Est%C3%A1gio%20N%C3%A3o%20Obrigat%C3%B3rio.pdf">
                        Acessar Resolução 01-13
                    </a>
                </div>
                <p class="mb-3 text-justify">Uma vez selecionado, o aluno deve estabelecer um contrato de estágio preenchendo os devidos formulários conforme as normas da UFPR em <a class="text-sky-700 hover:text-sky-900" href="http://www.prograd.ufpr.br/estagio/formularios/">http://www.prograd.ufpr.br/estagio/formularios/</a></p>
                <p class="mb-3 text-justify">Estágios não obrigatórios na UFPR são tratados diretamente com a unidade contratante em processos e formulários próprios.</p>
                <p class="mb-3 text-justify"><span class="font-bold">Importante:</span> A documentação deve ser providenciada com pelo menos <span class="font-bold">10 dias de antecedência da data de início das atividades de estágio</span>. Não é permitida a homologação de pedidos com data retroativa.</p>
            </div>
            <hr class="mb-3">
            <div class="mb-5">
                <h1 class="text-sky-700 font-bold text-2xl mb-3">Procedimentos para estágios</h1>
                <div class="flex gap-3 w-full h-[350px]">
                    <div class="p-3 w-[20vw] h-full border rounded rounded-xl">
                        <div class="mb-3 rounded rounded-full bg-sky-700 text-white w-[25px] h-[25px]">
                            <p class="text-center">1</p>
                        </div>
                        <p class="text-justify">O estudante fará contato pessoalmente, Email ou Teams com um docente do núcleo duro do <span class="text-sky-500 hover:text-sky-900 cursor-pointer" @click="this.$router.push('/tads-corpo-docente')">Corpo Docente</span> do TADS, exceto membros da <span class="font-bold">COE</span>.</p>
                    </div>
                    <div class="p-3 w-[20vw] h-full border rounded rounded-xl">
                        <div class="mb-3 rounded rounded-full bg-sky-700 text-white w-[25px] h-[25px]">
                            <p class="text-center">2</p>
                        </div>
                        <p class="text-justify">O estudante encaminhará via <a class="text-sky-500 hover:text-sky-900 cursor-pointer" href="http://200.236.3.198:28080/secretariaonline/Home">Secretaria Online</a> na aba <b>"Seus estágios"</b>, o contrato assinado pelo <b>Estudante</b>, pelo <b>Concedente</b> e <b>agente de integração (se for o caso)</b>
                            no formato <b>PDF</b> em apenas uma via, o processo todo será digital a partir daí.
                        </p>
                    </div>
                    <div class="p-3 w-[20vw] h-full border rounded rounded-xl">
                        <div class="mb-3 rounded rounded-full bg-sky-700 text-white w-[25px] h-[25px]">
                            <p class="text-center">3</p>
                        </div>
                        <p class="text-justify">
                            A <span class="text-sky-500 cursor-pointer hover:text-sky-900" @click="this.$router.push('/coordenacao')">Coordenação</span>
                            do curso abrirá o processo SEI, incluindo histórico de desempenho e turno e encaminhará para que a <b>COE e Professor(a) Orientador(a)</b>
                            possam emitir o parecer de despacho. Na <a href="https://www.tads.ufpr.br/mod/url/view.php?id=4" class="text-sky-500 hover:text-sky-900 cursor-pointer">Secretaria Online</a>
                            o(a) estudante pode ver número de processo e receberá cópia dos emails enviados.
                        </p>
                    </div>
                    <div class="p-3 w-[20vw] h-full border rounded rounded-xl">
                        <div class="mb-3 rounded rounded-full bg-sky-700 text-white w-[25px] h-[25px]">
                            <p class="text-center">4</p>
                        </div>
                        <p class="text-justify">
                            A <span @click="this.$router.push('/coordenacao')" class="text-sky-500 cursor-pointer gover:text-sky-900">Coordenação</span>
                            do curso encaminhará o processo para a COAFE para o parecer final.
                        </p>
                    </div>
                    <div class="p-3 w-[20vw] h-full border rounded rounded-xl">
                        <div class="mb-3 rounded rounded-full bg-sky-700 text-white w-[25px] h-[25px]">
                            <p class="text-center">5</p>
                        </div>
                        <p class="text-justify">
                            A COAFE responderá o processo para a <span @click="this.$router.push('/coordenacao')" class="text-sky-500 cursor-pointer gover:text-sky-900">Coordenação</span>
                            que informará ao estudante o parecer e arquivará o processo para inclusão de relatórios. O estudante tem acesso via <a class="text-sky-500 hover:text-sky-900 cursor-pointer" href="http://200.236.3.198:28080/secretariaonline/Home">Secretaria Online</a> 
                            na opção <b>"Editar"</b> da lista de Estágios do aluno.
                        </p>
                    </div>
                </div>
            </div>
            <h1 class="font-bold text-xl mb-3">Estágio obrigatório</h1>
            <div class="mb-5">
                <p class="mb-5">Para realizar o estágio obrigatório, o aluno deve:</p>
                <div class="border border-sky-700 rounded rounded-xl mb-3 p-3 w-full">
                    <ul class="list-disc px-5">
                        <li class="mb-1">Estar matriculado na disciplina TI164 - Estágio Supervisionado;</li>
                        <li class="mb-1">Estar realizando atividade na área profissional em análise e desenvolvimento de sistemas;</li>
                        <li>Estabelecer um contrato de estágio preenchendo os devidos formulários conforme as normas da UFPR em <a class="text-sky-500 cursor-pointer hover:text-sky-900" href="http://www.prograd.ufpr.br/estagio/formularios/">http://www.prograd.ufpr.br/estagio/formularios/</a></li>
                    </ul>
                </div>
                <p class="mb-3 text-justify"><span class="font-bold">Importante:</span> A documentação deve ser providenciada com pelo menos <span class="font-bold">10 dias de antecedência da data de início das atividades de estágio</span>. Não é permitida a homologação de pedidos com data retroativa.</p>
                <p class="font-bold">Observações:</p>
                <div>
                    <ul class="list-disc mx-5">
                        <li class="mb-1">
                          <p class="text-justify">
                                Todos os formulários de estágio foram automatizados e devem ser gerados automaticamente a partir da página da
                                <span class="cursor-pointer text-sky-500 hover:text-sky-900" @click="this.$router.push('/coordenacao')">Coordenação</span> - <a class="cursor-pointer text-sky-500 hover:text-sky-900" href="http://www.prograd.ufpr.br/estagio/formularios/">http://www.prograd.ufpr.br/estagio/formularios/</a>
                            </p>  
                        </li>
                        <li>
                            Em caso de dúvias, entrar em contato com a <a class="cursor-pointer text-sky-500 hover:text-sky-900" href="http://www.prograd.ufpr.br/portal/coafe/ue/">CGE</a>
                            e COE.
                        </li>
                        <li>
                            Sempre que a <span class="text-sky-500 cursor-pointer hover:text-sky-900" @click="this.$router.push('/coordenacao')">Coordenação</span>
                            é informada de vagas de estágios, estas são divulgadas no <span @click="this.$router.push('/tads')" class="cursor-pointer text-sky-500 hover:text-sky-900">site do curso</span>.
                        </li>
                    </ul>
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
    name: 'conselhoSetorial',
    components: {
        TadsNavbar,
        Footer
    }
}
</script>
