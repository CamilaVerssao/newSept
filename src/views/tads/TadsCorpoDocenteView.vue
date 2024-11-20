<template>
    <div>
        <Navbar class="sticky top-0 z-10 mb-5" />
        <div class="flex justify-center">
            <div class="w-[70vw]">
                <h1 class="text-5xl mb-5 font-bold text-sky-700 ">Corpo docente</h1>
                <div class="relative overflow-x-auto mb-5">
                    <table class="w-full text-left text-gray-500 p-3">
                        <thead class="text-lg text-gray-700 bg-gray-100">
                            <tr>
                                <th scope="col" class="py-3">
                                    Docente
                                </th>
                                <th scope="col" class="py-3">
                                    Titulação
                                </th>
                                <th scope="col" class="py-3">
                                    Jornada de Trabalho
                                </th>
                                <th scope="col" class="py-3">
                                    Admissão UFPR
                                </th>
                                <th scope="col" class="py-3">
                                    Disciplinas
                                </th>
                                <th scope="col" class="py-3">
                                    Curriculum Lattes
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Prof. Alessandro Brawerman
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 01/03/2010 (MS)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS030 – Sistemas Operacionais V3</li>
                                        <li>DS030 – Sistemas Operacionais N3DS030 – Sistemas Operacionais V3</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="http://lattes.cnpq.br/9610578797081426"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                     Profa. Carina Folena Cardoso Paes
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 31/01/2022 (MS)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS662 Ferramentas da Qualidade</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4330103Z0"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Prof. Dieval Guizelini
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 18/08/1994 (EBTT)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS320 Bando de Dados I N3</li>
                                        <li>DS131 Linguagem De Programação Orientada A Objetos I V3</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4779056Y6"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Prof. Evandro Luiz Brandão
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 08/02/2017 (EBTT)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS611 Estatística para Computação V1</li>
                                        <li>DS611 Estatística para Computação N1</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4763464H2"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Prof. Jaime Wojciechowski
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 27/07/2006 (EBTT)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS220 Análise e Projetos de Sistemas I</li>
                                        <li>DS230 Análise e Projetos de Sistemas II</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770943E8"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Profa. Jeroniza Nunes Marchaukoski
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 07/10/2004 (EBTT)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS330 Banco de Dados II</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770405H6"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Prof. João Eugênio Marynowski
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 22/12/2015 (MS)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS320 Banco de Dados I</li>
                                        <li>DS320 Banco de Dados III</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770417E8"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Profa. Juliana da Silva Passos
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 12/07/2016 (MS)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS880 Língua Inglesa para Tecnologia da Informação V5</li>
                                        <li>DS880 Língua Inglesa para Tecnologia da Informação N6</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4736478J2"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Prof. Luiz Antonio Passos Cardoso
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Especialização
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 16/11/1982 (EBTT)Desde 07/10/2004 (EBTT)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS110 Projeto de Algoritmos e Prática de Programação V1</li>
                                        <li>DS110 Projeto de Algoritmos e Prática de Programação N1</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4612136H7"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Prof. Luiz Antonio Pereira Neves	
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Doutorado
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Dedicação Exclusiva
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Desde 08/06/2009 (MS)
                                </th>
                                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <ul>
                                        <li>DS260 Governança de Tecnologia de Informação N6</li>
                                        <li>DS212 Engenharia de Requisitos V1</li>
                                        <li>DS212 Engenharia de Requisitos N1</li>
                                    </ul>
                                </th>
                                <td class="py-4">
                                    <a class="cursor-pointer hover:text-gray-700" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4703657A7"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between mb-12">
                    <p class="text-gray-600">10 itens de 30</p>
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
        <Footer />
    </div>
</template>


<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
    components: {
        Navbar,
        Footer
    },
}
</script>

<style>

</style>