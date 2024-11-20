<template>
    <div>
         <div :class="required ? 'flex gap-3' : ''">
            <p class="text-md font-[500]" v-if="label">{{ label }}</p>
            <p v-if="required" class="text-red-500 font-bold">*</p>
        </div>
        <input
            v-model="formattedValue"
            :placeholder="placeholder"
            :type="type"
            :class="[width ? width : '', type !== 'checkbox' ? 'h-[40px]' : 'h-fit']"
            class="px-3 py-1 border border-gray-300 rounded-xl focus:border-sky-700 focus:ring-1 focus:ring-sky-700 focus:outline-none transition-all"
            @input="formatInput"
        >
        <p class="mt-3 text-red-500 font-bold text-sm" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        placeholder: String,
        label: String,
        width: String,
        error: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        inputValue: null,
    },
    data() {
        return {
            formattedValue: ''
        };
    },
    methods: {
        formatInput() {
            if (this.type === 'phone') {
                this.formatPhone();
            } else if (this.type === 'email') {
                this.formatEmail();
            }
        },
        formatPhone() {
            let phone = this.formattedValue.replace(/\D/g, '')
            if (phone.length <= 10) {
                phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else {
                phone = phone.replace(/(\d{2})(\d{5})(\d{4})(\d{1})/, '($1) $2-$3');
            }
            this.formattedValue = phone;
        },
        formatEmail() {
            let email = this.formattedValue;
            // Vamos garantir que o texto tenha o formato correto
            // Em um caso real, seria necessário fazer validação mais avançada
            email = email.toLowerCase();
            this.formattedValue = email;
        }
    }
};
</script>
