<template>
    <div class="h-screen">
        <img :src="avatar" :alt="descricao" class="h-screen">
    </div>
</template>

<script>
    export default {
        name: 'BackgroundLogin',
        data() {
            return {
                avatar: '/img/background_login.png',
                descricao: 'Background Login'
            }
        }
    }
</script>

<style scoped>

</style>