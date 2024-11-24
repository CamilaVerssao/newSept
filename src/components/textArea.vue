<template>
  <div>
    <div :class="required ? 'flex gap-3' : ''">
        <p class="text-md font-[500]" v-if="label">{{ label }}</p>
        <p v-if="required" class="text-red-500 font-bold">*</p>
    </div>
    <textarea
        v-model="localValue"
        :class="[this.error ? 'border-red-500' : '', width ? width : '', height ? height : '' ,'px-3 py-1 rounded-xl border border-gray-300 focus:border-sky-700 focus:ring-1 focus:ring-sky-700 focus:outline-none transition-all']"
        :placeholder="placeholder"
    ></textarea>
    <p class="mt-1 text-red-500 text-sm" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
    name: 'TextArea',  
    props: {
        width: String,
        height: String,
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
            type: String,
            default: ''
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
