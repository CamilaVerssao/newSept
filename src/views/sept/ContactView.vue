<template>
    <div>
        <Navbar class="sticky top-0 z-10" />
        <div class="flex justify-center">
            <div class="w-[70vw]">
                <div class="mb-12">
                    <div class="my-5">
                        <div class="flex justify-between items-center">
                            <div>
                                <h1 class="text-2xl text-sky-700 font-bold mb-2">Horário de funcionamento</h1>
                                <p>Segunda a sexta, das 7h às 23h e, aos sábados das 7h às 18h.</p>
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
                                            <li class="text-sky-700 font-bold p-1 mb-2 hover:bg-gray-100 cursor-pointer border-b">2024</li>
                                        </a>
                                        <a href="https://drive.google.com/drive/folders/1ObE_v5gUXCn0_a2aKXrUUJ5hYyeTIF8d">
                                            <li class="text-sky-700 font-bold p-1 mb-2 hover:bg-gray-100 cursor-pointer border-b">2023</li>
                                        </a>
                                        <a href="https://drive.google.com/drive/folders/1ObE_v5gUXCn0_a2aKXrUUJ5hYyeTIF8d">
                                            <li class="text-sky-700 font-bold p-1 hover:bg-gray-100 cursor-pointer">2022</li>
                                        </a>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="grid grid-cols-10 gap-5 w-[60vw] my-12">
                            <div @click="scrollToSection('direcao')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'book']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Direção</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('coordenacao')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'graduation-cap']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Coordenação</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('estudantil')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'book-open']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Atendimento estudantil</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('docentes')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'people-group']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Atividades docentes</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('adm')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'building-columns']" /> 
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Unidade Administrativa</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('orcamentario')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'sack-dollar']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Controle e Execução Orçamentária</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('infolab')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'microscope']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Informática e Laboratórios</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('mestradodoutorado')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'brain']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Mestrado e Doutorado Bioinformática</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('sibi')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'book']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Biblioteca</p>
                                </div>
                            </div>
                            <div @click="scrollToSection('outros')" class="flex flex-col items-center">
                                <div class="group flex flex-col items-center">
                                    <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                        <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'gear']" />
                                    </div>
                                    <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Outros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="direcao" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Direção</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. Dieval Guizelini	                                    
                                        </th>
                                        <td class="py-4">
                                            Diretor
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4904
                                        </td>
                                        <td class="py-4">
                                            direcao.sept@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Profa. Juliana da Silva Passos
                                        </th>
                                        <td class="py-4">
                                            Vice-diretora
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4904
                                        </td>
                                        <td class="py-4">
                                            direcao.sept@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            William da Silva Queiroz	                                    
                                        </th>
                                        <td class="py-4">
                                            UAP-Chefia	
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4904                                    
                                        </td>
                                        <td class="py-4">
                                            williamdsq@ufpr.br                             
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Soraya Feio Yoshioka	
                                        </th>
                                        <td class="py-4">
                                            UAP
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4904
                                        </td>
                                        <td class="py-4">
                                            soraya.yoshioka@ufpr.br
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                    <div id="coordenacao" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Coordenação</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Curso
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. Luiz Antônio Passos Cardoso                                   
                                        </th>
                                        <td class="py-4">
                                            Análise e Desenvolvimento de Sistemas
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4915
                                        </td>
                                        <td class="py-4">
                                            coordtads@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. Cleverson Ribas Carneiro
                                        </th>
                                        <td class="py-4">
                                            Comunicação Institucional
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4915
                                        </td>
                                        <td class="py-4">
                                            coordtci@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Profa. Cleci Korbes	                                    
                                        </th>
                                        <td class="py-4">
                                            Gestão Pública	
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4915                                   
                                        </td>
                                        <td class="py-4">
                                            gestaopublica@ufpr.br                         
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. Juarez Bergmann Filho	
                                        </th>
                                        <td class="py-4">
                                            Luteria
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4915
                                        </td>
                                        <td class="py-4">
                                            luteria@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. André Vinícius Martinez Gonçalves
                                        </th>
                                        <td class="py-4">
                                            Negócios Imobiliários
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4915
                                        </td>
                                        <td class="py-4">
                                            coord.tni@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. André Nozomu Sadoyama Barrios
                                        </th>
                                        <td class="py-4">
                                            Técnico em Petróleo e Gás
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4942
                                        </td>
                                        <td class="py-4">
                                            copetrogas@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. Sávio Marcelo Leite Moreira da Silva
                                        </th>
                                        <td class="py-4">
                                            Agente Comunitário de Saúde
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4912
                                        </td>
                                        <td class="py-4">
                                            sept.coord.tacs@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. Allan Valenza da Silveira
                                        </th>
                                        <td class="py-4">
                                            Produção Cênica
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4912
                                        </td>
                                        <td class="py-4">
                                            coordenacaotpc@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Profa. Prila Leliza Calado
                                        </th>
                                        <td class="py-4">
                                            Secretariado
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4912
                                        </td>
                                        <td class="py-4">
                                            coordtse@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Profa. Carla Regina Mazia Rosa
                                        </th>
                                        <td class="py-4">
                                            Gestão de Qualidade
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4912
                                        </td>
                                        <td class="py-4">
                                            coord.tgq@ufpr.br
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="estudantil" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Atendimento estudantil</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Ana Paula de Deus                                   
                                        </th>
                                        <td class="py-4">
                                            SAGATG – Chefia
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4916
                                        </td>
                                        <td class="py-4">
                                            ana.deus@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Aline Marchalek Cueto
                                        </th>
                                        <td class="py-4">
                                            Secretária – Tecnologia em Negócio Imobiliários
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4916
                                        </td>
                                        <td class="py-4">
                                            coord.tni@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Alinson Sato Chagas	                                   
                                        </th>
                                        <td class="py-4">
                                            Secretário – Tecnologia em Gestão Pública	
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4916                                  
                                        </td>
                                        <td class="py-4">
                                            gestaopublica@ufpr.br                         
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Renato Daher
                                        </th>
                                        <td class="py-4">
                                            Secretário – Técnico em Petróleo e Gás
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4916
                                        </td>
                                        <td class="py-4">
                                            copetrogas@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Janete de Assis Machado da Silva
                                        </th>
                                        <td class="py-4">
                                            Secretária – Tecnologia em Luteria
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4916
                                        </td>
                                        <td class="py-4">
                                            luteria@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Sandra Alves Tavares
                                        </th>
                                        <td class="py-4">
                                            Secretário – Tecnologia em Comunicação Institucional
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4916
                                        </td>
                                        <td class="py-4">
                                            coordtci@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Anna Paula Zanine Koslinski
                                        </th>
                                        <td class="py-4">
                                            Secretária – Tecnologia em Secretariado
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4905
                                        </td>
                                        <td class="py-4">
                                             coordtse@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Elton Barbosa Silveira
                                        </th>
                                        <td class="py-4">
                                            Secretário – Tecnologia em Análise e Desenvolvimento de Sistemas
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4905
                                        </td>
                                        <td class="py-4">
                                            coordtads@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Michael Andrew Schaffer Chagas
                                        </th>
                                        <td class="py-4">
                                            Secretário – Tecnologia em Gestão da Qualidade
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4905
                                        </td>
                                        <td class="py-4">
                                            coord.tgq@ufpr.br
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="docentes" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Administração atividades docentes</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            Horário de funcionamento
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Prof. Arnaud Francis Bonduelle	                           
                                        </th>
                                        <td class="py-4">
                                            SAAD – Chefia
                                        </td>
                                        <td class="py-4">
                                            (41) 99194 3424
                                        </td>
                                        <td class="py-4">
                                            14h às 18h
                                        </td>
                                        <td class="py-4">
                                            saad.sept@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Allan Fernando Justino Vieira
                                        </th>
                                        <td class="py-4">
                                            Assistente em Administração
                                        </td>
                                        <td class="py-4">
                                            (41) 99648 5285
                                        </td>
                                        <td class="py-4">
                                            07h às 16h
                                        </td>
                                        <td class="py-4">
                                            allanvieira@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Ricardo Belinski                                  
                                        </th>
                                        <td class="py-4">
                                            Administrador		
                                        </td>
                                        <td class="py-4">
                                            (41) 98891 0698                                
                                        </td>
                                        <td class="py-4">
                                            13h às 22h                               
                                        </td>
                                        <td class="py-4">
                                            belinski@ufpr.br                         
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="adm" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Unidade administrativa</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                             Moacir Ribeiro Watzko	                           
                                        </th>
                                        <td class="py-4">
                                            UAD – Chefia
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4909
                                        </td>
                                        <td class="py-4">
                                            moacir@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Cleberson Lopes do Nascimento	
                                        </th>
                                        <td class="py-4">
                                            Infraestrutura
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4910
                                        </td>
                                        <td class="py-4">
                                            cleberson.lopes@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                             Darci Ribeiro dos Santos	                                 
                                        </th>
                                        <td class="py-4">
                                             UAD		
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4910                              
                                        </td>
                                        <td class="py-4">
                                            darcirsantos@ufpr.br                         
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="orcamentario" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Unidade de controle e execução orçamentária</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Dagoberto Luiz Koutton		                           
                                        </th>
                                        <td class="py-4">
                                            UCEO – Chefia	
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4930	
                                        </td>
                                        <td class="py-4">
                                             dagoberto@ufpr.br
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="infolab" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Gerenciamento de informática e laboratórios</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                             Alysson Machado de Deus	                           
                                        </th>
                                        <td class="py-4">
                                            Seção de Informática	
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4902
                                        </td>
                                        <td class="py-4">
                                            alysson@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Bruno Gabriel dos Santos da Silva	
                                        </th>
                                        <td class="py-4">
                                            Seção de Informática	
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4902
                                        </td>
                                        <td class="py-4">
                                            bruno.gabriel@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Louise dos Santos Desiderio		                                 
                                        </th>
                                        <td class="py-4">
                                             Técnica de laboratório QUÍMICA  (TPG)			
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 4942	                             
                                        </td>
                                        <td class="py-4">
                                            louise.desiderio@ufpr.br                         
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="mestradodoutorado" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Mestrado e doutorado em bioinformática</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                             Suzana de Azevedo Gobetti		                           
                                        </th>
                                        <td class="py-4">
                                           Secretaria do Mestrado e Doutorado		
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4906	
                                        </td>
                                        <td class="py-4">
                                            bioinfocoord@gmail.com
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Laboratório 1		
                                        </th>
                                        <td class="py-4">
                                            Seção de bioinformática		
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4931	
                                        </td>
                                        <td class="py-4">
                                            bioinfocoord@gmail.com
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Laboratório 2		                                 
                                        </th>
                                        <td class="py-4">
                                             Seção de bioinformática		
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4932	                             
                                        </td>
                                        <td class="py-4">
                                            bioinfocoord@gmail.com                        
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="sibi" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Biblioteca - SIBI</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Função
                                        </th>
                                        <th scope="col" class="py-3">
                                            Telefone
                                        </th>
                                        <th scope="col" class="py-3">
                                            E-mail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                             Rafaela Paula Schmitz			                           
                                        </th>
                                        <td class="py-4">
                                           SIBI/EP Chefia			
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4917	
                                        </td>
                                        <td class="py-4">
                                             rafaela.schmitz@gmail.com
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            André Anastácio de Oliveira			
                                        </th>
                                        <td class="py-4">
                                            Bibliotecário		
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4901		
                                        </td>
                                        <td class="py-4">
                                             anastacio@ufpr.br
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Dryele Drusz de Deus		                                 
                                        </th>
                                        <td class="py-4">
                                             Assistente em Administração	
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4901		                             
                                        </td>
                                        <td class="py-4">
                                             dryele@ufpr.br                        
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Thays Luciana Barbosa de Farias			                                 
                                        </th>
                                        <td class="py-4">
                                              Bibliotecária		
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4901		                             
                                        </td>
                                        <td class="py-4">
                                             thays.farias@ufpr.br                        
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="outros" class="mb-12">
                        <h1 class="font-bold text-2xl text-sky-700 mb-5">Outros</h1>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-left text-gray-500 p-3">
                                <thead class="text-lg text-gray-700 bg-gray-100">
                                    <tr>
                                        <th scope="col" class="py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="py-3">
                                            Setor
                                        </th>
                                        <th scope="col" class="py-3">
                                            Contato
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                             Portaria e Recepção SEPT			                           
                                        </th>
                                        <td class="py-4">
                                           GEPTA		
                                        </td>
                                        <td class="py-4">
                                            (41) 3361-4927		
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Laboratório de áudio, vídeo e imagem		
                                        </th>
                                        <td class="py-4">
                                            LAVI		
                                        </td>
                                        <td class="py-4">
                                            -
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Comunicação Institucional (TCI)			                                 
                                        </th>
                                        <td class="py-4">
                                             Agência ZIIP		
                                        </td>
                                        <td class="py-4">
                                            -
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Suporte TI na UFPR			                                 
                                        </th>
                                        <td class="py-4">
                                            -
                                        </td>
                                        <td class="py-4">
                                            suporte@ufpr.br	                             
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Casa 3 (Consultas Clínica Médica, Pediatria, Homeopatia, Ginecologia e Odontologia)				                                 
                                        </th>
                                        <td class="py-4">
                                            -
                                        </td>
                                        <td class="py-4">
                                            (41) 3361 3066 ou (41) 3361 3643	                             
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Casa 4 (Consultas Psicologia e Psiquiatria)				                                 
                                        </th>
                                        <td class="py-4">
                                            -
                                        </td>
                                        <td class="py-4">
                                            (41) 3350 5776 ou (41) 3350 5777		                             
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            SAMU - emergência e urgência médica			                                 
                                        </th>
                                        <td class="py-4">
                                            -
                                        </td>
                                        <td class="py-4">
                                            192		                             
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap">
                                            SIATE - traumas		                                 
                                        </th>
                                        <td class="py-4">
                                            -
                                        </td>
                                        <td class="py-4">
                                            193		                             
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
    name: 'PesquisaExtensaoView',
    components: {
        Navbar,
        Footer
    },
    data: () => ({
        seeVacations: false
    }),
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }
}
</script>
