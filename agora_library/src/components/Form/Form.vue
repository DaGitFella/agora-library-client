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
        <button>login</button>
    </section>
</template>
  
<script>
import InputText from './InputText.vue';
    export default {
        name:'App',
        components: {
            InputText
        },
    }
</script>
