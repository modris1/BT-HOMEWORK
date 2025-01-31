<template>
    <div class="py-2 border-b border-form-border md:p-0 md:border-none" :class="{ 'expanded': isExpanded }">
        <div class="flex justify-between">
            <h2 class="font-medium text-sm/8 text-text-footer-title uppercase">{{ props.name }}</h2>
            <button class="w-[12px] font-medium text-xl/8 text-text-footer-title md:hidden"
                @click="isExpanded = !isExpanded">
                {{ isExpanded ? "−" : "+" }}
            </button>
        </div>
        <ul class="pl-4 h-[0px] overflow-hidden md:pl-0 md:h-auto">
            <slot />
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    }
});
const isExpanded = ref(false);
</script>

<style scoped>
.expanded ul {
    @apply h-auto overflow-visible;
}
</style>