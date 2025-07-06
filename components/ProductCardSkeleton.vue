<template>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-4">
            <div class="flex justify-between mb-2">
                <div class="h-3 bg-gray-200 rounded w-16"></div>
                <div class="h-3 bg-gray-200 rounded w-20"></div>
            </div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div class="h-3 bg-gray-200 rounded w-24 mb-3"></div>
            <div class="flex justify-between items-center">
                <div class="h-5 bg-gray-200 rounded w-20"></div>
                <div class="h-4 bg-gray-200 rounded w-12"></div>
            </div>
            <div class="h-8 bg-gray-200 rounded w-full mt-3"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .5;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>