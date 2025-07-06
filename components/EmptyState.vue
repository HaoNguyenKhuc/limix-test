<template>
    <div class="text-center py-12">
        <UIcon name="i-heroicons-inbox" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-900 mb-2">
            {{ title || 'Không có sản phẩm' }}
        </h3>
        <p class="text-gray-500">
            {{ description || 'Hiện tại chưa có sản phẩm nào để hiển thị.' }}
        </p>
        <slot name="actions" />
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    description?: string
}

withDefaults(defineProps<Props>(), {
    title: '',
    description: ''
})
</script>