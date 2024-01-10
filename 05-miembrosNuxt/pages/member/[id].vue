<template>
    <UserDetails :item="member"/>
</template>

<script setup lang="ts">
    import { useUserApi } from '@/composables/useUserApi';
    
    const route = useRoute()
    const id = route.params.id as string

    const { getUser } = useUserApi()
    const member = ref({})

    onMounted(async () => {
        member.value = await getUser(id)
    })
</script>
