<template>
    <SideBar/>
</template>
  
<script>
import Login from './views/Login.vue';
import SideBar from './components/SideBar/Sidebar.vue';
    export default {
        name:'App',
        components: {
            Login, SideBar
        },
    }
</script>

<style scoped>

</style>
