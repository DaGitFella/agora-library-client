<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
        <p v-show="mostrar_email">mande seu email para {{ email }}</p>
        <button @click="toggleEmail">{{ ButtonText }}</button>

        <p>para acessar meu portfólio basta <a v-bind:href="meu_link" target="_blank">clicar aqui</a></p>
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue';

    export default {
        name: 'Info',
        components: {Picture},
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: true,
                email: 'lucas@gmail.com',
                meu_link: 'https://google.com',
                ButtonText: 'esconder email'
            }
        },
        methods: {
            toggleEmail() {
                this.mostrar_email = !this.mostrar_email;
                if(!this.mostrar_email) {
                    this.ButtonText = 'mostrar email'
                } else {
                    this.ButtonText = 'esconder email'
                }
            }
        }
    }
</script>