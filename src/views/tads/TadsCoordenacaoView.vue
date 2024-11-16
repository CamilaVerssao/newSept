<template>
  <div>
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <h1 class="font-bold text-sky-700 mb-5 text-5xl">Coordenação</h1>
            <div class="flex gap-3 items-center mb-5">
                <p>Rua Dr. Alcides Vieira Arcoverde, 1225 - Jardim das Américas - Curitiba/PR. <span class="mb-3 font-bold">Bloco A - Sala A02</span></p>
                <button @click="this.$router.push('/map')" class="flex items-center rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">
                    <p>Ver no mapa</p>
                </button>
            </div>
            <h1 class="font-bold border-t text-sky-700 text-xl border-t-sky-700 border-opacity-25 pt-3">Secretaria</h1>
            <div class="flex gap-3 items-center">
                <p>Rua Dr. Alcides Vieira Arcoverde, 1225 - Jardim das Américas - Curitiba/PR. <span class="mb-3 font-bold">Bloco A - Sala A01</span></p>
                <button @click="this.$router.push('/map')" class="flex items-center rounded rounded-xl py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white">
                    <p>Ver no mapa</p>
                </button>
            </div>
            <p class="mb-5">Telefone:  (41) 3361-4905</p>
            <div class="mb-5 border-t border-t-sky-700 border-opacity-25 pt-3">
                <p class="mb-3"><b>Núcleo Docente Estruturante (NDE): </b>prof.s  Alessandro Brawerman,  Dieval Guizelin, João Eugenio Marynowski, Maria Valéria da Costa, Pedro Rodrigues Torres Junior e Rafaela Mantovani Fontana <a class="text-sky-700 hover:text-sky-900" href="https://www.tads.ufpr.br/pluginfile.php/1728/mod_page/content/94/NCE.pdf">(Portaria até 27-09-2024)</a></p>
                <p class="mb-3"><b>Comissão de Orientação Acadêmica (COA): </b>prof.s carina Folena Cardoso Paes, Luiz Antonio Passos Cardoso e Sandramara Scandelari Kusano de Paula Soares <a class="text-sky-700 hover:text-sky-900" href="https://www.tads.ufpr.br/pluginfile.php/1728/mod_page/content/94/Portaria%20COA%20%281%29.pdf">(Portaria até 01-06-2023)</a></p>
                <p class="mb-3"><b>Comissão de Orientação de Estágio (COE): </b>prof.s Alessandro Brawerman, Luiz Antônio Pereira Neves e Mario de Paula Soares Filho.</p>
                <p class="mb-3"><b>Comissão de Avaliação de Atividades Formativas (CAF): </b>prof. Paulo Eduardo Sobreira de Moraes <a class="text-sky-700 hover:text-sky-900" href="https://www.tads.ufpr.br/pluginfile.php/1728/mod_page/content/94/Portaria%20CAF.pdf">(Portaria até 12-06-2024)</a></p>
                <p class="mb-3"><b>Representantes no Comitê Setorial de Pesquisa (CSP): </b>prof.s Luiz Antonio Pereira Neves (Titular) e Mario de Paula Soares Filho (Suplente) <a class="text-sky-700 hover:text-sky-900" href="https://www.tads.ufpr.br/pluginfile.php/1728/mod_page/content/94/Portaria2021_12_17_SEPT_POR_132_CSP_TADS.pdf">(Portaria até 17/12/2023)</a></p>
                <p class="mb-3"><b>Representantes no Comitê Setorial de Extensão (CSE): </b>prof.s Rafaela Mantovani Fontana (Titular) e Alessandro Brawerman (Suplente) <a class="text-sky-700 hover:text-sky-900" href="https://www.tads.ufpr.br/pluginfile.php/1728/mod_page/content/94/CSE.pdf">(Portaria até 24/10/2024)</a></p>
            </div>
            <h1 class="font-bold border-t text-sky-700 mb-5 text-xl border-t-sky-700 border-opacity-25 pt-3">Galeria de Coordenadores</h1>
            <div class="grid grid-cols-3 gap-5 mb-5">
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/brawerman.png" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2022 - 2024</h1>
                        <p class="'mb-3">Coordenador: Prof. Dr. Alessandro Brawerman</p>
                        <p>Vice-Coordenador: Profa. Dr. Carina Folena Cardoso Paes</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/joao.png" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2018-2022</h1>
                        <p class="'mb-3">Coordenador: Prof. Dr. João Eugenio Marynowski</p>
                        <p>Vice-Coordenador: Prof. Dr. Alessandro Brawerman</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/neves.jpg" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2016-2018</h1>
                        <p class="'mb-3">Coordenador: Prof. Dr. Luiz Antônio Pereira Neves</p>
                        <p>Vice-Coordenador: Prof. Dr. João Eugenio Marynowski</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/razer.jpg" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2014-2016</h1>
                        <p class="'mb-3">Coordenador: Prof. Dr. Razer Anthom Nizer Rojas Montaño</p>
                        <p>Vice-Coordenador: Prof. Dr. Jaime Wojciechowski</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/jaime.jpg" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2010-2012</h1>
                        <p class="'mb-3">Coordenador: Prof. Dr. Jaime Wojciechowski</p>
                        <p>Vice-Coordenador: Profa. Dra. Alice Feltrin</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/rafaela.jpg" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2009-2010</h1>
                        <p class="'mb-3">Coordenador: Profa. Dra. Rafaela Mantovani Fontana</p>
                        <p>Vice-Coordenador: Profa. Dra. Alice Feltrin</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/jeroniza.jpg" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2007-2009</h1>
                        <p class="'mb-3">Coordenador: Profa. Dra. Jeroniza Nunes Marchaukoski</p>
                        <p>Vice-Coordenador: Profa. Dra. Rafaela Mantovani Fontana</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/irapuru.jpg" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2006-2007</h1>
                        <p class="'mb-3">Coordenador: Prof. Dr. Irapuru Haruo Flórido</p>
                        <p>Vice-Coordenador: Profa. Dra. Sandramara Scandelari Kusano de Paula Soares</p>
                    </div>
                </div>
                <div class="h-[20vh] border border-sky-700 rounded rounded-xl flex items-center">
                    <img class="w-[40%] h-full rounded-l-xl" src="../../assets/roberto.jpg" alt="">
                    <div class="w-[60%] mx-5">
                        <h1 class="font-bold text-sky-700 text-xl mb-5">Gestão 2004-2006</h1>
                        <p class="'mb-3">Coordenador: Prof. Dr. Roberto Tadeu Raettz</p>
                    </div>
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
