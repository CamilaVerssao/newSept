<template>
  <div>
    <Navbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <div class="flex gap-3 text-5xl mb-5">
                <h1 class="font-bold text-sky-700 ">Sept</h1>
                <p class="font-[400] mb-5">sistemas ufpr</p>
            </div>
            <div class="grid grid-cols-4 gap-5 mb-12">
                <a href="http://200.236.3.198:28080/secretariaonline/Home" class="col-span-2 cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Secretaria On-line</h1>
                </a>
                <a href="http://200.236.3.198:28080/calendariosetorial/Home" class="col-span-2 cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Cronograma e Ensalamento</h1>
                </a>
                <a href="http://200.236.3.198:28080/salasept/" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Reserva de Salas</h1>
                </a>
                <a href="http://200.236.3.198:28080/portarianomeacao/Home" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Emissão de Portarias</h1>
                </a>
                <a href="https://sei.ufpr.br/sip/web/login.php?sigla_orgao_sistema=UFPR&sigla_sistema=SEI&infra_url=L3NlaS93ZWIv" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">SEI - processos</h1>
                </a>
                <a href="https://cgr.ufpr.br/portal/pops-sei/" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Manual - informação</h1>
                </a>
                <a class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl" href="https://sistemas.ufpr.br/auth/realms/producao/protocol/openid-connect/auth?client_id=portal-sistemas&scope=openid&response_type=code&redirect_uri=https%3A%2F%2Fsistemas.ufpr.br%2Flogin%2Fcallback">
                    <h1 class="text-center font-bold text-xl">SIGA - gestão acadêmica</h1>
                </a>
                <a href="http://200.236.3.198:28080/cadastrosept/" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Cadastro SEPT</h1>
                </a>
                <a href="http://www.sept.ufpr.br/portal/teletrabalho" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Teletrabalho</h1>
                </a>
                <a href="https://boletim.sigepe.gov.br/publicacao/pesquisa" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Boletim de Gestão de Pessoas</h1>
                </a>
                <a href="http://www.sept.ufpr.br/portal/wp-content/uploads/2018/11/1-1-TUTORIAL-PARA-ACESSO-E-POSTAGEM-DE-ATIVIDADES-NO-MOODLE-SEPT.pdf" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Tutorial Moodle</h1>
                </a>
                <a href="https://www.microsoft.com/pt-br/microsoft-teams/log-in" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Solicitar Manutenção</h1>
                </a>
                <a href="http://200.236.3.198:28080/ceedd/Home" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">CEEDD - apoio</h1>
                </a>
                <a href="https://portalsipec.servidor.gov.br/" class="cursor-pointer hover:shadow-lg text-sky-700 hover:bg-sky-700 hover:text-white p-3 border border-sky-700 rounded rounded-xl">
                    <h1 class="text-center font-bold text-xl">Portal SIPEC</h1>
                </a>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'docentBody',
    components: {
        Navbar,
        Footer
    }
}
</script>
