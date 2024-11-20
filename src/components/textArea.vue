<template>
  <div>
    <div :class="required ? 'flex gap-3' : ''">
        <p class="text-md font-[500]" v-if="label">{{ label }}</p>
        <p v-if="required" class="text-red-500 font-bold">*</p>
    </div>
    <textarea
        v-model="value" 
        :placeholder="placeholder"
        :class="[width ? width : '', height ? height : '']"
        class="px-3 py-1 rounded-xl border border-gray-300 focus:border-sky-700 focus:ring-1 focus:ring-sky-700 focus:outline-none transition-all"
    ></textarea>
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
    },
    data() {
        return {
            value: ''
        };
    }
}
</script>
