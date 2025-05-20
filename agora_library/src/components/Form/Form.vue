<template>
    <section class="flex flex-col gap-[24px] w-[400px]">
        <InputText 
            label = 'E-mail'
            placeH = 'Insira o E-mail'
        />
        <InputText 
            label = 'Senha'
            placeH = 'Insira a Senha'
        />
        <Submit/>
    </section>
</template>
  
<script>
import InputText from './InputText.vue';
import Submit from './Submit.vue';
    export default {
        name:'App',
        components: {
            InputText, Submit
        },
    }
</script>
