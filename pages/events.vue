<template>
    <h1 class="text-cyan-700">{{ title }}</h1>
    <h3 class="text-cyan-700">{{ getApiKey }}</h3>
</template>
<script setup>
    const globalConfig = useRuntimeConfig()
    const title = ref('Event Page')
    const FIRE_BASE_API_KEY = globalConfig.public['FIRE_BASE_API_KEY']

    const getApiKey = computed(() => {
        return FIRE_BASE_API_KEY
    })
</script>
<style>
</style>