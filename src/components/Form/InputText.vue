<template>
    <div class="w-full">
        <div class="mb-12">
            <label for="" class="font-bold text-sm pb-[8px] pl-[16px] block">
                {{ label }}
            </label>
            <div v-if='label === "Senha"' class="flex items-center relative">
                <input  :type='passwordInputType' :placeholder="placeH" id="input"
                    :class="class_input"/>
                <v-icon @click="PasswordView()" :name="passwordIcon" class="w-5 h-5 absolute right-4 text-base cursor-pointer" />
            </div>
            <div v-else class="flex items-center relative">
                <input  type='text' :placeholder="placeH" id="input"
                    :class="class_input" />
            </div>

            
        </div>
    </div>
</template>



<script>
export default {
    name: 'InputText',
    data() {
        return {
            showingPassword: false,
            class_input: 'font-normal text-base h-[56px] w-full min-w-0 bg-transparent rounded-md border pl-[16px] pr-11 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        }
    },
    computed: {
        passwordInputType() {
            return this.showingPassword ? 'text' : 'password'
        },
        passwordIcon() {
            return this.showingPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'
        }
    },
    props: {
        label: {
            type: String,
            default: 'Default label'
        },
        placeH: {
            type: String,
            default: 'Default placeholder'
        }
    },
    methods: {
        PasswordView() {
            this.showingPassword = !this.showingPassword
        }
    }
}


</script>

<style scoped>
label{
    font-family: "Playfair Display SC", serif;
}
input {
    font-family: "Inter", serif;
}
</style>