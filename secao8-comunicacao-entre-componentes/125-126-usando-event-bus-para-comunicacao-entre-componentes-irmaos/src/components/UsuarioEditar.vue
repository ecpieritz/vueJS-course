<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{idade}}</strong></p>
        <button @click="changeAge">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        idade: Number
    },
    methods: {
        changeAge(){
            this.idade = 33
            barramento.$emit('changeAge', 33)
        }        
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
     button{
        font-family: 'Rubik', sans-serif;
        padding: 10px 20px;
        background-color: #518a55;
        color: #ffffff;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    button:hover{
        background-color: #325e35;
        color: #afaeae;

    }
</style>
