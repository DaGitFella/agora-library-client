<template>
    <div>
        <input type="text" :placeholder="text">
    </div>
</template>

<script>
    export default {
        name: 'InputText',
        data() {
            return {
                text: 'aaa'
            }
        }
    }
</script>

<style scoped>
    
</style>