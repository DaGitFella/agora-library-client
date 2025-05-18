<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <info/>
    </div>
</template>

<script>
    import Info from './Info.vue'
    export default {
    name: 'People',
    components: { 
        Info 
    },
    data() {
        return {
            nome: 'lucas'
        }
 
    }
    }
</script>