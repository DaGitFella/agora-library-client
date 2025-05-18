<template>
    <div>
        <h1>meu nome é: {{ nome }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data () {
            return {
                nome: 'Ainda não sei'
            }
        }
    }
</script>