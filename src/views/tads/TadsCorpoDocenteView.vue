<template>
    <div>
        <Loader :isLoading="isLoading" />
        <TadsNavbar class="sticky top-0 z-10 mb-5" />
        <div class="flex justify-center">
            <div class="w-[70vw]">
                <div class="flex justify-between items-center">
                    <h1 class="text-5xl mb-5 font-bold text-sky-700 ">Corpo docente</h1>
                    <button class="flex gap-3 items-center rounded rounded-xl py-2 px-5 h-[40px] bg-sky-700 hover:bg-sky-900 text-white">
                        <p>Filtrar</p>
                        <font-awesome-icon class="text-white" :icon="['fas', 'chevron-down']" />
                    </button>
                </div>
                <div class="relative overflow-x-auto mb-5">
                    <table class="w-full text-left text-gray-500 p-3">
                        <thead class="text-lg text-gray-700 bg-gray-100">
                        <tr>
                            <th scope="col" class="py-3">Docente</th>
                            <th scope="col" class="py-3">Titulação</th>
                            <th scope="col" class="py-3">Jornada de Trabalho</th>
                            <th scope="col" class="py-3">Admissão UFPR</th>
                            <th scope="col" class="py-3">Disciplinas</th>
                            <th scope="col" class="py-3">Curriculum Lattes</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(docente, index) in paginatedDocentes"
                            :key="index"
                            class="bg-white border-b"
                        >
                            <td class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ docente.docente }}
                            </td>
                            <td class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ docente.titulacao }}
                            </td>
                            <td class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ docente.jornada }}
                            </td>
                            <td class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ docente.admissao }}
                            </td>
                            <td class="py-4 font-medium text-gray-900 whitespace-nowrap">
                            <ul>
                                <li v-for="(disciplina, dIndex) in docente.disciplinas" :key="dIndex">
                                    {{ disciplina }}
                                </li>
                            </ul>
                            </td>
                            <td class="py-4">
                            <a
                                class="cursor-pointer hover:text-gray-700"
                                :href="docente.lattes"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                            </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between mb-12">
                    <p class="text-gray-600">{{ itemsShownText }}</p>
                    <div class="flex gap-1">
                        <div
                        class="p-1 text-center border border-gray-400 rounded-md w-[30px]"
                        :class="{
                            'group hover:border-sky-700 cursor-pointer': currentPage > 1,
                            'text-gray-300': currentPage === 1,
                        }"
                        @click="prevPage"
                        >
                        <font-awesome-icon
                            :icon="['fas', 'chevron-left']"
                            :class="{
                            'text-gray-500 group-hover:text-sky-700': currentPage > 1,
                            'text-gray-300': currentPage === 1,
                            }"
                        />
                        </div>

                        <div
                        v-for="page in visiblePages"
                        :key="page"
                        class="cursor-pointer p-1 text-center border rounded-md w-[30px]"
                        :class="{
                            'bg-sky-700 text-white border-sky-700': page === currentPage,
                            'border-gray-400': page !== currentPage,
                        }"
                        @click="setPage(page)"
                        >
                        <p>{{ page }}</p>
                        </div>

                        <div
                        class="p-1 text-center border border-gray-400 rounded-md w-[30px]"
                        :class="{
                            'group hover:border-sky-700 cursor-pointer': currentPage < totalPages,
                            'text-gray-300': currentPage === totalPages,
                        }"
                        @click="nextPage"
                        >
                        <font-awesome-icon
                            :icon="['fas', 'chevron-right']"
                            :class="{
                            'text-gray-500 group-hover:text-sky-700': currentPage < totalPages,
                            'text-gray-300': currentPage === totalPages,
                            }"
                        />
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
import Loader from '@/components/loader.vue'

export default {
    components: {
        TadsNavbar,
        Footer,
        Loader
    },
    data: ()=> ({
        docentes: [
            {
                docente: "Prof. Alessandro Brawerman",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 01/03/2010 (MS)",
                disciplinas: ["DS030 – Sistemas Operacionais V3", "DS030 – Sistemas Operacionais N3"],
                lattes: "http://lattes.cnpq.br/9610578797081426"
            },
            {
                docente: "Profa. Carina Folena Cardoso Paes",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 31/01/2022 (MS)",
                disciplinas: ["DS662 Ferramentas da Qualidade"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4330103Z0"
            },
            {
                docente: "Prof. Dieval Guizelini",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 18/08/1994 (EBTT)",
                disciplinas: ["DS320 Banco de Dados I N3", "DS131 Linguagem De Programação Orientada A Objetos I V3"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4779056Y6"
            },
            {
                docente: "Prof. Evandro Luiz Brandão",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/02/2017 (EBTT)",
                disciplinas: ["DS611 Estatística para Computação V1", "DS611 Estatística para Computação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4763464H2"
            },
            {
                docente: "Prof. Jaime Wojciechowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 27/07/2006 (EBTT)",
                disciplinas: ["DS220 Análise e Projetos de Sistemas I", "DS230 Análise e Projetos de Sistemas II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770943E8"
            },
            {
                docente: "Profa. Jeroniza Nunes Marchaukoski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 07/10/2004 (EBTT)",
                disciplinas: ["DS330 Banco de Dados II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770405H6"
            },
            {
                docente: "Prof. João Eugênio Marynowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 22/12/2015 (MS)",
                disciplinas: ["DS320 Banco de Dados I", "DS320 Banco de Dados III"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770417E8"
            },
            {
                docente: "Profa. Juliana da Silva Passos",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 12/07/2016 (MS)",
                disciplinas: ["DS880 Língua Inglesa para Tecnologia da Informação V5", "DS880 Língua Inglesa para Tecnologia da Informação N6"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4736478J2"
            },
            {
                docente: "Prof. Luiz Antonio Passos Cardoso",
                titulacao: "Especialização",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 16/11/1982 (EBTT)",
                disciplinas: ["DS110 Projeto de Algoritmos e Prática de Programação V1", "DS110 Projeto de Algoritmos e Prática de Programação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4612136H7"
            },
            {
                docente: "Prof. Luiz Antonio Pereira Neves",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/06/2009 (MS)",
                disciplinas: ["DS260 Governança de Tecnologia de Informação N6", "DS212 Engenharia de Requisitos V1", "DS212 Engenharia de Requisitos N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4703657A7"
            },
            {
                docente: "Prof. Mario Silva",
                titulacao: "Mestrado",
                jornada: "Tempo Integral",
                admissao: "Desde 05/05/2005 (MS)",
                disciplinas: ["DS120 Algoritmos Avançados", "DS450 Programação Funcional"],
                lattes: "http://lattes.cnpq.br/000000000000001"
            },
            {
                docente: "Prof. Alessandro Brawerman",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 01/03/2010 (MS)",
                disciplinas: ["DS030 – Sistemas Operacionais V3", "DS030 – Sistemas Operacionais N3"],
                lattes: "http://lattes.cnpq.br/9610578797081426"
            },
            {
                docente: "Profa. Carina Folena Cardoso Paes",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 31/01/2022 (MS)",
                disciplinas: ["DS662 Ferramentas da Qualidade"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4330103Z0"
            },
            {
                docente: "Prof. Dieval Guizelini",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 18/08/1994 (EBTT)",
                disciplinas: ["DS320 Banco de Dados I N3", "DS131 Linguagem De Programação Orientada A Objetos I V3"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4779056Y6"
            },
            {
                docente: "Prof. Evandro Luiz Brandão",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/02/2017 (EBTT)",
                disciplinas: ["DS611 Estatística para Computação V1", "DS611 Estatística para Computação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4763464H2"
            },
            {
                docente: "Prof. Jaime Wojciechowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 27/07/2006 (EBTT)",
                disciplinas: ["DS220 Análise e Projetos de Sistemas I", "DS230 Análise e Projetos de Sistemas II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770943E8"
            },
            {
                docente: "Profa. Jeroniza Nunes Marchaukoski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 07/10/2004 (EBTT)",
                disciplinas: ["DS330 Banco de Dados II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770405H6"
            },
            {
                docente: "Prof. João Eugênio Marynowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 22/12/2015 (MS)",
                disciplinas: ["DS320 Banco de Dados I", "DS320 Banco de Dados III"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770417E8"
            },
            {
                docente: "Profa. Juliana da Silva Passos",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 12/07/2016 (MS)",
                disciplinas: ["DS880 Língua Inglesa para Tecnologia da Informação V5", "DS880 Língua Inglesa para Tecnologia da Informação N6"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4736478J2"
            },
            {
                docente: "Prof. Luiz Antonio Passos Cardoso",
                titulacao: "Especialização",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 16/11/1982 (EBTT)",
                disciplinas: ["DS110 Projeto de Algoritmos e Prática de Programação V1", "DS110 Projeto de Algoritmos e Prática de Programação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4612136H7"
            },
            {
                docente: "Prof. Luiz Antonio Pereira Neves",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/06/2009 (MS)",
                disciplinas: ["DS260 Governança de Tecnologia de Informação N6", "DS212 Engenharia de Requisitos V1", "DS212 Engenharia de Requisitos N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4703657A7"
            },
            {
                docente: "Prof. Mario Silva",
                titulacao: "Mestrado",
                jornada: "Tempo Integral",
                admissao: "Desde 05/05/2005 (MS)",
                disciplinas: ["DS120 Algoritmos Avançados", "DS450 Programação Funcional"],
                lattes: "http://lattes.cnpq.br/000000000000001"
            },
            {
                docente: "Prof. Alessandro Brawerman",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 01/03/2010 (MS)",
                disciplinas: ["DS030 – Sistemas Operacionais V3", "DS030 – Sistemas Operacionais N3"],
                lattes: "http://lattes.cnpq.br/9610578797081426"
            },
            {
                docente: "Profa. Carina Folena Cardoso Paes",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 31/01/2022 (MS)",
                disciplinas: ["DS662 Ferramentas da Qualidade"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4330103Z0"
            },
            {
                docente: "Prof. Dieval Guizelini",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 18/08/1994 (EBTT)",
                disciplinas: ["DS320 Banco de Dados I N3", "DS131 Linguagem De Programação Orientada A Objetos I V3"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4779056Y6"
            },
            {
                docente: "Prof. Evandro Luiz Brandão",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/02/2017 (EBTT)",
                disciplinas: ["DS611 Estatística para Computação V1", "DS611 Estatística para Computação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4763464H2"
            },
            {
                docente: "Prof. Jaime Wojciechowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 27/07/2006 (EBTT)",
                disciplinas: ["DS220 Análise e Projetos de Sistemas I", "DS230 Análise e Projetos de Sistemas II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770943E8"
            },
            {
                docente: "Profa. Jeroniza Nunes Marchaukoski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 07/10/2004 (EBTT)",
                disciplinas: ["DS330 Banco de Dados II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770405H6"
            },
            {
                docente: "Prof. João Eugênio Marynowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 22/12/2015 (MS)",
                disciplinas: ["DS320 Banco de Dados I", "DS320 Banco de Dados III"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770417E8"
            },
            {
                docente: "Profa. Juliana da Silva Passos",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 12/07/2016 (MS)",
                disciplinas: ["DS880 Língua Inglesa para Tecnologia da Informação V5", "DS880 Língua Inglesa para Tecnologia da Informação N6"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4736478J2"
            },
            {
                docente: "Prof. Luiz Antonio Passos Cardoso",
                titulacao: "Especialização",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 16/11/1982 (EBTT)",
                disciplinas: ["DS110 Projeto de Algoritmos e Prática de Programação V1", "DS110 Projeto de Algoritmos e Prática de Programação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4612136H7"
            },
            {
                docente: "Prof. Luiz Antonio Pereira Neves",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/06/2009 (MS)",
                disciplinas: ["DS260 Governança de Tecnologia de Informação N6", "DS212 Engenharia de Requisitos V1", "DS212 Engenharia de Requisitos N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4703657A7"
            },
            {
                docente: "Prof. Mario Silva",
                titulacao: "Mestrado",
                jornada: "Tempo Integral",
                admissao: "Desde 05/05/2005 (MS)",
                disciplinas: ["DS120 Algoritmos Avançados", "DS450 Programação Funcional"],
                lattes: "http://lattes.cnpq.br/000000000000001"
            },
            {
                docente: "Prof. Alessandro Brawerman",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 01/03/2010 (MS)",
                disciplinas: ["DS030 – Sistemas Operacionais V3", "DS030 – Sistemas Operacionais N3"],
                lattes: "http://lattes.cnpq.br/9610578797081426"
            },
            {
                docente: "Profa. Carina Folena Cardoso Paes",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 31/01/2022 (MS)",
                disciplinas: ["DS662 Ferramentas da Qualidade"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4330103Z0"
            },
            {
                docente: "Prof. Dieval Guizelini",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 18/08/1994 (EBTT)",
                disciplinas: ["DS320 Banco de Dados I N3", "DS131 Linguagem De Programação Orientada A Objetos I V3"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4779056Y6"
            },
            {
                docente: "Prof. Evandro Luiz Brandão",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/02/2017 (EBTT)",
                disciplinas: ["DS611 Estatística para Computação V1", "DS611 Estatística para Computação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4763464H2"
            },
            {
                docente: "Prof. Jaime Wojciechowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 27/07/2006 (EBTT)",
                disciplinas: ["DS220 Análise e Projetos de Sistemas I", "DS230 Análise e Projetos de Sistemas II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770943E8"
            },
            {
                docente: "Profa. Jeroniza Nunes Marchaukoski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 07/10/2004 (EBTT)",
                disciplinas: ["DS330 Banco de Dados II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770405H6"
            },
            {
                docente: "Prof. João Eugênio Marynowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 22/12/2015 (MS)",
                disciplinas: ["DS320 Banco de Dados I", "DS320 Banco de Dados III"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770417E8"
            },
            {
                docente: "Profa. Juliana da Silva Passos",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 12/07/2016 (MS)",
                disciplinas: ["DS880 Língua Inglesa para Tecnologia da Informação V5", "DS880 Língua Inglesa para Tecnologia da Informação N6"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4736478J2"
            },
            {
                docente: "Prof. Luiz Antonio Passos Cardoso",
                titulacao: "Especialização",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 16/11/1982 (EBTT)",
                disciplinas: ["DS110 Projeto de Algoritmos e Prática de Programação V1", "DS110 Projeto de Algoritmos e Prática de Programação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4612136H7"
            },
            {
                docente: "Prof. Luiz Antonio Pereira Neves",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/06/2009 (MS)",
                disciplinas: ["DS260 Governança de Tecnologia de Informação N6", "DS212 Engenharia de Requisitos V1", "DS212 Engenharia de Requisitos N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4703657A7"
            },
            {
                docente: "Prof. Mario Silva",
                titulacao: "Mestrado",
                jornada: "Tempo Integral",
                admissao: "Desde 05/05/2005 (MS)",
                disciplinas: ["DS120 Algoritmos Avançados", "DS450 Programação Funcional"],
                lattes: "http://lattes.cnpq.br/000000000000001"
            },
            {
                docente: "Prof. Alessandro Brawerman",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 01/03/2010 (MS)",
                disciplinas: ["DS030 – Sistemas Operacionais V3", "DS030 – Sistemas Operacionais N3"],
                lattes: "http://lattes.cnpq.br/9610578797081426"
            },
            {
                docente: "Profa. Carina Folena Cardoso Paes",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 31/01/2022 (MS)",
                disciplinas: ["DS662 Ferramentas da Qualidade"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4330103Z0"
            },
            {
                docente: "Prof. Dieval Guizelini",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 18/08/1994 (EBTT)",
                disciplinas: ["DS320 Banco de Dados I N3", "DS131 Linguagem De Programação Orientada A Objetos I V3"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4779056Y6"
            },
            {
                docente: "Prof. Evandro Luiz Brandão",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/02/2017 (EBTT)",
                disciplinas: ["DS611 Estatística para Computação V1", "DS611 Estatística para Computação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4763464H2"
            },
            {
                docente: "Prof. Jaime Wojciechowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 27/07/2006 (EBTT)",
                disciplinas: ["DS220 Análise e Projetos de Sistemas I", "DS230 Análise e Projetos de Sistemas II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770943E8"
            },
            {
                docente: "Profa. Jeroniza Nunes Marchaukoski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 07/10/2004 (EBTT)",
                disciplinas: ["DS330 Banco de Dados II"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770405H6"
            },
            {
                docente: "Prof. João Eugênio Marynowski",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 22/12/2015 (MS)",
                disciplinas: ["DS320 Banco de Dados I", "DS320 Banco de Dados III"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4770417E8"
            },
            {
                docente: "Profa. Juliana da Silva Passos",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 12/07/2016 (MS)",
                disciplinas: ["DS880 Língua Inglesa para Tecnologia da Informação V5", "DS880 Língua Inglesa para Tecnologia da Informação N6"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4736478J2"
            },
            {
                docente: "Prof. Luiz Antonio Passos Cardoso",
                titulacao: "Especialização",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 16/11/1982 (EBTT)",
                disciplinas: ["DS110 Projeto de Algoritmos e Prática de Programação V1", "DS110 Projeto de Algoritmos e Prática de Programação N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4612136H7"
            },
            {
                docente: "Prof. Luiz Antonio Pereira Neves",
                titulacao: "Doutorado",
                jornada: "Dedicação Exclusiva",
                admissao: "Desde 08/06/2009 (MS)",
                disciplinas: ["DS260 Governança de Tecnologia de Informação N6", "DS212 Engenharia de Requisitos V1", "DS212 Engenharia de Requisitos N1"],
                lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4703657A7"
            },
            {
                docente: "Prof. Mario Silva",
                titulacao: "Mestrado",
                jornada: "Tempo Integral",
                admissao: "Desde 05/05/2005 (MS)",
                disciplinas: ["DS120 Algoritmos Avançados", "DS450 Programação Funcional"],
                lattes: "http://lattes.cnpq.br/000000000000001"
            },
        ],
        currentPage: 1,
        itemsPerPage: 10,
        maxVisiblePages: 3,
        isLoading: false
    }),
   computed: {
        paginatedDocentes() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.docentes.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.docentes.length / this.itemsPerPage);
        },
        itemsShownText() {
            const start = (this.currentPage - 1) * this.itemsPerPage + 1;
            const end = Math.min(this.currentPage * this.itemsPerPage, this.docentes.length);
            return `${start}-${end} itens de ${this.docentes.length}`;
        },
        visiblePages() {
            const half = Math.floor(this.maxVisiblePages / 2);
            let start = Math.max(1, this.currentPage - half);
            let end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);

            if (end - start + 1 < this.maxVisiblePages) {
                start = Math.max(1, end - this.maxVisiblePages + 1);
            }

            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        },
    },
    methods: {
        loadingTime() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false; 
            }, 500); 
        },
        
        setPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
            this.loadingTime(); 
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
            this.loadingTime(); 
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
            this.loadingTime(); 
        },
    }
}
</script>

