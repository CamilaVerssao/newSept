<template>
    <div>
        <Navbar class="sticky top-0 z-10" />
        <div class="flex justify-center">
            <div class="w-[70vw]">
                <div class="mb-12">
                    <div class="flex gap-3 text-5xl mb-5">
                        <h1 class="font-bold text-sky-700 ">Sept</h1>
                        <p class="font-[400]">pesquisa</p>
                    </div>
                    <div class="grid grid-cols-6 gap-5 w-[35vw]">
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'book']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Comitê de pesquisa</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'graduation-cap']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Projetos de pesquisa</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'book-open']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Manual de divulgação</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'people-group']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Grupos de pesquisa</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'atom']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Iniciação científica</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'microscope']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Auxílio e Fomento</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-3 text-5xl mb-5">
                        <h1 class="font-bold text-sky-700 ">Sept</h1>
                        <p class="font-[400]">extensão</p>
                    </div>
                    <div class="grid grid-cols-5 gap-5 w-[29vw]">
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'graduation-cap']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Entendendo a extensão</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'book-open']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Membros do comitê</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'people-group']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Reuniões do comitê</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'atom']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Emissão de certificados</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="group flex flex-col items-center">
                                <div class="mb-2 cursor-pointer hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out relative h-[80px] w-[80px] rounded-full border border-sky-700 flex items-center justify-center">
                                    <font-awesome-icon class="h-[30px] text-sky-700 transition-colors duration-300 ease-in-out group-hover:text-white" :icon="['fas', 'microscope']" />
                                </div>
                                <p class="text-sm text-sky-700 text-center group-hover:text-sky-900">Proposta de extensão</p>
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
    name: 'PesquisaExtensaoView',
    components: {
        Navbar,
        Footer
    }
}
</script>
