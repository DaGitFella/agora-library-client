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
        },
        created() {
            setTimeout(() => {
                this.nome = 'Lucas'
            }, 1000);
            this.lifeCycle()
        },
        mounted() {
            setTimeout(() => {
                this.nome = 'Pedro'
            }, 2000);
            this.lifeCycle()
        },
        methods: {
            lifeCycle() {
                console.log('execultou')
            }
        }
    }
</script>