<template>
  <div>
    <TadsNavbar class="sticky top-0 z-10 mb-5" />
    <div class="flex justify-center">
        <div class="w-[70vw]">
            <div class="grid grid-cols-3 gap-5">
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
