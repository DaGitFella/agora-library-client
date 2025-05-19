<template>
    <div class="w-full">
        <div class="mb-12">
            <label for="" class="pb-[8px] pl-[16px] block text-base font-medium text-dark dark:text-white">
                {{ label }}
            </label>
            <div v-if='label === "Senha"' class="flex items-center relative">
                <input  :type='passwordInputType' :placeholder="placeH"
                    class="h-[56px] w-full min-w-0 bg-transparent rounded-md border border-stroke dark:border-dark-3 pl-[16px] pr-11 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
                <v-icon @click="click()" :name="passwordIcon" class="w-6 h-6 text-gray-600 absolute right-4 text-base! cursor-pointer" />
            </div>
            <div v-else class="flex items-center relative">
                <input  type='text' :placeholder="placeH"
                    class="h-[56px] w-full min-w-0 bg-transparent rounded-md border border-stroke dark:border-dark-3 pl-[16px] pr-11 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
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
        }
    },
    computed: {
        passwordInputType() {
            return this.showingPassword ? 'text' : 'password'
        },
        passwordIcon() {
            return this.showingPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'
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
        click() {
            this.showingPassword = !this.showingPassword
        }
    }
}


</script>

<style scoped></style>