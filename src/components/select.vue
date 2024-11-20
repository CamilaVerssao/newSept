<template>  
    <div>
        <div :class="required ? 'flex gap-3' : ''">
            <p class="text-md font-[500]" v-if="label">{{ label }}</p>
            <p v-if="required" class="text-red-500 font-bold">*</p>
        </div>
        <select 
            :class="width ? width : ''" 
            class="px-3 h-[40px] rounded rounded-xl border border-gray-300 rounded-xl focus:border-sky-700 focus:ring-1 focus:ring-sky-700 focus:outline-none transition-all">
            <option v-if="placeholder" disabled selected>{{ placeholder }}</option>
            <option v-for="(item, index) in items" :key="index" :value="item">
                {{ item }}
            </option>
        </select>
    </div>
  
</template>

<script>
export default {
    props: {
        items: Array,
        width: String,
        label: String,
        placeholder: String,
        required: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({

    })
}
</script>
