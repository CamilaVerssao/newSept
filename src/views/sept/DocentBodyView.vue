<template>
    <div>
        <Navbar class="sticky top-0 z-10 mb-5" />
        <div class="flex justify-center">
            <div class="w-[70vw]">
                <div class="flex justify-between items-center">
                    <div class="flex gap-3 text-5xl mb-5">
                        <h1 class="font-bold text-sky-700 ">Sept</h1>
                        <p class="font-[400]">corpo docente</p>
                    </div>
                    <div class="relative">
                        <button 
                            @mouseover="seeVacations = true" 
                            :class="[seeVacations ? 'rounded-t-xl' : 'rounded-xl', 'hover:bg-sky-900 bg-sky-700 text-white px-2 h-[40px]']"
                        >
                            <div class="flex justify-between items-center gap-3">
                                <p>Ver docentes em férias</p>
                                <font-awesome-icon icon="chevron-down" />
                            </div>
                        </button>
                        
                        <div 
                            @mouseleave="seeVacations = false"
                            v-if="seeVacations" 
                            class="z-[1000] bg-white transform transition-transform duration-300 absolute top-[40px] left-0 text-white shadow-lg rounded-b-md p-3 w-full"
                        >
                            <ul>
                                <a href="https://drive.google.com/drive/folders/1ObE_v5gUXCn0_a2aKXrUUJ5hYyeTIF8d">
                                    <li class="text-sky-700 font-bold p-1 mb-2 hover:bg-gray-100 cursor-pointehover:text-gray-700 border-b">2024</li>
                                </a>
                                <a href="https://drive.google.com/drive/folders/1ObE_v5gUXCn0_a2aKXrUUJ5hYyeTIF8d">
                                    <li class="text-sky-700 font-bold p-1 mb-2 hover:bg-gray-100 cursor-pointer hover:text-gray-700 border-b">2023</li>
                                </a>
                                <a href="https://drive.google.com/drive/folders/1ObE_v5gUXCn0_a2aKXrUUJ5hYyeTIF8d">
                                    <li class="text-sky-700 font-bold p-1 hover:bg-gray-100 cursor-pointer hover:text-gray-700">2022</li>
                                </a>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mb-12">
                    <div class="flex gap-5 mb-5">
                        <h1 class="text-2xl text-sky-700">Corpo Docente Efetivo</h1>
                    </div>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-left text-gray-500 p-3">
                            <thead class="text-lg text-gray-700 bg-gray-100">
                                <tr>
                                    <th scope="col" class="py-3">
                                        Docente
                                    </th>
                                    <th scope="col" class="py-3">
                                        E-mail
                                    </th>
                                    <th scope="col" class="py-3 text-center">
                                        Curriculum Lattes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Profa. Adriana Cristina
                                    </th>
                                    <td class="py-4">
                                        adrianabrahim@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4707281Y3"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Prof. Adriano Rodrigues
                                    </th>
                                    <td class="py-4">
                                        adrianomoraes@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4767908E6"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                </tr>
                                <tr class="bg-white">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Prof. Alessandro Brawerman
                                    </th>
                                    <td class="py-4">
                                        brawerman@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4709311D5"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-between mb-12">
                        <p class="text-gray-600">3 itens de 3</p>
                        <div class="flex gap-1">
                            <div class="bg-gray-100 p-1 text-center border border-gray-400 rounded rounded-md w-[30px]">
                                <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-gray-500" />
                            </div>
                            <div class="bg-sky-700 text-white cursor-pointer p-1 text-center border border-sky-700 rounded rounded-md w-[30px]">
                                <p>1</p>
                            </div>
                            <div class="bg-gray-100 p-1 text-center border border-gray-400 rounded rounded-md w-[30px]">
                                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-12">
                    <div class="flex gap-5 mb-5">
                        <h1 class="text-2xl text-sky-700">Corpo Docente Substituto</h1>
                    </div>
                    <div class="relative overflow-x-auto mb-5">
                        <table class="w-full text-left text-gray-500 p-3">
                            <thead class="text-lg text-gray-700 bg-gray-100">
                                <tr>
                                    <th scope="col" class="py-3">
                                        Docente
                                    </th>
                                    <th scope="col" class="py-3">
                                        E-mail
                                    </th>
                                    <th scope="col" class="py-3 text-center">
                                        Curriculum Lattes
                                    </th>
                                    <th scope="col" class="py-3 text-center">
                                        Processo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Prof. José Eduardo dos Santos
                                    </th>
                                    <td class="py-4">
                                        jose.junior943@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8238818Y0"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                    <td class="py-4 text-center">
                                        23075.038836/2024-94
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Profa. Glenda  Gonçalves
                                    </th>
                                    <td class="py-4">
                                        glendagondim@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4767908E6"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                    <td class="py-4 text-center">
                                        23075.011539/2023-11                                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-between mb-12">
                        <p class="text-gray-600">2 itens de 2</p>
                        <div class="flex gap-1">
                            <div class="bg-gray-100 p-1 text-center border border-gray-400 rounded rounded-md w-[30px]">
                                <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-gray-500" />
                            </div>
                            <div class="bg-sky-700 text-white cursor-pointer p-1 text-center border border-sky-700 rounded rounded-md w-[30px]">
                                <p>1</p>
                            </div>
                            <div class="bg-gray-100 p-1 text-center border border-gray-400 rounded rounded-md w-[30px]">
                                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-12">
                    <div class="flex gap-5 mb-5">
                        <h1 class="text-2xl text-sky-700">Corpo Docente de outros setores</h1>
                    </div>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-left text-gray-500 p-3">
                            <thead class="text-lg text-gray-700 bg-gray-100">
                                <tr>
                                    <th scope="col" class="py-3">
                                        Docente
                                    </th>
                                    <th scope="col" class="py-3">
                                        E-mail
                                    </th>
                                    <th scope="col" class="py-3 text-center">
                                        Curriculum Lattes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Prof. Aloísio Leoni Schmid
                                    </th>
                                    <td class="py-4">
                                        iso@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4707281Y3"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Prof. Carlos Conforti 
                                    </th>
                                    <td class="py-4">
                                        carlos.guedes@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4767908E6"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                </tr>
                                <tr class="bg-white">
                                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Profa. Deborah Rebello Lima
                                    </th>
                                    <td class="py-4">
                                        deborahrebello@ufpr.br
                                    </td>
                                    <td class="py-4 text-center">
                                        <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4709311D5"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   <div class="flex justify-between mb-12">
                        <p class="text-gray-600">3 itens de 3</p>
                        <div class="flex gap-1">
                            <div class="bg-gray-100 p-1 text-center border border-gray-400 rounded rounded-md w-[30px]">
                                <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-gray-500" />
                            </div>
                            <div class="bg-sky-700 text-white cursor-pointer p-1 text-center border border-sky-700 rounded rounded-md w-[30px]">
                                <p>1</p>
                            </div>
                            <div class="bg-gray-100 p-1 text-center border border-gray-400 rounded rounded-md w-[30px]">
                                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-gray-500" />
                            </div>
                        </div>
                    </div>
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
    },
     data() {
         return {
            seeVacations: false, 
        }
    },
}
</script>
