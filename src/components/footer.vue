<template>
    <div class="p-5 grid grid-cols-4 gap-5 bg-gray-100 shadow-t-lg">
        <div>
            <h1 class="text-sky-700 text-lg font-[500]">Sites de interesse</h1>
            <hr class="border-sky-700 mb-3">
            <ul class="list-disc mx-6 text-sm leading-loose">
                <li class="cursor-pointer hover:text-sky-700">Ministério da Educação</li>
                <li class="cursor-pointer hover:text-sky-700">Portal da Transparência</li>
                <li class="cursor-pointer hover:text-sky-700">Capes</li>
                <li class="cursor-pointer hover:text-sky-700">Cnpq</li>
                <li class="cursor-pointer hover:text-sky-700">Funpar</li>
            </ul>
        </div>
        <div>
            <h1 class="text-sky-700 text-lg font-[500]">Sites da UFPR</h1>
            <hr class="border-sky-700 mb-3">
            <ul class="list-disc mx-6 text-sm leading-loose">
                <li class="cursor-pointer hover:text-sky-700">SIGA</li>
                <li class="cursor-pointer hover:text-sky-700">Vestibular / Núcleo de Concursos</li>
                <li class="cursor-pointer hover:text-sky-700">Secretaria dos Órgãos Colegiados</li>
                <li class="cursor-pointer hover:text-sky-700">Bibliotecas - SIBI</li>
                <li class="cursor-pointer hover:text-sky-700">Celin -Línguas</li>
                <li class="cursor-pointer hover:text-sky-700">Mobilidade Internacional</li>
                <li class="cursor-pointer hover:text-sky-700">Comissão de Ética</li>
                <li class="cursor-pointer hover:text-sky-700">Hospital de Clínicas</li>
                <li class="cursor-pointer hover:text-sky-700">Editora da UFPR</li>
                <li class="cursor-pointer hover:text-sky-700">SPIN/UFPR</li>
                <li class="cursor-pointer hover:text-sky-700">SUINFRA</li>
            </ul>
        </div>
        <div>
            <h1 class="text-sky-700 text-lg font-[500]">Pró-Reitorias</h1>
            <hr class="border-sky-700 mb-3">
            <ul class="list-disc mx-6 text-sm leading-loose">
                <li class="cursor-pointer hover:text-sky-700">Pró-Reitoria de Administração</li>
                <li class="cursor-pointer hover:text-sky-700">Pró-Reitoria de Assuntos Estudantis</li>
                <li class="cursor-pointer hover:text-sky-700">Pró-Reitoria de Extensão e Cultura</li>
                <li class="cursor-pointer hover:text-sky-700">Pró-Reitoria de Gestão de Pessoas</li>
                <li class="cursor-pointer hover:text-sky-700">Pró-Reitoria de Graduação e Educação Profissional</li>
                <li class="cursor-pointer hover:text-sky-700">Pró-Reitoria de Pesquisa e Pós-Graduação</li>
                <li class="cursor-pointer hover:text-sky-700">Pró-Reitoria de Planejamento, Orçamento e Finanças</li>
            </ul>
        </div>
        <div>
            <h1 class="text-sky-700 text-lg font-[500]">Setores da UFPR</h1>
            <hr class="border-sky-700 mb-3">
            <ul class="list-disc mx-6 text-sm leading-loose">
                <li class="cursor-pointer hover:text-sky-700">Setor de Artes, Comunicação e Design</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências Agrárias</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências Biológicas</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências da Saúde</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências da Terra</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências Exatas</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências Humanas</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências Jurídicas</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Ciências Sociais Aplicadas</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Educação</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Educação Profissional e Tecnológica</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Jandaia do Sul</li>
                <li class="cursor-pointer hover:text-sky-700">Setor de Tecnologia</li>
                <li class="cursor-pointer hover:text-sky-700">Setor Litoral</li>
                <li class="cursor-pointer hover:text-sky-700">Setor Palotina</li>
            </ul>
        </div>
        
    </div>
    <div class="p-5 bg-sky-700 text-white">
        <div class="flex justify-between mb-5">
            <div>
                <div class="flex gap-3 items-center mb-3">
                    <font-awesome-icon icon="location-dot" class="text-white h-[25px]" />
                    <h1 class="text-[500] text-2xl">UFPR - SEPT</h1>
                </div>
                <div class="text-sm">
                    <p>Rua Dr. Alcides Vieira Arcoverde, 1225</p>
                    <p>CEP: 81520-260 - Jardim das Américas - Curitiba (PR) - Brasil</p>
                    <p>Telefone: <span class="font-bold cursor-pointer" @click="this.$router.push('/contact')">acesse aqui</span></p>
                </div>
            </div>
            <div class="flex gap-3">
                <font-awesome-icon icon="facebook" />
                <font-awesome-icon icon="square-instagram" />
                <font-awesome-icon icon="linkedin-in" />
                <font-awesome-icon icon="square-x-twitter" />
            </div>
        
        </div>
        <div class="flex justify-between items-center">
            <p class="text-sm">©2024 - Universidade Federal do Paraná - SEPT</p>
            <img class="h-[10vh]" src="../assets/Logo_oficial_da_UFPR_(sem_fundo).png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>