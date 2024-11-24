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
            :class="[this.error ? 'border-red-500' : '', width ? width : '', type !== 'checkbox' ? 'h-[40px]' : 'h-fit' ,'px-3 py-1 border border-gray-300 rounded-xl focus:border-sky-700 focus:ring-1 focus:ring-sky-700 focus:outline-none transition-all']"
            @input="formatInput"
        >
        <p class="mt-1 text-red-500 text-sm" v-if="error">{{ error }}</p>
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
        inputValue: {
            type: [String, Number],  
            default: ''
        },
    },
    data() {
        return {
            formattedValue: this.inputValue || '', 
        }
    },
    watch: {
        inputValue(newVal) {
            this.formattedValue = newVal;
        },
        formattedValue(newVal) {
            this.$emit('update:modelValue', newVal)
        }
    },
    methods: {
        formatInput() {
            if (this.type === 'phone') {
                this.formatPhone();
            } else if (this.type === 'email') {
                this.formatEmail();
            } else if (this.type === 'grr') {
                this.formatGrr()
            }
        },
        formatPhone() {
            let phone = this.formattedValue.replace(/\D/g, '') 
            if (phone.length <= 11) {
                phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
            } else {
                phone = phone.replace(/(\d{2})(\d{5})(\d{4})(\d{1})/, '($1) $2-$3')
            }
            this.formattedValue = phone;
        },
        formatEmail() {
            let email = this.formattedValue;
            email = email.toLowerCase()
            this.formattedValue = email
        },
        formatGrr() {
            let grr = this.formattedValue.replace(/\D/g, '')
            
            if (grr.length > 8) {
                grr = grr.slice(0, 8)
            }

            this.formattedValue = grr
        }
    }
}
</script>


