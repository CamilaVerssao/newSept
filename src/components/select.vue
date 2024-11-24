<template>  
    <div>
        <div :class="required ? 'flex gap-3' : ''">
            <p class="text-md font-[500]" v-if="label">{{ label }}</p>
            <p v-if="required" class="text-red-500 font-bold">*</p>
        </div>
        <select 
            v-model="localValue"
            :class="[this.error ? 'border-red-500' : '', width ? width : '', type !== 'checkbox' ? 'h-[40px]' : 'h-fit', 'px-3 py-1 border border-gray-300 rounded-xl focus:border-sky-700 focus:ring-1 focus:ring-sky-700 focus:outline-none transition-all']">
            <option v-if="placeholder" disabled selected value="">{{ placeholder }}</option>
            <option v-for="(item, index) in items" :key="index" :value="item">
                {{ item }}
            </option>
        </select>
        <p class="mt-1 text-red-500 text-sm" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        width: String,
        label: String,
        placeholder: String,
        required: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: [String, Number, null],
            default: null
        }
    },
    data() {
        return {
            localValue: this.modelValue
        }
    },
    watch: {
        modelValue(newValue) {
            this.localValue = newValue
        },
        localValue(newValue) {
            this.$emit('update:modelValue', newValue)
        }
    }
};
</script>
