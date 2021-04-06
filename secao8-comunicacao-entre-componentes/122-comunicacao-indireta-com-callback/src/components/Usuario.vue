<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <button @click="changeName">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" @nomeMudou="nome = $event" :restartFn='restartName' />
            <app-usuario-editar />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome: 'Emilyn'
        }
    },
    methods: {
        changeName(){
            this.nome = 'ecPieritz'
        },
        restartName(){
            this.nome = 'Emilyn'
        }
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
        font-family: 'Rubik', sans-serif;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }

    .container button{
        font-family: 'Rubik', sans-serif;
        padding: 10px 20px;
        background-color: #81cefa;
        color: #266183;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    .container button:hover{
        background-color: #5da7d1;
        color: #113950;

    }
</style>
