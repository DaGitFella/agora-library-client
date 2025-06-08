<template>
    <section class="flex h-screen w-screen">
        <BackgroundLogin class=""/>
        <div class="w-1/2 h-full flex items-center justify-center">
            <div class="flex flex-col gap-24 items-center">
                <!--<span class="flex justify-center w-full text-6xl">Bem vindo (a)</span>--> 
                <Form/>
            </div>
        </div>
        
    </section>
</template>
  
<script>
import BackgroundLogin from '../components/BackgroundLogin.vue';
import Form from '../components/Form/Form.vue';
    export default {
        name:'App',
        components: {
            Form, BackgroundLogin
        },
    }
</script>

<style scoped>
span{
    font-family: "merriweather", serif;
}
</style>
