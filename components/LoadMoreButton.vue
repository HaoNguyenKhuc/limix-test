<template>
    <div class="text-center mt-8">
        <UButton @click="emit('click')" variant="outline" size="lg" :loading="loading">
            <template #leading>
                <UIcon name="i-heroicons-arrow-down" class="w-4 h-4" />
            </template>
            Còn nhiều lắm, xem thêm
        </UButton>
    </div>
</template>

<script setup lang="ts">
interface Props {
    loading: boolean
}

defineProps<Props>()

const emit = defineEmits<{
    click: []
}>()
</script>