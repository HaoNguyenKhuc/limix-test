<template>
  <div class="space-y-4">
    <h4 class="text-blue-900 font-bold text-base uppercase">{{ title }}</h4>
    <ul class="space-y-2">
      <li v-for="link in links" :key="link.label">
        <ULink :to="link.to" :target="link.target" class="text-sm text-gray-600 hover:text-blue-900 block py-1">
          {{ link.label }}
        </ULink>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    required: true
  }
})
</script>