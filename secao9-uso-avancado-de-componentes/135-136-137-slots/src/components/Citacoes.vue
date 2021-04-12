<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <h3>{{citacoes[indice].texto}}</h3>
            <h4><i>{{citacoes[indice].fonte}}</i></h4>
            <h6>{{citacoes[indice].autor}}</h6>
        </Citacao >
        <!-- <h3>{{citacoes[indice].texto}}</h3> -->
    </div>
</template>

<script>
import Citacao from './Citacao.vue'

export default {
    components: {Citacao},
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Conecta Elas',
                texto: 'Quando eu concordo que li todos os termos de condições antes de colocar o programa pra instalar...',
                autor: '@conecta_elas'
            }, { 
                fonte: 'Dev Sincero',
                texto: 'O primeiro passo é decidir se você pretende atuar como desenvolvedor front-end, back-end ou até mesmo full-stack.',
                autor: '@dev_sincero'
            }, {
                fonte: 'Elas Programam',
                texto: 'Sorte é estar preparada quando a oportunidade aparece.',
                autor: '@elasprogramam'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .citacoes h3{
        color: #801240;
    }
    .citacoes h4{
        text-align: right;
        margin-top: -20px;
    }
    .citacoes h6{
        text-align: right;
        margin-top: -30px;
    }

</style>
