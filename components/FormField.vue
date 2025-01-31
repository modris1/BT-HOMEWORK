<template>
    <div class="flex flex-col gap-2" :class="{ 'error': error }">
        <label v-if="label">{{ label }}</label>
        <slot />
        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="desc">{{ desc }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    error: {
        type: String
    }
});
</script>

<style scoped>
label {
    @apply font-normal text-xs/4 text-brand-blue;
}

p {
    @apply font-normal text-xs/4 text-text-desc whitespace-break-spaces;
}

p.error {
    @apply text-red-500 text-balance;
}
</style>