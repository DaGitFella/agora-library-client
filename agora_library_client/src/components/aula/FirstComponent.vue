<template>
    <div>
        <h1>Hello vue!</h1>
        <p>meu nome é {{ nome }} e sou {{ profissao }}</p>
    </div>

</template>

<script>
    export default {
        name: 'firstComponent',
        data() {
            return {
                nome: 'Lucas',
                profissao: 'gamer'
            }
        }
    }
</script>