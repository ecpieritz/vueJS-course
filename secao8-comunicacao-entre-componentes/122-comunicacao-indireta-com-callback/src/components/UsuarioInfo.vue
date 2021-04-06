<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="restartFn">Callback</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            default: 'Anônimo'
        },
        restartFn: Function
    },
    methods: {
        reiniciarNome(){
            this.nome = 'Emilyn'
            this.$emit('nomeMudou', this.nome)
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }

    button{
        font-family: 'Rubik', sans-serif;
        padding: 10px 20px;
        background-color: #fcadd4;
        color: #912f60;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    button:hover{
        background-color: #ca76a0;
        color: #751e4a;

    }
</style>
