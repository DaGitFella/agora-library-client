<template>
    <div>
        <form action="">
            <input-text/>
            <input-text/>
            <submit/>
        </form>
    </div>

</template>

<script>
import InputText from '../Form/InputText.vue'
import Submit from '../Form/Submit.vue'
    export default {
        components: { InputText, Submit },
        name: 'Form',
    }
</script>